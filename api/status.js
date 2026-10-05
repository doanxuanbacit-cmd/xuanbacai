// GET /api/status — kiểm tra 7 nền tảng hệ sinh thái. CDN Vercel cache 5 phút (s-maxage=300),
// nên mỗi nền tảng được ping tối đa ~5 phút/lần dù có nhiều người xem.
// Tham số ?log=1 (dùng cho Vercel Cron) sẽ ghi kết quả vào bảng platform_status trên Supabase.

export const PLATFORMS = [
  'https://taisan.xyz/',
  'https://app.taisan.xyz/',
  'https://dongscan.taisan.xyz/',
  'https://taisan.xyz/whitepaper',
  'https://platform.cholangnghe.shop/',
  'https://cholangnghe.shop/',
  'https://chosach.vn/',
];

async function check(url) {
  const c = new AbortController();
  const t = setTimeout(() => c.abort(), 7000);
  const t0 = Date.now();
  try {
    const r = await fetch(url, { method: 'GET', redirect: 'follow', signal: c.signal, headers: { 'user-agent': 'ProtonISF-StatusBot/1.0 (+https://protonisf.com)', accept: 'text/html,*/*' } });
    const ms = Date.now() - t0;
    try { await r.body?.cancel(); } catch {}
    // <500: máy chủ phản hồi (kể cả 401/403 do lớp bảo vệ bot) → coi là đang hoạt động
    return { url, status: r.status, ms, up: r.status < 500 };
  } catch (e) {
    return { url, status: 0, ms: Date.now() - t0, up: false, error: e.name === 'AbortError' ? 'timeout' : 'network' };
  } finally { clearTimeout(t); }
}

export default async function handler(req, res) {
  const results = await Promise.all(PLATFORMS.map(check));
  const checked_at = new Date().toISOString();

  const wantLog = (req.query && req.query.log === '1') || /[?&]log=1/.test(req.url || '');
  const authOk = !process.env.CRON_SECRET || req.headers.authorization === `Bearer ${process.env.CRON_SECRET}`;
  if (wantLog && authOk && process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
    try {
      await fetch(`${process.env.SUPABASE_URL.replace(/\/$/, '')}/rest/v1/platform_status`, {
        method: 'POST',
        headers: { 'content-type': 'application/json', apikey: process.env.SUPABASE_SERVICE_ROLE_KEY, authorization: `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY}`, prefer: 'return=minimal' },
        body: JSON.stringify(results.map((r) => ({ url: r.url, status_code: r.status, latency_ms: r.ms, is_up: r.up, checked_at }))),
      });
    } catch (e) { console.error('[status] log', e.message); }
  }

  res.setHeader('cache-control', 'public, max-age=60, s-maxage=300, stale-while-revalidate=600');
  res.setHeader('access-control-allow-origin', '*');
  return res.status(200).json({ checked_at, results: results.map(({ url, status, ms, up }) => ({ url, status, ms, up })) });
}
