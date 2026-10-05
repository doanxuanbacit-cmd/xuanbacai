// Build tĩnh: node build.mjs → thư mục public/ (Vercel phục vụ trực tiếp)
import { mkdirSync, writeFileSync, rmSync, cpSync, existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE, UI, ROUTES, layout, logoMark } from './src/core.mjs';
import * as P from './src/pages.mjs';
import vi from './src/content/vi.mjs';
import en from './src/content/en.mjs';
import ja from './src/content/ja.mjs';
import posts from './src/content/posts.mjs';

const ROOT = dirname(fileURLToPath(import.meta.url));
const OUT = join(ROOT, 'public');
const LANGS = ['vi', 'en', 'ja'];
const CONTENT = { vi, en, ja };

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

// Gắn UI chung + bài viết vào nội dung từng ngôn ngữ
for (const l of LANGS) {
  const C = CONTENT[l];
  C.ui = { ...UI[l], ...C.ui };
  C.posts = posts[l];
}

const pages = []; // { path, html, lang, key, alts }
const fileFor = (p) => (p === '/' ? 'index.html' : p.replace(/^\//, '') + '.html');
function emit(lang, routeKey, page, altsOverride) {
  const alts = altsOverride || ROUTES[routeKey];
  const html = layout({ lang, key: page.key, title: page.title, desc: page.desc, body: page.body, alts, jsonld: page.jsonld || [], noindex: page.noindex, ogType: page.ogType });
  const path = alts[lang];
  const f = join(OUT, fileFor(path));
  mkdirSync(dirname(f), { recursive: true });
  writeFileSync(f, html);
  if (!page.noindex) pages.push({ path, alts });
}

// File hồ sơ năng lực (đặt PDF vào src/static/files/ để bật nút tải trực tiếp)
const PROFILE_FILES = [
  { name: 'Ho_so_nang_luc_Proton_ISF_2026_VI.pdf', label: { vi: 'Tải bản tiếng Việt (PDF)', en: 'Vietnamese edition (PDF)', ja: 'ベトナム語版（PDF）' } },
  { name: 'Proton_ISF_Capability_Profile_2026_EN.pdf', label: { vi: 'Tải bản tiếng Anh (PDF)', en: 'Download English edition (PDF)', ja: '英語版をダウンロード（PDF）' } },
];

for (const l of LANGS) {
  const C = CONTENT[l];
  emit(l, 'home', P.home(C, l));
  emit(l, 'cap', P.capabilities(C, l));
  emit(l, 'ai', P.aiPage(C, l));
  emit(l, 'eco', P.ecosystem(C, l));
  emit(l, 'proj', P.projects(C, l));
  for (const c of C.cases) emit(l, c.key, P.caseStudy(C, l, c));
  emit(l, 'part', P.partnership(C, l));
  emit(l, 'about', P.about(C, l));
  emit(l, 'ins', P.insights(C, l));
  for (const p of C.posts) {
    const alts = Object.fromEntries(LANGS.map((x) => [x, posts[x].some((q) => q.slug === p.slug) ? `${ROUTES.ins[x]}/${p.slug}` : null]));
    emit(l, 'ins', P.post(C, l, p), alts);
  }
  emit(l, 'contact', P.contact(C, l));
  const files = PROFILE_FILES.map((f) => ({ ...f, url: `/files/${f.name}`, label: f.label[l], exists: existsSync(join(ROOT, 'src/static/files', f.name)) }));
  emit(l, 'profile', P.profile(C, l, files));
  emit(l, 'privacy', P.legal(C, l, 'privacy'));
  emit(l, 'terms', P.legal(C, l, 'terms'));
}
// 404 (tiếng Việt, kèm link 3 ngôn ngữ ở footer)
{
  const nf = P.notFound(vi, 'vi');
  const html = layout({ lang: 'vi', key: '404', title: nf.title, desc: nf.desc, body: nf.body, alts: ROUTES.home, noindex: true });
  writeFileSync(join(OUT, '404.html'), html);
}

// Tài nguyên tĩnh
mkdirSync(join(OUT, 'assets'), { recursive: true });
cpSync(join(ROOT, 'src/style.css'), join(OUT, 'assets/style.css'));
cpSync(join(ROOT, 'src/app.js'), join(OUT, 'assets/app.js'));
if (existsSync(join(ROOT, 'src/static'))) cpSync(join(ROOT, 'src/static'), OUT, { recursive: true });
cpSync(join(ROOT, 'src/static/favicon.ico'), join(OUT, 'favicon.ico'));
writeFileSync(join(OUT, 'site.webmanifest'), JSON.stringify({
  name: 'Proton ISF', short_name: 'Proton ISF', start_url: '/', display: 'standalone', background_color: '#071019', theme_color: '#071019',
  icons: [{ src: '/assets/icon-192.png', sizes: '192x192', type: 'image/png' }, { src: '/assets/icon-512.png', sizes: '512x512', type: 'image/png' }],
}, null, 2));

// sitemap.xml + robots.txt
const today = new Date().toISOString().slice(0, 10);
const seen = new Set();
const urls = pages.filter((p) => !seen.has(p.path) && seen.add(p.path)).map((p) => {
  const loc = SITE.url + (p.path === '/' ? '/' : p.path);
  const alt = Object.entries(p.alts).filter(([, v]) => v).map(([l, v]) => `<xhtml:link rel="alternate" hreflang="${l}" href="${SITE.url}${v === '/' ? '/' : v}"/>`).join('');
  const prio = p.path === '/' ? '1.0' : /ai-driven/.test(p.path) ? '0.9' : /legal/.test(p.path) ? '0.3' : '0.7';
  return `<url><loc>${loc}</loc><lastmod>${today}</lastmod><priority>${prio}</priority>${alt}<xhtml:link rel="alternate" hreflang="x-default" href="${SITE.url}/"/></url>`;
});
writeFileSync(join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`);
writeFileSync(join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${SITE.url}/sitemap.xml\n`);

console.log(`✓ Build xong: ${pages.length} trang (${LANGS.join('/')}) → public/`);
