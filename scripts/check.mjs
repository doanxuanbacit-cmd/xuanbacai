// Kiểm tra sau build: link nội bộ, JSON-LD, hreflang, meta, quy tắc nội dung mục 2.7. Chạy: npm run check
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const PUB = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');
const walk = (d) => readdirSync(d).flatMap((f) => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p) : [p]; });
const files = walk(PUB).filter((f) => f.endsWith('.html'));
const exists = (u) => {
  const p = u.split('#')[0].split('?')[0];
  if (p === '/') return true;
  return [p, p + '.html', join(p, 'index.html')].some((x) => existsSync(join(PUB, x)) && statSync(join(PUB, x)).isFile()) || p.startsWith('/api/');
};
// Cụm từ bị cấm theo mục 2.7 của prompt (chưa xác minh)
const BANNED = [/Sao Thái Dương/i, /chủ trì Đề án/i, /Chủ nhiệm Đề án/i, /đã được cấp phép/i, /主導/];

let problems = 0;
const bad = (f, m) => { problems++; console.log('✗', relative(PUB, f), '—', m); };
for (const f of files) {
  const h = readFileSync(f, 'utf8');
  for (const [, u] of h.matchAll(/href="(\/[^"]*)"/g)) if (!exists(u)) bad(f, 'link hỏng ' + u);
  for (const [, j] of h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) { try { JSON.parse(j); } catch { bad(f, 'JSON-LD lỗi'); } }
  if (!/<title>[^<]{5,}<\/title>/.test(h)) bad(f, 'thiếu title');
  if (!/<meta name="description" content="[^"]{20,}"/.test(h)) bad(f, 'thiếu description');
  if (!f.endsWith('404.html') && (h.match(/hreflang="(vi|en|ja)" href=/g) || []).length < 3) bad(f, 'thiếu hreflang');
  if ((h.match(/<h1[\s>]/g) || []).length !== 1) bad(f, 'số thẻ h1 khác 1');
  const text = h.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ');
  for (const re of BANNED) if (re.test(text)) bad(f, 'cụm từ chưa xác minh: ' + re);
  for (const [tag] of h.matchAll(/<img\b[^>]*>/g)) if (!/\balt="/.test(tag)) bad(f, 'ảnh thiếu alt');
}
const sm = readFileSync(join(PUB, 'sitemap.xml'), 'utf8');
const locs = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].length;
console.log(`${files.length} file HTML · ${locs} URL trong sitemap · ${problems ? problems + ' lỗi' : 'không có lỗi'}`);
process.exit(problems ? 1 : 0);
