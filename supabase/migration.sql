-- Proton ISF website — lược đồ Supabase (chạy trong SQL Editor của Supabase)
-- Website ghi dữ liệu bằng SERVICE ROLE KEY từ API serverless; trình duyệt không truy cập trực tiếp các bảng.

create extension if not exists pgcrypto;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) <= 120),
  company text check (char_length(company) <= 160),
  email text not null check (char_length(email) <= 160),
  phone text check (char_length(phone) <= 40),
  country text,
  lang text check (lang in ('vi','en','ja')),
  interest text check (interest in ('ai_dev','rwa','scm','govtech','investment','other')),
  model text check (model in ('outsourcing','tech_transfer','ma','unknown')),
  message text check (char_length(message) <= 3000),
  source_page text,
  utm jsonb not null default '{}'::jsonb,
  consent boolean not null default false,
  status text not null default 'new' check (status in ('new','contacted','qualified','won','lost','spam'))
);
create index if not exists leads_created_idx on public.leads (created_at desc);
create index if not exists leads_status_idx on public.leads (status);

create table if not exists public.downloads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email text, file text, lang text, utm jsonb not null default '{}'::jsonb
);

create table if not exists public.platform_status (
  id bigserial primary key,
  url text not null,
  checked_at timestamptz not null default now(),
  status_code int, latency_ms int, is_up boolean
);
create index if not exists platform_status_url_time_idx on public.platform_status (url, checked_at desc);

create table if not exists public.insights (
  id uuid primary key default gen_random_uuid(),
  slug text not null, lang text not null check (lang in ('vi','en','ja')),
  title text, excerpt text, body_mdx text, cover_url text,
  published_at timestamptz, seo jsonb,
  unique (slug, lang)
);

-- Bật RLS trên mọi bảng
alter table public.leads enable row level security;
alter table public.downloads enable row level security;
alter table public.platform_status enable row level security;
alter table public.insights enable row level security;

-- Khách ẩn danh: KHÔNG có quyền gì với leads/downloads (chỉ API phía máy chủ ghi bằng service role)
-- Ai cũng đọc được bài insights đã xuất bản và thống kê uptime
drop policy if exists "public read published insights" on public.insights;
create policy "public read published insights" on public.insights
  for select using (published_at is not null and published_at <= now());

drop policy if exists "public read platform status" on public.platform_status;
create policy "public read platform status" on public.platform_status
  for select using (true);

-- Nhân sự nội bộ (Supabase Auth, user có app_metadata.role = 'editor') quản lý leads và insights
drop policy if exists "editors manage leads" on public.leads;
create policy "editors manage leads" on public.leads
  for all to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'editor')
  with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'editor');

drop policy if exists "editors manage insights" on public.insights;
create policy "editors manage insights" on public.insights
  for all to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'editor')
  with check ((auth.jwt() -> 'app_metadata' ->> 'role') = 'editor');

drop policy if exists "editors read downloads" on public.downloads;
create policy "editors read downloads" on public.downloads
  for select to authenticated
  using ((auth.jwt() -> 'app_metadata' ->> 'role') = 'editor');

-- Uptime 30 ngày theo từng nền tảng
create or replace view public.platform_uptime_30d as
select url,
       round(100.0 * avg(case when is_up then 1 else 0 end), 2) as uptime_pct,
       round(avg(latency_ms)) as avg_latency_ms,
       max(checked_at) as last_checked
from public.platform_status
where checked_at > now() - interval '30 days'
group by url;

-- Dọn dữ liệu uptime cũ hơn 90 ngày (có thể đặt lịch bằng pg_cron)
-- delete from public.platform_status where checked_at < now() - interval '90 days';
