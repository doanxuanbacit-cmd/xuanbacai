# Website protonisf.com — Proton ISF., JSC

Website doanh nghiệp 3 ngôn ngữ (Tiếng Việt · English · 日本語), 57 trang, tối ưu cho đối tác Nhật Bản và quốc tế.

- **Trang tĩnh** sinh sẵn lúc build → tải rất nhanh (trang chủ ~13 KB gzip, CSS ~8 KB, không thư viện JS).
- **2 API serverless** trên Vercel: `/api/lead` (nhận form) và `/api/status` (kiểm tra 7 nền tảng hệ sinh thái).
- Không cần cài thư viện: chỉ cần Node.js ≥ 18.

---

## 1. Deploy lên Vercel (chọn một cách)

### Cách A — qua GitHub (khuyến nghị)
1. Tạo repo mới trên GitHub, đẩy toàn bộ thư mục này lên.
2. Vào **vercel.com → Add New → Project → Import** repo vừa tạo.
3. Vercel tự đọc `vercel.json` (Build: `node build.mjs`, Output: `public`). Không cần chỉnh gì → **Deploy**.

### Cách B — dùng Vercel CLI
```bash
cd protonisf-web
npx vercel          # lần đầu: đăng nhập, tạo project
npx vercel --prod   # đưa lên production
```

### Gắn tên miền
Vercel → Project → **Settings → Domains** → thêm `protonisf.com` và `www.protonisf.com`.
Nếu DNS ở Cloudflare: tạo bản ghi theo hướng dẫn Vercel hiển thị (thường là `A 76.76.21.21` cho tên miền gốc, `CNAME cname.vercel-dns.com` cho `www`), để chế độ **DNS only** (mây xám).

---

## 2. Biến môi trường

Vào **Settings → Environment Variables**, thêm các biến trong `.env.example`. Sau khi thêm/sửa, bấm **Redeploy**.

| Biến | Bắt buộc? | Tác dụng |
|---|---|---|
| `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` | Một trong ba đích | Lưu lead vào bảng `leads` |
| `N8N_LEAD_WEBHOOK_URL` (+ `N8N_WEBHOOK_SECRET`) | Một trong ba đích | Đẩy lead sang n8n → GoHighLevel |
| `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID` | Một trong ba đích | Báo lead mới về Telegram |
| `RESEND_API_KEY`, `MAIL_FROM` | Không | Email xác nhận gửi khách đúng ngôn ngữ |
| `TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY` | Không | Chống spam Cloudflare Turnstile |
| `CALCOM_LINK` | Không | Nút “Chọn lịch trao đổi” sau khi gửi form (không có thì hiện nút email) |
| `GA4_ID`, `META_PIXEL_ID` | Không | Analytics, chỉ tải sau khi khách bấm đồng ý cookie |
| `SANDBOX_DECREE` | Không | Số hiệu nghị quyết sandbox của chosach.vn — để trống thì ẩn |
| `SITE_URL` | Không | Mặc định `https://protonisf.com` |

> ⚠️ **Form chỉ hoạt động khi có ít nhất một đích nhận lead.** Nếu chưa cấu hình gì, form báo lỗi và hướng khách email trực tiếp — không có lead nào bị mất âm thầm.

Các biến `CALCOM_LINK`, `GA4_ID`, `META_PIXEL_ID`, `TURNSTILE_SITE_KEY`, `SANDBOX_DECREE`, `SITE_URL` được ghi vào HTML lúc build → sửa xong phải **Redeploy**.

---

## 3. Kết nối các dịch vụ

**Supabase:** mở SQL Editor → dán và chạy `supabase/migration.sql`. Tạo 4 bảng (`leads`, `downloads`, `platform_status`, `insights`), bật RLS, view `platform_uptime_30d`. Xem và quản lý lead trực tiếp trong **Table Editor** của Supabase. Muốn cấp quyền cho nhân sự: tạo user Supabase Auth và đặt `app_metadata.role = "editor"`.

**n8n → GoHighLevel:** n8n → Import workflow → chọn `n8n/lead-workflow.json`. Đặt biến n8n `PROTONISF_WEBHOOK_SECRET` (trùng `N8N_WEBHOOK_SECRET` trên Vercel), `GHL_PRIVATE_TOKEN`, `GHL_LOCATION_ID`. Bật workflow, copy URL webhook production vào `N8N_LEAD_WEBHOOK_URL`.

**Telegram:** tạo bot qua @BotFather (hoặc dùng bot đang có), lấy `chat_id` của nhóm/kênh nhận thông báo.

**Hồ sơ năng lực PDF:** đặt 2 file vào `src/static/files/` đúng tên:
- `Ho_so_nang_luc_Proton_ISF_2026_VI.pdf`
- `Proton_ISF_Capability_Profile_2026_EN.pdf`

Có file → trang `/profile` hiện nút tải trực tiếp. Chưa có → trang hiện form để khách nhận hồ sơ qua email.

**Trạng thái nền tảng:** `/api/status` được CDN cache 5 phút, nên trạng thái tự làm mới mà không cần cấu hình. Muốn lưu lịch sử uptime vào Supabase (gói Vercel Pro): thêm vào `vercel.json`
```json
"crons": [{ "path": "/api/status?log=1", "schedule": "*/5 * * * *" }]
```
(Gói Hobby chỉ cho cron 1 lần/ngày.)

---

## 4. Sửa nội dung

Toàn bộ chữ nằm trong `src/content/`:

| File | Nội dung |
|---|---|
| `vi.mjs`, `en.mjs`, `ja.mjs` | Toàn bộ trang theo từng ngôn ngữ (cấu trúc giống nhau) |
| `posts.mjs` | Bài Insights (thêm bài: thêm 1 object vào cả 3 mảng, cùng `slug`) |
| `src/core.mjs` | Thông tin công ty (`SITE`), danh sách nền tảng, đối tác, menu |
| `src/style.css` | Màu, font, giao diện |

Sửa xong: đẩy lên GitHub → Vercel tự build lại.

### Xem thử trên máy
```bash
npm run dev      # build + chạy http://localhost:3000
npm run check    # kiểm tra link hỏng, JSON-LD, hreflang, cụm từ chưa xác minh
```

---

## 5. Cấu trúc thư mục

```
api/lead.js          Nhận form → Supabase / n8n / Telegram / email xác nhận
api/status.js        Kiểm tra 7 nền tảng hệ sinh thái
build.mjs            Sinh 57 trang HTML + sitemap.xml + robots.txt
src/core.mjs         Layout, header, footer, SEO, logo, component chung
src/pages.mjs        Template các trang
src/content/         Nội dung 3 ngôn ngữ + bài viết
src/style.css        Design system (teal/navy, Be Vietnam Pro, Noto Sans JP)
src/app.js           Menu, hiệu ứng, form 3 bước, trạng thái live, cookie
src/static/assets/   Ảnh OG 3 ngôn ngữ, logo, icon
supabase/            Migration SQL + RLS
n8n/                 Workflow mẫu lead → GoHighLevel
scripts/             Server xem thử, bộ kiểm tra
```

---

## 6. Checklist go-live

- [ ] Deploy thành công, mở được `https://<project>.vercel.app`
- [ ] Gắn tên miền `protonisf.com` + `www`, SSL hiển thị khóa xanh
- [ ] Cấu hình ít nhất một đích nhận lead, gửi thử form ở cả `/contact`, `/en/contact`, `/ja/contact`
- [ ] Email domain `contact@protonisf.com`: bản ghi MX hoạt động; nếu dùng Resend thì xác minh SPF/DKIM
- [ ] Đặt `CALCOM_LINK`, `GA4_ID` → Redeploy
- [ ] Google Search Console: thêm `protonisf.com`, gửi `https://protonisf.com/sitemap.xml`
- [ ] Kiểm tra ảnh chia sẻ: dán link vào Facebook Sharing Debugger / LinkedIn Post Inspector
- [x] Logo thật đã gắn (header, footer, hero, favicon, ảnh chia sẻ). Khi có file vector, thay `src/static/assets/logo-mark.webp` để nét sắc hơn khi phóng lớn
- [x] Hồ sơ năng lực tiếng Việt đã gắn (`src/static/files/`). Còn thiếu bản tiếng Anh `Proton_ISF_Capability_Profile_2026_EN.pdf`
- [ ] Thay chữ viết tắt ở mục Ban lãnh đạo bằng ảnh chân dung
- [ ] Xác nhận các mục cần kiểm chứng (bên dưới)

### Nội dung đang để ở mức thận trọng (mục 2.7 của prompt)
- **Đề án 65 tỷ (QĐ 131/2026/QĐ-UBND):** ghi “tham gia xây dựng”, chưa ghi “chủ trì”.
- **Khách hàng dự án AI SCM:** chỉ ghi “doanh nghiệp dược – mỹ phẩm”, không nêu tên, chỉ nêu “PRD 8 phân hệ trong 4 ngày”.
- **Nghị quyết 05/2025/NQ-CP:** chỉ ghi “khung pháp lý định hướng”.
- **Sandbox chosach.vn:** ẩn số hiệu, bật bằng biến `SANDBOX_DECREE`.

`npm run check` sẽ báo lỗi nếu các cụm từ chưa xác minh (ví dụ tên khách hàng, “chủ trì Đề án”) vô tình xuất hiện lại.
