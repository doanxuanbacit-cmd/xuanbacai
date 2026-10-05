// Server xem thử cục bộ: giả lập cleanUrls + /api/* của Vercel. Chạy: npm run dev
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUB = join(ROOT, 'public');
const PORT = Number(process.env.PORT || 3000);
const TYPES = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.json': 'application/json', '.xml': 'application/xml', '.txt': 'text/plain', '.pdf': 'application/pdf', '.webmanifest': 'application/manifest+json', '.ico': 'image/x-icon' };

async function tryFile(p) { try { const s = await stat(p); return s.isFile() ? p : null; } catch { return null; } }

createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  let path = decodeURIComponent(url.pathname);

  if (path.startsWith('/api/')) {
    const name = path.slice(5).replace(/[^a-z0-9_-]/gi, '');
    try {
      const mod = await import(join(ROOT, 'api', name + '.js') + '?t=' + Date.now());
      let body = '';
      for await (const ch of req) body += ch;
      req.body = body ? (() => { try { return JSON.parse(body); } catch { return body; } })() : undefined;
      req.query = Object.fromEntries(url.searchParams);
      const shim = Object.assign(res, {
        status(c) { res.statusCode = c; return shim; },
        json(o) { res.setHeader('content-type', 'application/json'); res.end(JSON.stringify(o)); return shim; },
      });
      return await mod.default(req, shim);
    } catch (e) { res.statusCode = 500; return res.end(String(e)); }
  }

  if (path.endsWith('/') && path !== '/') path = path.slice(0, -1);
  const f = (await tryFile(join(PUB, path))) || (await tryFile(join(PUB, path + '.html'))) || (await tryFile(join(PUB, path, 'index.html')));
  if (!f) { res.statusCode = 404; res.setHeader('content-type', TYPES['.html']); return res.end(await readFile(join(PUB, '404.html'))); }
  res.setHeader('content-type', TYPES[extname(f)] || 'application/octet-stream');
  res.end(await readFile(f));
}).listen(PORT, () => console.log(`→ http://localhost:${PORT}`));
