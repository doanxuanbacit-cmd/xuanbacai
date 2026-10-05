// Lõi giao diện: logo, icon, layout, SEO, component dùng chung
export const SITE = {
  url: (process.env.SITE_URL || 'https://protonisf.com').replace(/\/$/, ''),
  name: 'Proton ISF',
  legal: 'Công ty Cổ phần Quỹ Đầu tư Khởi nghiệp Sáng tạo Proton',
  legalEn: 'Proton Innovative Startup Investment Fund JSC',
  taxId: '0108962235',
  email: 'contact@protonisf.com',
  phone: '+84 918 281 726',
  phoneRaw: '+84918281726',
  zalo: 'https://zalo.me/0918281726',
  address: 'Tầng 2, Tòa 29T1 Hoàng Đạo Thúy, P. Trung Hòa, Q. Cầu Giấy, Hà Nội',
  addressEn: '2F, 29T1 Building, Hoang Dao Thuy St., Trung Hoa, Cau Giay, Hanoi, Vietnam',
  addressJa: 'ベトナム・ハノイ市カウザイ区チュンホア、ホアンダオトゥイ通り29T1ビル2階',
  cal: process.env.CALCOM_LINK || '',
  ga4: process.env.GA4_ID || '',
  pixel: process.env.META_PIXEL_ID || '',
  turnstile: process.env.TURNSTILE_SITE_KEY || '',
  sandboxDecree: process.env.SANDBOX_DECREE || '',
  year: 2026,
};

export const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// ---------- Logo & motif ----------
export const logoMark = (id = 'lg') => `<svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
<defs><linearGradient id="${id}" x1="0" y1="0" x2="40" y2="40"><stop stop-color="#12949F"/><stop offset="1" stop-color="#0A646C"/></linearGradient></defs>
<ellipse cx="20" cy="20" rx="17.5" ry="6.8" transform="rotate(-32 20 20)" stroke="url(#${id})" stroke-width="2.2"/>
<ellipse cx="20" cy="20" rx="17.5" ry="6.8" transform="rotate(32 20 20)" stroke="currentColor" stroke-opacity=".55" stroke-width="2.2"/>
<ellipse cx="20" cy="20" rx="6.8" ry="17.5" stroke="currentColor" stroke-opacity=".28" stroke-width="1.6"/>
<circle cx="20" cy="20" r="5" fill="url(#${id})"/>
<circle cx="34.2" cy="11.4" r="2.2" fill="#5CC8D0"/></svg>`;

export const brandImg = (size = 40, eager = true) => `<img src="/assets/logo-mark-96.png" width="${size}" height="${size}" alt="" decoding="async"${eager ? '' : ' loading="lazy"'}>`;
export const heroMark = () => `<img class="mark" src="/assets/logo-mark.webp" width="300" height="300" alt="Proton ISF" decoding="async" fetchpriority="high">`;

export const orbitBig = () => `<svg viewBox="0 0 520 520" fill="none" aria-hidden="true">
<g class="spin"><ellipse cx="260" cy="260" rx="245" ry="92" transform="rotate(-30 260 260)" stroke="#5CC8D0" stroke-opacity=".45" stroke-width="1.4"/>
<circle cx="472" cy="138" r="7" fill="#5CC8D0" class="e"/></g>
<g class="spin r"><ellipse cx="260" cy="260" rx="245" ry="92" transform="rotate(30 260 260)" stroke="#E7EEF0" stroke-opacity=".22" stroke-width="1.4"/>
<circle cx="48" cy="138" r="5" fill="#E7EEF0" fill-opacity=".8"/></g>
<g class="spin"><ellipse cx="260" cy="260" rx="92" ry="245" stroke="#E7EEF0" stroke-opacity=".12" stroke-width="1.2"/></g>
<circle cx="260" cy="260" r="200" stroke="#E7EEF0" stroke-opacity=".06"/>
<circle cx="260" cy="260" r="140" stroke="#E7EEF0" stroke-opacity=".07" stroke-dasharray="2 6"/>
<circle cx="260" cy="260" r="60" fill="#12949F" fill-opacity=".14"/>
<circle cx="260" cy="260" r="34" fill="url(#core)"/>
<defs><radialGradient id="core" cx=".35" cy=".35" r=".8"><stop stop-color="#5CC8D0"/><stop offset=".55" stop-color="#12949F"/><stop offset="1" stop-color="#0A646C"/></radialGradient></defs></svg>`;

export const orbitSmall = () => `<svg class="orb" viewBox="0 0 520 520" fill="none" aria-hidden="true">
<ellipse cx="260" cy="260" rx="245" ry="92" transform="rotate(-30 260 260)" stroke="#5CC8D0" stroke-width="1.6"/>
<ellipse cx="260" cy="260" rx="245" ry="92" transform="rotate(30 260 260)" stroke="#E7EEF0" stroke-width="1.4"/>
<circle cx="260" cy="260" r="34" fill="#12949F"/></svg>`;

// ---------- Icons (Lucide, stroke 1.5) ----------
const I = (d) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
export const ic = {
  arrow: I('<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>'),
  ext: I('<path d="M7 17 17 7"/><path d="M7 7h10v10"/>'),
  down: I('<path d="m6 9 6 6 6-6"/>'),
  menu: I('<path d="M4 7h16M4 12h16M4 17h16"/>'),
  close: I('<path d="M18 6 6 18M6 6l12 12"/>'),
  cpu: I('<rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/>'),
  chain: I('<path d="M9 17H7A5 5 0 0 1 7 7h2"/><path d="M15 7h2a5 5 0 0 1 0 10h-2"/><path d="M8 12h8"/>'),
  factory: I('<path d="M2 20h20"/><path d="M4 20V9l6 4V9l6 4V5h4v15"/>'),
  landmark: I('<path d="M3 21h18M5 21V10M19 21V10M9 21V10M15 21V10"/><path d="m12 3 9 5H3z"/>'),
  shield: I('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>'),
  bolt: I('<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>'),
  coins: I('<circle cx="8" cy="8" r="6"/><path d="M18.1 10.4A6 6 0 1 1 10.4 18.1"/><path d="M7 6h1v4"/>'),
  gauge: I('<path d="m12 14 4-4"/><path d="M3.3 19a10 10 0 1 1 17.4 0"/>'),
  users: I('<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>'),
  code: I('<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>'),
  doc: I('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h5"/>'),
  layers: I('<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5"/>'),
  plug: I('<path d="M12 22v-5M9 8V2M15 8V2"/><path d="M18 8v5a6 6 0 0 1-12 0V8z"/>'),
  search: I('<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>'),
  lock: I('<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>'),
  globe: I('<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z"/>'),
  check: I('<path d="M20 6 9 17l-5-5"/>'),
  msg: I('<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>'),
  cal: I('<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>'),
  download: I('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5M12 15V3"/>'),
  mail: I('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>'),
  phone: I('<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>'),
  pin: I('<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>'),
  sparkle: I('<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>'),
  box: I('<path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="m3 8 9 5 9-5M12 13v8"/>'),
  book: I('<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V2H6.5A2.5 2.5 0 0 0 4 4.5z"/><path d="M4 19.5V22h16"/>'),
};

// ---------- i18n UI strings ----------
export const UI = {
  vi: {
    nav: { cap: 'Năng lực', eco: 'Hệ sinh thái', proj: 'Dự án', part: 'Hợp tác', about: 'Giới thiệu', ins: 'Insights' },
    cta: 'Đặt lịch trao đổi', skip: 'Bỏ qua đến nội dung chính', menu: 'Mở menu', tagline: 'AI-First Technology Fund',
    mega: [
      ['ai', 'AI-Driven Development', 'SDLC tự động hóa bằng AI Coding Agents, MVP trong 3–5 tuần', 'cpu'],
      ['cap#rwa', 'RWA Blockchain Layer-0', 'SOVVN Chain, Dong Protocol, token hóa tài sản thực', 'chain'],
      ['cap#scm', 'Enterprise AI SCM / MRP', 'BOM đa cấp, dự báo, tối ưu MILP, tích hợp ERP', 'factory'],
      ['cap#govtech', 'GovTech & Sandbox', 'Chợ Làng Nghề, chosach.vn, hộ chiếu số sản phẩm', 'landmark'],
    ],
    megaAll: ['Toàn bộ năng lực', 'Bốn trụ cột deep-tech dùng chung một nền tảng kỹ nghệ AI'],
    f: { about: 'Doanh nghiệp', cap: 'Năng lực', eco: 'Hệ sinh thái', contact: 'Liên hệ', privacy: 'Chính sách bảo mật', terms: 'Điều khoản sử dụng', rights: 'Bảo lưu mọi quyền.', tax: 'MST', profile: 'Hồ sơ năng lực' },
    cookie: ['Website dùng cookie phân tích (Google Analytics) để cải thiện trải nghiệm. Xem', 'Chính sách bảo mật', 'Đồng ý', 'Từ chối'],
    fab: 'Nhắn Zalo',
    live: { up: 'Đang hoạt động', down: 'Không phản hồi', chk: 'Đang kiểm tra', verify: 'Kiểm chứng' },
  },
  en: {
    nav: { cap: 'Capabilities', eco: 'Ecosystem', proj: 'Projects', part: 'Partnership', about: 'About', ins: 'Insights' },
    cta: 'Book a 30-min call', skip: 'Skip to main content', menu: 'Open menu', tagline: 'AI-First Technology Fund',
    mega: [
      ['ai', 'AI-Driven Development', 'SDLC automated by AI coding agents — MVP in 3–5 weeks', 'cpu'],
      ['cap#rwa', 'RWA Blockchain Layer-0', 'SOVVN Chain, Dong Protocol, real-world asset tokenization', 'chain'],
      ['cap#scm', 'Enterprise AI SCM / MRP', 'Multi-level BOM, forecasting, MILP optimisation, ERP sync', 'factory'],
      ['cap#govtech', 'GovTech & Sandbox', 'Craft-village export platform, chosach.vn, digital product passports', 'landmark'],
    ],
    megaAll: ['All capabilities', 'Four deep-tech pillars on one AI engineering foundation'],
    f: { about: 'Company', cap: 'Capabilities', eco: 'Ecosystem', contact: 'Contact', privacy: 'Privacy policy', terms: 'Terms of use', rights: 'All rights reserved.', tax: 'Tax ID', profile: 'Capability profile' },
    cookie: ['We use analytics cookies (Google Analytics) to improve this site. See our', 'Privacy policy', 'Accept', 'Decline'],
    fab: 'Contact us',
    live: { up: 'Operational', down: 'No response', chk: 'Checking', verify: 'Verify' },
  },
  ja: {
    nav: { cap: '事業領域', eco: 'エコシステム', proj: '導入事例', part: '協業モデル', about: '会社概要', ins: 'インサイト' },
    cta: '30分オンライン相談', skip: 'メインコンテンツへ移動', menu: 'メニューを開く', tagline: 'AI-First Technology Fund',
    mega: [
      ['ai', 'AI駆動開発', 'AIコーディングエージェントによるSDLC自動化。MVPを3〜5週間で', 'cpu'],
      ['cap#rwa', 'RWAブロックチェーン', 'SOVVN Chain・Dong Protocolによる実物資産のトークン化', 'chain'],
      ['cap#scm', 'AI SCM / MRP', '多階層BOM、需要予測、MILP最適化、ERP連携', 'factory'],
      ['cap#govtech', 'ガブテック', '伝統工芸村の輸出DX、デジタル製品パスポート', 'landmark'],
    ],
    megaAll: ['事業領域一覧', '共通のAIエンジニアリング基盤に立つ4つのディープテック事業'],
    f: { about: '会社情報', cap: '事業領域', eco: 'エコシステム', contact: 'お問い合わせ', privacy: 'プライバシーポリシー', terms: '利用規約', rights: 'All rights reserved.', tax: '法人番号', profile: '会社案内' },
    cookie: ['当サイトはサービス改善のため分析用Cookie（Google Analytics）を使用します。詳細は', 'プライバシーポリシー', '同意する', '拒否する'],
    fab: 'お問い合わせ',
    live: { up: '稼働中', down: '応答なし', chk: '確認中', verify: '確認する' },
  },
};

// ---------- Routing ----------
// key -> path per language. null = page chỉ có ở tiếng Việt (switcher về trang chủ ngôn ngữ đó)
export const ROUTES = {
  home: { vi: '/', en: '/en', ja: '/ja' },
  cap: { vi: '/capabilities', en: '/en/capabilities', ja: '/ja/capabilities' },
  ai: { vi: '/capabilities/ai-driven-development', en: '/en/capabilities/ai-driven-development', ja: '/ja/capabilities/ai-driven-development' },
  eco: { vi: '/ecosystem', en: '/en/ecosystem', ja: '/ja/ecosystem' },
  proj: { vi: '/projects', en: '/en/projects', ja: '/ja/projects' },
  'p-cln': { vi: '/projects/cho-lang-nghe', en: '/en/projects/cho-lang-nghe', ja: '/ja/projects/cho-lang-nghe' },
  'p-sovvn': { vi: '/projects/sovvn-chain', en: '/en/projects/sovvn-chain', ja: '/ja/projects/sovvn-chain' },
  'p-scm': { vi: '/projects/ai-scm', en: '/en/projects/ai-scm', ja: '/ja/projects/ai-scm' },
  'p-chosach': { vi: '/projects/chosach', en: '/en/projects/chosach', ja: '/ja/projects/chosach' },
  part: { vi: '/partnership', en: '/en/partnership', ja: '/ja/partnership' },
  about: { vi: '/about', en: '/en/about', ja: '/ja/about' },
  ins: { vi: '/insights', en: '/en/insights', ja: '/ja/insights' },
  contact: { vi: '/contact', en: '/en/contact', ja: '/ja/contact' },
  profile: { vi: '/profile', en: '/en/profile', ja: '/ja/profile' },
  privacy: { vi: '/legal/privacy', en: '/en/legal/privacy', ja: '/ja/legal/privacy' },
  terms: { vi: '/legal/terms', en: '/en/legal/terms', ja: '/ja/legal/terms' },
};
export const href = (key, lang) => {
  const [k, hash] = key.split('#');
  const p = ROUTES[k]?.[lang] ?? ROUTES[k]?.vi ?? '/';
  return hash ? `${p}#${hash}` : p;
};

// ---------- Layout ----------
const HTML_LANG = { vi: 'vi', en: 'en', ja: 'ja' };
const OG_LOCALE = { vi: 'vi_VN', en: 'en_US', ja: 'ja_JP' };

export function layout({ lang, key, title, desc, body, alts, jsonld = [], noindex = false, ogType = 'website', heroDark = true }) {
  const t = UI[lang];
  const path = alts[lang];
  const canonical = SITE.url + (path === '/' ? '/' : path);
  const fullTitle = key === 'home' ? title : `${title} · Proton ISF`;
  const hreflang = Object.entries(alts).filter(([, p]) => p)
    .map(([l, p]) => `<link rel="alternate" hreflang="${l}" href="${SITE.url}${p === '/' ? '/' : p}">`).join('\n') +
    `\n<link rel="alternate" hreflang="x-default" href="${SITE.url}/">`;
  const navLink = (k, label) => `<a href="${href(k, lang)}"${key === k || (k === 'proj' && key.startsWith('p-')) ? ' aria-current="page"' : ''}>${label}</a>`;
  const mega = t.mega.map(([k, b, s, i]) => `<a href="${href(k, lang)}"><span class="ic">${ic[i]}</span><span><b>${b}</b><span>${s}</span></span></a>`).join('');
  const langSw = ['vi', 'en', 'ja'].map((l) => `<a href="${alts[l] || ROUTES.home[l]}" hreflang="${l}" lang="${l}"${l === lang ? ' aria-current="true"' : ''}>${l.toUpperCase()}</a>`).join('');
  const org = {
    '@context': 'https://schema.org', '@type': 'Organization', '@id': SITE.url + '/#org',
    name: SITE.legalEn, alternateName: ['Proton ISF', SITE.legal], url: SITE.url + '/', logo: SITE.url + '/assets/logo.jpg',
    email: SITE.email, telephone: SITE.phone, taxID: SITE.taxId, foundingDate: '2019-10-28',
    address: { '@type': 'PostalAddress', streetAddress: 'Tầng 2, Tòa 29T1 Hoàng Đạo Thúy, P. Trung Hòa', addressLocality: 'Cầu Giấy, Hà Nội', addressCountry: 'VN' },
    sameAs: ['https://taisan.xyz/', 'https://cholangnghe.shop/', 'https://chosach.vn/'],
  };
  const ld = [org, ...jsonld].map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('\n');
  const analytics = SITE.ga4 || SITE.pixel
    ? `<script>window.__an={ga4:${JSON.stringify(SITE.ga4)},pixel:${JSON.stringify(SITE.pixel)}};</script>` : '';
  const fonts = lang === 'ja'
    ? 'family=Be+Vietnam+Pro:wght@400;500;600;700;800&family=Noto+Sans+JP:wght@400;500;700'
    : 'family=Be+Vietnam+Pro:ital,wght@0,400;0,500;0,600;0,700;0,800';
  return `<!doctype html>
<html lang="${HTML_LANG[lang]}" class="no-js">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(desc)}">
${noindex ? '<meta name="robots" content="noindex,follow">' : '<meta name="robots" content="index,follow,max-image-preview:large">'}
<link rel="canonical" href="${canonical}">
${hreflang}
<meta property="og:type" content="${ogType}">
<meta property="og:site_name" content="Proton ISF">
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${SITE.url}/assets/og-${lang}.jpg">
<meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta property="og:locale" content="${OG_LOCALE[lang]}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#071019">
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" href="/assets/favicon-48.png" type="image/png" sizes="48x48">
<link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?${fonts}&display=swap">
<link rel="stylesheet" href="/assets/style.css?v=${BUILD_ID}">
<script>document.documentElement.classList.remove('no-js')</script>
${analytics}
${ld}
</head>
<body data-lang="${lang}">
<a class="skip" href="#main">${t.skip}</a>
<header class="hdr" id="hdr">
<div class="wrap hdr-in">
<a class="brand" href="${ROUTES.home[lang]}" aria-label="Proton ISF">${brandImg(40)}<span><b>PROTON ISF</b><small>${t.tagline}</small></span></a>
<nav class="nav" aria-label="Main">
<div class="dd"><button type="button" aria-expanded="false" aria-haspopup="true">${t.nav.cap}${ic.down}</button>
<div class="mega" role="menu">
<a class="feat" href="${href('cap', lang)}"><span class="ic">${ic.layers}</span><span><b>${t.megaAll[0]}</b><span>${t.megaAll[1]}</span></span></a>
${mega}</div></div>
${navLink('eco', t.nav.eco)}${navLink('proj', t.nav.proj)}${navLink('part', t.nav.part)}${navLink('about', t.nav.about)}${navLink('ins', t.nav.ins)}
</nav>
<div class="hdr-tools">
<div class="lang" role="group" aria-label="Language">${langSw}</div>
<a class="btn btn-primary" href="${href('contact', lang)}#form" data-ev="cta_book_call">${t.cta}</a>
<button class="burger" type="button" aria-label="${t.menu}" aria-expanded="false" aria-controls="mnav">${ic.menu}</button>
</div>
</div>
</header>
<nav class="mnav" id="mnav" aria-label="Mobile">
<div class="lang" role="group" aria-label="Language">${langSw}</div>
<a href="${href('cap', lang)}">${t.nav.cap}</a>
${t.mega.map(([k, b]) => `<a class="sub" href="${href(k, lang)}">${b}</a>`).join('')}
<a href="${href('eco', lang)}">${t.nav.eco}</a><a href="${href('proj', lang)}">${t.nav.proj}</a><a href="${href('part', lang)}">${t.nav.part}</a><a href="${href('about', lang)}">${t.nav.about}</a><a href="${href('ins', lang)}">${t.nav.ins}</a><a href="${href('contact', lang)}">${t.f.contact}</a>
<a class="btn btn-primary" href="${href('contact', lang)}#form">${t.cta}</a>
</nav>
<main id="main">
${body}
</main>
${footer(lang, alts)}
<a class="fab" href="${lang === 'vi' ? SITE.zalo : href('contact', lang) + '#form'}"${lang === 'vi' ? ' target="_blank" rel="noopener"' : ''} data-ev="cta_book_call">${ic.msg}<span>${t.fab}</span></a>
<div class="cookie" id="cookie" role="dialog" aria-live="polite" aria-label="Cookie">${t.cookie[0]} <a href="${href('privacy', lang)}">${t.cookie[1]}</a>.
<div class="btn-row"><button class="btn btn-primary" type="button" data-ck="1">${t.cookie[2]}</button><button class="btn btn-ghost" type="button" data-ck="0">${t.cookie[3]}</button></div></div>
<script>window.__ui=${JSON.stringify({ live: t.live, cal: SITE.cal, ts: SITE.turnstile })};</script>
<script src="/assets/app.js?v=${BUILD_ID}" defer></script>
</body>
</html>`;
}
export const BUILD_ID = Date.now().toString(36);

function footer(lang, alts) {
  const t = UI[lang];
  const addr = lang === 'vi' ? SITE.address : lang === 'en' ? SITE.addressEn : SITE.addressJa;
  const name = lang === 'vi' ? SITE.legal : SITE.legalEn;
  return `<footer class="ftr">
<div class="wrap">
<div class="ftr-grid">
<div>
<a class="brand" href="${ROUTES.home[lang]}">${brandImg(44, false)}<span><b>PROTON ISF</b><small>${t.tagline}</small></span></a>
<p class="legal"><b style="color:#E7EEF0">${name}</b><br>${t.f.tax}: ${SITE.taxId}<br>${addr}</p>
<p class="legal"><a href="mailto:${SITE.email}">${SITE.email}</a> · <a href="tel:${SITE.phoneRaw}">${SITE.phone}</a></p>
</div>
<div><h5>${t.f.about}</h5><ul>
<li><a href="${href('about', lang)}">${t.nav.about}</a></li><li><a href="${href('proj', lang)}">${t.nav.proj}</a></li><li><a href="${href('part', lang)}">${t.nav.part}</a></li><li><a href="${href('ins', lang)}">${t.nav.ins}</a></li><li><a href="${href('profile', lang)}">${t.f.profile}</a></li><li><a href="${href('contact', lang)}">${t.f.contact}</a></li></ul></div>
<div><h5>${t.f.cap}</h5><ul>${t.mega.map(([k, b]) => `<li><a href="${href(k, lang)}">${b}</a></li>`).join('')}</ul></div>
<div><h5>${t.f.eco}</h5><ul>
<li><a href="https://taisan.xyz/" target="_blank" rel="noopener">taisan.xyz</a></li><li><a href="https://dongscan.taisan.xyz/" target="_blank" rel="noopener">dongscan.taisan.xyz</a></li><li><a href="https://platform.cholangnghe.shop/" target="_blank" rel="noopener">platform.cholangnghe.shop</a></li><li><a href="https://cholangnghe.shop/" target="_blank" rel="noopener">cholangnghe.shop</a></li><li><a href="https://chosach.vn/" target="_blank" rel="noopener">chosach.vn</a></li></ul></div>
</div>
<div class="ftr-bot"><span>© ${SITE.year} Proton ISF., JSC. ${t.f.rights}</span>
<nav aria-label="Legal"><a href="${href('privacy', lang)}">${t.f.privacy}</a><a href="${href('terms', lang)}">${t.f.terms}</a>
${['vi', 'en', 'ja'].map((l) => `<a href="${alts[l] || ROUTES.home[l]}" hreflang="${l}">${{ vi: 'Tiếng Việt', en: 'English', ja: '日本語' }[l]}</a>`).join('')}</nav></div>
</div>
</footer>`;
}

// ---------- Shared components ----------
export const pageHero = ({ kicker, title, lead, crumbs = [], actions = '' }) => `<section class="phero dark">
${orbitSmall()}
<div class="wrap">
${crumbs.length ? `<nav class="crumbs" aria-label="Breadcrumb">${crumbs.map(([l, u], i) => (u ? `<a href="${u}">${l}</a>` : `<span aria-current="page">${l}</span>`) + (i < crumbs.length - 1 ? '<span aria-hidden="true">/</span>' : '')).join('')}</nav>` : ''}
<p class="kicker">${kicker}</p>
<h1>${title}</h1>
${lead ? `<p class="lead">${lead}</p>` : ''}
${actions ? `<div class="btn-row" style="margin-top:32px">${actions}</div>` : ''}
</div></section>`;

export const breadcrumbLd = (items) => ({
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, url], i) => ({ '@type': 'ListItem', position: i + 1, name, item: SITE.url + url })),
});

export const secHead = (kicker, title, text = '') => `<div class="sec-head rv"><div><p class="kicker">${kicker}</p><h2>${title}</h2></div>${text ? `<p>${text}</p>` : '<span></span>'}</div>`;

export const btn = (label, url, kind = 'primary', ev = '', icon = 'arrow', extra = '') =>
  `<a class="btn btn-${kind}" href="${url}"${ev ? ` data-ev="${ev}"` : ''}${extra}>${label}${icon ? ic[icon] : ''}</a>`;

export const PLATFORMS = [
  { url: 'https://taisan.xyz/', host: 'taisan.xyz', cat: 'RWA', vi: 'Cổng hệ sinh thái RWA & Dong Protocol', en: 'RWA ecosystem portal & Dong Protocol', ja: 'RWAエコシステム・ポータル' },
  { url: 'https://app.taisan.xyz/', host: 'app.taisan.xyz', cat: 'RWA', vi: 'RWA Launchpad: phát hành, token hóa, giao dịch thứ cấp', en: 'RWA Launchpad: issuance, tokenization, secondary trading', ja: 'RWAローンチパッド（発行・トークン化・二次流通）' },
  { url: 'https://dongscan.taisan.xyz/', host: 'dongscan.taisan.xyz', cat: 'Explorer', vi: 'Block Explorer công khai của SOVVN Chain', en: 'Public block explorer for SOVVN Chain', ja: 'SOVVN Chain公開ブロックエクスプローラー' },
  { url: 'https://taisan.xyz/whitepaper', host: 'taisan.xyz/whitepaper', cat: 'Docs', vi: 'Sách trắng kỹ thuật v9.0', en: 'Technical whitepaper v9.0', ja: '技術ホワイトペーパー v9.0' },
  { url: 'https://platform.cholangnghe.shop/', host: 'platform.cholangnghe.shop', cat: 'B2B', vi: 'Hạ tầng B2B, quản trị và giao dịch cho làng nghề', en: 'B2B operations and trade platform for craft villages', ja: '伝統工芸村向けB2B基盤' },
  { url: 'https://cholangnghe.shop/', host: 'cholangnghe.shop', cat: 'Cross-border', vi: 'Sàn xuất khẩu tinh hoa làng nghề Việt', en: 'Cross-border store for Vietnamese craft', ja: 'ベトナム伝統工芸の越境EC' },
  { url: 'https://chosach.vn/', host: 'chosach.vn', cat: 'E-commerce', vi: 'Sàn TMĐT xuất bản phẩm', en: 'Publications e-commerce marketplace', ja: '出版物ECマーケットプレイス' },
];

export const platformCards = (lang, list = PLATFORMS) => {
  const t = UI[lang].live;
  return `<div class="plat-grid">${list.map((p) => `<article class="plat rv">
<div class="head"><span class="cat">${p.cat}</span><span class="status" data-url="${p.url}" data-s="chk"><i></i><span>${t.chk}</span></span></div>
<h4>${p.host}</h4><p>${p[lang]}</p><span class="ms" data-ms="${p.url}"></span>
<a class="link-arrow" href="${p.url}" target="_blank" rel="noopener" data-ev="platform_verify_click">${t.verify}${ic.ext}</a>
</article>`).join('')}</div>`;
};

export const PARTNERS = ['UBND TP. Hà Nội', 'Sở KH&CN Hà Nội', 'Ngân hàng ACB', 'Viettel Post', 'FAST Software', '1C Vietnam', 'Oritech', 'UBND xã Bát Tràng'];
export const partnerStrip = (label) => `<section class="partners" aria-label="${esc(label)}"><div class="wrap"><small>${label}</small>
<div class="marquee"><ul>${[...PARTNERS, ...PARTNERS].map((p, i) => `<li${i >= PARTNERS.length ? ' aria-hidden="true"' : ''}>${esc(p)}</li>`).join('')}</ul></div></div></section>`;

// Hình minh hoạ cho case study (SVG trừu tượng theo chủ đề)
export const caseVis = (kind) => {
  const base = `<rect width="400" height="250" fill="#071019"/><g stroke="#E7EEF0" stroke-opacity=".06">${Array.from({ length: 9 }, (_, i) => `<path d="M${i * 50} 0V250"/>`).join('')}${Array.from({ length: 6 }, (_, i) => `<path d="M0 ${i * 50}H400"/>`).join('')}</g>`;
  const v = {
    cln: `<g fill="none" stroke="#5CC8D0" stroke-width="1.6"><path d="M150 190c-8-40 4-80 30-96h40c26 16 38 56 30 96z"/><path d="M168 94c0-14 64-14 64 0"/><path d="M160 140h80M156 165h88" stroke-opacity=".5"/></g><g fill="#12949F"><circle cx="300" cy="70" r="5"/><circle cx="330" cy="110" r="4"/><circle cx="95" cy="80" r="4"/></g><g stroke="#5CC8D0" stroke-opacity=".5" stroke-dasharray="3 4"><path d="M232 110 300 70M232 130l98-20M168 120 95 80"/></g><rect x="280" y="150" width="70" height="44" rx="4" fill="none" stroke="#E7EEF0" stroke-opacity=".5"/><path d="M290 164h30M290 176h46" stroke="#E7EEF0" stroke-opacity=".4"/><text x="280" y="214" fill="#9FB0B9" font-size="10" font-family="sans-serif" letter-spacing="1.5">DPP · ON-CHAIN</text>`,
    sovvn: `${Array.from({ length: 5 }, (_, i) => `<rect x="${40 + i * 68}" y="105" width="48" height="40" rx="4" fill="${i === 4 ? '#12949F' : 'none'}" stroke="#5CC8D0" stroke-width="1.5"/>${i < 4 ? `<path d="M${88 + i * 68} 125h20" stroke="#5CC8D0" stroke-width="1.5"/>` : ''}`).join('')}<g fill="#9FB0B9" font-family="monospace" font-size="9">${Array.from({ length: 5 }, (_, i) => `<text x="${48 + i * 68}" y="166">#${(2109 + i).toString()}</text>`).join('')}</g><text x="40" y="70" fill="#E7EEF0" font-size="13" font-family="sans-serif" font-weight="700" letter-spacing="2">SOVVN CHAIN</text><text x="40" y="88" fill="#9FB0B9" font-size="10" font-family="monospace">chain_id 21091981 · substrate L0</text>`,
    scm: `<g fill="none" stroke="#5CC8D0" stroke-width="1.5"><path d="M40 190 C 100 170, 120 120, 170 130 S 260 80, 360 60"/></g><path d="M40 190 C 100 170, 120 120, 170 130 S 260 80, 360 60 V210 H40Z" fill="#12949F" fill-opacity=".12"/><g stroke="#E7EEF0" stroke-opacity=".35" stroke-dasharray="3 4"><path d="M250 90 C 290 80, 320 72, 360 68"/><path d="M250 100 C 290 100, 320 96, 360 92"/></g><g fill="#E7EEF0"><rect x="40" y="50" width="30" height="16" rx="2" fill-opacity=".85"/><rect x="80" y="50" width="30" height="16" rx="2" fill-opacity=".45"/><rect x="120" y="50" width="30" height="16" rx="2" fill-opacity=".25"/></g><text x="40" y="232" fill="#9FB0B9" font-size="10" font-family="sans-serif" letter-spacing="1.5">FORECAST · MILP · BOM</text>`,
    chosach: `${Array.from({ length: 6 }, (_, i) => `<rect x="${70 + i * 30}" y="${80 + (i % 2) * 10}" width="22" height="${110 - (i % 2) * 10}" rx="2" fill="none" stroke="${i === 2 ? '#5CC8D0' : '#E7EEF0'}" stroke-opacity="${i === 2 ? 1 : .45}" stroke-width="1.5"/>`).join('')}<rect x="270" y="80" width="80" height="80" rx="6" fill="none" stroke="#5CC8D0" stroke-width="1.5"/><g fill="#5CC8D0">${[[282, 92], [302, 92], [282, 112], [322, 112], [302, 132], [322, 132], [282, 140]].map(([x, y]) => `<rect x="${x}" y="${y}" width="12" height="12"/>`).join('')}</g><text x="270" y="186" fill="#9FB0B9" font-size="10" font-family="sans-serif" letter-spacing="1.5">ISBN · ID</text>`,
  };
  return `<svg viewBox="0 0 400 250" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${base}${v[kind]}</svg>`;
};
