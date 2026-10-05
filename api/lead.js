// POST /api/lead — nhận lead từ form, kiểm tra hợp lệ, đẩy tới Supabase, n8n, Telegram và gửi email xác nhận.
// Mọi đích đến đều tùy chọn theo biến môi trường; cần ít nhất một đích nhận thành công thì mới trả ok.

const INTERESTS = ['ai_dev', 'rwa', 'scm', 'govtech', 'investment', 'other'];
const MODELS = ['outsourcing', 'tech_transfer', 'ma', 'unknown'];
const LANGS = ['vi', 'en', 'ja'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Giới hạn tần suất đơn giản theo IP (theo từng instance serverless)
const hits = new Map();
function limited(ip) {
  const now = Date.now(), win = 10 * 60 * 1000, max = 8;
  const arr = (hits.get(ip) || []).filter((t) => now - t < win);
  arr.push(now); hits.set(ip, arr);
  return arr.length > max;
}

const clip = (v, n) => (typeof v === 'string' ? v.trim().slice(0, n) : '');

function withTimeout(ms) {
  const c = new AbortController();
  const t = setTimeout(() => c.abort(), ms);
  return { signal: c.signal, done: () => clearTimeout(t) };
}

async function post(url, body, headers = {}, ms = 8000) {
  const t = withTimeout(ms);
  try {
    const r = await fetch(url, { method: 'POST', headers: { 'content-type': 'application/json', ...headers }, body: JSON.stringify(body), signal: t.signal });
    if (!r.ok) throw new Error(`${url.split('?')[0]} → HTTP ${r.status}: ${(await r.text()).slice(0, 200)}`);
    return true;
  } finally { t.done(); }
}

const LABEL = {
  interest: { ai_dev: 'AI-Driven Development', rwa: 'RWA – Blockchain', scm: 'AI SCM / MRP', govtech: 'GovTech', investment: 'Đầu tư – M&A', other: 'Khác' },
  model: { outsourcing: 'Outsourcing – Lab', tech_transfer: 'Chuyển giao – Liên doanh', ma: 'M&A – Góp vốn', unknown: 'Chưa xác định' },
};

const CONFIRM = {
  vi: { s: 'Proton ISF đã nhận yêu cầu của bạn', h: (n) => `Chào ${n},`, p: 'Cảm ơn bạn đã liên hệ Proton ISF. Kiến trúc sư của chúng tôi sẽ phản hồi trong 1 ngày làm việc.', cal: 'Đặt lịch trao đổi 30 phút:', sig: 'Trân trọng,<br>Proton ISF' },
  en: { s: 'Proton ISF has received your request', h: (n) => `Dear ${n},`, p: 'Thank you for contacting Proton ISF. One of our architects will reply within one business day.', cal: 'Book a 30-minute call:', sig: 'Best regards,<br>Proton ISF' },
  ja: { s: 'Proton ISF：お問い合わせを受け付けました', h: (n) => `${n} 様`, p: 'Proton ISFへお問い合わせいただき、誠にありがとうございます。1営業日以内に担当アーキテクトよりご連絡いたします。', cal: '30分オンライン相談のご予約：', sig: '何卒よろしくお願い申し上げます。<br>Proton ISF' },
};
const escH = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export default async function handler(req, res) {
  res.setHeader('cache-control', 'no-store');
  if (req.method !== 'POST') { res.setHeader('allow', 'POST'); return res.status(405).json({ ok: false, error: 'method_not_allowed' }); }

  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || req.socket?.remoteAddress || 'unknown';
  if (limited(ip)) return res.status(429).json({ ok: false, error: 'too_many_requests' });

  let b = req.body;
  if (typeof b === 'string') { try { b = JSON.parse(b); } catch { b = null; } }
  if (!b || typeof b !== 'object') return res.status(400).json({ ok: false, error: 'invalid_body' });

  // Honeypot: bot điền trường ẩn → trả ok nhưng không xử lý
  if (clip(b.website, 200)) return res.status(200).json({ ok: true });

  const lead = {
    name: clip(b.name, 120), company: clip(b.company, 160) || null, email: clip(b.email, 160).toLowerCase(),
    phone: clip(b.phone, 40) || null, country: clip(b.country, 80) || null,
    lang: LANGS.includes(b.lang) ? b.lang : 'vi',
    interest: INTERESTS.includes(b.interest) ? b.interest : 'other',
    model: MODELS.includes(b.model) ? b.model : 'unknown',
    message: clip(b.message, 3000) || null, source_page: clip(b.source_page, 300) || null,
    utm: b.utm && typeof b.utm === 'object' ? Object.fromEntries(Object.entries(b.utm).slice(0, 8).map(([k, v]) => [clip(k, 40), clip(String(v), 200)])) : {},
    consent: b.consent === true,
  };
  const errors = [];
  if (!lead.name) errors.push('name');
  if (!EMAIL_RE.test(lead.email)) errors.push('email');
  if (!lead.consent) errors.push('consent');
  if (errors.length) return res.status(422).json({ ok: false, error: 'validation', fields: errors });

  // Cloudflare Turnstile (bật khi có secret)
  if (process.env.TURNSTILE_SECRET_KEY) {
    try {
      const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ secret: process.env.TURNSTILE_SECRET_KEY, response: clip(b.turnstile, 2048), remoteip: ip }),
      });
      const j = await r.json();
      if (!j.success) return res.status(403).json({ ok: false, error: 'captcha' });
    } catch { return res.status(503).json({ ok: false, error: 'captcha_unavailable' }); }
  }

  const isProfile = (lead.source_page || '').includes('profile-download');
  const tasks = [];

  // 1) Supabase
  const SB = process.env.SUPABASE_URL, SBK = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (SB && SBK) {
    const h = { apikey: SBK, authorization: `Bearer ${SBK}`, prefer: 'return=minimal' };
    tasks.push(['supabase', post(`${SB.replace(/\/$/, '')}/rest/v1/leads`, lead, h)]);
    if (isProfile) tasks.push(['supabase_dl', post(`${SB.replace(/\/$/, '')}/rest/v1/downloads`, { email: lead.email, file: 'capability-profile-2026', lang: lead.lang, utm: lead.utm }, h).catch(() => true)]);
  }

  // 2) n8n webhook → GoHighLevel / CRM
  if (process.env.N8N_LEAD_WEBHOOK_URL) {
    const h = process.env.N8N_WEBHOOK_SECRET ? { 'x-webhook-secret': process.env.N8N_WEBHOOK_SECRET } : {};
    tasks.push(['n8n', post(process.env.N8N_LEAD_WEBHOOK_URL, { ...lead, type: isProfile ? 'profile_download' : 'lead', site: 'protonisf.com', received_at: new Date().toISOString() }, h)]);
  }

  // 3) Telegram
  if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
    const text = [
      `<b>${isProfile ? '📄 Yêu cầu hồ sơ năng lực' : '🆕 Lead mới'} — protonisf.com</b>`,
      `👤 ${escH(lead.name)}${lead.company ? ' · ' + escH(lead.company) : ''}`,
      `✉️ ${escH(lead.email)}${lead.phone ? ' · ☎️ ' + escH(lead.phone) : ''}`,
      `🌐 ${lead.lang.toUpperCase()}${lead.country ? ' · ' + escH(lead.country) : ''}`,
      `🎯 ${LABEL.interest[lead.interest]} · ${LABEL.model[lead.model]}`,
      lead.message ? `💬 ${escH(lead.message.slice(0, 800))}` : '',
      `🔗 ${escH(lead.source_page || '')}`,
    ].filter(Boolean).join('\n');
    tasks.push(['telegram', post(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, { chat_id: process.env.TELEGRAM_CHAT_ID, text, parse_mode: 'HTML', disable_web_page_preview: true })]);
  }

  const results = await Promise.allSettled(tasks.map(([, p]) => p));
  const delivered = results.filter((r) => r.status === 'fulfilled').length;
  results.forEach((r, i) => { if (r.status === 'rejected') console.error('[lead]', tasks[i][0], r.reason?.message || r.reason); });

  if (!tasks.length) { console.error('[lead] Chưa cấu hình đích nhận lead (SUPABASE / N8N / TELEGRAM).'); return res.status(503).json({ ok: false, error: 'not_configured' }); }
  if (!delivered) return res.status(502).json({ ok: false, error: 'delivery_failed' });

  // 4) Email xác nhận (không chặn phản hồi nếu lỗi)
  if (process.env.RESEND_API_KEY) {
    const C = CONFIRM[lead.lang];
    const cal = process.env.CALCOM_LINK;
    const html = `<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.6;color:#0F1C2E;max-width:560px">
<p>${C.h(escH(lead.name))}</p><p>${C.p}</p>${cal ? `<p>${C.cal} <a href="${cal}">${cal}</a></p>` : ''}
<p>${C.sig}<br><a href="https://protonisf.com">protonisf.com</a> · contact@protonisf.com · +84 918 281 726</p></div>`;
    try {
      await post('https://api.resend.com/emails', { from: process.env.MAIL_FROM || 'Proton ISF <contact@protonisf.com>', to: [lead.email], reply_to: 'contact@protonisf.com', subject: C.s, html }, { authorization: `Bearer ${process.env.RESEND_API_KEY}` }, 6000);
    } catch (e) { console.error('[lead] resend', e.message); }
  }

  return res.status(200).json({ ok: true });
}
