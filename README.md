# Xuân Bắc AI — Website (Vite + React, deploy Vercel)

Website AI Academy + Workflow Marketplace + AI Automation Agency cho thương hiệu **Xuân Bắc AI**.
Đã tích hợp SEO, schema, Open Graph, social, tracking placeholder, chatbot AI, trang học bài, thanh toán mô phỏng.

## 1. Chạy thử ở máy (local)

```bash
npm install
cp .env.example .env        # điền ANTHROPIC_API_KEY để chatbot AI hoạt động
npm run dev                 # mở http://localhost:5173
```

> Không có API key thì web vẫn chạy bình thường, chỉ chatbot trả lời câu fallback.

## 2. Deploy lên Vercel (3 cách)

### Cách A — Qua GitHub (khuyên dùng)
1. Đẩy thư mục này lên một repo GitHub.
2. Vào https://vercel.com → **Add New → Project** → import repo.
3. Vercel tự nhận Vite. Giữ nguyên: Build `npm run build`, Output `dist`.
4. **Settings → Environment Variables** thêm:
   - `ANTHROPIC_API_KEY` = khóa API Anthropic của anh.
5. **Deploy**.

### Cách B — Vercel CLI
```bash
npm i -g vercel
vercel            # làm theo hướng dẫn
vercel env add ANTHROPIC_API_KEY
vercel --prod
```

### Cách C — Kéo-thả
Nén thư mục (trừ `node_modules`) rồi kéo vào Vercel dashboard, sau đó thêm biến môi trường như trên.

## 3. Cần đổi giá trị thật (sau khi có)

Trong `src/App.jsx`, phần đầu file:

| Biến | Đổi thành |
|------|-----------|
| `SITE.domain` | domain thật, ví dụ `https://xuanbac.ai` |
| `SITE.ogImage` | `https://<domain>/og-default.jpg` |
| `SOCIALS[].url` | link Facebook/Zalo/TikTok/YouTube/LinkedIn/Messenger thật |
| `TRACKING.*` | ID thật của GA4, GTM, Meta Pixel, TikTok Pixel, LinkedIn, Google Ads (đang là placeholder nên tự bỏ qua) |

Trong `public/`: thay `og-default.jpg`, `logo.png`, `favicon.svg` bằng bản chính thức nếu muốn.
Trong `public/robots.txt` và `public/sitemap.xml`: đổi `https://xuanbac.ai` thành domain thật.

## 4. Chatbot AI

- Frontend gọi `POST /api/chat`.
- Serverless function `api/chat.js` thêm API key (env) và gọi Anthropic — key KHÔNG bao giờ lộ ra trình duyệt.
- Đổi model tại biến `ANTHROPIC_MODEL` nếu cần.

## 5. Nối lead về n8n (tùy chọn)

Trong `src/App.jsx`, hàm `LeadForm` có `onDone(data)` trả về toàn bộ dữ liệu form + UTM.
Thêm một `fetch("https://<n8n-webhook>", { method:"POST", body: JSON.stringify(data) })` trong `onDone` là lead chảy thẳng về n8n/CRM.

## Lưu ý SEO
Đây là SPA — meta/schema render phía client (đủ cho Google index hiện đại). Riêng preview khi share mạng xã hội dùng OG mặc định trong `index.html`. Nếu cần OG động theo từng trang khi share, nâng cấp sang **Next.js** (logic `seoFor()` map thẳng sang `generateMetadata`).
