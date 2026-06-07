import React, { useState, useEffect, useRef, createContext, useContext } from "react";
import {
  Menu, X, Phone, Sun, Moon, ShoppingCart, ArrowRight, Check, Star,
  Clock, Users, BarChart3, Zap, Bot, Workflow, Database, MessageSquare,
  Newspaper, Building2, Video, Mail, MapPin, ChevronDown, ChevronRight,
  Play, FileDown, Sparkles, ShieldCheck, TrendingUp, Send, Quote,
  GraduationCap, Layers, Headphones, Target, Search, Filter, ArrowLeft,
  CheckCircle2, Award, Settings, CreditCard, Gift, Plus, Minus,
  Facebook, Instagram, Youtube, Linkedin, Twitter, Share2, Link2, BookOpen, Calendar, Home as HomeIcon
} from "lucide-react";

/* ============================== THEME / STORE ============================== */
const Store = createContext(null);
const useStore = () => useContext(Store);

const fmt = (n) => n.toLocaleString("vi-VN") + "đ";
const PHONE = "0918281726";
const ADDR = "15 Hàm Nghi, Từ Liêm, Hà Nội";

/* ====== SITE / SOCIAL / TRACKING CONFIG (đổi giá trị thật khi deploy) ====== */
const SITE = {
  domain: "https://xuanbac.ai",            // TODO: đổi domain thật
  name: "Xuân Bắc AI",
  ogImage: "https://xuanbac.ai/og-default.jpg", // TODO: ảnh OG 1200x630 thật
  twitter: "@doanxuanbacit",
};
const SOCIALS = [
  { name: "Facebook", short: "Facebook", url: "https://www.facebook.com/doanxuanbacai/", icon: Facebook },
  { name: "Zalo", short: "Zalo", url: `https://zalo.me/${PHONE}`, icon: MessageSquare },
  { name: "Messenger", short: "Messenger", url: "https://m.me/doanxuanbacai", icon: Send },
  { name: "Instagram", short: "Instagram", url: "https://www.instagram.com/doanxuanbac84/", icon: Instagram },
  { name: "X", short: "X", url: "https://x.com/doanxuanbacit", icon: Twitter },
  { name: "TikTok", short: "TikTok", url: "https://www.tiktok.com/@doanxuanbacit", icon: Video },
  { name: "YouTube", short: "YouTube", url: "https://www.youtube.com/@doanxuanbacit", icon: Youtube },
  { name: "LinkedIn", short: "LinkedIn", url: "https://www.linkedin.com/in/doanxuanbacit/", icon: Linkedin },
];
// Placeholder IDs — thay bằng ID thật để kích hoạt tracking
const TRACKING = {
  GA4: "G-XXXXXXXXXX",
  GTM: "GTM-XXXXXXX",
  META_PIXEL: "000000000000000",
  TIKTOK_PIXEL: "XXXXXXXXXXXXXXXXXXXX",
  LINKEDIN_PARTNER: "0000000",
  GOOGLE_ADS: "AW-XXXXXXXXX",
};
const isConfigured = (id) => id && !/[X0]{5,}/.test(id);

/* ====== UTM CAPTURE ====== */
let _utm = {};
function captureUTM() {
  try {
    const p = new URLSearchParams(window.location.search);
    ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"].forEach((k) => {
      if (p.get(k)) _utm[k] = p.get(k);
    });
  } catch (e) {}
}
const getUTM = () => ({ ..._utm });

/* ====== EVENT TRACKING (gửi tới GA4 / GTM / Meta / TikTok khi đã cấu hình) ====== */
function track(event, params = {}) {
  const payload = { ...params, ...getUTM() };
  try { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event, ...payload }); } catch (e) {}
  try { if (window.gtag) window.gtag("event", event, payload); } catch (e) {}
  try {
    if (window.fbq) {
      const m = { purchase: "Purchase", lead: "Lead", booking: "Schedule", view_course: "ViewContent", view_workflow: "ViewContent", add_to_cart: "AddToCart" };
      window.fbq("track", m[event] || "CustomEvent", payload);
    }
  } catch (e) {}
  try {
    if (window.ttq) {
      const m = { purchase: "CompletePayment", lead: "SubmitForm", add_to_cart: "AddToCart", view_course: "ViewContent", view_workflow: "ViewContent" };
      window.ttq.track(m[event] || event, payload);
    }
  } catch (e) {}
  if (typeof console !== "undefined") console.log("[track]", event, payload);
}

/* ====== TRACKING INIT (chỉ nạp script khi ID đã cấu hình thật) ====== */
function initTracking() {
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) window.gtag = function () { window.dataLayer.push(arguments); };
  if (isConfigured(TRACKING.GTM)) {
    const s = document.createElement("script"); s.async = true;
    s.src = "https://www.googletagmanager.com/gtm.js?id=" + TRACKING.GTM;
    document.head.appendChild(s);
    window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  }
  if (isConfigured(TRACKING.GA4)) {
    const s = document.createElement("script"); s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + TRACKING.GA4;
    document.head.appendChild(s);
    window.gtag("js", new Date()); window.gtag("config", TRACKING.GA4);
    if (isConfigured(TRACKING.GOOGLE_ADS)) window.gtag("config", TRACKING.GOOGLE_ADS);
  }
  // Meta Pixel / TikTok Pixel / LinkedIn: snippet thật sẽ được chèn tương tự khi có ID.
  // (Bỏ qua khi còn placeholder để tránh request lỗi.)
}

/* ====== SEO META + JSON-LD ====== */
function setMeta(attr, key, val) {
  if (!val) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) { el = document.createElement("meta"); el.setAttribute(attr, key); document.head.appendChild(el); }
  el.setAttribute("content", val);
}
function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) { el = document.createElement("link"); el.setAttribute("rel", "canonical"); document.head.appendChild(el); }
  el.setAttribute("href", href);
}
function setJSONLD(id, data) {
  let el = document.getElementById(id);
  if (!data) { if (el) el.remove(); return; }
  if (!el) { el = document.createElement("script"); el.type = "application/ld+json"; el.id = id; document.head.appendChild(el); }
  el.textContent = JSON.stringify(data);
}
const ORG_SCHEMA = {
  "@context": "https://schema.org", "@type": "Organization", name: SITE.name, url: SITE.domain,
  logo: SITE.domain + "/logo.png", telephone: "+84" + PHONE.slice(1),
  sameAs: SOCIALS.map((s) => s.url),
};
const LOCALBIZ_SCHEMA = {
  "@context": "https://schema.org", "@type": "LocalBusiness", name: SITE.name, image: SITE.ogImage,
  "@id": SITE.domain, url: SITE.domain, telephone: "+84" + PHONE.slice(1), priceRange: "₫₫₫",
  address: { "@type": "PostalAddress", streetAddress: "15 Hàm Nghi", addressLocality: "Từ Liêm", addressRegion: "Hà Nội", addressCountry: "VN" },
};
const FAQ_SCHEMA = (faqs) => ({
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
});
const BREADCRUMB_SCHEMA = (items) => ({
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.label, item: SITE.domain + "/" + (it.path || "") })),
});
function applySEO({ title, description, path, type = "website", image, schema }) {
  document.title = title;
  setMeta("name", "description", description);
  setMeta("name", "robots", "index,follow,max-image-preview:large");
  setMeta("property", "og:title", title);
  setMeta("property", "og:description", description);
  setMeta("property", "og:type", type === "article" ? "article" : "website");
  setMeta("property", "og:url", SITE.domain + path);
  setMeta("property", "og:image", image || SITE.ogImage);
  setMeta("property", "og:site_name", SITE.name);
  setMeta("property", "og:locale", "vi_VN");
  setMeta("name", "twitter:card", "summary_large_image");
  setMeta("name", "twitter:site", SITE.twitter);
  setMeta("name", "twitter:title", title);
  setMeta("name", "twitter:description", description);
  setMeta("name", "twitter:image", image || SITE.ogImage);
  setCanonical(SITE.domain + path);
  setJSONLD("ld-page", schema || null);
}

/* ============================== SAMPLE DATA ============================== */
const COURSES = [
  { slug: "ai-automation-foundation", name: "AI Automation Foundation", cat: "AI Automation", level: "Cơ bản", dur: "12 giờ", lessons: 48, price: 1990000, rating: 4.9, students: 1240, color: "#5BA3F5",
    short: "Nền tảng giúp người mới hiểu AI Automation và ứng dụng ngay vào công việc.", for: "Người mới, chủ DN nhỏ, freelancer", result: "Tự xây được 3 workflow đầu tiên cho công việc của mình." },
  { slug: "n8n-workflow-thuc-chien", name: "n8n Workflow Thực Chiến", cat: "n8n", level: "Trung cấp", dur: "18 giờ", lessons: 72, price: 3990000, rating: 4.8, students: 860, color: "#C9A24B",
    short: "Xây workflow tự động bằng n8n qua hàng loạt case thực tế của doanh nghiệp Việt.", for: "Người đã biết AI cơ bản, muốn làm hệ thống", result: "Tự host n8n và vận hành 10+ workflow doanh nghiệp." },
  { slug: "ai-agent-sales-cskh", name: "AI Agent cho Sales & CSKH", cat: "AI Agent", level: "Nâng cao", dur: "16 giờ", lessons: 64, price: 4990000, rating: 4.9, students: 540, color: "#5BA3F5",
    short: "Xây AI Agent lọc lead, chăm khách, follow-up và báo cáo pipeline tự động.", for: "Sale, CSKH, quản lý kinh doanh", result: "Có 1 hệ thống Sales Agent chạy 24/7 cho team." },
  { slug: "ai-content-factory", name: "AI Content Factory", cat: "AI Content", level: "Trung cấp", dur: "10 giờ", lessons: 40, price: 2990000, rating: 4.7, students: 720, color: "#C9A24B",
    short: "Xây hệ thống tạo content đa nền tảng bằng AI: Facebook, TikTok, Zalo, LinkedIn.", for: "Marketing, content creator, agency", result: "Sản xuất 30+ bài content/tuần từ một quy trình." },
  { slug: "ai-video-automation", name: "AI Video Automation (Veo / Omni Flash)", cat: "AI Video", level: "Nâng cao", dur: "14 giờ", lessons: 52, price: 3990000, rating: 4.8, students: 410, color: "#5BA3F5",
    short: "Tự động tạo kịch bản, storyboard, prompt video và quy trình sản xuất video AI.", for: "Marketing, BĐS, e-commerce, TikTok Shop", result: "Pipeline xuất video TVC/UGC bán hàng tự động." },
  { slug: "ai-cho-bat-dong-san", name: "AI cho Bất động sản Hòa Lạc / Hà Nội", cat: "AI cho BĐS", level: "Trung cấp", dur: "12 giờ", lessons: 50, price: 3490000, rating: 4.9, students: 380, color: "#C9A24B",
    short: "Cào tin, tóm tắt thị trường, tạo content và chăm khách BĐS tự động.", for: "Môi giới, sàn BĐS, chủ đầu tư nhỏ", result: "Tiết kiệm 3 giờ/ngày, tăng tin đăng & lead." },
];

const WF_TOOLS = ["n8n", "OpenAI", "Google Sheet", "Gmail", "Zalo", "Facebook", "Make", "Zapier"];
const WORKFLOWS = [
  { slug: "cao-tin-bds", name: "AI Cào tin BĐS Hà Nội / Hòa Lạc mỗi sáng", cat: "Real Estate", price: 990000, rating: 4.9, diff: "Trung bình", save: "3 giờ/ngày", tools: ["n8n", "OpenAI", "Google Sheet", "Zalo"],
    problem: "Môi giới mất hàng giờ mỗi sáng để tìm và tổng hợp tin mới." },
  { slug: "content-fb-tu-tin-tuc", name: "AI Tạo content Facebook từ tin tức", cat: "AI Content", price: 790000, rating: 4.8, diff: "Dễ", save: "2 giờ/ngày", tools: ["n8n", "OpenAI", "Facebook"],
    problem: "Marketing phải nghĩ và viết content mỗi ngày." },
  { slug: "kich-ban-tiktok", name: "AI Tạo kịch bản video TikTok tự động", cat: "AI Video", price: 590000, rating: 4.7, diff: "Dễ", save: "1.5 giờ/ngày", tools: ["OpenAI", "Google Sheet"],
    problem: "Bí ý tưởng và kịch bản video ngắn liên tục." },
  { slug: "loc-lead-crm", name: "AI Lọc lead từ Form & Google Sheet vào CRM", cat: "CRM & Lead", price: 690000, rating: 4.8, diff: "Trung bình", save: "1 giờ/ngày", tools: ["n8n", "Google Sheet", "Gmail"],
    problem: "Sale nhập lead thủ công, dễ sót, không phân loại." },
  { slug: "cham-khach-zalo", name: "AI Chăm sóc khách hàng qua Zalo / Facebook", cat: "Zalo/Facebook", price: 1190000, rating: 4.9, diff: "Trung bình", save: "4 giờ/ngày", tools: ["n8n", "OpenAI", "Zalo", "Facebook"],
    problem: "CSKH trả lời lặp lại cùng câu hỏi cả ngày." },
  { slug: "bao-cao-doanh-thu", name: "AI Báo cáo doanh thu hằng ngày", cat: "Reporting", price: 890000, rating: 4.8, diff: "Trung bình", save: "5 giờ/tuần", tools: ["n8n", "Google Sheet", "Gmail"],
    problem: "Chủ DN không có báo cáo tự động mỗi sáng." },
  { slug: "viet-bai-seo", name: "AI Viết bài SEO tự động", cat: "Marketing", price: 990000, rating: 4.7, diff: "Trung bình", save: "6 giờ/tuần", tools: ["n8n", "OpenAI", "Google Sheet"],
    problem: "Sản xuất bài SEO đều đặn quá tốn thời gian." },
  { slug: "telesales-assistant", name: "AI Telesales Assistant", cat: "Sales", price: 1290000, rating: 4.9, diff: "Nâng cao", save: "Tăng 30% lượt gọi", tools: ["n8n", "OpenAI", "Google Sheet", "Gmail"],
    problem: "Telesales thiếu kịch bản và follow-up đúng lúc." },
];

const AGENTS = [
  { slug: "real-estate", name: "AI Agent cho Bất động sản", icon: Building2, problem: "Tự tìm tin, tự viết bài, tự chăm khách tốn 3-4 giờ/ngày.",
    features: ["Cào tin BĐS Hà Nội / Hòa Lạc", "Tóm tắt & phân tích thị trường", "Tạo content Facebook/Zalo/TikTok", "Gợi ý kịch bản tư vấn khách", "Quản lý lead tự động"] },
  { slug: "sales", name: "AI Agent cho Sales", icon: TrendingUp, problem: "Lead về không được phân loại, follow-up không kịp.",
    features: ["Lọc lead nóng / lạnh", "Gợi ý kịch bản telesales", "Viết tin nhắn follow-up", "Chấm điểm khách hàng", "Nhắc lịch chăm sóc", "Báo cáo pipeline"] },
  { slug: "customer-service", name: "AI Agent cho CSKH", icon: Headphones, problem: "Trả lời lặp lại cùng một câu hỏi suốt ngày.",
    features: ["Trả lời FAQ tự động", "Phân loại yêu cầu khách", "Chuyển ca khó cho nhân viên", "Lưu lịch sử chăm sóc", "Tạo ticket"] },
  { slug: "marketing", name: "AI Agent cho Marketing", icon: Sparkles, problem: "Phải nghĩ content và chạy đa kênh mỗi ngày.",
    features: ["Lên lịch content", "Viết bài đa nền tảng", "Tạo hook & kịch bản video", "Phân tích trend", "Tạo email campaign"] },
  { slug: "news-crawler", name: "AI Agent cào tin tức & luật", icon: Newspaper, problem: "Cần theo dõi nguồn chính thống và xác minh thông tin.",
    features: ["Cào nguồn chính thống", "Lưu URL, ngày, nguồn", "Tóm tắt dễ hiểu", "Kiểm chứng nguồn", "Gợi ý content bán hàng"] },
  { slug: "owner", name: "AI Agent cho chủ doanh nghiệp", icon: BarChart3, problem: "Không nắm số liệu và đầu việc theo thời gian thực.",
    features: ["Báo cáo hằng ngày", "Nhắc việc & theo dõi lead", "Tổng hợp email", "Báo cáo tuần", "Gợi ý quyết định"] },
];

const SERVICES = [
  { name: "AI Automation Audit", icon: Search, desc: "Phân tích quy trình, tìm điểm lặp lại, đề xuất bản đồ tự động hóa.",
    deliver: ["Bản phân tích quy trình", "Danh sách workflow nên tự động hóa", "Sơ đồ automation roadmap", "Ước tính chi phí & thời gian"] },
  { name: "AI Workflow Setup", icon: Workflow, desc: "Setup workflow n8n/Make/Zapier tích hợp Sheet, CRM, Gmail, OpenAI, social.",
    deliver: ["Workflow hoàn chỉnh", "Tài liệu vận hành", "Video hướng dẫn", "Hỗ trợ kỹ thuật ban đầu"] },
  { name: "AI Agent Business System", icon: Bot, desc: "Thiết kế AI Agent theo nghiệp vụ: Sales, CSKH, Content, News, Reporting.",
    deliver: ["Sales Agent & CSKH Agent", "Content & News Crawler Agent", "Reporting & Lead Qualification", "Tài liệu vận hành"] },
  { name: "Monthly AI Retainer", icon: Settings, desc: "Vận hành, bảo trì, tối ưu prompt và nâng cấp hệ thống hằng tháng.",
    deliver: ["Vận hành & giám sát", "Cập nhật workflow", "Tối ưu prompt", "Báo cáo hiệu suất"] },
];

const PLANS = [
  { name: "Starter", price: 2000000, suffix: "trọn gói", for: "DN mới bắt đầu với AI", time: "3–5 ngày",
    features: ["Automation Audit quy trình", "1–2 workflow ưu tiên", "Hướng dẫn vận hành", "Hỗ trợ 7 ngày"], featured: false },
  { name: "Growth", price: 5000000, suffix: "trọn gói", for: "DN muốn tự động hóa sales/marketing", time: "1–2 tuần",
    features: ["Audit + roadmap", "Setup 3–5 workflow", "Tích hợp CRM/Sheet/Gmail", "Video hướng dẫn", "Hỗ trợ 30 ngày"], featured: true },
  { name: "Business", price: 15000000, suffix: "từ", for: "DN cần hệ thống AI Agent riêng", time: "3–4 tuần",
    features: ["Toàn bộ Growth", "AI Agent theo nghiệp vụ", "Sales/CSKH/Content/Reporting", "Onboarding đội ngũ", "Hỗ trợ 60 ngày"], featured: false },
  { name: "Enterprise", price: 8000000, suffix: "/tháng", for: "Vận hành & tối ưu liên tục", time: "Liên tục",
    features: ["Retainer hằng tháng", "Tối ưu & nâng cấp workflow", "Báo cáo hiệu suất", "SLA kỹ thuật ưu tiên"], featured: false },
];

const CASES = [
  { slug: "moi-gioi-bds", industry: "Bất động sản", title: "Môi giới BĐS tiết kiệm 3 giờ/ngày nhờ AI cào tin & tạo content",
    problem: "Mỗi sáng phải lùng tin, tóm tắt và viết bài thủ công.", result: "Tiết kiệm 3 giờ/ngày, tăng 2x lượng tin đăng.",
    tools: ["n8n", "OpenAI", "Zalo", "Google Sheet"], metric: "3h/ngày" },
  { slug: "doi-sales", industry: "Sales", title: "Đội sales tự động nhận lead, phân loại nóng/lạnh và follow-up",
    problem: "Lead về rời rạc, không ai phân loại và chăm kịp.", result: "Tăng 28% tỉ lệ liên hệ lead trong 24h.",
    tools: ["n8n", "Google Sheet", "Gmail"], metric: "+28%" },
  { slug: "chu-dn", industry: "Vận hành", title: "Chủ doanh nghiệp nhận báo cáo doanh thu, lead, lịch hẹn mỗi sáng",
    problem: "Không có số liệu tổng hợp đầu ngày.", result: "Báo cáo tự động lúc 7h sáng, ra quyết định nhanh hơn.",
    tools: ["n8n", "Google Sheet", "OpenAI"], metric: "7:00 AM" },
  { slug: "marketing-team", industry: "Marketing", title: "Marketing team tạo 30 bài content/tuần từ AI Content Factory",
    problem: "Sản xuất content đa kênh quá tải.", result: "30+ bài/tuần đa nền tảng từ một quy trình duy nhất.",
    tools: ["n8n", "OpenAI", "Facebook"], metric: "30+ bài/tuần" },
];

const TESTIMONIALS = [
  { name: "Anh Tuấn", role: "Giám đốc sàn BĐS, Hà Nội", text: "Hệ thống cào tin và tạo content của Xuân Bắc AI giúp team em chủ động tin đăng mỗi sáng. Thực chiến, không lý thuyết.", result: "Tiết kiệm 3h/ngày" },
  { name: "Chị Hương", role: "Trưởng phòng Marketing", text: "AI Content Factory thay đổi cách team em làm việc. 30 bài/tuần mà chất lượng vẫn ổn định.", result: "+200% sản lượng content" },
  { name: "Anh Khoa", role: "Founder startup SaaS", text: "Sales Agent lọc lead và follow-up tự động, em chỉ tập trung chốt. Đáng đồng tiền.", result: "+28% lead liên hệ" },
  { name: "Chị Linh", role: "Chủ chuỗi spa", text: "CSKH Agent trả lời khách trên Zalo cả ngày. Khách hài lòng, nhân viên đỡ áp lực.", result: "Phản hồi < 1 phút" },
];

const FAQS = [
  { q: "Không biết code có học được AI Automation không?", a: "Hoàn toàn được. Khóa học thiết kế theo hướng kéo-thả với n8n, tập trung tư duy quy trình thay vì code. Người mới vẫn theo kịp." },
  { q: "Workflow mua xong có dùng được ngay không?", a: "Có. Mỗi workflow đi kèm file n8n JSON, hướng dẫn PDF, video setup và checklist. Bạn import là chạy." },
  { q: "Có hỗ trợ cài đặt không?", a: "Có. Bạn có thể tự làm theo hướng dẫn, hoặc chọn gói “Thuê Xuân Bắc AI setup hộ” để được cài đặt trọn gói." },
  { q: "Có phù hợp với doanh nghiệp nhỏ không?", a: "Rất phù hợp. Phần lớn khách hàng là SME và đội nhóm nhỏ muốn hệ thống hóa mà không cần thuê thêm người." },
  { q: "Có dùng được cho bất động sản không?", a: "Có riêng AI Agent và workflow cho BĐS Hà Nội / Hòa Lạc: cào tin, tóm tắt, tạo content và chăm khách." },
  { q: "Có thể tích hợp Zalo / Facebook không?", a: "Có. Hệ thống hỗ trợ tích hợp Zalo, Facebook, Google Sheet, Gmail, CRM và nhiều công cụ phổ biến tại Việt Nam." },
  { q: "Có cần dùng n8n không?", a: "n8n là công cụ chính nhưng không bắt buộc. Một số workflow chạy được trên Make/Zapier tùy nhu cầu." },
  { q: "Có hỗ trợ sau khi mua không?", a: "Có. Khóa học và workflow đều có thời gian hỗ trợ. Gói dịch vụ có hỗ trợ kỹ thuật và retainer hằng tháng." },
  { q: "Có xuất hóa đơn không?", a: "Có. Xuất hóa đơn VAT đầy đủ cho doanh nghiệp khi mua khóa học, workflow hoặc dịch vụ." },
  { q: "Có hoàn tiền không?", a: "Có. Khóa học hoàn tiền trong 7 ngày nếu chưa học quá 20%. Workflow hỗ trợ theo chính sách sản phẩm số." },
];

const ROUTES_NAV = [
  ["home", "Trang chủ"], ["courses", "Khóa học AI"], ["workflows", "Kho Workflow"],
  ["services", "Dịch vụ"], ["agents", "AI Agent"], ["resources", "Tài nguyên"],
  ["cases", "Case Study"], ["contact", "Liên hệ"],
];

/* ====== BLOG (SEO keyword cluster) ====== */
const BLOG = [
  { slug: "ai-automation-cho-doanh-nghiep", cat: "AI Automation", date: "2026-05-28", read: "8 phút",
    title: "AI Automation cho doanh nghiệp Việt: bắt đầu từ đâu để hiệu quả ngay",
    desc: "Hướng dẫn lộ trình áp dụng AI Automation cho SME Việt Nam: chọn quy trình nên tự động hóa trước, công cụ phù hợp và cách đo hiệu quả.",
    keywords: ["ai automation", "tự động hóa doanh nghiệp", "n8n", "ai cho sme"],
    excerpt: "Phần lớn doanh nghiệp loay hoay không biết tự động hóa cái gì trước. Bài viết này đưa ra khung 3 bước thực chiến.",
    cluster: "AI Automation" },
  { slug: "n8n-la-gi-huong-dan-co-ban", cat: "n8n", date: "2026-05-20", read: "10 phút",
    title: "n8n là gì? Hướng dẫn cơ bản xây workflow tự động cho người mới",
    desc: "Tìm hiểu n8n, so sánh với Make/Zapier, và cách dựng workflow đầu tiên kết nối Google Sheet, Gmail và OpenAI.",
    keywords: ["n8n là gì", "n8n workflow", "n8n vs make", "tự động hóa n8n"],
    excerpt: "n8n là nền tảng tự động hóa mã nguồn mở, self-host được — phù hợp doanh nghiệp Việt muốn tránh vendor lock-in.",
    cluster: "n8n" },
  { slug: "ai-agent-cho-sales", cat: "AI cho Sales", date: "2026-05-12", read: "7 phút",
    title: "AI Agent cho Sales: lọc lead nóng/lạnh và follow-up tự động",
    desc: "Cách dùng AI Agent để chấm điểm lead, gợi ý kịch bản telesales và nhắc lịch chăm sóc — tăng tỉ lệ liên hệ trong 24h.",
    keywords: ["ai agent sales", "lọc lead tự động", "telesales ai", "lead scoring"],
    excerpt: "Lead về mà không ai phân loại kịp là tiền rơi mỗi ngày. AI Agent giải quyết đúng nút thắt này.",
    cluster: "AI cho Sales" },
  { slug: "ai-cho-bat-dong-san-ha-noi", cat: "AI cho BĐS", date: "2026-05-04", read: "9 phút",
    title: "AI cho bất động sản Hà Nội / Hòa Lạc: cào tin, tóm tắt, tạo content",
    desc: "Quy trình AI giúp môi giới BĐS tiết kiệm 3 giờ mỗi ngày: tự động cào tin, tóm tắt thị trường và tạo content đa kênh.",
    keywords: ["ai bất động sản", "cào tin bds", "content bds tự động", "ai cho môi giới"],
    excerpt: "Môi giới giỏi nhất vẫn thua hệ thống chạy 24/7. Đây là cách dựng nó.",
    cluster: "AI cho BĐS" },
  { slug: "ai-content-factory-da-nen-tang", cat: "AI cho Marketing", date: "2026-04-25", read: "8 phút",
    title: "AI Content Factory: tạo 30 bài content đa nền tảng mỗi tuần",
    desc: "Xây hệ thống content AI cho Facebook, TikTok, Zalo, LinkedIn từ một nguồn ý tưởng duy nhất.",
    keywords: ["ai content", "content factory", "content đa nền tảng", "ai marketing"],
    excerpt: "Sản xuất content đều đặn là bài toán về hệ thống, không phải cảm hứng.",
    cluster: "AI cho Marketing" },
  { slug: "workflow-bao-cao-doanh-thu", cat: "Workflow", date: "2026-04-15", read: "6 phút",
    title: "Workflow AI báo cáo doanh thu hằng ngày gửi về lúc 7h sáng",
    desc: "Dựng workflow tự động tổng hợp doanh thu, lead và lịch hẹn, gửi báo cáo qua email/Zalo mỗi sáng.",
    keywords: ["báo cáo tự động", "workflow báo cáo", "ai báo cáo doanh thu"],
    excerpt: "Chủ doanh nghiệp ra quyết định nhanh hơn khi số liệu tự đến tay mỗi sáng.",
    cluster: "Workflow" },
];
const BLOG_CATS = ["Tất cả", ...new Set(BLOG.map((b) => b.cat))];

/* ============================== PRIMITIVES ============================== */
const Btn = ({ children, variant = "primary", className = "", as = "button", ...p }) => {
  const Tag = as;
  return <Tag className={`xb-btn xb-btn-${variant} ${className}`} {...p}>{children}</Tag>;
};
const Pill = ({ children }) => <span className="xb-pill">{children}</span>;
const Section = ({ children, id, className = "" }) => <section id={id} className={`xb-section ${className}`}>{children}</section>;
const Container = ({ children, className = "" }) => <div className={`xb-container ${className}`}>{children}</div>;
const Eyebrow = ({ children }) => <div className="xb-eyebrow">{children}</div>;

function Breadcrumb({ items }) {
  const { go } = useStore();
  return (
    <nav className="xb-crumb" aria-label="Breadcrumb">
      {items.map((it, i) => (
        <span key={i} className="xb-crumb-item">
          {i > 0 && <ChevronRight size={13} className="xb-crumb-sep" />}
          {it.route ? <button onClick={() => go(it.route, it.param)}>{i === 0 ? <HomeIcon size={13} /> : null} {it.label}</button>
            : <span className="xb-crumb-cur">{it.label}</span>}
        </span>
      ))}
    </nav>
  );
}

function ShareButtons({ title, path = "", label = "Chia sẻ" }) {
  const url = SITE.domain + "/" + path;
  const [copied, setCopied] = useState(false);
  const open = (u, net) => { track("share", { network: net, path }); window.open(u, "_blank", "noopener,width=600,height=500"); };
  const copy = () => {
    track("share", { network: "copy", path });
    try { navigator.clipboard.writeText(url); } catch (e) {}
    setCopied(true); setTimeout(() => setCopied(false), 1600);
  };
  return (
    <div className="xb-share">
      <span className="xb-share-label"><Share2 size={15} /> {label}</span>
      <button className="xb-share-btn" onClick={() => open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "facebook")} aria-label="Chia sẻ Facebook"><Facebook size={16} /></button>
      <button className="xb-share-btn" onClick={() => open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, "x")} aria-label="Chia sẻ X"><Twitter size={16} /></button>
      <button className="xb-share-btn" onClick={() => open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "linkedin")} aria-label="Chia sẻ LinkedIn"><Linkedin size={16} /></button>
      <button className="xb-share-btn" onClick={() => open(`https://zalo.me/share/?u=${encodeURIComponent(url)}`, "zalo")} aria-label="Chia sẻ Zalo"><MessageSquare size={16} /></button>
      <button className="xb-share-btn" onClick={copy} aria-label="Sao chép link">{copied ? <Check size={16} /> : <Link2 size={16} />}</button>
    </div>
  );
}

function FloatingContact() {
  const { go } = useStore();
  return (
    <div className="xb-floating">
      <a href={`tel:${PHONE}`} className="xb-float-btn xb-float-phone" onClick={() => track("click_phone", { source: "floating" })} aria-label="Gọi ngay" title="Gọi ngay"><Phone size={20} /></a>
      <a href={`https://zalo.me/${PHONE}`} target="_blank" rel="noreferrer" className="xb-float-btn xb-float-zalo" onClick={() => track("click_zalo", { source: "floating" })} aria-label="Chat Zalo" title="Chat Zalo"><MessageSquare size={20} /></a>
      <a href="https://m.me/doanxuanbacai" target="_blank" rel="noreferrer" className="xb-float-btn xb-float-mess" onClick={() => track("click_messenger", { source: "floating" })} aria-label="Messenger" title="Messenger"><Send size={20} /></a>
      <button className="xb-float-btn xb-float-book" onClick={() => { track("click_booking", { source: "floating" }); go("booking"); }} aria-label="Đặt lịch tư vấn" title="Đặt lịch tư vấn"><Calendar size={20} /></button>
    </div>
  );
}

const Stars = ({ r }) => (
  <span className="xb-stars" aria-label={`${r} sao`}>
    <Star size={14} fill="currentColor" /> <b>{r}</b>
  </span>
);

/* ============================== NAVBAR ============================== */
function Navbar() {
  const { go, route, theme, setTheme, cart, openCart } = useStore();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", f); return () => window.removeEventListener("scroll", f);
  }, []);
  const nav = (r) => { go(r); setOpen(false); };
  return (
    <header className={`xb-nav ${scrolled ? "is-scrolled" : ""}`}>
      <Container className="xb-nav-inner">
        <button className="xb-logo" onClick={() => nav("home")} aria-label="Xuân Bắc AI">
          <BrandMark size={38} />
          <span className="xb-logo-text">Xuân Bắc <em>AI</em></span>
        </button>
        <nav className="xb-nav-links">
          {ROUTES_NAV.map(([r, label]) => (
            <button key={r} className={`xb-nav-link ${route === r ? "active" : ""}`} onClick={() => nav(r)}>{label}</button>
          ))}
        </nav>
        <div className="xb-nav-actions">
          <button className="xb-icon-btn" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Đổi giao diện">
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="xb-icon-btn xb-cart-btn" onClick={openCart} aria-label="Giỏ hàng">
            <ShoppingCart size={18} />{cart.length > 0 && <span className="xb-cart-count">{cart.length}</span>}
          </button>
          <a className="xb-btn xb-btn-ghost xb-hide-sm" href={`tel:${PHONE}`} onClick={() => track("click_phone", { source: "navbar" })}><Phone size={15} /> {PHONE}</a>
          <Btn variant="primary" className="xb-hide-sm" onClick={() => nav("booking")}>Đặt lịch tư vấn</Btn>
          <button className="xb-icon-btn xb-burger" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>
      {open && (
        <div className="xb-mobile-menu">
          {ROUTES_NAV.map(([r, label]) => (
            <button key={r} className="xb-mobile-link" onClick={() => nav(r)}>{label}<ChevronRight size={16} /></button>
          ))}
          <div className="xb-mobile-cta">
            <a className="xb-btn xb-btn-ghost" href={`tel:${PHONE}`}><Phone size={15} /> Gọi {PHONE}</a>
            <Btn onClick={() => nav("booking")}>Đặt lịch tư vấn</Btn>
          </div>
        </div>
      )}
    </header>
  );
}

/* ============================== BRAND ASSETS (SVG) ============================== */
function BrandMark({ size = 38, light = false }) {
  // Logo monogram "XB" — gold tile, dùng ở navbar/footer/auth/landing
  const tile = "#D4AF6A", ink = "#0A1628";
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" role="img" aria-label="Xuân Bắc AI" style={{ display: "block" }}>
      <rect width="40" height="40" rx="11" fill={tile} />
      <path d="M10 11 L15 11 L20 18 L25 11 L30 11 L22.5 20 L30 29 L25 29 L20 22 L15 29 L10 29 L17.5 20 Z" fill={ink} opacity="0.16" transform="translate(1,1)" />
      <text x="20" y="27" textAnchor="middle" fontFamily="'Fraunces',serif" fontWeight="700" fontSize="17" fill={ink}>XB</text>
    </svg>
  );
}

// Favicon dạng data-URI SVG (gắn vào tab trình duyệt)
const FAVICON = `data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><rect width="40" height="40" rx="9" fill="#D4AF6A"/><text x="20" y="28" text-anchor="middle" font-family="Georgia,serif" font-weight="700" font-size="20" fill="#0A1628">XB</text></svg>`
)}`;

/* Sinh thumbnail đồ họa độc nhất cho từng sản phẩm (deterministic theo seed) */
function hashStr(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
function makeRng(seed) { let x = seed || 123456789; return () => { x ^= x << 13; x ^= x >>> 17; x ^= x << 5; return (x >>> 0) / 4294967296; }; }
function ArtThumb({ seed, accent = "#5BA3F5", height = 132 }) {
  const W = 320, H = 132;
  const r = makeRng(hashStr(seed));
  const n = 5 + Math.floor(r() * 3);
  const nodes = Array.from({ length: n }, () => ({ x: 34 + r() * (W - 68), y: 26 + r() * (H - 52), s: 5 + r() * 8 }));
  const edges = [];
  for (let i = 1; i < n; i++) edges.push([i - 1, i]);
  for (let k = 0; k < 2; k++) { const a = Math.floor(r() * n), b = Math.floor(r() * n); if (a !== b) edges.push([a, b]); }
  const goldIdx = Math.floor(r() * n);
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" height={height} preserveAspectRatio="xMidYMid slice" role="img" aria-label={`Hình minh họa: ${seed}`} style={{ display: "block" }}>
      <rect width={W} height={H} fill="#0B1A30" />
      <circle cx={W - 40} cy={28} r={70} fill={accent} opacity="0.10" />
      <circle cx={36} cy={H - 20} r={56} fill="#C9A24B" opacity="0.08" />
      {edges.map(([a, b], i) => (
        <line key={"e" + i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} stroke={accent} strokeWidth="1.4" opacity="0.45" />
      ))}
      {nodes.map((nd, i) => (
        <g key={"n" + i}>
          <circle cx={nd.x} cy={nd.y} r={nd.s + 5} fill={i === goldIdx ? "#C9A24B" : accent} opacity="0.16" />
          <circle cx={nd.x} cy={nd.y} r={nd.s} fill={i === goldIdx ? "#E0BD6E" : accent} opacity="0.92" />
        </g>
      ))}
    </svg>
  );
}
const CAT_ACCENT = { "AI Automation": "#5BA3F5", "n8n": "#C9A24B", "AI Agent": "#7FBBFF", "AI Content": "#E0BD6E", "AI Video": "#5BA3F5", "AI cho BĐS": "#C9A24B", "AI cho Sales": "#7FBBFF", "AI cho Marketing": "#E0BD6E", "Real Estate": "#C9A24B", "CRM & Lead": "#7FBBFF", "Zalo/Facebook": "#5BA3F5", "Reporting": "#E0BD6E", "Marketing": "#5BA3F5", "Sales": "#7FBBFF", "Workflow": "#C9A24B" };
const accentFor = (cat, fallback = "#5BA3F5") => CAT_ACCENT[cat] || fallback;

/* ============================== HERO MOCKUP ============================== */
function HeroMockup() {
  const nodes = [
    { icon: Newspaper, label: "News Crawler", c: "#5BA3F5" },
    { icon: Bot, label: "AI Agent", c: "#C9A24B" },
    { icon: MessageSquare, label: "Zalo / FB", c: "#5BA3F5" },
    { icon: Database, label: "CRM Lead", c: "#C9A24B" },
  ];
  return (
    <div className="xb-mock">
      <div className="xb-mock-top">
        <span className="xb-dot" /><span className="xb-dot" /><span className="xb-dot" />
        <span className="xb-mock-title">Automation Dashboard</span>
      </div>
      <div className="xb-mock-body">
        <div className="xb-mock-flow">
          {nodes.map((n, i) => (
            <React.Fragment key={i}>
              <div className="xb-flow-node" style={{ borderColor: n.c }}>
                <n.icon size={18} style={{ color: n.c }} /><span>{n.label}</span>
              </div>
              {i < nodes.length - 1 && <div className="xb-flow-line" />}
            </React.Fragment>
          ))}
        </div>
        <div className="xb-mock-stats">
          <div className="xb-stat"><b>+128</b><span>Lead hôm nay</span></div>
          <div className="xb-stat"><b>34</b><span>Bài content</span></div>
          <div className="xb-stat"><b>3.2h</b><span>Tiết kiệm/ngày</span></div>
        </div>
        <div className="xb-mock-bars">
          {[60, 80, 45, 95, 70, 88, 52].map((h, i) => (
            <span key={i} style={{ height: h + "%" }} />
          ))}
        </div>
        <div className="xb-mock-row"><span className="xb-tag" style={{ color: "#C9A24B" }}>Sales pipeline</span><b>Đang chạy 24/7</b></div>
      </div>
    </div>
  );
}

/* ============================== CARDS ============================== */
function HeroVisual() {
  const C = { cx: 250, cy: 206 };
  const nodes = [
    { icon: Newspaper, label: "News Crawler", x: 16, y: 16, c: "#5BA3F5" },
    { icon: Sparkles, label: "Content AI", x: 50, y: 9, c: "#E0BD6E" },
    { icon: MessageSquare, label: "Zalo / Facebook", x: 84, y: 16, c: "#5BA3F5" },
    { icon: TrendingUp, label: "Sales Pipeline", x: 15, y: 84, c: "#7FBBFF" },
    { icon: Database, label: "CRM Lead", x: 50, y: 92, c: "#5BA3F5" },
    { icon: BarChart3, label: "Reporting", x: 85, y: 84, c: "#E0BD6E" },
  ];
  const pt = (n) => ({ x: (n.x / 100) * 500, y: (n.y / 100) * 400 });
  return (
    <div className="xb-herovis" role="img" aria-label="Sơ đồ hệ thống AI Automation: AI Agent trung tâm kết nối News Crawler, Content, Zalo/Facebook, Sales, CRM và Reporting.">
      <svg className="xb-hv-lines" viewBox="0 0 500 400" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        {nodes.map((n, i) => { const p = pt(n); return (
          <path key={"p" + i} id={"hvp" + i} d={`M${C.cx} ${C.cy} L${p.x} ${p.y}`} fill="none" stroke={n.c} strokeWidth="1.6" strokeDasharray="4 7" opacity="0.55" className="xb-hv-flow" />
        ); })}
        {nodes.map((n, i) => (
          <circle key={"d" + i} r="3.4" fill={n.c}>
            <animateMotion dur={`${2.2 + i * 0.35}s`} repeatCount="indefinite" rotate="auto">
              <mpath href={`#hvp${i}`} />
            </animateMotion>
          </circle>
        ))}
        <circle cx={C.cx} cy={C.cy} r="72" fill="none" stroke="#C9A24B" strokeWidth="1" strokeDasharray="2 8" opacity="0.5" className="xb-hv-orbit" />
        <circle cx={C.cx} cy={C.cy} r="92" fill="none" stroke="#5BA3F5" strokeWidth="0.8" strokeDasharray="1 12" opacity="0.35" className="xb-hv-orbit2" />
      </svg>

      <div className="xb-hv-hub">
        <div className="xb-hv-hub-ring" />
        <div className="xb-hv-hub-core"><Bot size={30} /><b>AI Agent</b><span>Xuân Bắc AI</span></div>
      </div>

      {nodes.map((n, i) => (
        <div key={i} className="xb-hv-node" style={{ left: n.x + "%", top: n.y + "%" }}>
          <span className="xb-hv-node-ic" style={{ color: n.c, borderColor: n.c + "66" }}><n.icon size={17} /></span>
          <span className="xb-hv-node-lb">{n.label}</span>
        </div>
      ))}

      <div className="xb-hv-chip xb-hv-c1"><span className="xb-hv-dot" /> Đang chạy 24/7</div>
      <div className="xb-hv-chip xb-hv-c2"><b>+128</b> Lead hôm nay</div>
      <div className="xb-hv-chip xb-hv-c3"><b>3.2h</b> tiết kiệm/ngày</div>
    </div>
  );
}

function CourseCard({ c }) {
  const { go, addToCart } = useStore();
  return (
    <article className="xb-card xb-course-card">
      <div className="xb-thumb">
        <ArtThumb seed={c.slug} accent={c.color} />
        <span className="xb-thumb-tag">{c.cat}</span>
      </div>
      <div className="xb-card-body">
        <div className="xb-meta-row"><Stars r={c.rating} /><span className="xb-muted">{c.students} học viên</span></div>
        <h3 onClick={() => go("course", c.slug)} className="xb-card-title-link">{c.name}</h3>
        <p className="xb-muted xb-clamp">{c.short}</p>
        <div className="xb-chip-row">
          <span className="xb-chip"><Clock size={13} /> {c.dur}</span>
          <span className="xb-chip"><Layers size={13} /> {c.lessons} bài</span>
          <span className="xb-chip">{c.level}</span>
        </div>
        <div className="xb-card-foot">
          <span className="xb-price">{fmt(c.price)}</span>
          <div className="xb-btn-pair">
            <Btn variant="ghost" onClick={() => go("course", c.slug)}>Chi tiết</Btn>
            <Btn onClick={() => addToCart({ id: "c-" + c.slug, name: c.name, price: c.price, type: "Khóa học" })}>Đăng ký</Btn>
          </div>
        </div>
      </div>
    </article>
  );
}

function WorkflowCard({ w }) {
  const { go, addToCart } = useStore();
  return (
    <article className="xb-card xb-wf-card">
      <div className="xb-thumb">
        <ArtThumb seed={w.slug} accent={accentFor(w.cat)} height={110} />
        <span className="xb-thumb-tag">{w.cat}</span>
      </div>
      <div className="xb-card-body">
        <h3 onClick={() => go("workflow", w.slug)} className="xb-card-title-link">{w.name}</h3>
        <p className="xb-muted xb-clamp">{w.problem}</p>
        <div className="xb-tool-row">{w.tools.map((t) => <span key={t} className="xb-tool">{t}</span>)}</div>
        <div className="xb-chip-row">
          <span className="xb-chip"><Zap size={13} /> {w.diff}</span>
          <span className="xb-chip"><Clock size={13} /> {w.save}</span>
          <Stars r={w.rating} />
        </div>
        <div className="xb-card-foot">
          <span className="xb-price">{fmt(w.price)}</span>
          <div className="xb-btn-pair">
            <Btn variant="ghost" onClick={() => go("workflow", w.slug)}>Demo</Btn>
            <Btn onClick={() => addToCart({ id: "w-" + w.slug, name: w.name, price: w.price, type: "Workflow" })}>Mua</Btn>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ============================== FAQ ============================== */
function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`xb-faq ${open ? "open" : ""}`}>
      <button className="xb-faq-q" onClick={() => setOpen(!open)}>
        <span>{q}</span><ChevronDown size={18} className="xb-faq-ic" />
      </button>
      {open && <p className="xb-faq-a">{a}</p>}
    </div>
  );
}

/* ============================== FORM ============================== */
function LeadForm({ fields, button = "Gửi thông tin", onDone, compact, event = "lead", eventParams = {} }) {
  const [data, setData] = useState({});
  const [err, setErr] = useState({});
  const [ok, setOk] = useState(false);
  const submit = () => {
    const e = {};
    fields.forEach((f) => { if (f.required && !data[f.k]) e[f.k] = "Bắt buộc"; });
    if (data.email && !/^\S+@\S+\.\S+$/.test(data.email)) e.email = "Email không hợp lệ";
    if (data.phone && !/^[0-9+\s.]{8,}$/.test(data.phone)) e.phone = "SĐT không hợp lệ";
    setErr(e);
    if (Object.keys(e).length === 0) {
      track(event, { ...eventParams, field: data.field || data.biz || "" });
      setOk(true); onDone && onDone({ ...data, ...getUTM() });
    }
  };
  if (ok) return (
    <div className="xb-form-ok">
      <CheckCircle2 size={40} style={{ color: "#3ED598" }} />
      <h4>Đã nhận thông tin!</h4>
      <p className="xb-muted">Xuân Bắc AI sẽ liên hệ trong thời gian sớm nhất. Anh có thể gọi ngay {PHONE} nếu cần gấp.</p>
    </div>
  );
  return (
    <div className={`xb-form ${compact ? "compact" : ""}`}>
      {fields.map((f) => (
        <div className="xb-field" key={f.k}>
          {f.type === "select" ? (
            <select value={data[f.k] || ""} onChange={(e) => setData({ ...data, [f.k]: e.target.value })} className={err[f.k] ? "err" : ""}>
              <option value="">{f.label}{f.required ? " *" : ""}</option>
              {f.options.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          ) : f.type === "textarea" ? (
            <textarea placeholder={f.label + (f.required ? " *" : "")} rows={3}
              value={data[f.k] || ""} onChange={(e) => setData({ ...data, [f.k]: e.target.value })} className={err[f.k] ? "err" : ""} />
          ) : (
            <input type={f.type || "text"} placeholder={f.label + (f.required ? " *" : "")}
              value={data[f.k] || ""} onChange={(e) => setData({ ...data, [f.k]: e.target.value })} className={err[f.k] ? "err" : ""} />
          )}
          {err[f.k] && <span className="xb-err-msg">{err[f.k]}</span>}
        </div>
      ))}
      <Btn onClick={submit} className="xb-full"><Send size={15} /> {button}</Btn>
    </div>
  );
}

/* ============================== PAGES ============================== */
function HomePage() {
  const { go } = useStore();
  const trust = ["AI Automation", "n8n", "AI Agent", "Workflow", "CRM", "Content", "Sales", "Bất động sản", "Video AI", "News Crawler"];
  const pains = [
    "Sale phải nhập lead thủ công", "Marketing phải nghĩ content mỗi ngày",
    "CSKH trả lời lặp lại cùng câu hỏi", "Chủ DN không có báo cáo tự động",
    "Môi giới BĐS tự tìm tin, tự viết bài, tự chăm khách", "Đội ngũ dùng nhiều công cụ rời rạc, không có hệ thống",
  ];
  const pillars = [
    { icon: GraduationCap, t: "Học AI thực chiến", d: "Học cách dùng AI, n8n, workflow để tăng hiệu suất cá nhân và doanh nghiệp." },
    { icon: Workflow, t: "Tải workflow dùng ngay", d: "Mua template workflow, prompt pack, file n8n, checklist và triển khai nhanh." },
    { icon: Bot, t: "Setup AI Automation trọn gói", d: "Xuân Bắc AI tư vấn, thiết kế, triển khai AI Agent và workflow riêng cho doanh nghiệp." },
  ];
  return (
    <>
      {/* HERO */}
      <Section className="xb-hero">
        <div className="xb-hero-glow" />
        <Container className="xb-hero-grid">
          <div className="xb-hero-text">
            <Pill><Sparkles size={13} /> AI Automation thực chiến cho doanh nghiệp Việt</Pill>
            <h1>Biến AI thành <span className="xb-gold">hệ thống tự động</span> kiếm tiền cho doanh nghiệp của bạn</h1>
            <p className="xb-lead">Học AI thực chiến, tải workflow dùng ngay, hoặc để Xuân Bắc AI setup trọn bộ AI Automation cho sales, marketing, CSKH và vận hành doanh nghiệp.</p>
            <div className="xb-hero-cta">
              <Btn onClick={() => go("booking")}>Đặt lịch tư vấn AI Automation <ArrowRight size={16} /></Btn>
              <Btn variant="ghost" onClick={() => go("workflows")}>Xem kho Workflow AI</Btn>
            </div>
            <p className="xb-hero-sub">Khóa học AI • n8n Workflow • AI Agent • Automation Agency • BĐS • Sales • Marketing</p>
          </div>
          <HeroVisual />
        </Container>
        <div className="xb-trust">
          <Container className="xb-trust-track">
            {trust.concat(trust).map((t, i) => <span key={i} className="xb-trust-item">{t}</span>)}
          </Container>
        </div>
      </Section>

      {/* PROBLEM */}
      <Section>
        <Container>
          <Eyebrow>Vấn đề</Eyebrow>
          <h2 className="xb-h2">Doanh nghiệp đang mất quá nhiều thời gian vào việc lặp lại mỗi ngày?</h2>
          <div className="xb-grid-3 xb-mt">
            {pains.map((p, i) => (
              <div key={i} className="xb-pain"><X size={18} className="xb-pain-x" /><span>{p}</span></div>
            ))}
          </div>
          <p className="xb-cta-line">Đây là lúc cần một hệ thống AI Automation thật sự.</p>
        </Container>
      </Section>

      {/* SOLUTION */}
      <Section className="xb-alt">
        <Container>
          <Eyebrow>Giải pháp</Eyebrow>
          <h2 className="xb-h2">Xuân Bắc AI giúp anh biến quy trình thủ công thành hệ thống tự động</h2>
          <div className="xb-grid-3 xb-mt">
            {pillars.map((p, i) => (
              <div key={i} className="xb-card xb-pillar">
                <div className="xb-pillar-ic"><p.icon size={22} /></div>
                <h3>{p.t}</h3><p className="xb-muted">{p.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* COURSES */}
      <Section>
        <Container>
          <div className="xb-head-row">
            <div><Eyebrow>Khóa học</Eyebrow><h2 className="xb-h2">Khóa học AI thực chiến — làm thật, không lý thuyết suông</h2></div>
            <Btn variant="ghost" onClick={() => go("courses")}>Xem tất cả <ArrowRight size={15} /></Btn>
          </div>
          <div className="xb-grid-3 xb-mt">{COURSES.slice(0, 6).map((c) => <CourseCard key={c.slug} c={c} />)}</div>
        </Container>
      </Section>

      {/* WORKFLOWS */}
      <Section className="xb-alt">
        <Container>
          <div className="xb-head-row">
            <div><Eyebrow>Marketplace</Eyebrow><h2 className="xb-h2">Kho Workflow AI dùng ngay cho doanh nghiệp Việt Nam</h2>
              <p className="xb-muted xb-narrow">Không cần bắt đầu từ con số 0. Chọn workflow phù hợp, tải về và triển khai — hoặc thuê Xuân Bắc AI setup giúp.</p></div>
            <Btn variant="ghost" onClick={() => go("workflows")}>Vào kho <ArrowRight size={15} /></Btn>
          </div>
          <div className="xb-grid-4 xb-mt">{WORKFLOWS.slice(0, 8).map((w) => <WorkflowCard key={w.slug} w={w} />)}</div>
        </Container>
      </Section>

      {/* AGENTS */}
      <Section>
        <Container>
          <Eyebrow>AI Agent</Eyebrow>
          <h2 className="xb-h2">AI Agent được thiết kế theo từng bài toán kinh doanh</h2>
          <div className="xb-grid-3 xb-mt">
            {AGENTS.map((a) => (
              <div key={a.slug} className="xb-card xb-agent-card" onClick={() => go("agent", a.slug)}>
                <div className="xb-agent-ic"><a.icon size={20} /></div>
                <h3>{a.name}</h3>
                <p className="xb-muted">{a.problem}</p>
                <span className="xb-link-row">Tư vấn giải pháp <ArrowRight size={14} /></span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* SERVICES */}
      <Section className="xb-alt">
        <Container>
          <div className="xb-head-row">
            <div><Eyebrow>Dịch vụ Agency</Eyebrow><h2 className="xb-h2">Muốn có hệ thống riêng? Xuân Bắc AI setup trọn gói</h2></div>
            <Btn variant="ghost" onClick={() => go("services")}>Xem dịch vụ <ArrowRight size={15} /></Btn>
          </div>
          <div className="xb-grid-4 xb-mt">
            {SERVICES.map((s) => (
              <div key={s.name} className="xb-card xb-service-card">
                <div className="xb-agent-ic"><s.icon size={20} /></div>
                <h3>{s.name}</h3><p className="xb-muted">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="xb-center"><Btn onClick={() => go("booking")}>Đặt lịch tư vấn hệ thống AI cho doanh nghiệp</Btn></div>
        </Container>
      </Section>

      {/* CASE STUDIES */}
      <Section>
        <Container>
          <Eyebrow>Case Study</Eyebrow>
          <h2 className="xb-h2">Kết quả thực tế trên thị trường Việt Nam</h2>
          <div className="xb-grid-2 xb-mt">
            {CASES.map((c) => (
              <div key={c.slug} className="xb-card xb-case-card" onClick={() => go("case", c.slug)}>
                <div className="xb-case-metric">{c.metric}</div>
                <div>
                  <span className="xb-thumb-tag">{c.industry}</span>
                  <h3>{c.title}</h3>
                  <p className="xb-muted">{c.result}</p>
                  <span className="xb-link-row">Xem chi tiết <ArrowRight size={14} /></span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FREE RESOURCE */}
      <Section className="xb-alt">
        <Container className="xb-grid-2">
          <div>
            <Eyebrow>Miễn phí</Eyebrow>
            <h2 className="xb-h2">Tải tài nguyên miễn phí để bắt đầu với AI Automation</h2>
            <ul className="xb-check-list">
              {["Checklist 10 việc nên tự động hóa", "20 ý tưởng workflow AI cho SME Việt", "Roadmap setup AI Agent cho người mới", "Sample n8n workflow", "Prompt pack tạo content bán hàng"].map((t) => (
                <li key={t}><Check size={16} /> {t}</li>
              ))}
            </ul>
          </div>
          <div className="xb-card xb-form-card">
            <h3>Nhận bộ tài liệu miễn phí</h3>
            <LeadForm compact button="Nhận tài liệu miễn phí" fields={[
              { k: "name", label: "Họ tên", required: true },
              { k: "phone", label: "Số điện thoại", required: true },
              { k: "email", label: "Email", type: "email", required: true },
              { k: "field", label: "Lĩnh vực kinh doanh", type: "select", options: ["Bất động sản", "Sales", "Marketing", "Dịch vụ", "Khác"] },
            ]} />
          </div>
        </Container>
      </Section>

      {/* TESTIMONIALS */}
      <Section>
        <Container>
          <Eyebrow>Đánh giá</Eyebrow>
          <h2 className="xb-h2">Học viên & khách hàng nói gì</h2>
          <div className="xb-grid-4 xb-mt">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="xb-card xb-testi">
                <Quote size={22} className="xb-quote" />
                <p>{t.text}</p>
                <div className="xb-testi-foot">
                  <div className="xb-avatar">{t.name.split(" ").slice(-1)[0][0]}</div>
                  <div><b>{t.name}</b><span className="xb-muted">{t.role}</span></div>
                </div>
                <span className="xb-result-tag">{t.result}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section className="xb-alt">
        <Container className="xb-narrow-wrap">
          <Eyebrow>Hỏi đáp</Eyebrow>
          <h2 className="xb-h2 xb-center-t">Câu hỏi thường gặp</h2>
          <div className="xb-mt">{FAQS.map((f, i) => <FAQItem key={i} {...f} />)}</div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}

function FinalCTA() {
  const { go } = useStore();
  return (
    <Section className="xb-final">
      <div className="xb-hero-glow" />
      <Container className="xb-center">
        <h2 className="xb-h1">Muốn biết doanh nghiệp của anh nên tự động hóa phần nào trước?</h2>
        <p className="xb-lead xb-center-t">Đặt lịch tư vấn với Xuân Bắc AI để được phân tích quy trình và gợi ý hệ thống AI phù hợp.</p>
        <div className="xb-hero-cta xb-center">
          <Btn onClick={() => go("booking")}>Đặt lịch tư vấn ngay <ArrowRight size={16} /></Btn>
          <a className="xb-btn xb-btn-ghost" href={`tel:${PHONE}`}><Phone size={15} /> Gọi {PHONE}</a>
        </div>
        <p className="xb-muted xb-mt">Xuân Bắc — {PHONE} · {ADDR}</p>
      </Container>
    </Section>
  );
}

function CoursesPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("Tất cả");
  const [sort, setSort] = useState("popular");
  const cats = ["Tất cả", ...new Set(COURSES.map((c) => c.cat))];
  let list = COURSES.filter((c) => (cat === "Tất cả" || c.cat === cat) && c.name.toLowerCase().includes(q.toLowerCase()));
  list = [...list].sort((a, b) => sort === "low" ? a.price - b.price : sort === "high" ? b.price - a.price : b.students - a.students);
  return (
    <>
      <PageHero eyebrow="Khóa học AI" title="Học AI Automation thực chiến cùng Xuân Bắc"
        sub="6 khóa học từ nền tảng đến nâng cao — học xong là làm được, có sản phẩm đầu ra và workflow mẫu." />
      <Section>
        <Container>
          <div className="xb-toolbar">
            <div className="xb-search"><Search size={16} /><input placeholder="Tìm khóa học..." value={q} onChange={(e) => setQ(e.target.value)} /></div>
            <div className="xb-filter-pills">{cats.map((c) => <button key={c} className={`xb-fpill ${cat === c ? "active" : ""}`} onClick={() => setCat(c)}>{c}</button>)}</div>
            <select className="xb-sort" value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="popular">Phổ biến</option><option value="low">Giá thấp</option><option value="high">Giá cao</option>
            </select>
          </div>
          <div className="xb-grid-3 xb-mt">{list.map((c) => <CourseCard key={c.slug} c={c} />)}</div>
          {list.length === 0 && <p className="xb-muted xb-center-t xb-mt">Không tìm thấy khóa học phù hợp.</p>}
        </Container>
      </Section>
    </>
  );
}

function CourseDetail({ slug }) {
  const { go, addToCart } = useStore();
  const c = COURSES.find((x) => x.slug === slug) || COURSES[0];
  useEffect(() => { track("view_course", { item: c.name, price: c.price, category: c.cat }); }, [c.slug]);
  const modules = ["Tư duy AI Automation", "Công cụ cần biết", "n8n cơ bản", "Prompt và AI Agent", "Workflow thực chiến", "Case study doanh nghiệp", "Triển khai và bán dịch vụ", "Bài tập cuối khóa"];
  return (
    <>
      <Section className="xb-detail-hero">
        <div className="xb-hero-glow" />
        <Container className="xb-grid-2">
          <div>
            <Breadcrumb items={[{ label: "Trang chủ", route: "home" }, { label: "Khóa học", route: "courses" }, { label: c.name }]} />
            <span className="xb-thumb-tag">{c.cat}</span>
            <h1 className="xb-h1">{c.name}</h1>
            <p className="xb-lead">{c.short}</p>
            <div className="xb-chip-row">
              <Stars r={c.rating} /><span className="xb-chip"><Users size={13} /> {c.students} học viên</span>
              <span className="xb-chip"><Clock size={13} /> {c.dur}</span><span className="xb-chip"><Layers size={13} /> {c.lessons} bài</span>
              <span className="xb-chip">{c.level}</span>
            </div>
            <ShareButtons title={c.name} path={"courses/" + c.slug} />
          </div>
          <div className="xb-card xb-buy-card">
            <div className="xb-video-ph"><Play size={28} /><span>Video giới thiệu khóa học</span></div>
            <div className="xb-price-lg">{fmt(c.price)}</div>
            <Btn className="xb-full" onClick={() => { addToCart({ id: "c-" + c.slug, name: c.name, price: c.price, type: "Khóa học" }); go("cart"); }}>Đăng ký học ngay</Btn>
            <Btn variant="ghost" className="xb-full" onClick={() => go("learn", c.slug)}><Play size={15} /> Học thử bài đầu</Btn>
            <Btn variant="ghost" className="xb-full" onClick={() => go("booking")}>Tư vấn lộ trình học</Btn>
            <ul className="xb-mini-list">
              <li><Check size={14} /> Học trọn đời, cập nhật miễn phí</li>
              <li><Check size={14} /> File n8n + prompt pack + checklist</li>
              <li><Check size={14} /> Chứng chỉ hoàn thành</li>
            </ul>
          </div>
        </Container>
      </Section>
      <Section>
        <Container className="xb-detail-grid">
          <div>
            <h2 className="xb-h3">Kết quả sau khóa học</h2>
            <ul className="xb-check-list">
              <li><Check size={16} /> {c.result}</li>
              <li><Check size={16} /> Có sản phẩm đầu ra & workflow mẫu áp dụng ngay</li>
              <li><Check size={16} /> Bộ tài liệu PDF + template Google Sheet</li>
            </ul>
            <h2 className="xb-h3 xb-mt">Ai nên học</h2>
            <div className="xb-tool-row">{["Chủ doanh nghiệp", "Sale", "Marketing", "Môi giới BĐS", "Freelancer", "Người làm AI Agency"].map((t) => <span key={t} className="xb-tool">{t}</span>)}</div>
            <h2 className="xb-h3 xb-mt">Giáo trình</h2>
            <div className="xb-modules">
              {modules.map((m, i) => <div key={i} className="xb-module"><span className="xb-mod-no">{i + 1}</span><b>Module {i + 1}:</b> {m}</div>)}
            </div>
            <h2 className="xb-h3 xb-mt">Tài liệu đi kèm</h2>
            <div className="xb-tool-row">{["Prompt pack", "File workflow n8n", "Checklist", "Template Google Sheet", "Tài liệu PDF"].map((t) => <span key={t} className="xb-tool">{t}</span>)}</div>
          </div>
          <aside>
            <div className="xb-card xb-instr">
              <div className="xb-avatar xb-avatar-lg">XB</div>
              <h3>Xuân Bắc</h3>
              <p className="xb-muted">17 năm kinh nghiệm công nghệ. Định hướng AI Automation cho doanh nghiệp Việt Nam, chuyên xây hệ thống AI thực chiến cho sales, marketing, BĐS và vận hành.</p>
            </div>
          </aside>
        </Container>
      </Section>
      <Section className="xb-alt"><Container className="xb-narrow-wrap">
        <h2 className="xb-h3 xb-center-t">FAQ khóa học</h2>
        <div className="xb-mt">{FAQS.slice(0, 5).map((f, i) => <FAQItem key={i} {...f} />)}</div>
        <div className="xb-center xb-mt"><Btn onClick={() => { addToCart({ id: "c-" + c.slug, name: c.name, price: c.price, type: "Khóa học" }); go("cart"); }}>Đăng ký học ngay</Btn></div>
      </Container></Section>
    </>
  );
}

function WorkflowsPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("Tất cả");
  const cats = ["Tất cả", ...new Set(WORKFLOWS.map((w) => w.cat))];
  const list = WORKFLOWS.filter((w) => (cat === "Tất cả" || w.cat === cat) && w.name.toLowerCase().includes(q.toLowerCase()));
  return (
    <>
      <PageHero eyebrow="Kho Workflow" title="Kho Workflow AI dùng ngay cho sales, marketing, BĐS & doanh nghiệp Việt"
        sub="Tải workflow, prompt pack, file n8n, checklist và hướng dẫn triển khai để tự động hóa công việc nhanh hơn." />
      <Section>
        <Container>
          <div className="xb-toolbar">
            <div className="xb-search"><Search size={16} /><input placeholder="Tìm workflow..." value={q} onChange={(e) => setQ(e.target.value)} /></div>
            <div className="xb-filter-pills">{cats.map((c) => <button key={c} className={`xb-fpill ${cat === c ? "active" : ""}`} onClick={() => setCat(c)}>{c}</button>)}</div>
          </div>
          <div className="xb-grid-4 xb-mt">{list.map((w) => <WorkflowCard key={w.slug} w={w} />)}</div>
        </Container>
      </Section>
    </>
  );
}

function WorkflowDetail({ slug }) {
  const { go, addToCart } = useStore();
  const w = WORKFLOWS.find((x) => x.slug === slug) || WORKFLOWS[0];
  useEffect(() => { track("view_workflow", { item: w.name, price: w.price, category: w.cat }); }, [w.slug]);
  const steps = ["Nhận dữ liệu", "AI xử lý", "Phân loại", "Gửi thông báo", "Lưu dữ liệu", "Báo cáo"];
  return (
    <>
      <Section className="xb-detail-hero">
        <div className="xb-hero-glow" />
        <Container className="xb-grid-2">
          <div>
            <Breadcrumb items={[{ label: "Trang chủ", route: "home" }, { label: "Kho Workflow", route: "workflows" }, { label: w.name }]} />
            <span className="xb-thumb-tag">{w.cat}</span>
            <h1 className="xb-h1">{w.name}</h1>
            <p className="xb-lead">{w.problem}</p>
            <div className="xb-tool-row">{w.tools.map((t) => <span key={t} className="xb-tool">{t}</span>)}</div>
            <div className="xb-chip-row"><span className="xb-chip"><Zap size={13} /> {w.diff}</span><span className="xb-chip"><Clock size={13} /> Tiết kiệm {w.save}</span><Stars r={w.rating} /></div>
            <ShareButtons title={w.name} path={"workflows/" + w.slug} />
          </div>
          <div className="xb-card xb-buy-card">
            <div className="xb-video-ph"><Play size={28} /><span>Demo video workflow</span></div>
            <div className="xb-price-lg">{fmt(w.price)}</div>
            <Btn className="xb-full" onClick={() => { addToCart({ id: "w-" + w.slug, name: w.name, price: w.price, type: "Workflow" }); go("cart"); }}>Mua workflow</Btn>
            <Btn variant="gold" className="xb-full" onClick={() => go("booking")}>Thuê Xuân Bắc AI setup hộ</Btn>
            <Btn variant="ghost" className="xb-full" onClick={() => go("booking")}>Đặt lịch tư vấn</Btn>
          </div>
        </Container>
      </Section>
      <Section><Container className="xb-detail-grid">
        <div>
          <h2 className="xb-h3">Cách hoạt động</h2>
          <div className="xb-steps">{steps.map((s, i) => (
            <div key={i} className="xb-step"><span className="xb-step-no">{i + 1}</span><b>{s}</b>{i < steps.length - 1 && <ChevronRight size={16} className="xb-step-arr" />}</div>
          ))}</div>
          <h2 className="xb-h3 xb-mt">File đi kèm</h2>
          <div className="xb-tool-row">{["n8n JSON", "Prompt pack", "Google Sheet template", "Hướng dẫn PDF", "Video hướng dẫn", "Checklist setup"].map((t) => <span key={t} className="xb-tool">{t}</span>)}</div>
          <h2 className="xb-h3 xb-mt">Changelog</h2>
          <div className="xb-modules">
            <div className="xb-module"><span className="xb-mod-no">v2</span> v2.0 — Thêm tích hợp Zalo OA & tối ưu prompt</div>
            <div className="xb-module"><span className="xb-mod-no">v1</span> v1.1 — Sửa lỗi định dạng & thêm node lọc trùng</div>
            <div className="xb-module"><span className="xb-mod-no">v1</span> v1.0 — Phiên bản đầu tiên</div>
          </div>
        </div>
        <aside>
          <div className="xb-card">
            <h3>FAQ workflow</h3>
            <div>{[
              { q: "Có cần biết code không?", a: "Không. Bạn chỉ cần import file n8n và làm theo hướng dẫn." },
              { q: "Có cần tài khoản n8n không?", a: "Có, dùng n8n Cloud hoặc tự host. Tài liệu hướng dẫn cả hai." },
              { q: "Có hỗ trợ cài đặt không?", a: "Có, hoặc bạn chọn gói setup hộ." },
              { q: "Có cập nhật phiên bản mới?", a: "Có, cập nhật miễn phí trong vòng đời sản phẩm." },
            ].map((f, i) => <FAQItem key={i} {...f} />)}</div>
          </div>
        </aside>
      </Container></Section>
    </>
  );
}

function ServicesPage() {
  const { go } = useStore();
  return (
    <>
      <PageHero eyebrow="Dịch vụ AI Automation Agency" title="Setup hệ thống AI Automation riêng cho doanh nghiệp của anh"
        sub="Xuân Bắc AI giúp tự động hóa sales, marketing, CSKH, báo cáo, quản lý lead và tạo nội dung bằng AI Agent." />
      <Section><Container>
        <div className="xb-grid-2">
          {SERVICES.map((s) => (
            <div key={s.name} className="xb-card xb-service-lg">
              <div className="xb-agent-ic"><s.icon size={22} /></div>
              <h3>{s.name}</h3><p className="xb-muted">{s.desc}</p>
              <ul className="xb-check-list">{s.deliver.map((d) => <li key={d}><Check size={15} /> {d}</li>)}</ul>
            </div>
          ))}
        </div>
      </Container></Section>
      <Section className="xb-alt"><Container>
        <Eyebrow>Bảng giá</Eyebrow>
        <h2 className="xb-h2 xb-center-t">Chọn gói phù hợp với giai đoạn của doanh nghiệp</h2>
        <div className="xb-grid-4 xb-mt">
          {PLANS.map((p) => (
            <div key={p.name} className={`xb-card xb-plan ${p.featured ? "featured" : ""}`}>
              {p.featured && <span className="xb-best">Khuyên dùng</span>}
              <h3>{p.name}</h3><p className="xb-muted xb-small">{p.for}</p>
              <div className="xb-plan-price"><span className="xb-small">{p.suffix === "/tháng" ? "" : "Giá " + p.suffix}</span><b>{fmt(p.price)}</b>{p.suffix === "/tháng" && <span>/tháng</span>}</div>
              <p className="xb-small xb-muted"><Clock size={13} /> Triển khai: {p.time}</p>
              <ul className="xb-check-list">{p.features.map((f) => <li key={f}><Check size={15} /> {f}</li>)}</ul>
              <Btn variant={p.featured ? "primary" : "ghost"} className="xb-full" onClick={() => go("booking")}>Tư vấn gói phù hợp</Btn>
            </div>
          ))}
        </div>
      </Container></Section>
      <FinalCTA />
    </>
  );
}

function AgentsPage({ slug }) {
  const { go } = useStore();
  if (slug) {
    const a = AGENTS.find((x) => x.slug === slug) || AGENTS[0];
    return (
      <>
        <Section className="xb-detail-hero"><div className="xb-hero-glow" /><Container>
          <Breadcrumb items={[{ label: "Trang chủ", route: "home" }, { label: "AI Agent", route: "agents" }, { label: a.name }]} />
          <div className="xb-agent-ic xb-ic-lg"><a.icon size={26} /></div>
          <h1 className="xb-h1">{a.name}</h1>
          <p className="xb-lead">{a.problem}</p>
          <Btn onClick={() => go("booking")}>Tư vấn giải pháp <ArrowRight size={15} /></Btn>
        </Container></Section>
        <Section><Container className="xb-grid-2">
          <div>
            <h2 className="xb-h3">Tính năng chính</h2>
            <ul className="xb-check-list">{a.features.map((f) => <li key={f}><Check size={16} /> {f}</li>)}</ul>
          </div>
          <div className="xb-card">
            <h3>Công cụ tích hợp</h3>
            <div className="xb-tool-row">{["n8n", "OpenAI", "Google Sheet", "Gmail", "Zalo", "Facebook", "CRM", "API"].map((t) => <span key={t} className="xb-tool">{t}</span>)}</div>
            <h3 className="xb-mt">Lợi ích</h3>
            <p className="xb-muted">Giảm thao tác thủ công, phản hồi nhanh hơn, dữ liệu tập trung và chủ động ra quyết định dựa trên báo cáo tự động.</p>
          </div>
        </Container></Section>
        <FinalCTA />
      </>
    );
  }
  return (
    <>
      <PageHero eyebrow="AI Agent theo ngành" title="AI Agent được thiết kế theo từng bài toán kinh doanh"
        sub="Chọn agent đúng với nghiệp vụ của anh — hoặc để Xuân Bắc AI thiết kế hệ thống agent riêng." />
      <Section><Container>
        <div className="xb-grid-3">
          {AGENTS.map((a) => (
            <div key={a.slug} className="xb-card xb-agent-card" onClick={() => go("agent", a.slug)}>
              <div className="xb-agent-ic"><a.icon size={20} /></div>
              <h3>{a.name}</h3><p className="xb-muted">{a.problem}</p>
              <ul className="xb-mini-list">{a.features.slice(0, 3).map((f) => <li key={f}><Check size={13} /> {f}</li>)}</ul>
              <span className="xb-link-row">Tư vấn giải pháp <ArrowRight size={14} /></span>
            </div>
          ))}
        </div>
      </Container></Section>
    </>
  );
}

function CasesPage({ slug }) {
  const { go } = useStore();
  if (slug) {
    const c = CASES.find((x) => x.slug === slug) || CASES[0];
    return (
      <>
        <Section className="xb-detail-hero"><div className="xb-hero-glow" /><Container>
          <Breadcrumb items={[{ label: "Trang chủ", route: "home" }, { label: "Case Study", route: "cases" }, { label: c.industry }]} />
          <span className="xb-thumb-tag">{c.industry}</span>
          <h1 className="xb-h1">{c.title}</h1>
          <div className="xb-case-metric xb-metric-lg">{c.metric}</div>
          <ShareButtons title={c.title} path={"case-studies/" + c.slug} />
        </Container></Section>
        <Section><Container className="xb-narrow-wrap">
          <h2 className="xb-h3">Vấn đề ban đầu</h2><p className="xb-muted">{c.problem}</p>
          <h2 className="xb-h3 xb-mt">Giải pháp AI Automation</h2>
          <p className="xb-muted">Xuân Bắc AI thiết kế workflow tự động hóa toàn bộ quy trình, tích hợp các công cụ sẵn có và bàn giao kèm tài liệu vận hành.</p>
          <h2 className="xb-h3 xb-mt">Công cụ sử dụng</h2>
          <div className="xb-tool-row">{c.tools.map((t) => <span key={t} className="xb-tool">{t}</span>)}</div>
          <h2 className="xb-h3 xb-mt">Kết quả</h2><p className="xb-muted">{c.result}</p>
          <div className="xb-center xb-mt"><Btn onClick={() => go("booking")}>Đặt lịch tư vấn cho doanh nghiệp của anh</Btn></div>
        </Container></Section>
      </>
    );
  }
  return (
    <>
      <PageHero eyebrow="Case Study" title="Kết quả thực tế từ AI Automation" sub="Những bài toán quen thuộc của doanh nghiệp Việt và cách hệ thống AI giải quyết." />
      <Section><Container>
        <div className="xb-grid-2">{CASES.map((c) => (
          <div key={c.slug} className="xb-card xb-case-card" onClick={() => go("case", c.slug)}>
            <div className="xb-case-metric">{c.metric}</div>
            <div><span className="xb-thumb-tag">{c.industry}</span><h3>{c.title}</h3><p className="xb-muted">{c.result}</p>
            <span className="xb-link-row">Xem chi tiết <ArrowRight size={14} /></span></div>
          </div>
        ))}</div>
      </Container></Section>
    </>
  );
}

function ResourcesPage() {
  const { go } = useStore();
  const items = [
    { icon: FileDown, t: "Ebook AI Automation cho SME", d: "Tổng quan và lộ trình áp dụng AI vào doanh nghiệp." },
    { icon: CheckCircle2, t: "Checklist 10 việc nên tự động hóa", d: "Bắt đầu từ đâu cho hiệu quả nhanh nhất." },
    { icon: Sparkles, t: "Prompt pack tạo content bán hàng", d: "Bộ prompt sẵn dùng cho marketing & sale." },
    { icon: Workflow, t: "Sample n8n workflow", d: "File mẫu import là chạy." },
    { icon: Video, t: "Video hướng dẫn công cụ", d: "Series hướng dẫn n8n, OpenAI, Zalo OA." },
    { icon: Database, t: "Template Google Sheet", d: "Mẫu quản lý lead & báo cáo." },
  ];
  return (
    <>
      <PageHero eyebrow="Tài nguyên" title="Bộ tài liệu miễn phí: 20 Workflow AI giúp tiết kiệm 10+ giờ/tuần"
        sub="Tải tài nguyên, học theo blog và bắt đầu tự động hóa ngay hôm nay." />
      <Section><Container className="xb-grid-2">
        <div className="xb-grid-2 xb-nested">{items.map((i) => (
          <div key={i.t} className="xb-card xb-res-card">
            <div className="xb-agent-ic"><i.icon size={18} /></div><h3>{i.t}</h3><p className="xb-muted xb-small">{i.d}</p>
          </div>
        ))}</div>
        <div className="xb-card xb-form-card xb-sticky">
          <h3>Tải tài liệu miễn phí</h3>
          <LeadForm compact button="Nhận tài liệu miễn phí" onDone={() => {}}
            fields={[
              { k: "name", label: "Họ tên", required: true },
              { k: "email", label: "Email", type: "email", required: true },
              { k: "phone", label: "Số điện thoại", required: true },
              { k: "field", label: "Lĩnh vực", type: "select", options: ["Bất động sản", "Sales", "Marketing", "Dịch vụ", "Khác"] },
              { k: "need", label: "Nhu cầu tự động hóa", type: "textarea" },
            ]} />
          <p className="xb-small xb-muted xb-center-t xb-mt">Sau khi nhận tài liệu, anh có thể <button className="xb-inline-link" onClick={() => go("booking")}>đặt lịch tư vấn</button> hoặc đọc thêm trên <button className="xb-inline-link" onClick={() => go("blog")}>Blog AI Automation</button>.</p>
        </div>
      </Container></Section>
    </>
  );
}

function BookingPage() {
  const days = ["T2", "T3", "T4", "T5", "T6", "T7"].map((d, i) => `${d} ${10 + i}/06`);
  const times = ["09:00", "10:30", "14:00", "15:30", "17:00"];
  const [day, setDay] = useState(null);
  const [time, setTime] = useState(null);
  const [mode, setMode] = useState("Online");
  return (
    <>
      <PageHero eyebrow="Đặt lịch tư vấn" title="Đặt lịch tư vấn AI Automation với Xuân Bắc"
        sub="Phân tích quy trình và gợi ý hệ thống AI phù hợp với doanh nghiệp của anh." />
      <Section><Container className="xb-grid-2">
        <div className="xb-card">
          <h3>Chọn lịch</h3>
          <p className="xb-small xb-muted">Hình thức</p>
          <div className="xb-filter-pills">{["Online", "Trực tiếp"].map((m) => <button key={m} className={`xb-fpill ${mode === m ? "active" : ""}`} onClick={() => setMode(m)}>{m}</button>)}</div>
          <p className="xb-small xb-muted xb-mt">Chọn ngày</p>
          <div className="xb-slot-grid">{days.map((d) => <button key={d} className={`xb-slot ${day === d ? "active" : ""}`} onClick={() => setDay(d)}>{d}</button>)}</div>
          <p className="xb-small xb-muted xb-mt">Chọn giờ</p>
          <div className="xb-slot-grid">{times.map((t) => <button key={t} className={`xb-slot ${time === t ? "active" : ""}`} onClick={() => setTime(t)}>{t}</button>)}</div>
          {day && time && <p className="xb-booking-pick"><CheckCircle2 size={15} /> {mode} · {day} · {time}</p>}
        </div>
        <div className="xb-card xb-form-card">
          <h3>Thông tin liên hệ</h3>
          <LeadForm compact button="Gửi xác nhận đặt lịch" event="booking" eventParams={{ mode }}
            fields={[
              { k: "name", label: "Họ tên", required: true },
              { k: "phone", label: "Số điện thoại", required: true },
              { k: "email", label: "Email", type: "email" },
              { k: "biz", label: "Doanh nghiệp / lĩnh vực" },
              { k: "note", label: "Anh muốn tự động hóa phần nào?", type: "textarea" },
            ]} />
        </div>
      </Container></Section>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Liên hệ" title="Kết nối với Xuân Bắc AI" sub="Để lại thông tin hoặc gọi trực tiếp, chúng tôi phản hồi nhanh trong giờ làm việc." />
      <Section><Container className="xb-grid-2">
        <div className="xb-card xb-form-card">
          <h3>Form liên hệ</h3>
          <LeadForm fields={[
            { k: "name", label: "Họ tên", required: true },
            { k: "phone", label: "Số điện thoại", required: true },
            { k: "email", label: "Email", type: "email" },
            { k: "biz", label: "Doanh nghiệp / lĩnh vực" },
            { k: "need", label: "Anh đang muốn tự động hóa phần nào?", type: "textarea" },
            { k: "budget", label: "Ngân sách dự kiến", type: "select", options: ["< 5 triệu", "5–15 triệu", "15–50 triệu", "> 50 triệu"] },
          ]} />
        </div>
        <div className="xb-card xb-contact-info">
          <h3>Xuân Bắc AI</h3>
          <p className="xb-muted">Founder: Xuân Bắc</p>
          <a className="xb-contact-line" href={`tel:${PHONE}`}><Phone size={18} /> {PHONE}</a>
          <p className="xb-contact-line"><MapPin size={18} /> {ADDR}</p>
          <div className="xb-contact-btns">
            <a className="xb-btn xb-btn-primary" href={`tel:${PHONE}`} onClick={() => track("click_phone", { source: "contact" })}><Phone size={15} /> Gọi ngay</a>
            <a className="xb-btn xb-btn-gold" href={`https://zalo.me/${PHONE}`} target="_blank" rel="noreferrer" onClick={() => track("click_zalo", { source: "contact" })}>Chat Zalo</a>
            <a className="xb-btn xb-btn-ghost" href="https://m.me/doanxuanbacai" target="_blank" rel="noreferrer" onClick={() => track("click_messenger", { source: "contact" })}>Messenger</a>
          </div>
          <div className="xb-map-ph"><MapPin size={22} /> Bản đồ — {ADDR}</div>
        </div>
      </Container></Section>
    </>
  );
}

function CartPage() {
  const { cart, removeFromCart, go } = useStore();
  const [coupon, setCoupon] = useState("");
  const [applied, setApplied] = useState(0);
  const subtotal = cart.reduce((s, i) => s + i.price, 0);
  const total = subtotal - applied;
  return (
    <>
      <PageHero eyebrow="Giỏ hàng" title="Đơn hàng của anh" sub="Kiểm tra lại sản phẩm trước khi thanh toán." />
      <Section><Container className="xb-grid-2">
        <div>
          {cart.length === 0 ? (
            <div className="xb-card xb-empty"><ShoppingCart size={32} /><p>Giỏ hàng trống.</p>
              <Btn onClick={() => go("courses")}>Xem khóa học</Btn></div>
          ) : cart.map((i) => (
            <div key={i.id} className="xb-card xb-cart-row">
              <div><span className="xb-thumb-tag">{i.type}</span><h4>{i.name}</h4></div>
              <div className="xb-cart-right"><b>{fmt(i.price)}</b><button className="xb-remove" onClick={() => removeFromCart(i.id)}><X size={16} /></button></div>
            </div>
          ))}
        </div>
        <div className="xb-card xb-summary">
          <h3>Tóm tắt đơn hàng</h3>
          <div className="xb-sum-row"><span>Tạm tính</span><b>{fmt(subtotal)}</b></div>
          <div className="xb-coupon"><input placeholder="Mã giảm giá" value={coupon} onChange={(e) => setCoupon(e.target.value)} />
            <Btn variant="ghost" onClick={() => setApplied(coupon.toUpperCase() === "XUANBAC10" ? Math.round(subtotal * 0.1) : 0)}>Áp dụng</Btn></div>
          {applied > 0 && <div className="xb-sum-row xb-discount"><span>Giảm giá</span><b>- {fmt(applied)}</b></div>}
          <div className="xb-sum-row xb-total"><span>Tổng cộng</span><b>{fmt(total)}</b></div>
          <Btn className="xb-full" onClick={() => go("checkout")} {...(cart.length === 0 ? { disabled: true } : {})}>Thanh toán</Btn>
          <p className="xb-small xb-muted xb-center-t">Thử mã <b>XUANBAC10</b> để giảm 10%.</p>
        </div>
      </Container></Section>
    </>
  );
}

function CheckoutPage() {
  const { cart, go, clearCart, setLastOrder } = useStore();
  const [method, setMethod] = useState("bank");
  const total = cart.reduce((s, i) => s + i.price, 0);
  const confirm = () => { setLastOrder({ total, items: cart.length }); clearCart(); go("success"); };
  return (
    <>
      <PageHero eyebrow="Thanh toán" title="Hoàn tất đơn hàng" sub="Điền thông tin và chọn phương thức thanh toán." />
      <Section><Container className="xb-grid-2">
        <div className="xb-card xb-form-card">
          <h3>Thông tin thanh toán</h3>
          <div className="xb-form compact">
            <div className="xb-field"><input placeholder="Họ tên *" /></div>
            <div className="xb-field"><input placeholder="Email *" /></div>
            <div className="xb-field"><input placeholder="Số điện thoại *" /></div>
          </div>
          <h3 className="xb-mt">Phương thức thanh toán</h3>
          {[["bank", "Chuyển khoản ngân hàng"], ["momo", "Ví MoMo"], ["card", "Thẻ ATM / Visa"]].map(([k, l]) => (
            <button key={k} className={`xb-pay ${method === k ? "active" : ""}`} onClick={() => setMethod(k)}>
              <CreditCard size={16} /> {l}{method === k && <Check size={16} className="xb-pay-check" />}
            </button>
          ))}
        </div>
        <div className="xb-card xb-summary">
          <h3>Đơn hàng</h3>
          {cart.map((i) => <div key={i.id} className="xb-sum-row"><span>{i.name}</span><b>{fmt(i.price)}</b></div>)}
          <div className="xb-sum-row xb-total"><span>Tổng cộng</span><b>{fmt(total)}</b></div>
          <Btn className="xb-full" onClick={confirm} {...(cart.length === 0 ? { disabled: true } : {})}>Xác nhận thanh toán</Btn>
        </div>
      </Container></Section>
    </>
  );
}

function SuccessPage() {
  const { go, lastOrder } = useStore();
  useEffect(() => { track("purchase", { value: lastOrder?.total || 0, currency: "VND", items: lastOrder?.items || 0 }); }, []);
  return (
    <Section className="xb-detail-hero"><div className="xb-hero-glow" /><Container className="xb-center">
      <CheckCircle2 size={64} style={{ color: "#3ED598" }} />
      <h1 className="xb-h1 xb-mt">Thanh toán thành công!</h1>
      <p className="xb-lead xb-center-t">Đơn hàng đã được xác nhận. Khóa học và workflow đã mở trong dashboard của anh. Email xác nhận đã được gửi.</p>
      <div className="xb-hero-cta xb-center">
        <Btn onClick={() => go("dashboard")}>Vào dashboard</Btn>
        <Btn variant="ghost" onClick={() => go("booking")}>Đặt lịch onboarding</Btn>
      </div>
    </Container></Section>
  );
}

function DashboardPage() {
  const { go } = useStore();
  const [tab, setTab] = useState("courses");
  const tabs = [["courses", "Khóa học của tôi", GraduationCap], ["workflows", "Workflow đã mua", Workflow], ["orders", "Lịch sử đơn hàng", CreditCard], ["certs", "Chứng chỉ", Award], ["support", "Hỗ trợ", Headphones]];
  return (
    <Section className="xb-dash"><Container>
      <div className="xb-dash-head">
        <div className="xb-avatar xb-avatar-lg">XB</div>
        <div><h1 className="xb-h3">Xin chào, học viên Xuân Bắc AI</h1><p className="xb-muted">Tiến độ học tập của bạn</p></div>
      </div>
      <div className="xb-dash-layout">
        <aside className="xb-dash-nav">{tabs.map(([k, l, Ic]) => (
          <button key={k} className={`xb-dash-tab ${tab === k ? "active" : ""}`} onClick={() => setTab(k)}><Ic size={16} /> {l}</button>
        ))}</aside>
        <div className="xb-dash-content">
          {tab === "courses" && <div className="xb-grid-2">{COURSES.slice(0, 2).map((c) => (
            <div key={c.slug} className="xb-card xb-dash-course">
              <h4>{c.name}</h4>
              <div className="xb-progress"><span style={{ width: "45%" }} /></div>
              <div className="xb-prog-row"><span className="xb-muted xb-small">45% hoàn thành</span><Btn onClick={() => go("learn", c.slug)}>Học tiếp</Btn></div>
            </div>
          ))}</div>}
          {tab === "workflows" && <div className="xb-grid-2">{WORKFLOWS.slice(0, 2).map((w) => (
            <div key={w.slug} className="xb-card xb-dash-course"><h4>{w.name}</h4><Btn variant="ghost" className="xb-full"><FileDown size={15} /> Tải file n8n</Btn></div>
          ))}</div>}
          {tab === "orders" && <div className="xb-card">
            <div className="xb-sum-row"><span>#XB1042 · AI Automation Foundation</span><b className="xb-paid">Đã thanh toán</b></div>
            <div className="xb-sum-row"><span>#XB1041 · AI Cào tin BĐS</span><b className="xb-paid">Đã thanh toán</b></div>
          </div>}
          {tab === "certs" && <div className="xb-card xb-cert"><Award size={40} style={{ color: "#C9A24B" }} /><h3>Chứng chỉ AI Automation Foundation</h3><p className="xb-muted">Hoàn thành ngày 02/06/2026</p><Btn variant="gold"><FileDown size={15} /> Tải chứng chỉ</Btn></div>}
          {tab === "support" && <div className="xb-card xb-form-card"><h3>Khu hỗ trợ</h3><LeadForm compact button="Gửi yêu cầu hỗ trợ" fields={[{ k: "subj", label: "Tiêu đề", required: true }, { k: "msg", label: "Mô tả vấn đề", type: "textarea", required: true }]} /></div>}
        </div>
      </div>
    </Container></Section>
  );
}

/* ============================== LESSON PLAYER (/learn) ============================== */
const CURRICULUM = [
  { t: "Tư duy AI Automation", dur: "12:30" },
  { t: "Công cụ cần biết", dur: "18:05" },
  { t: "n8n cơ bản", dur: "22:40" },
  { t: "Prompt và AI Agent", dur: "19:15" },
  { t: "Workflow thực chiến", dur: "26:50" },
  { t: "Case study doanh nghiệp", dur: "15:20" },
  { t: "Triển khai và bán dịch vụ", dur: "20:10" },
  { t: "Bài tập cuối khóa", dur: "10:00" },
];
const QUIZ = {
  0: { q: "AI Automation tập trung vào điều gì là chính?", opts: ["Viết code phức tạp", "Hệ thống hóa quy trình lặp lại", "Mua càng nhiều công cụ càng tốt"], a: 1 },
  3: { q: "Một AI Agent tốt nên bắt đầu từ?", opts: ["Prompt rõ ràng theo nghiệp vụ", "Mô hình lớn nhất", "Giao diện đẹp"], a: 0 },
};

function LessonPlayer({ slug }) {
  const { go, completed, toggleComplete } = useStore();
  const course = COURSES.find((x) => x.slug === slug) || COURSES[0];
  const [idx, setIdx] = useState(0);
  const [comments, setComments] = useState([{ who: "Học viên Minh", t: "Bài giảng dễ hiểu, áp dụng được ngay ạ!" }]);
  const [cmt, setCmt] = useState("");
  const [pick, setPick] = useState(null);
  const done = completed[slug] || [];
  const progress = Math.round((done.length / CURRICULUM.length) * 100);
  const lesson = CURRICULUM[idx];
  const quiz = QUIZ[idx];
  useEffect(() => { setPick(null); }, [idx]);
  const markDone = () => { if (!done.includes(idx)) toggleComplete(slug, idx); };

  return (
    <Section className="xb-learn-sec"><Container>
      <Breadcrumb items={[{ label: "Dashboard", route: "dashboard" }, { label: course.name, route: "course", param: slug }, { label: "Học" }]} />
      <div className="xb-learn">
        <aside className="xb-learn-side">
          <h3 className="xb-h3">{course.name}</h3>
          <div className="xb-progress"><span style={{ width: progress + "%" }} /></div>
          <p className="xb-small xb-muted">{done.length}/{CURRICULUM.length} bài · {progress}% hoàn thành</p>
          <div className="xb-lesson-list">
            {CURRICULUM.map((l, i) => (
              <button key={i} className={`xb-lesson-item ${i === idx ? "active" : ""}`} onClick={() => setIdx(i)}>
                <span className={`xb-lesson-check ${done.includes(i) ? "done" : ""}`}>{done.includes(i) ? <Check size={12} /> : i + 1}</span>
                <span className="xb-lesson-t">{l.t}</span>
                <span className="xb-lesson-dur">{l.dur}</span>
              </button>
            ))}
          </div>
        </aside>

        <div className="xb-learn-main">
          <div className="xb-lesson-video"><Play size={40} /><span>Bài {idx + 1}: {lesson.t}</span></div>
          <div className="xb-lesson-head">
            <h2 className="xb-h3">Bài {idx + 1}: {lesson.t}</h2>
            <Btn variant={done.includes(idx) ? "gold" : "primary"} onClick={markDone}>{done.includes(idx) ? <><Check size={15} /> Đã học</> : "Đánh dấu đã học"}</Btn>
          </div>
          <p className="xb-muted">Trong bài này, anh sẽ nắm phần "{lesson.t}" theo hướng thực chiến: hiểu vấn đề, xem ví dụ áp dụng trong doanh nghiệp Việt, và thực hành ngay với công cụ. Mọi bước đều có file mẫu đi kèm để làm theo.</p>

          <h3 className="xb-h3 xb-mt">Tài liệu bài học</h3>
          <div className="xb-tool-row">
            {["Slide PDF", "File n8n mẫu", "Checklist", "Prompt pack"].map((t) => (
              <button key={t} className="xb-dl-chip" onClick={() => track("download_material", { lesson: lesson.t, file: t })}><FileDown size={13} /> {t}</button>
            ))}
          </div>

          {quiz && (
            <div className="xb-card xb-quiz xb-mt">
              <b>Quiz kiểm tra</b>
              <p>{quiz.q}</p>
              <div className="xb-quiz-opts">
                {quiz.opts.map((o, i) => (
                  <button key={i} className={`xb-quiz-opt ${pick === i ? (i === quiz.a ? "right" : "wrong") : ""} ${pick !== null && i === quiz.a ? "right" : ""}`} onClick={() => setPick(i)}>
                    {o}{pick !== null && i === quiz.a && <Check size={15} />}
                  </button>
                ))}
              </div>
              {pick !== null && <p className={`xb-small ${pick === quiz.a ? "xb-ok-t" : "xb-err-t"}`}>{pick === quiz.a ? "Chính xác! 🎯" : "Chưa đúng — đáp án đã được tô xanh."}</p>}
            </div>
          )}

          <div className="xb-lesson-nav">
            <Btn variant="ghost" onClick={() => setIdx(Math.max(0, idx - 1))} {...(idx === 0 ? { disabled: true } : {})}><ArrowLeft size={15} /> Bài trước</Btn>
            {idx < CURRICULUM.length - 1
              ? <Btn onClick={() => { markDone(); setIdx(idx + 1); }}>Bài tiếp theo <ArrowRight size={15} /></Btn>
              : <Btn variant="gold" onClick={() => { markDone(); go("dashboard"); }}><Award size={15} /> Hoàn thành khóa học</Btn>}
          </div>

          <h3 className="xb-h3 xb-mt">Hỏi đáp ({comments.length})</h3>
          <div className="xb-form compact">
            <textarea rows={2} placeholder="Đặt câu hỏi cho giảng viên..." value={cmt} onChange={(e) => setCmt(e.target.value)} />
            <Btn onClick={() => { if (cmt.trim()) { setComments([{ who: "Bạn", t: cmt }, ...comments]); setCmt(""); } }}>Gửi câu hỏi</Btn>
          </div>
          <div className="xb-comments">
            {comments.map((c, i) => (
              <div key={i} className="xb-comment"><div className="xb-avatar">{c.who[0]}</div><div><b>{c.who}</b><p className="xb-muted">{c.t}</p></div></div>
            ))}
          </div>
        </div>
      </div>
    </Container></Section>
  );
}

function AuthPage({ mode }) {
  const { go } = useStore();
  const isReg = mode === "register";
  const isForgot = mode === "forgot";
  return (
    <Section className="xb-auth"><div className="xb-hero-glow" /><Container className="xb-auth-wrap">
      <div className="xb-card xb-auth-card">
        <button className="xb-logo xb-center" onClick={() => go("home")}><BrandMark size={46} /></button>
        <h2 className="xb-h3 xb-center-t">{isForgot ? "Quên mật khẩu" : isReg ? "Đăng ký tài khoản" : "Đăng nhập"}</h2>
        <div className="xb-form compact xb-mt">
          {isReg && <div className="xb-field"><input placeholder="Họ tên" /></div>}
          <div className="xb-field"><input placeholder="Email" type="email" /></div>
          {!isForgot && <div className="xb-field"><input placeholder="Mật khẩu" type="password" /></div>}
          <Btn className="xb-full" onClick={() => go(isForgot ? "login" : "dashboard")}>{isForgot ? "Gửi liên kết đặt lại" : isReg ? "Tạo tài khoản" : "Đăng nhập"}</Btn>
        </div>
        <div className="xb-auth-links">
          {!isForgot && <button className="xb-inline-link" onClick={() => go("forgot")}>Quên mật khẩu?</button>}
          <button className="xb-inline-link" onClick={() => go(isReg ? "login" : "register")}>{isReg ? "Đã có tài khoản? Đăng nhập" : "Chưa có tài khoản? Đăng ký"}</button>
        </div>
      </div>
    </Container></Section>
  );
}

function MembershipPage() {
  const { go } = useStore();
  const tiers = [
    { name: "Free", price: 0, f: ["Truy cập workflow miễn phí", "Blog & tài liệu cơ bản", "Cộng đồng"] },
    { name: "Pro", price: 299000, featured: true, f: ["Toàn bộ kho workflow Pro", "Workflow mới mỗi tháng", "Prompt pack mới", "Webinar nội bộ"] },
    { name: "Business", price: 899000, f: ["Toàn bộ Pro", "Hỗ trợ ưu tiên", "Tư vấn nhóm hằng tháng", "Sớm dùng tính năng mới"] },
  ];
  return (
    <>
      <PageHero eyebrow="Membership" title="Thành viên Xuân Bắc AI" sub="Truy cập kho workflow Pro và nhận tài nguyên mới mỗi tháng." />
      <Section><Container><div className="xb-grid-3">
        {tiers.map((t) => (
          <div key={t.name} className={`xb-card xb-plan ${t.featured ? "featured" : ""}`}>
            {t.featured && <span className="xb-best">Phổ biến</span>}
            <h3>{t.name}</h3>
            <div className="xb-plan-price"><b>{t.price === 0 ? "Miễn phí" : fmt(t.price)}</b>{t.price > 0 && <span>/tháng</span>}</div>
            <ul className="xb-check-list">{t.f.map((x) => <li key={x}><Check size={15} /> {x}</li>)}</ul>
            <Btn variant={t.featured ? "primary" : "ghost"} className="xb-full" onClick={() => go("register")}>Bắt đầu</Btn>
          </div>
        ))}
      </div></Container></Section>
    </>
  );
}

function AffiliatePage() {
  const { go } = useStore();
  return (
    <>
      <PageHero eyebrow="Affiliate" title="Cộng tác viên Xuân Bắc AI" sub="Giới thiệu khóa học & workflow, nhận hoa hồng hấp dẫn." />
      <Section><Container className="xb-grid-2">
        <div>
          <h2 className="xb-h3">Quyền lợi</h2>
          <ul className="xb-check-list">
            <li><Check size={16} /> Hoa hồng đến 30% mỗi đơn</li>
            <li><Check size={16} /> Link giới thiệu riêng</li>
            <li><Check size={16} /> Dashboard theo dõi click & đơn hàng</li>
            <li><Check size={16} /> Thanh toán hằng tháng</li>
          </ul>
          <div className="xb-grid-3 xb-mt">
            <div className="xb-stat xb-card"><b>1,284</b><span>Lượt click</span></div>
            <div className="xb-stat xb-card"><b>37</b><span>Đơn hàng</span></div>
            <div className="xb-stat xb-card"><b>9.2tr</b><span>Hoa hồng</span></div>
          </div>
        </div>
        <div className="xb-card xb-form-card">
          <h3>Đăng ký cộng tác viên</h3>
          <LeadForm compact button="Đăng ký ngay" fields={[
            { k: "name", label: "Họ tên", required: true },
            { k: "email", label: "Email", type: "email", required: true },
            { k: "phone", label: "Số điện thoại", required: true },
            { k: "channel", label: "Kênh giới thiệu (FB/Zalo/Web...)" },
          ]} />
        </div>
      </Container></Section>
    </>
  );
}

function PolicyPage({ kind }) {
  const map = {
    privacy: ["Chính sách bảo mật", "Chúng tôi tôn trọng và bảo vệ thông tin cá nhân của bạn."],
    terms: ["Điều khoản sử dụng", "Quy định sử dụng dịch vụ, khóa học và sản phẩm số của Xuân Bắc AI."],
    refund: ["Chính sách hoàn tiền", "Điều kiện và quy trình hoàn tiền cho khóa học và sản phẩm số."],
    support: ["Chính sách hỗ trợ", "Cam kết hỗ trợ kỹ thuật và vận hành sau khi mua."],
  };
  const [title, sub] = map[kind] || map.privacy;
  return (
    <>
      <PageHero eyebrow="Pháp lý" title={title} sub={sub} />
      <Section><Container className="xb-narrow-wrap xb-policy">
        {[1, 2, 3, 4].map((i) => (
          <div key={i}><h3 className="xb-h3">{i}. Điều khoản {i}</h3>
            <p className="xb-muted">Nội dung mô tả rõ ràng, chuyên nghiệp về {title.toLowerCase()}. Mọi giao dịch tuân thủ quy định pháp luật Việt Nam. Khách hàng có quyền liên hệ {PHONE} để được giải đáp mọi thắc mắc liên quan.</p></div>
        ))}
      </Container></Section>
    </>
  );
}

function PageHero({ eyebrow, title, sub }) {
  return (
    <Section className="xb-page-hero"><div className="xb-hero-glow" /><Container>
      <Eyebrow>{eyebrow}</Eyebrow><h1 className="xb-h1">{title}</h1><p className="xb-lead">{sub}</p>
    </Container></Section>
  );
}

function BlogCard({ b }) {
  const { go } = useStore();
  return (
    <article className="xb-card xb-blog-card" onClick={() => go("post", b.slug)}>
      <div className="xb-thumb">
        <ArtThumb seed={b.slug} accent={accentFor(b.cat)} height={140} />
        <span className="xb-thumb-tag">{b.cat}</span>
      </div>
      <div className="xb-card-body">
        <div className="xb-meta-row xb-small xb-muted"><span>{b.date}</span><span>{b.read}</span></div>
        <h3 className="xb-card-title-link">{b.title}</h3>
        <p className="xb-muted xb-clamp">{b.excerpt}</p>
        <span className="xb-link-row">Đọc bài <ArrowRight size={14} /></span>
      </div>
    </article>
  );
}

function BlogPage() {
  const [cat, setCat] = useState("Tất cả");
  const list = BLOG.filter((b) => cat === "Tất cả" || b.cat === cat);
  return (
    <>
      <PageHero eyebrow="Blog / AI News" title="Kiến thức AI Automation thực chiến cho doanh nghiệp Việt"
        sub="Hướng dẫn n8n, AI Agent, workflow và ứng dụng AI cho sales, marketing và bất động sản." />
      <Section><Container>
        <div className="xb-filter-pills">{BLOG_CATS.map((c) => <button key={c} className={`xb-fpill ${cat === c ? "active" : ""}`} onClick={() => setCat(c)}>{c}</button>)}</div>
        <div className="xb-grid-3 xb-mt">{list.map((b) => <BlogCard key={b.slug} b={b} />)}</div>
      </Container></Section>
    </>
  );
}

function BlogPost({ slug }) {
  const { go } = useStore();
  const b = BLOG.find((x) => x.slug === slug) || BLOG[0];
  const related = BLOG.filter((x) => x.slug !== b.slug).slice(0, 2);
  const toc = ["Vì sao cần quan tâm", "Khung triển khai 3 bước", "Công cụ nên dùng", "Sai lầm thường gặp", "Kết luận & bước tiếp theo"];
  const faqs = [
    { q: `${b.cat} có cần biết code không?`, a: "Không bắt buộc. Phần lớn triển khai theo hướng kéo-thả với n8n, tập trung vào tư duy quy trình." },
    { q: "Mất bao lâu để thấy kết quả?", a: "Một workflow ưu tiên thường cho kết quả trong 1–2 tuần đầu nếu chọn đúng điểm nghẽn." },
  ];
  return (
    <>
      <Section className="xb-detail-hero"><div className="xb-hero-glow" /><Container className="xb-narrow-wrap">
        <Breadcrumb items={[{ label: "Trang chủ", route: "home" }, { label: "Blog", route: "blog" }, { label: b.cat }]} />
        <span className="xb-thumb-tag">{b.cat}</span>
        <h1 className="xb-h1">{b.title}</h1>
        <div className="xb-meta-row xb-small xb-muted"><span>Bởi Xuân Bắc · {b.date}</span><span>{b.read} đọc</span></div>
        <ShareButtons title={b.title} path={"blog/" + b.slug} />
      </Container></Section>
      <Section><Container className="xb-detail-grid">
        <article className="xb-article">
          <div className="xb-toc">
            <b>Mục lục</b>
            <ol>{toc.map((t, i) => <li key={i}>{t}</li>)}</ol>
          </div>
          <p className="xb-lead">{b.desc}</p>
          <h2 className="xb-h3">1. Vì sao cần quan tâm</h2>
          <p className="xb-muted">{b.excerpt} Đa số doanh nghiệp Việt đang vận hành thủ công ở những khâu hoàn toàn có thể tự động hóa, dẫn tới lãng phí thời gian và bỏ lỡ cơ hội. Bài viết này tập trung vào hành động cụ thể thay vì lý thuyết.</p>
          <div className="xb-card xb-inline-cta">
            <div><b>Muốn áp dụng nhanh?</b><p className="xb-muted xb-small">Tải bộ workflow mẫu hoặc đặt lịch tư vấn 1-1.</p></div>
            <Btn onClick={() => go("booking")}>Đặt lịch tư vấn</Btn>
          </div>
          <h2 className="xb-h3">2. Khung triển khai 3 bước</h2>
          <p className="xb-muted">Bước 1: liệt kê việc lặp lại mỗi ngày. Bước 2: chọn 1–2 việc tốn thời gian nhất nhưng dễ tự động hóa. Bước 3: dựng workflow, đo kết quả và mở rộng dần.</p>
          <h2 className="xb-h3">3. Công cụ nên dùng</h2>
          <div className="xb-tool-row">{["n8n", "OpenAI", "Google Sheet", "Zalo", "Gmail"].map((t) => <span key={t} className="xb-tool">{t}</span>)}</div>
          <h2 className="xb-h3">4. Sai lầm thường gặp</h2>
          <p className="xb-muted">Tự động hóa quá nhiều cùng lúc, không đo lường, và chọn công cụ phức tạp hơn nhu cầu. Hãy bắt đầu nhỏ và đúng điểm nghẽn.</p>
          <h2 className="xb-h3">5. Kết luận</h2>
          <p className="xb-muted">AI Automation không phải phép màu, mà là cách hệ thống hóa doanh nghiệp để tiết kiệm thời gian và tăng hiệu suất bền vững.</p>
          <h2 className="xb-h3 xb-mt">Câu hỏi thường gặp</h2>
          <div>{faqs.map((f, i) => <FAQItem key={i} {...f} />)}</div>
          <div className="xb-card xb-inline-cta xb-mt">
            <div><b>Nhận tư vấn lộ trình AI cho doanh nghiệp của anh</b></div>
            <Btn onClick={() => go("booking")}>Đặt lịch tư vấn ngay</Btn>
          </div>
          <ShareButtons title={b.title} path={"blog/" + b.slug} label="Chia sẻ bài viết" />
        </article>
        <aside>
          <div className="xb-card xb-form-card">
            <h3>Nhận tài liệu miễn phí</h3>
            <LeadForm compact button="Nhận tài liệu" event="lead" eventParams={{ source: "blog" }} fields={[
              { k: "name", label: "Họ tên", required: true }, { k: "email", label: "Email", type: "email", required: true }, { k: "phone", label: "Số điện thoại", required: true },
            ]} />
          </div>
          <div className="xb-card xb-mt">
            <h3>Bài liên quan</h3>
            {related.map((r) => <button key={r.slug} className="xb-related" onClick={() => go("post", r.slug)}>{r.title}<ChevronRight size={15} /></button>)}
          </div>
        </aside>
      </Container></Section>
    </>
  );
}

function LandingPage() {
  const { go } = useStore();
  const benefits = [
    { icon: Clock, t: "Tiết kiệm 10+ giờ/tuần", d: "Tự động hóa việc lặp lại trong sales, marketing, CSKH." },
    { icon: TrendingUp, t: "Tăng tỉ lệ chốt", d: "Lead được lọc, chấm điểm và follow-up đúng lúc." },
    { icon: ShieldCheck, t: "Triển khai thực chiến", d: "Có sản phẩm chạy thật, bàn giao kèm tài liệu vận hành." },
  ];
  return (
    <div className="xb-lp">
      <header className="xb-lp-nav"><Container className="xb-nav-inner">
        <div className="xb-logo"><BrandMark size={36} /><span className="xb-logo-text">Xuân Bắc <em>AI</em></span></div>
        <a className="xb-btn xb-btn-primary" href={`tel:${PHONE}`} onClick={() => track("click_phone", { source: "landing" })}><Phone size={15} /> {PHONE}</a>
      </Container></header>
      <Section className="xb-hero"><div className="xb-hero-glow" /><Container className="xb-grid-2">
        <div>
          <Pill><Sparkles size={13} /> Ưu đãi tư vấn miễn phí</Pill>
          <h1 className="xb-h1">Tự động hóa doanh nghiệp bằng AI — bắt đầu chỉ trong 1 buổi tư vấn</h1>
          <p className="xb-lead">Để Xuân Bắc AI phân tích quy trình, chỉ ra phần nên tự động hóa trước và ước tính kết quả cho doanh nghiệp của anh.</p>
          <ul className="xb-check-list">{benefits.map((b) => <li key={b.t}><Check size={16} /> <b>{b.t}</b> — {b.d}</li>)}</ul>
        </div>
        <div className="xb-card xb-form-card">
          <h3>Đăng ký tư vấn miễn phí</h3>
          <p className="xb-small xb-muted">Nhận phân tích quy trình + gợi ý hệ thống AI phù hợp.</p>
          <LeadForm compact button="Nhận tư vấn miễn phí" event="lead" eventParams={{ source: "landing_ads" }} fields={[
            { k: "name", label: "Họ tên", required: true },
            { k: "phone", label: "Số điện thoại", required: true },
            { k: "field", label: "Lĩnh vực", type: "select", options: ["Bất động sản", "Sales", "Marketing", "Dịch vụ", "Khác"] },
          ]} />
          <div className="xb-lp-trust"><ShieldCheck size={14} /> Không spam · Bảo mật thông tin</div>
        </div>
      </Container></Section>
      <Section className="xb-alt"><Container>
        <h2 className="xb-h2 xb-center-t">Kết quả thực tế</h2>
        <div className="xb-grid-4 xb-mt">{CASES.map((c) => (
          <div key={c.slug} className="xb-card xb-center"><div className="xb-case-metric">{c.metric}</div><p className="xb-small xb-muted">{c.result}</p></div>
        ))}</div>
        <div className="xb-center xb-mt"><Btn onClick={() => { track("click_booking", { source: "landing" }); go("booking"); }}>Đặt lịch tư vấn ngay <ArrowRight size={15} /></Btn></div>
      </Container></Section>
      <footer className="xb-foot-bottom"><Container>© {new Date().getFullYear()} Xuân Bắc AI · {PHONE} · {ADDR}</Container></footer>
    </div>
  );
}

/* ============================== FOOTER ============================== */
function Footer() {
  const { go } = useStore();
  const col = (title, links) => (
    <div className="xb-foot-col"><h4>{title}</h4>{links.map(([l, r]) => <button key={l} onClick={() => go(r)}>{l}</button>)}</div>
  );
  return (
    <footer className="xb-footer">
      <Container className="xb-foot-grid">
        <div className="xb-foot-brand">
          <button className="xb-logo" onClick={() => go("home")}><BrandMark size={38} /><span className="xb-logo-text">Xuân Bắc <em>AI</em></span></button>
          <p className="xb-muted">Nơi doanh nghiệp Việt Nam học AI, mua workflow AI và thuê setup hệ thống AI Automation thực chiến.</p>
          <a className="xb-contact-line" href={`tel:${PHONE}`}><Phone size={15} /> {PHONE}</a>
          <p className="xb-contact-line"><MapPin size={15} /> {ADDR}</p>
          <div className="xb-foot-social">
            {SOCIALS.map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="xb-soc-ic" aria-label={s.name} title={s.name}
                 onClick={() => { if (s.name === "Zalo") track("click_zalo", { source: "footer" }); if (s.name === "Messenger") track("click_messenger", { source: "footer" }); }}>
                <s.icon size={17} />
              </a>
            ))}
          </div>
        </div>
        {col("Liên kết", [["Trang chủ", "home"], ["Khóa học", "courses"], ["Kho Workflow", "workflows"], ["Blog", "blog"], ["Case Study", "cases"]])}
        {col("Dịch vụ", [["AI Automation", "services"], ["AI Agent", "agents"], ["Membership", "membership"], ["Affiliate", "affiliate"]])}
        {col("Hỗ trợ", [["Liên hệ", "contact"], ["Đặt lịch tư vấn", "booking"], ["Tài nguyên", "resources"], ["Hỗ trợ", "support"]])}
        {col("Pháp lý", [["Bảo mật", "privacy"], ["Điều khoản", "terms"], ["Hoàn tiền", "refund"]])}
      </Container>
      <div className="xb-foot-bottom"><Container>© {new Date().getFullYear()} Xuân Bắc AI. Mọi quyền được bảo lưu.</Container></div>
    </footer>
  );
}

/* ============================== STICKY MOBILE + CHAT + CART DRAWER ============================== */
function StickyMobile() {
  const { go } = useStore();
  return (
    <div className="xb-sticky-mobile">
      <a href={`tel:${PHONE}`} className="xb-sm-btn" onClick={() => track("click_phone", { source: "sticky" })}><Phone size={17} /><span>Gọi</span></a>
      <a href={`https://zalo.me/${PHONE}`} target="_blank" rel="noreferrer" className="xb-sm-btn xb-sm-zalo" onClick={() => track("click_zalo", { source: "sticky" })}><MessageSquare size={17} /><span>Zalo</span></a>
      <a href="https://m.me/doanxuanbacai" target="_blank" rel="noreferrer" className="xb-sm-btn xb-sm-mess" onClick={() => track("click_messenger", { source: "sticky" })}><Send size={17} /><span>Messenger</span></a>
      <button onClick={() => { track("click_booking", { source: "sticky" }); go("booking"); }} className="xb-sm-btn xb-sm-book"><Calendar size={17} /><span>Đặt lịch</span></button>
    </div>
  );
}

function ChatWidget() {
  const { go } = useStore();
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState([{ b: 1, t: "Chào anh! Em là trợ lý AI của Xuân Bắc AI. Anh đang quan tâm khóa học, kho workflow hay setup hệ thống AI cho doanh nghiệp ạ?" }]);
  const [val, setVal] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, open, loading]);
  const quick = [["Tư vấn khóa học", "courses"], ["Xem workflow", "workflows"], ["Setup cho DN", "booking"]];

  const PRODUCT_CTX =
    "KHÓA HỌC: " + COURSES.map((c) => `${c.name} (${fmt(c.price)})`).join("; ") +
    ". WORKFLOW: " + WORKFLOWS.map((w) => `${w.name} (${fmt(w.price)})`).join("; ") +
    ". DỊCH VỤ: " + SERVICES.map((s) => s.name).join(", ") +
    ". Gói: Starter từ 2.000.000đ, Growth từ 5.000.000đ, Business từ 15.000.000đ, Retainer từ 8.000.000đ/tháng.";
  const SYSTEM =
    "Bạn là trợ lý tư vấn AI của 'Xuân Bắc AI' — thương hiệu dạy AI Automation, bán workflow n8n và setup hệ thống AI cho doanh nghiệp Việt Nam. " +
    "Giọng điệu: tự nhiên, chuyên gia, thực chiến, KHÔNG sale lố, tư vấn theo nhu cầu thật. Tiếng Việt chuẩn, xưng 'em', gọi khách 'anh/chị'. " +
    "Trả lời NGẮN GỌN (2-4 câu), hỏi lại nhu cầu khi cần. Khi phù hợp, gợi ý đúng khóa học/workflow/gói dịch vụ theo thông tin dưới đây và khuyến khích để lại SĐT hoặc đặt lịch tư vấn; nếu khách muốn nói chuyện trực tiếp, mời gọi 0918281726 hoặc nhắn Zalo. Không bịa thông tin ngoài danh sách. " +
    "THÔNG TIN SẢN PHẨM: " + PRODUCT_CTX;

  const send = async (txt) => {
    if (!txt.trim() || loading) return;
    const next = [...msgs, { b: 0, t: txt }];
    setMsgs(next); setVal(""); setLoading(true);
    track("chat_message", { len: txt.length });
    const apiMsgs = [];
    let started = false;
    for (const m of next) { const role = m.b ? "assistant" : "user"; if (!started && role !== "user") continue; started = true; apiMsgs.push({ role, content: m.t }); }
    try {
      const res = await fetch("/api/chat", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ system: SYSTEM, messages: apiMsgs }),
      });
      const data = await res.json();
      const text = (data.content || []).filter((i) => i.type === "text").map((i) => i.text).join("\n").trim();
      setMsgs((m) => [...m, { b: 1, t: text || "Anh có thể nói rõ hơn nhu cầu để em tư vấn chính xác nhé ạ?" }]);
    } catch (e) {
      setMsgs((m) => [...m, { b: 1, t: "Em đang bận đường truyền một chút. Anh gọi nhanh 0918 281 726 hoặc nhắn Zalo để được tư vấn ngay nhé ạ!" }]);
    } finally { setLoading(false); }
  };

  return (
    <>
      {open && (
        <div className="xb-chat">
          <div className="xb-chat-head"><div><b>Trợ lý Xuân Bắc AI</b><span className="xb-online">● Tư vấn bằng AI</span></div><button onClick={() => setOpen(false)} aria-label="Đóng"><X size={18} /></button></div>
          <div className="xb-chat-body">
            {msgs.map((m, i) => <div key={i} className={`xb-msg ${m.b ? "bot" : "user"}`}>{m.t}</div>)}
            {loading && <div className="xb-msg bot xb-typing"><span /><span /><span /></div>}
            <div className="xb-quick">{quick.map(([l, r]) => <button key={l} onClick={() => go(r)}>{l}</button>)}</div>
            <div ref={endRef} />
          </div>
          <div className="xb-chat-input">
            <input value={val} placeholder="Nhập câu hỏi..." onChange={(e) => setVal(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send(val)} disabled={loading} />
            <button onClick={() => send(val)} disabled={loading} aria-label="Gửi"><Send size={16} /></button>
          </div>
        </div>
      )}
      <button className="xb-chat-fab" onClick={() => setOpen(!open)} aria-label="Chat tư vấn">{open ? <X size={22} /> : <MessageSquare size={22} />}</button>
    </>
  );
}

function CartDrawer() {
  const { cartOpen, closeCart, cart, removeFromCart, go } = useStore();
  if (!cartOpen) return null;
  const total = cart.reduce((s, i) => s + i.price, 0);
  return (
    <div className="xb-drawer-overlay" onClick={closeCart}>
      <div className="xb-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="xb-drawer-head"><b>Giỏ hàng ({cart.length})</b><button onClick={closeCart}><X size={18} /></button></div>
        <div className="xb-drawer-body">
          {cart.length === 0 ? <p className="xb-muted xb-center-t">Chưa có sản phẩm.</p> : cart.map((i) => (
            <div key={i.id} className="xb-drawer-item"><div><span className="xb-thumb-tag">{i.type}</span><p>{i.name}</p><b>{fmt(i.price)}</b></div>
              <button className="xb-remove" onClick={() => removeFromCart(i.id)}><X size={15} /></button></div>
          ))}
        </div>
        <div className="xb-drawer-foot">
          <div className="xb-sum-row xb-total"><span>Tổng</span><b>{fmt(total)}</b></div>
          <Btn className="xb-full" onClick={() => { closeCart(); go("cart"); }} {...(cart.length === 0 ? { disabled: true } : {})}>Xem giỏ & thanh toán</Btn>
        </div>
      </div>
    </div>
  );
}

/* ====== PATH ROUTING (deep links khớp sitemap) ====== */
const PATHS = {
  home: "", courses: "courses", workflows: "workflows", services: "services", pricing: "pricing",
  agents: "ai-agents", cases: "case-studies", blog: "blog", resources: "resources", booking: "booking",
  contact: "contact", cart: "cart", checkout: "checkout", success: "checkout/success", dashboard: "dashboard",
  login: "login", register: "register", forgot: "forgot-password", membership: "membership", affiliate: "affiliate",
  privacy: "privacy-policy", terms: "terms", refund: "refund-policy", support: "support", landing: "lp/ai-automation",
};
const DETAIL_BASE = { course: "courses", workflow: "workflows", agent: "ai-agents", case: "case-studies", post: "blog", learn: "learn" };
const BASE_DETAIL = { courses: "course", workflows: "workflow", "ai-agents": "agent", "case-studies": "case", blog: "post", learn: "learn" };
function toPath(route, param) {
  if (DETAIL_BASE[route]) return "/" + DETAIL_BASE[route] + "/" + (param || "");
  return "/" + (PATHS[route] || "");
}
function fromPath(pathname) {
  const seg = (pathname || "/").replace(/^\/+|\/+$/g, "").split("/").filter(Boolean);
  if (seg.length === 0) return { route: "home", param: null };
  const base = seg[0], sub = seg[1];
  if (base === "checkout" && sub === "success") return { route: "success", param: null };
  if (base === "lp") return { route: "landing", param: null };
  if (sub && BASE_DETAIL[base]) return { route: BASE_DETAIL[base], param: sub };
  const found = Object.entries(PATHS).find(([, p]) => p === base);
  if (found) return { route: found[0], param: null };
  return { route: "home", param: null };
}

/* ====== SEO PER ROUTE ====== */
function seoFor(route, param) {
  const home = { title: "Xuân Bắc AI — Học AI, mua Workflow AI & setup AI Automation cho doanh nghiệp", description: "Học AI Automation thực chiến, tải workflow n8n dùng ngay, hoặc thuê Xuân Bắc AI setup AI Agent cho sales, marketing, CSKH và bất động sản.", path: "" };
  const baseCrumb = (label, p) => BREADCRUMB_SCHEMA([{ label: "Trang chủ", path: "" }, { label, path: p }]);
  switch (route) {
    case "home": return { ...home, schema: { "@context": "https://schema.org", "@type": "WebSite", name: SITE.name, url: SITE.domain, potentialAction: { "@type": "SearchAction", target: SITE.domain + "/courses?q={q}", "query-input": "required name=q" } } };
    case "courses": return { title: "Khóa học AI Automation thực chiến | Xuân Bắc AI", description: "6 khóa học AI Automation, n8n, AI Agent, AI Content & AI Video — học xong làm được ngay.", path: "courses", schema: baseCrumb("Khóa học", "courses") };
    case "course": { const c = COURSES.find((x) => x.slug === param) || COURSES[0]; return { title: `${c.name} | Khóa học Xuân Bắc AI`, description: c.short, path: "courses/" + c.slug, schema: { "@context": "https://schema.org", "@type": "Course", name: c.name, description: c.short, provider: { "@type": "Organization", name: SITE.name, sameAs: SITE.domain }, offers: { "@type": "Offer", price: c.price, priceCurrency: "VND" }, aggregateRating: { "@type": "AggregateRating", ratingValue: c.rating, reviewCount: c.students } } }; }
    case "workflows": return { title: "Kho Workflow AI n8n dùng ngay | Xuân Bắc AI", description: "Tải workflow, prompt pack, file n8n và hướng dẫn triển khai cho sales, marketing, BĐS và doanh nghiệp Việt.", path: "workflows", schema: baseCrumb("Kho Workflow", "workflows") };
    case "workflow": { const w = WORKFLOWS.find((x) => x.slug === param) || WORKFLOWS[0]; return { title: `${w.name} | Workflow AI`, description: w.problem, path: "workflows/" + w.slug, schema: { "@context": "https://schema.org", "@type": "Product", name: w.name, description: w.problem, brand: { "@type": "Brand", name: SITE.name }, offers: { "@type": "Offer", price: w.price, priceCurrency: "VND", availability: "https://schema.org/InStock" }, aggregateRating: { "@type": "AggregateRating", ratingValue: w.rating, reviewCount: 50 } } }; }
    case "services": case "pricing": return { title: "Dịch vụ AI Automation Agency cho doanh nghiệp | Xuân Bắc AI", description: "Audit quy trình, setup workflow n8n, xây AI Agent và vận hành retainer hằng tháng.", path: "services", schema: { "@context": "https://schema.org", "@type": "Service", serviceType: "AI Automation Agency", provider: { "@type": "Organization", name: SITE.name }, areaServed: "VN" } };
    case "agents": return { title: "AI Agent theo ngành: BĐS, Sales, CSKH, Marketing | Xuân Bắc AI", description: "AI Agent thiết kế theo từng bài toán kinh doanh thực tế của doanh nghiệp Việt.", path: "ai-agents", schema: baseCrumb("AI Agent", "ai-agents") };
    case "agent": { const a = AGENTS.find((x) => x.slug === param) || AGENTS[0]; return { title: `${a.name} | Xuân Bắc AI`, description: a.problem, path: "ai-agents/" + a.slug, schema: BREADCRUMB_SCHEMA([{ label: "Trang chủ", path: "" }, { label: "AI Agent", path: "ai-agents" }, { label: a.name, path: "ai-agents/" + a.slug }]) }; }
    case "cases": return { title: "Case Study AI Automation thực tế tại Việt Nam | Xuân Bắc AI", description: "Kết quả thực tế: tiết kiệm giờ làm, tăng tỉ lệ chốt, tự động báo cáo và content.", path: "case-studies", schema: baseCrumb("Case Study", "case-studies") };
    case "case": { const c = CASES.find((x) => x.slug === param) || CASES[0]; return { title: `${c.title} | Case Study`, description: c.result, path: "case-studies/" + c.slug, schema: baseCrumb("Case Study", "case-studies/" + c.slug) }; }
    case "blog": return { title: "Blog AI Automation, n8n & AI Agent | Xuân Bắc AI", description: "Hướng dẫn AI Automation, n8n, AI Agent và workflow cho sales, marketing, bất động sản.", path: "blog", schema: baseCrumb("Blog", "blog") };
    case "post": { const b = BLOG.find((x) => x.slug === param) || BLOG[0]; return { title: `${b.title} | Blog Xuân Bắc AI`, description: b.desc, path: "blog/" + b.slug, type: "article", schema: { "@context": "https://schema.org", "@type": "Article", headline: b.title, description: b.desc, datePublished: b.date, author: { "@type": "Person", name: "Xuân Bắc" }, publisher: { "@type": "Organization", name: SITE.name, logo: { "@type": "ImageObject", url: SITE.domain + "/logo.png" } }, keywords: b.keywords.join(", ") } }; }
    case "resources": return { title: "Tài nguyên AI miễn phí: ebook, checklist, prompt pack | Xuân Bắc AI", description: "Tải bộ tài liệu miễn phí: 20 workflow AI giúp doanh nghiệp tiết kiệm 10+ giờ mỗi tuần.", path: "resources", schema: baseCrumb("Tài nguyên", "resources") };
    case "booking": return { title: "Đặt lịch tư vấn AI Automation | Xuân Bắc AI", description: "Đặt lịch tư vấn để được phân tích quy trình và gợi ý hệ thống AI phù hợp.", path: "booking", schema: baseCrumb("Đặt lịch", "booking") };
    case "contact": return { title: "Liên hệ Xuân Bắc AI", description: `Liên hệ Xuân Bắc AI — ${PHONE} — ${ADDR}.`, path: "contact", schema: LOCALBIZ_SCHEMA };
    case "membership": return { title: "Membership Xuân Bắc AI: kho Workflow Pro", description: "Gói thành viên truy cập kho workflow Pro và nhận tài nguyên mới mỗi tháng.", path: "membership", schema: baseCrumb("Membership", "membership") };
    case "affiliate": return { title: "Affiliate Xuân Bắc AI — Cộng tác viên", description: "Giới thiệu khóa học & workflow, nhận hoa hồng đến 30%.", path: "affiliate", schema: baseCrumb("Affiliate", "affiliate") };
    case "landing": return { title: "Tư vấn AI Automation miễn phí cho doanh nghiệp | Xuân Bắc AI", description: "Nhận phân tích quy trình và gợi ý hệ thống AI phù hợp trong 1 buổi tư vấn miễn phí.", path: "lp/ai-automation" };
    case "cart": return { title: "Giỏ hàng | Xuân Bắc AI", description: "Đơn hàng của bạn.", path: "cart" };
    case "checkout": return { title: "Thanh toán | Xuân Bắc AI", description: "Hoàn tất đơn hàng.", path: "checkout" };
    case "success": return { title: "Thanh toán thành công | Xuân Bắc AI", description: "Cảm ơn bạn đã mua hàng.", path: "checkout/success" };
    case "dashboard": return { title: "Dashboard học viên | Xuân Bắc AI", description: "Khóa học, workflow, đơn hàng và chứng chỉ của bạn.", path: "dashboard" };
    case "learn": { const c = COURSES.find((x) => x.slug === param) || COURSES[0]; return { title: `Học: ${c.name} | Xuân Bắc AI`, description: "Bài giảng, tài liệu và quiz.", path: "learn/" + c.slug }; }
    case "login": return { title: "Đăng nhập | Xuân Bắc AI", description: "Đăng nhập tài khoản.", path: "login" };
    case "register": return { title: "Đăng ký | Xuân Bắc AI", description: "Tạo tài khoản học viên.", path: "register" };
    case "forgot": return { title: "Quên mật khẩu | Xuân Bắc AI", description: "Đặt lại mật khẩu.", path: "forgot-password" };
    case "privacy": return { title: "Chính sách bảo mật | Xuân Bắc AI", description: "Chính sách bảo mật thông tin.", path: "privacy-policy" };
    case "terms": return { title: "Điều khoản sử dụng | Xuân Bắc AI", description: "Điều khoản sử dụng dịch vụ.", path: "terms" };
    case "refund": return { title: "Chính sách hoàn tiền | Xuân Bắc AI", description: "Chính sách hoàn tiền sản phẩm số.", path: "refund-policy" };
    case "support": return { title: "Chính sách hỗ trợ | Xuân Bắc AI", description: "Cam kết hỗ trợ sau bán hàng.", path: "support" };
    default: return home;
  }
}

/* ============================== ROOT ============================== */
export default function App() {
  const init = typeof window !== "undefined" ? fromPath(window.location.pathname) : { route: "home", param: null };
  const [route, setRoute] = useState(init.route);
  const [param, setParam] = useState(init.param);
  const [theme, setTheme] = useState("dark");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const [lastOrder, setLastOrder] = useState(null);
  const [completed, setCompleted] = useState({});
  const toggleComplete = (slug, i) => setCompleted((c) => {
    const arr = c[slug] || []; const has = arr.includes(i);
    return { ...c, [slug]: has ? arr.filter((x) => x !== i) : [...arr, i] };
  });

  // Tracking + base schema once on mount
  useEffect(() => {
    captureUTM();
    initTracking();
    setJSONLD("ld-org", ORG_SCHEMA);
    setJSONLD("ld-localbiz", LOCALBIZ_SCHEMA);
    let fav = document.querySelector('link[rel="icon"]');
    if (!fav) { fav = document.createElement("link"); fav.rel = "icon"; document.head.appendChild(fav); }
    fav.type = "image/svg+xml"; fav.href = FAVICON;
  }, []);

  // SEO + page_view on every route change
  useEffect(() => {
    const seo = seoFor(route, param);
    applySEO(seo);
    track("page_view", { page_path: "/" + (seo.path || ""), page_title: seo.title });
  }, [route, param]);

  // Sync browser back/forward with in-app route
  useEffect(() => {
    const onPop = () => { const r = fromPath(window.location.pathname); setRoute(r.route); setParam(r.param); };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const go = (r, p = null) => {
    setRoute(r); setParam(p);
    try { window.history.pushState({}, "", toPath(r, p)); } catch (e) {}
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const addToCart = (item) => {
    setCart((c) => c.find((x) => x.id === item.id) ? c : [...c, item]);
    track("add_to_cart", { item: item.name, price: item.price, type: item.type });
    setToast("Đã thêm vào giỏ: " + item.name);
    setTimeout(() => setToast(null), 2200);
  };
  const removeFromCart = (id) => setCart((c) => c.filter((x) => x.id !== id));
  const clearCart = () => setCart([]);

  const ctx = { route, go, theme, setTheme, cart, addToCart, removeFromCart, clearCart, cartOpen, openCart: () => setCartOpen(true), closeCart: () => setCartOpen(false), lastOrder, setLastOrder, completed, toggleComplete };

  const render = () => {
    switch (route) {
      case "home": return <HomePage />;
      case "courses": return <CoursesPage />;
      case "course": return <CourseDetail slug={param} />;
      case "learn": return <LessonPlayer slug={param} />;
      case "workflows": return <WorkflowsPage />;
      case "workflow": return <WorkflowDetail slug={param} />;
      case "services": case "pricing": return <ServicesPage />;
      case "agents": return <AgentsPage />;
      case "agent": return <AgentsPage slug={param} />;
      case "cases": return <CasesPage />;
      case "case": return <CasesPage slug={param} />;
      case "blog": return <BlogPage />;
      case "post": return <BlogPost slug={param} />;
      case "resources": return <ResourcesPage />;
      case "booking": return <BookingPage />;
      case "contact": return <ContactPage />;
      case "cart": return <CartPage />;
      case "checkout": return <CheckoutPage />;
      case "success": return <SuccessPage />;
      case "dashboard": return <DashboardPage />;
      case "login": return <AuthPage mode="login" />;
      case "register": return <AuthPage mode="register" />;
      case "forgot": return <AuthPage mode="forgot" />;
      case "membership": return <MembershipPage />;
      case "affiliate": return <AffiliatePage />;
      case "privacy": return <PolicyPage kind="privacy" />;
      case "terms": return <PolicyPage kind="terms" />;
      case "refund": return <PolicyPage kind="refund" />;
      case "support": return <PolicyPage kind="support" />;
      default: return <HomePage />;
    }
  };

  // Landing page = full takeover (no main nav/footer, ad-focused)
  if (route === "landing") {
    return (
      <Store.Provider value={ctx}>
        <div className={`xb-root ${theme}`}>
          <style>{CSS}</style>
          <LandingPage />
          {toast && <div className="xb-toast"><CheckCircle2 size={16} /> {toast}</div>}
        </div>
      </Store.Provider>
    );
  }

  return (
    <Store.Provider value={ctx}>
      <div className={`xb-root ${theme}`}>
        <style>{CSS}</style>
        <Navbar />
        <main>{render()}</main>
        <Footer />
        <StickyMobile />
        <FloatingContact />
        <ChatWidget />
        <CartDrawer />
        {toast && <div className="xb-toast"><CheckCircle2 size={16} /> {toast}</div>}
      </div>
    </Store.Provider>
  );
}

/* ============================== STYLES ============================== */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700&family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&display=swap');

.xb-root{ --navy:#0A1628; --navy2:#0E1D33; --ink:#0B1220; --gold:#C9A24B; --gold2:#E0BD6E; --sky:#5BA3F5; --sky2:#7FBBFF;
  --bg:#0A1628; --bg2:#0E1D33; --surface:#11233E; --surface2:#16294a; --line:rgba(255,255,255,.10); --text:#EAF1FB; --muted:#9DB0CC;
  --radius:18px; --shadow:0 24px 60px -24px rgba(0,0,0,.6); font-family:'Be Vietnam Pro',sans-serif; }
.xb-root.light{ --bg:#FBFCFE; --bg2:#F2F6FC; --surface:#FFFFFF; --surface2:#F6F9FE; --line:rgba(10,22,40,.10); --text:#0B1220; --muted:#5A6B85; --shadow:0 24px 50px -28px rgba(20,40,80,.22); }
.xb-root{ background:var(--bg); color:var(--text); min-height:100vh; transition:background .3s,color .3s; overflow-x:hidden; }
.xb-root *{ box-sizing:border-box; }
.xb-container{ width:100%; max-width:1200px; margin:0 auto; padding:0 24px; }
.xb-section{ padding:80px 0; position:relative; }
.xb-alt{ background:var(--bg2); }
.xb-mt{ margin-top:28px; }
.xb-center{ display:flex; flex-direction:column; align-items:center; gap:14px; text-align:center; }
.xb-center-t{ text-align:center; }
.xb-narrow{ max-width:640px; }
.xb-narrow-wrap{ max-width:760px; }
.xb-hide-sm{ display:inline-flex; }

h1,h2,h3,h4{ font-family:'Fraunces',serif; font-weight:600; line-height:1.15; letter-spacing:-.01em; margin:0; }
.xb-h1{ font-size:clamp(30px,5vw,52px); margin-bottom:14px; }
.xb-h2{ font-size:clamp(24px,3.4vw,38px); margin-bottom:6px; }
.xb-h3{ font-size:clamp(20px,2.4vw,26px); }
.xb-lead{ font-size:clamp(15px,1.6vw,19px); color:var(--muted); line-height:1.65; max-width:620px; margin:0 0 4px; }
.xb-muted{ color:var(--muted); line-height:1.6; }
.xb-small{ font-size:13px; }
.xb-gold{ color:var(--gold2); }
.xb-eyebrow{ display:inline-block; font-size:12px; font-weight:700; letter-spacing:.14em; text-transform:uppercase; color:var(--gold2); margin-bottom:12px; }

/* buttons */
.xb-btn{ display:inline-flex; align-items:center; justify-content:center; gap:8px; padding:12px 20px; border-radius:12px; font-family:'Be Vietnam Pro'; font-weight:600; font-size:14.5px; border:1px solid transparent; cursor:pointer; transition:transform .15s,box-shadow .2s,background .2s,opacity .2s; text-decoration:none; white-space:nowrap; }
.xb-btn:hover{ transform:translateY(-2px); }
.xb-btn:disabled{ opacity:.45; pointer-events:none; }
.xb-btn-primary{ background:linear-gradient(135deg,var(--sky),#3a7fd6); color:#fff; box-shadow:0 10px 26px -10px rgba(91,163,245,.7); }
.xb-btn-gold{ background:linear-gradient(135deg,var(--gold2),var(--gold)); color:#1a1306; box-shadow:0 10px 26px -10px rgba(201,162,75,.6); }
.xb-btn-ghost{ background:transparent; color:var(--text); border-color:var(--line); }
.xb-btn-ghost:hover{ background:var(--surface); }
.xb-full{ width:100%; }
.xb-pill{ display:inline-flex; align-items:center; gap:7px; padding:7px 14px; border-radius:999px; background:var(--surface); border:1px solid var(--line); font-size:13px; color:var(--gold2); font-weight:600; margin-bottom:18px; }

/* nav */
.xb-nav{ position:sticky; top:0; z-index:50; transition:background .25s,border .25s,backdrop-filter .25s; border-bottom:1px solid transparent; }
.xb-nav.is-scrolled{ background:color-mix(in srgb,var(--bg) 82%,transparent); backdrop-filter:blur(16px); border-bottom:1px solid var(--line); }
.xb-nav-inner{ display:flex; align-items:center; justify-content:space-between; height:70px; gap:16px; }
.xb-logo{ display:flex; align-items:center; gap:10px; background:none; border:none; cursor:pointer; color:var(--text); }
.xb-logo-mark{ width:38px; height:38px; border-radius:11px; background:linear-gradient(135deg,var(--gold2),var(--gold)); color:#1a1306; font-family:'Fraunces'; font-weight:700; display:grid; place-items:center; font-size:16px; }
.xb-logo-text{ font-family:'Fraunces'; font-weight:600; font-size:19px; }
.xb-logo-text em{ color:var(--gold2); font-style:normal; }
.xb-nav-links{ display:flex; gap:4px; }
.xb-nav-link{ background:none; border:none; color:var(--muted); font-family:'Be Vietnam Pro'; font-size:14px; font-weight:500; padding:9px 12px; border-radius:9px; cursor:pointer; transition:.15s; }
.xb-nav-link:hover{ color:var(--text); background:var(--surface); }
.xb-nav-link.active{ color:var(--gold2); }
.xb-nav-actions{ display:flex; align-items:center; gap:8px; }
.xb-icon-btn{ width:40px; height:40px; border-radius:11px; border:1px solid var(--line); background:var(--surface); color:var(--text); display:grid; place-items:center; cursor:pointer; transition:.15s; position:relative; }
.xb-icon-btn:hover{ background:var(--surface2); }
.xb-cart-count{ position:absolute; top:-6px; right:-6px; background:var(--gold); color:#1a1306; font-size:11px; font-weight:700; width:18px; height:18px; border-radius:999px; display:grid; place-items:center; }
.xb-burger{ display:none; }
.xb-mobile-menu{ display:none; }

/* hero */
.xb-hero{ padding-top:48px; padding-bottom:0; }
.xb-hero-glow{ position:absolute; inset:0; pointer-events:none; background:radial-gradient(700px 360px at 78% 8%,rgba(91,163,245,.20),transparent 60%),radial-gradient(560px 320px at 12% 22%,rgba(201,162,75,.16),transparent 60%); }
.xb-hero-grid{ display:grid; grid-template-columns:1.05fr .95fr; gap:48px; align-items:center; position:relative; padding-bottom:60px; }
.xb-hero-cta{ display:flex; gap:12px; margin:24px 0 14px; flex-wrap:wrap; }
.xb-hero-sub{ font-size:13px; color:var(--muted); letter-spacing:.01em; }
.xb-trust{ border-top:1px solid var(--line); border-bottom:1px solid var(--line); padding:18px 0; overflow:hidden; }
.xb-trust-track{ display:flex; gap:40px; animation:scroll 28s linear infinite; width:max-content; max-width:none; }
@keyframes scroll{ to{ transform:translateX(-50%); } }
.xb-trust-item{ color:var(--muted); font-weight:600; font-size:14px; white-space:nowrap; opacity:.8; }

/* hero mockup */
.xb-mock{ background:var(--surface); border:1px solid var(--line); border-radius:20px; box-shadow:var(--shadow); overflow:hidden; transform:perspective(1200px) rotateY(-6deg) rotateX(2deg); }
.xb-mock-top{ display:flex; align-items:center; gap:7px; padding:13px 16px; border-bottom:1px solid var(--line); background:var(--surface2); }
.xb-dot{ width:10px; height:10px; border-radius:999px; background:var(--line); }
.xb-mock-title{ margin-left:8px; font-size:12.5px; color:var(--muted); }
.xb-mock-body{ padding:18px; display:flex; flex-direction:column; gap:14px; }
.xb-mock-flow{ display:flex; align-items:center; gap:6px; flex-wrap:wrap; }
.xb-flow-node{ display:flex; align-items:center; gap:7px; padding:8px 11px; border-radius:11px; border:1px solid; background:var(--surface2); font-size:11.5px; font-weight:600; }
.xb-flow-line{ flex:1; min-width:14px; height:2px; background:linear-gradient(90deg,var(--sky),var(--gold)); border-radius:2px; }
.xb-mock-stats{ display:grid; grid-template-columns:repeat(3,1fr); gap:10px; }
.xb-stat{ background:var(--surface2); border:1px solid var(--line); border-radius:13px; padding:13px; text-align:center; }
.xb-stat b{ font-family:'Fraunces'; font-size:22px; color:var(--gold2); display:block; }
.xb-stat span{ font-size:11.5px; color:var(--muted); }
.xb-mock-bars{ display:flex; align-items:flex-end; gap:8px; height:64px; padding:8px 0; }
.xb-mock-bars span{ flex:1; border-radius:6px 6px 0 0; background:linear-gradient(180deg,var(--sky),rgba(91,163,245,.25)); }
.xb-mock-row{ display:flex; justify-content:space-between; align-items:center; font-size:13px; padding-top:4px; border-top:1px solid var(--line); }
.xb-tag{ font-size:11px; font-weight:700; }

/* hero visual (grand illustration) */
.xb-herovis{ position:relative; width:100%; aspect-ratio:5/4; max-width:560px; margin:0 auto; }
.xb-hv-lines{ position:absolute; inset:0; width:100%; height:100%; }
.xb-hv-flow{ animation:hvflow 1.6s linear infinite; }
@keyframes hvflow{ to{ stroke-dashoffset:-22; } }
.xb-hv-orbit{ transform-origin:50% 51.5%; animation:hvspin 26s linear infinite; }
.xb-hv-orbit2{ transform-origin:50% 51.5%; animation:hvspin 38s linear infinite reverse; }
@keyframes hvspin{ to{ transform:rotate(360deg); } }
.xb-hv-hub{ position:absolute; left:50%; top:51.5%; transform:translate(-50%,-50%); width:128px; height:128px; display:grid; place-items:center; }
.xb-hv-hub-ring{ position:absolute; inset:0; border-radius:999px; background:radial-gradient(circle,rgba(201,162,75,.30),rgba(91,163,245,.10) 60%,transparent 72%); animation:hvpulse 3.2s ease-in-out infinite; }
@keyframes hvpulse{ 0%,100%{ transform:scale(1); opacity:.85; } 50%{ transform:scale(1.12); opacity:1; } }
.xb-hv-hub-core{ position:relative; width:96px; height:96px; border-radius:999px; background:linear-gradient(150deg,#13294a,#0b1a30); border:1px solid rgba(201,162,75,.55); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:1px; box-shadow:0 18px 40px -14px rgba(201,162,75,.5); }
.xb-hv-hub-core svg{ color:var(--gold2); }
.xb-hv-hub-core b{ font-family:'Be Vietnam Pro'; font-weight:700; font-size:13px; color:#fff; margin-top:3px; }
.xb-hv-hub-core span{ font-size:10px; color:var(--gold2); letter-spacing:.04em; }
.xb-hv-node{ position:absolute; transform:translate(-50%,-50%); display:flex; flex-direction:column; align-items:center; gap:6px; animation:hvfloat 5s ease-in-out infinite; }
.xb-hv-node:nth-child(odd){ animation-delay:-2.5s; }
@keyframes hvfloat{ 0%,100%{ transform:translate(-50%,-50%); } 50%{ transform:translate(-50%,calc(-50% - 7px)); } }
.xb-hv-node-ic{ width:46px; height:46px; border-radius:14px; background:var(--surface); border:1px solid; display:grid; place-items:center; box-shadow:0 10px 24px -12px rgba(0,0,0,.6); }
.xb-hv-node-lb{ font-size:11.5px; font-weight:600; color:var(--text); background:var(--surface); border:1px solid var(--line); padding:3px 9px; border-radius:999px; white-space:nowrap; }
.xb-hv-chip{ position:absolute; display:flex; align-items:center; gap:6px; padding:8px 12px; border-radius:12px; background:var(--surface); border:1px solid var(--line); font-size:12px; font-weight:600; box-shadow:var(--shadow); animation:hvfloat 6s ease-in-out infinite; }
.xb-hv-chip b{ font-family:'Fraunces'; color:var(--gold2); font-size:15px; }
.xb-hv-dot{ width:8px; height:8px; border-radius:999px; background:#3ED598; box-shadow:0 0 0 3px rgba(62,213,152,.2); }
.xb-hv-c1{ left:-6%; top:40%; }
.xb-hv-c2{ right:-8%; top:30%; animation-delay:-2s; }
.xb-hv-c3{ right:-4%; bottom:14%; animation-delay:-3.5s; }
@media(max-width:560px){
  .xb-herovis{ max-width:380px; }
  .xb-hv-node-lb{ font-size:10.5px; }
  .xb-hv-c1{ left:0; } .xb-hv-c2{ right:0; } .xb-hv-c3{ right:0; }
}
@media(prefers-reduced-motion:reduce){
  .xb-hv-flow,.xb-hv-orbit,.xb-hv-orbit2,.xb-hv-hub-ring,.xb-hv-node,.xb-hv-chip{ animation:none; }
}

/* grids */
.xb-grid-2{ display:grid; grid-template-columns:repeat(2,1fr); gap:22px; align-items:start; }
.xb-grid-3{ display:grid; grid-template-columns:repeat(3,1fr); gap:22px; }
.xb-grid-4{ display:grid; grid-template-columns:repeat(4,1fr); gap:18px; }
.xb-nested{ gap:16px; }
.xb-head-row{ display:flex; justify-content:space-between; align-items:flex-end; gap:20px; flex-wrap:wrap; }

/* cards */
.xb-card{ background:var(--surface); border:1px solid var(--line); border-radius:var(--radius); padding:22px; transition:transform .2s,box-shadow .2s,border-color .2s; }
.xb-pain{ display:flex; gap:12px; align-items:flex-start; background:var(--surface); border:1px solid var(--line); border-radius:14px; padding:18px; }
.xb-pain-x{ color:#E8657A; flex-shrink:0; margin-top:2px; }
.xb-cta-line{ text-align:center; font-family:'Fraunces'; font-size:clamp(18px,2.2vw,24px); color:var(--gold2); margin-top:34px; }
.xb-pillar{ text-align:left; }
.xb-pillar:hover,.xb-agent-card:hover,.xb-case-card:hover,.xb-course-card:hover,.xb-wf-card:hover{ transform:translateY(-4px); box-shadow:var(--shadow); border-color:color-mix(in srgb,var(--sky) 40%,var(--line)); }
.xb-pillar-ic,.xb-agent-ic{ width:50px; height:50px; border-radius:14px; background:linear-gradient(135deg,rgba(91,163,245,.18),rgba(201,162,75,.14)); display:grid; place-items:center; color:var(--sky2); margin-bottom:14px; }
.xb-pillar h3,.xb-agent-card h3,.xb-service-card h3{ margin-bottom:8px; font-size:19px; }
.xb-ic-lg{ width:64px; height:64px; margin-bottom:18px; }

/* course/wf card */
.xb-course-card,.xb-wf-card{ padding:0; overflow:hidden; display:flex; flex-direction:column; }
.xb-wf-card{ padding:0; }
.xb-thumb{ position:relative; overflow:hidden; line-height:0; }
.xb-thumb-tag{ position:absolute; top:12px; left:12px; font-size:11px; font-weight:700; padding:4px 10px; border-radius:999px; background:var(--surface); border:1px solid var(--line); color:var(--gold2); }
.xb-wf-head{ display:flex; justify-content:space-between; margin-bottom:14px; }
.xb-wf-head .xb-thumb-tag{ position:static; }
.xb-card-body{ padding:18px; display:flex; flex-direction:column; gap:10px; flex:1; }
.xb-card-title-link{ font-size:17px; cursor:pointer; transition:color .15s; }
.xb-card-title-link:hover{ color:var(--sky2); }
.xb-clamp{ display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; font-size:13.5px; }
.xb-meta-row{ display:flex; justify-content:space-between; align-items:center; font-size:12.5px; }
.xb-stars{ display:inline-flex; align-items:center; gap:4px; color:var(--gold2); font-size:13px; }
.xb-chip-row{ display:flex; flex-wrap:wrap; gap:7px; align-items:center; }
.xb-chip{ display:inline-flex; align-items:center; gap:5px; font-size:12px; padding:5px 10px; border-radius:8px; background:var(--surface2); border:1px solid var(--line); color:var(--muted); }
.xb-tool-row{ display:flex; flex-wrap:wrap; gap:6px; }
.xb-tool{ font-size:11.5px; padding:5px 10px; border-radius:8px; background:var(--surface2); border:1px solid var(--line); color:var(--text); }
.xb-card-foot{ margin-top:auto; padding-top:12px; display:flex; justify-content:space-between; align-items:center; gap:8px; flex-wrap:wrap; }
.xb-wf-card .xb-card-foot{ border-top:1px solid var(--line); }
.xb-price{ font-family:'Fraunces'; font-size:19px; font-weight:600; color:var(--gold2); }
.xb-btn-pair{ display:flex; gap:7px; }
.xb-btn-pair .xb-btn{ padding:8px 13px; font-size:13px; }

/* agent/service/case */
.xb-agent-card,.xb-case-card{ cursor:pointer; }
.xb-link-row{ display:inline-flex; align-items:center; gap:6px; color:var(--sky2); font-weight:600; font-size:13.5px; margin-top:8px; }
.xb-mini-list{ list-style:none; padding:0; margin:10px 0 0; display:flex; flex-direction:column; gap:6px; }
.xb-mini-list li{ display:flex; gap:7px; align-items:center; font-size:13px; color:var(--muted); }
.xb-mini-list li svg{ color:var(--sky2); flex-shrink:0; }
.xb-case-card{ display:flex; gap:18px; align-items:center; }
.xb-case-metric{ font-family:'Fraunces'; font-size:30px; font-weight:700; color:var(--gold2); min-width:90px; text-align:center; padding:18px 10px; border-radius:14px; background:linear-gradient(135deg,rgba(201,162,75,.16),transparent); border:1px solid var(--line); }
.xb-metric-lg{ display:inline-block; font-size:40px; margin-top:18px; }
.xb-case-card h3{ font-size:17px; margin:8px 0; }
.xb-service-lg{ display:flex; flex-direction:column; }
.xb-center .xb-btn{ margin-top:8px; }

/* check list */
.xb-check-list{ list-style:none; padding:0; margin:14px 0 0; display:flex; flex-direction:column; gap:11px; }
.xb-check-list li{ display:flex; gap:10px; align-items:flex-start; line-height:1.5; }
.xb-check-list li svg{ color:#3ED598; flex-shrink:0; margin-top:3px; }

/* form */
.xb-form{ display:flex; flex-direction:column; gap:13px; margin-top:14px; }
.xb-form.compact{ gap:10px; }
.xb-field{ display:flex; flex-direction:column; gap:5px; }
.xb-field input,.xb-field select,.xb-field textarea{ width:100%; padding:13px 15px; border-radius:11px; border:1px solid var(--line); background:var(--surface2); color:var(--text); font-family:'Be Vietnam Pro'; font-size:14px; outline:none; transition:.15s; }
.xb-field input:focus,.xb-field select:focus,.xb-field textarea:focus{ border-color:var(--sky); box-shadow:0 0 0 3px rgba(91,163,245,.18); }
.xb-field .err{ border-color:#E8657A; }
.xb-err-msg{ font-size:12px; color:#E8657A; }
.xb-form-card h3{ margin-bottom:4px; }
.xb-form-ok{ text-align:center; padding:20px 0; display:flex; flex-direction:column; align-items:center; gap:8px; }
.xb-inline-link{ background:none; border:none; color:var(--sky2); font-weight:600; cursor:pointer; font-family:inherit; font-size:inherit; text-decoration:underline; }

/* faq */
.xb-faq{ border:1px solid var(--line); border-radius:13px; margin-bottom:10px; background:var(--surface); overflow:hidden; }
.xb-faq-q{ width:100%; display:flex; justify-content:space-between; align-items:center; gap:12px; padding:17px 20px; background:none; border:none; color:var(--text); font-family:'Be Vietnam Pro'; font-weight:600; font-size:15px; text-align:left; cursor:pointer; }
.xb-faq-ic{ transition:transform .2s; color:var(--muted); flex-shrink:0; }
.xb-faq.open .xb-faq-ic{ transform:rotate(180deg); color:var(--gold2); }
.xb-faq-a{ padding:0 20px 18px; color:var(--muted); line-height:1.65; margin:0; }

/* testimonial */
.xb-testi{ display:flex; flex-direction:column; gap:12px; }
.xb-quote{ color:var(--gold2); opacity:.5; }
.xb-testi p{ line-height:1.6; font-size:14px; flex:1; }
.xb-testi-foot{ display:flex; gap:10px; align-items:center; }
.xb-avatar{ width:42px; height:42px; border-radius:999px; background:linear-gradient(135deg,var(--sky),var(--gold)); color:#fff; display:grid; place-items:center; font-weight:700; flex-shrink:0; }
.xb-avatar-lg{ width:62px; height:62px; font-size:22px; font-family:'Fraunces'; }
.xb-testi-foot b{ display:block; font-size:14px; }
.xb-testi-foot span{ font-size:12px; }
.xb-result-tag{ align-self:flex-start; font-size:12px; font-weight:700; color:var(--sky2); padding:4px 11px; border-radius:999px; background:rgba(91,163,245,.12); }

/* final cta / page hero */
.xb-final{ text-align:center; }
.xb-page-hero{ padding:64px 0 40px; }
.xb-detail-hero{ padding-top:48px; }
.xb-back{ display:inline-flex; align-items:center; gap:6px; background:none; border:none; color:var(--muted); cursor:pointer; font-family:inherit; font-size:13.5px; margin-bottom:14px; }
.xb-back:hover{ color:var(--text); }

/* toolbar */
.xb-toolbar{ display:flex; gap:12px; align-items:center; flex-wrap:wrap; }
.xb-search{ display:flex; align-items:center; gap:8px; padding:10px 14px; border-radius:11px; border:1px solid var(--line); background:var(--surface); color:var(--muted); flex:1; min-width:220px; }
.xb-search input{ background:none; border:none; outline:none; color:var(--text); font-family:inherit; font-size:14px; width:100%; }
.xb-filter-pills{ display:flex; gap:7px; flex-wrap:wrap; }
.xb-fpill{ padding:8px 14px; border-radius:999px; border:1px solid var(--line); background:var(--surface); color:var(--muted); font-family:inherit; font-size:13px; font-weight:500; cursor:pointer; transition:.15s; }
.xb-fpill:hover{ color:var(--text); }
.xb-fpill.active{ background:var(--sky); color:#fff; border-color:var(--sky); }
.xb-sort{ padding:10px 14px; border-radius:11px; border:1px solid var(--line); background:var(--surface); color:var(--text); font-family:inherit; font-size:13px; cursor:pointer; }

/* detail */
.xb-detail-grid{ display:grid; grid-template-columns:1.6fr 1fr; gap:36px; align-items:start; }
.xb-buy-card{ position:sticky; top:90px; display:flex; flex-direction:column; gap:12px; }
.xb-video-ph{ height:170px; border-radius:13px; background:linear-gradient(135deg,var(--navy2),var(--surface2)); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:8px; color:var(--muted); border:1px solid var(--line); }
.xb-video-ph svg{ color:var(--sky2); }
.xb-price-lg{ font-family:'Fraunces'; font-size:30px; font-weight:700; color:var(--gold2); }
.xb-modules,.xb-steps{ display:flex; flex-direction:column; gap:9px; margin-top:14px; }
.xb-module{ background:var(--surface); border:1px solid var(--line); border-radius:11px; padding:13px 16px; font-size:14px; display:flex; align-items:center; gap:10px; }
.xb-mod-no{ width:26px; height:26px; border-radius:8px; background:var(--surface2); display:grid; place-items:center; font-size:12px; font-weight:700; color:var(--gold2); flex-shrink:0; }
.xb-steps{ flex-direction:row; flex-wrap:wrap; align-items:center; }
.xb-step{ display:flex; align-items:center; gap:8px; background:var(--surface); border:1px solid var(--line); border-radius:11px; padding:11px 14px; font-size:13.5px; }
.xb-step-no{ width:24px; height:24px; border-radius:999px; background:var(--sky); color:#fff; display:grid; place-items:center; font-size:12px; font-weight:700; }
.xb-step-arr{ color:var(--muted); }
.xb-instr{ text-align:center; display:flex; flex-direction:column; align-items:center; gap:8px; }

/* pricing */
.xb-plan{ display:flex; flex-direction:column; gap:8px; position:relative; }
.xb-plan.featured{ border-color:var(--gold); box-shadow:0 20px 50px -20px rgba(201,162,75,.4); }
.xb-best{ position:absolute; top:-12px; left:50%; transform:translateX(-50%); background:linear-gradient(135deg,var(--gold2),var(--gold)); color:#1a1306; font-size:11.5px; font-weight:700; padding:5px 14px; border-radius:999px; white-space:nowrap; }
.xb-plan-price{ display:flex; align-items:baseline; gap:5px; flex-wrap:wrap; margin:6px 0; }
.xb-plan-price b{ font-family:'Fraunces'; font-size:26px; color:var(--gold2); }
.xb-plan-price span{ font-size:13px; color:var(--muted); }
.xb-plan .xb-check-list li{ font-size:13.5px; }
.xb-plan .xb-btn{ margin-top:auto; }

/* booking */
.xb-slot-grid{ display:grid; grid-template-columns:repeat(auto-fill,minmax(76px,1fr)); gap:8px; margin-top:8px; }
.xb-slot{ padding:11px 8px; border-radius:10px; border:1px solid var(--line); background:var(--surface2); color:var(--text); font-family:inherit; font-size:13px; cursor:pointer; transition:.15s; }
.xb-slot:hover{ border-color:var(--sky); }
.xb-slot.active{ background:var(--sky); color:#fff; border-color:var(--sky); }
.xb-booking-pick{ display:flex; align-items:center; gap:8px; margin-top:14px; padding:11px 14px; border-radius:11px; background:rgba(62,213,152,.12); color:#3ED598; font-weight:600; font-size:13.5px; }

/* contact */
.xb-contact-info h3{ font-size:24px; margin-bottom:6px; }
.xb-contact-line{ display:flex; align-items:center; gap:10px; color:var(--text); text-decoration:none; margin:12px 0; font-size:15px; }
.xb-contact-line svg{ color:var(--sky2); }
.xb-contact-btns{ display:flex; gap:8px; flex-wrap:wrap; margin:18px 0; }
.xb-map-ph{ height:200px; border-radius:13px; background:var(--surface2); border:1px solid var(--line); display:flex; align-items:center; justify-content:center; gap:8px; color:var(--muted); font-size:13.5px; }

/* cart / checkout */
.xb-cart-row{ display:flex; justify-content:space-between; align-items:center; gap:14px; margin-bottom:12px; }
.xb-cart-row h4{ font-family:'Be Vietnam Pro'; font-weight:600; font-size:15px; margin-top:6px; }
.xb-cart-right{ display:flex; align-items:center; gap:14px; }
.xb-cart-right b{ color:var(--gold2); font-family:'Fraunces'; }
.xb-remove{ width:30px; height:30px; border-radius:8px; border:1px solid var(--line); background:var(--surface2); color:var(--muted); cursor:pointer; display:grid; place-items:center; }
.xb-remove:hover{ color:#E8657A; border-color:#E8657A; }
.xb-summary{ position:sticky; top:90px; display:flex; flex-direction:column; gap:10px; }
.xb-sum-row{ display:flex; justify-content:space-between; align-items:center; font-size:14px; padding:6px 0; }
.xb-sum-row b{ font-weight:600; }
.xb-total{ border-top:1px solid var(--line); padding-top:14px; margin-top:6px; font-size:16px; }
.xb-total b{ font-family:'Fraunces'; font-size:22px; color:var(--gold2); }
.xb-discount b{ color:#3ED598; }
.xb-coupon{ display:flex; gap:8px; }
.xb-coupon input{ flex:1; padding:11px 13px; border-radius:10px; border:1px solid var(--line); background:var(--surface2); color:var(--text); outline:none; font-family:inherit; }
.xb-pay{ display:flex; align-items:center; gap:10px; width:100%; padding:14px 16px; border-radius:12px; border:1px solid var(--line); background:var(--surface2); color:var(--text); font-family:inherit; font-size:14px; cursor:pointer; margin-bottom:9px; transition:.15s; }
.xb-pay.active{ border-color:var(--sky); background:rgba(91,163,245,.1); }
.xb-pay-check{ margin-left:auto; color:var(--sky2); }
.xb-empty{ text-align:center; display:flex; flex-direction:column; align-items:center; gap:12px; color:var(--muted); padding:40px 20px; }

/* dashboard */
.xb-dash-head{ display:flex; gap:16px; align-items:center; margin-bottom:28px; }
.xb-dash-layout{ display:grid; grid-template-columns:230px 1fr; gap:26px; align-items:start; }
.xb-dash-nav{ display:flex; flex-direction:column; gap:5px; position:sticky; top:90px; }
.xb-dash-tab{ display:flex; align-items:center; gap:10px; padding:12px 15px; border-radius:11px; border:none; background:none; color:var(--muted); font-family:inherit; font-size:14px; font-weight:500; cursor:pointer; text-align:left; transition:.15s; }
.xb-dash-tab:hover{ background:var(--surface); color:var(--text); }
.xb-dash-tab.active{ background:var(--surface); color:var(--gold2); }
.xb-dash-course h4{ font-family:'Be Vietnam Pro'; font-weight:600; margin-bottom:12px; }
.xb-progress{ height:8px; border-radius:999px; background:var(--surface2); overflow:hidden; margin-bottom:10px; }
.xb-progress span{ display:block; height:100%; border-radius:999px; background:linear-gradient(90deg,var(--sky),var(--gold)); }
.xb-prog-row{ display:flex; justify-content:space-between; align-items:center; }
.xb-prog-row .xb-btn{ padding:8px 14px; font-size:13px; }
.xb-paid{ color:#3ED598; font-size:13px; }
.xb-cert{ text-align:center; display:flex; flex-direction:column; align-items:center; gap:10px; }

/* auth */
.xb-auth{ display:flex; align-items:center; min-height:78vh; }
.xb-auth-wrap{ max-width:420px; }
.xb-auth-card{ padding:34px; }
.xb-auth-card .xb-logo{ justify-content:center; margin-bottom:14px; }
.xb-auth-links{ display:flex; flex-direction:column; gap:8px; align-items:center; margin-top:18px; }

/* policy */
.xb-policy h3{ margin:22px 0 8px; }

/* sticky mobile */
.xb-sticky-mobile{ display:none; position:fixed; bottom:0; left:0; right:0; z-index:45; background:color-mix(in srgb,var(--bg) 92%,transparent); backdrop-filter:blur(14px); border-top:1px solid var(--line); padding:9px 12px; gap:9px; }
.xb-sm-btn{ flex:1; display:flex; flex-direction:column; align-items:center; gap:3px; padding:9px 4px; border-radius:11px; border:1px solid var(--line); background:var(--surface); color:var(--text); font-family:inherit; font-size:11.5px; font-weight:600; text-decoration:none; cursor:pointer; }
.xb-sm-zalo{ color:var(--sky2); }
.xb-sm-book{ background:linear-gradient(135deg,var(--gold2),var(--gold)); color:#1a1306; border:none; }

/* chat */
.xb-chat-fab{ position:fixed; bottom:24px; right:24px; z-index:46; width:58px; height:58px; border-radius:999px; border:none; background:linear-gradient(135deg,var(--sky),#3a7fd6); color:#fff; display:grid; place-items:center; cursor:pointer; box-shadow:0 14px 30px -10px rgba(91,163,245,.7); transition:transform .15s; }
.xb-chat-fab:hover{ transform:scale(1.06); }
.xb-chat{ position:fixed; bottom:94px; right:24px; z-index:46; width:340px; max-width:calc(100vw - 32px); height:460px; max-height:70vh; background:var(--surface); border:1px solid var(--line); border-radius:18px; box-shadow:var(--shadow); display:flex; flex-direction:column; overflow:hidden; }
.xb-chat-head{ display:flex; justify-content:space-between; align-items:center; padding:14px 16px; background:linear-gradient(135deg,var(--navy2),var(--surface2)); border-bottom:1px solid var(--line); }
.xb-chat-head b{ font-family:'Fraunces'; font-size:15px; }
.xb-online{ display:block; font-size:11px; color:#3ED598; }
.xb-chat-head button{ background:none; border:none; color:var(--muted); cursor:pointer; }
.xb-chat-body{ flex:1; overflow-y:auto; padding:16px; display:flex; flex-direction:column; gap:10px; }
.xb-msg{ max-width:84%; padding:10px 13px; border-radius:13px; font-size:13.5px; line-height:1.5; }
.xb-msg.bot{ background:var(--surface2); border:1px solid var(--line); align-self:flex-start; border-bottom-left-radius:4px; }
.xb-msg.user{ background:linear-gradient(135deg,var(--sky),#3a7fd6); color:#fff; align-self:flex-end; border-bottom-right-radius:4px; }
.xb-quick{ display:flex; flex-wrap:wrap; gap:6px; margin-top:4px; }
.xb-quick button{ font-size:12px; padding:6px 11px; border-radius:999px; border:1px solid var(--line); background:var(--surface2); color:var(--sky2); cursor:pointer; font-family:inherit; }
.xb-chat-input{ display:flex; gap:8px; padding:12px; border-top:1px solid var(--line); }
.xb-chat-input input{ flex:1; padding:10px 13px; border-radius:10px; border:1px solid var(--line); background:var(--surface2); color:var(--text); outline:none; font-family:inherit; font-size:13.5px; }
.xb-chat-input button{ width:42px; border-radius:10px; border:none; background:var(--sky); color:#fff; cursor:pointer; display:grid; place-items:center; }

/* cart drawer */
.xb-drawer-overlay{ position:fixed; inset:0; z-index:60; background:rgba(0,0,0,.5); display:flex; justify-content:flex-end; }
.xb-drawer{ width:380px; max-width:90vw; height:100%; background:var(--bg); border-left:1px solid var(--line); display:flex; flex-direction:column; animation:slideIn .25s ease; }
@keyframes slideIn{ from{ transform:translateX(100%); } }
.xb-drawer-head{ display:flex; justify-content:space-between; align-items:center; padding:18px 20px; border-bottom:1px solid var(--line); }
.xb-drawer-head button{ background:none; border:none; color:var(--muted); cursor:pointer; }
.xb-drawer-body{ flex:1; overflow-y:auto; padding:16px 20px; }
.xb-drawer-item{ display:flex; justify-content:space-between; gap:12px; padding:12px 0; border-bottom:1px solid var(--line); }
.xb-drawer-item p{ font-size:14px; margin:6px 0; }
.xb-drawer-item b{ color:var(--gold2); }
.xb-drawer-foot{ padding:18px 20px; border-top:1px solid var(--line); display:flex; flex-direction:column; gap:12px; }

/* toast */
.xb-toast{ position:fixed; bottom:24px; left:50%; transform:translateX(-50%); z-index:80; background:var(--surface); border:1px solid var(--line); border-radius:12px; padding:13px 18px; display:flex; align-items:center; gap:9px; font-size:13.5px; font-weight:500; box-shadow:var(--shadow); animation:toastIn .25s ease; }
.xb-toast svg{ color:#3ED598; }
@keyframes toastIn{ from{ opacity:0; transform:translate(-50%,12px); } }

.xb-sticky{ position:sticky; top:90px; }

/* responsive */
@media(max-width:1024px){
  .xb-grid-4{ grid-template-columns:repeat(2,1fr); }
  .xb-detail-grid,.xb-dash-layout{ grid-template-columns:1fr; }
  .xb-dash-nav{ position:static; flex-direction:row; flex-wrap:wrap; }
  .xb-buy-card,.xb-summary{ position:static; }
}
@media(max-width:860px){
  .xb-nav-links{ display:none; }
  .xb-burger{ display:grid; }
  .xb-hide-sm{ display:none; }
  .xb-hero-grid{ grid-template-columns:1fr; gap:30px; }
  .xb-mock{ transform:none; }
  .xb-grid-3{ grid-template-columns:1fr; }
  .xb-grid-2{ grid-template-columns:1fr; }
  .xb-mobile-menu{ display:flex; flex-direction:column; padding:12px 24px 20px; gap:4px; border-bottom:1px solid var(--line); background:var(--bg); }
  .xb-mobile-link{ display:flex; justify-content:space-between; align-items:center; padding:14px 4px; background:none; border:none; border-bottom:1px solid var(--line); color:var(--text); font-family:inherit; font-size:15px; cursor:pointer; }
  .xb-mobile-cta{ display:flex; flex-direction:column; gap:9px; margin-top:14px; }
  .xb-sticky-mobile{ display:flex; }
  .xb-section{ padding:56px 0; }
  .xb-foot-grid{ grid-template-columns:repeat(2,1fr) !important; }
  .xb-chat-fab{ bottom:78px; }
  .xb-chat{ bottom:148px; }
  main{ padding-bottom:70px; }
}
@media(max-width:560px){
  .xb-grid-4{ grid-template-columns:1fr; }
  .xb-case-card{ flex-direction:column; align-items:flex-start; }
  .xb-foot-grid{ grid-template-columns:1fr !important; }
}

/* footer */
.xb-footer{ background:var(--bg2); border-top:1px solid var(--line); padding-top:56px; }
.xb-foot-grid{ display:grid; grid-template-columns:1.8fr 1fr 1fr 1fr 1fr; gap:30px; padding-bottom:40px; }
.xb-foot-brand p{ margin:14px 0; font-size:13.5px; max-width:280px; }
.xb-foot-col h4{ font-family:'Be Vietnam Pro'; font-weight:700; font-size:14px; margin-bottom:14px; }
.xb-foot-col button{ display:block; background:none; border:none; color:var(--muted); font-family:inherit; font-size:13.5px; padding:5px 0; cursor:pointer; text-align:left; transition:.15s; }
.xb-foot-col button:hover{ color:var(--gold2); }
.xb-foot-social{ display:flex; gap:8px; margin-top:8px; }
.xb-soc{ padding:7px 14px; border-radius:9px; border:1px solid var(--line); background:var(--surface); color:var(--text); text-decoration:none; font-size:13px; font-weight:600; }
.xb-soc:hover{ color:var(--gold2); }
.xb-foot-bottom{ border-top:1px solid var(--line); padding:20px 0; font-size:13px; color:var(--muted); text-align:center; }
.xb-res-card{ display:flex; flex-direction:column; gap:8px; }
.xb-res-card h3{ font-size:15px; }

/* breadcrumb */
.xb-crumb{ display:flex; flex-wrap:wrap; align-items:center; gap:4px; margin-bottom:14px; font-size:12.5px; }
.xb-crumb-item{ display:inline-flex; align-items:center; gap:4px; }
.xb-crumb-sep{ color:var(--muted); }
.xb-crumb button{ display:inline-flex; align-items:center; gap:4px; background:none; border:none; color:var(--muted); font-family:inherit; font-size:12.5px; cursor:pointer; }
.xb-crumb button:hover{ color:var(--gold2); }
.xb-crumb-cur{ color:var(--text); font-weight:600; }

/* share */
.xb-share{ display:flex; align-items:center; gap:8px; flex-wrap:wrap; margin-top:16px; }
.xb-share-label{ display:inline-flex; align-items:center; gap:6px; font-size:13px; color:var(--muted); font-weight:600; }
.xb-share-btn{ width:36px; height:36px; border-radius:10px; border:1px solid var(--line); background:var(--surface); color:var(--text); display:grid; place-items:center; cursor:pointer; transition:.15s; }
.xb-share-btn:hover{ color:var(--gold2); border-color:var(--gold); transform:translateY(-2px); }

/* floating contact (desktop) */
.xb-floating{ position:fixed; right:18px; bottom:96px; z-index:44; display:flex; flex-direction:column; gap:10px; }
.xb-float-btn{ width:50px; height:50px; border-radius:999px; border:none; display:grid; place-items:center; cursor:pointer; color:#fff; box-shadow:0 10px 24px -8px rgba(0,0,0,.5); transition:transform .15s; text-decoration:none; }
.xb-float-btn:hover{ transform:scale(1.08); }
.xb-float-phone{ background:#22B07D; }
.xb-float-zalo{ background:#0068FF; }
.xb-float-mess{ background:#A855F7; }
.xb-float-book{ background:linear-gradient(135deg,var(--gold2),var(--gold)); color:#1a1306; }

/* social footer icons */
.xb-soc-ic{ width:38px; height:38px; border-radius:10px; border:1px solid var(--line); background:var(--surface); color:var(--text); display:grid; place-items:center; text-decoration:none; transition:.15s; }
.xb-soc-ic:hover{ color:var(--gold2); border-color:var(--gold); transform:translateY(-2px); }
.xb-foot-social{ flex-wrap:wrap; }

.xb-sm-mess{ color:#A855F7; }

/* blog */
.xb-blog-card{ padding:0; overflow:hidden; cursor:pointer; display:flex; flex-direction:column; }
.xb-blog-cover{ height:140px; display:grid; place-items:center; position:relative; background:linear-gradient(135deg,rgba(91,163,245,.18),rgba(201,162,75,.12)); color:var(--sky2); }
.xb-article{ max-width:720px; }
.xb-article h2{ margin:26px 0 10px; }
.xb-article p{ line-height:1.75; }
.xb-toc{ background:var(--surface); border:1px solid var(--line); border-radius:13px; padding:16px 20px; margin-bottom:22px; }
.xb-toc b{ font-family:'Be Vietnam Pro'; font-size:13px; text-transform:uppercase; letter-spacing:.08em; color:var(--gold2); }
.xb-toc ol{ margin:10px 0 0; padding-left:20px; color:var(--muted); display:flex; flex-direction:column; gap:6px; font-size:14px; }
.xb-inline-cta{ display:flex; justify-content:space-between; align-items:center; gap:16px; flex-wrap:wrap; margin:24px 0; background:linear-gradient(135deg,rgba(201,162,75,.12),transparent); }
.xb-related{ display:flex; justify-content:space-between; align-items:center; gap:10px; width:100%; text-align:left; background:none; border:none; border-top:1px solid var(--line); padding:13px 0; color:var(--text); font-family:inherit; font-size:14px; cursor:pointer; }
.xb-related:hover{ color:var(--gold2); }

/* landing */
.xb-lp{ background:var(--bg); color:var(--text); min-height:100vh; }
.xb-lp-nav{ border-bottom:1px solid var(--line); background:color-mix(in srgb,var(--bg) 90%,transparent); position:sticky; top:0; z-index:30; }
.xb-lp-nav .xb-nav-inner{ height:64px; }
.xb-lp-trust{ display:flex; align-items:center; gap:7px; justify-content:center; margin-top:12px; font-size:12.5px; color:var(--muted); }
.xb-lp-trust svg{ color:#3ED598; }

@media(max-width:860px){
  .xb-floating{ display:none; }
}

/* chat typing */
.xb-typing{ display:flex; gap:4px; align-items:center; }
.xb-typing span{ width:7px; height:7px; border-radius:999px; background:var(--muted); animation:xbtype 1.2s infinite ease-in-out; }
.xb-typing span:nth-child(2){ animation-delay:.2s; }
.xb-typing span:nth-child(3){ animation-delay:.4s; }
@keyframes xbtype{ 0%,60%,100%{ transform:translateY(0); opacity:.4; } 30%{ transform:translateY(-4px); opacity:1; } }
.xb-chat-input input:disabled,.xb-chat-input button:disabled{ opacity:.5; }

/* lesson player */
.xb-learn-sec{ padding:40px 0 70px; }
.xb-learn{ display:grid; grid-template-columns:300px 1fr; gap:28px; align-items:start; }
.xb-learn-side{ position:sticky; top:88px; background:var(--surface); border:1px solid var(--line); border-radius:var(--radius); padding:20px; }
.xb-learn-side h3{ font-size:17px; margin-bottom:12px; }
.xb-lesson-list{ display:flex; flex-direction:column; gap:4px; margin-top:14px; }
.xb-lesson-item{ display:flex; align-items:center; gap:10px; padding:11px 12px; border-radius:11px; border:none; background:none; cursor:pointer; text-align:left; font-family:inherit; color:var(--text); transition:.15s; }
.xb-lesson-item:hover{ background:var(--surface2); }
.xb-lesson-item.active{ background:var(--surface2); box-shadow:inset 3px 0 0 var(--gold); }
.xb-lesson-check{ width:24px; height:24px; border-radius:999px; border:1px solid var(--line); display:grid; place-items:center; font-size:12px; font-weight:700; color:var(--muted); flex-shrink:0; }
.xb-lesson-check.done{ background:#3ED598; color:#06281c; border-color:#3ED598; }
.xb-lesson-t{ flex:1; font-size:13.5px; }
.xb-lesson-dur{ font-size:11.5px; color:var(--muted); }
.xb-learn-main{ min-width:0; }
.xb-lesson-video{ aspect-ratio:16/9; border-radius:var(--radius); background:linear-gradient(135deg,#13294a,#0b1a30); border:1px solid var(--line); display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px; color:var(--muted); }
.xb-lesson-video svg{ color:var(--sky2); }
.xb-lesson-head{ display:flex; justify-content:space-between; align-items:center; gap:14px; flex-wrap:wrap; margin-top:18px; }
.xb-dl-chip{ display:inline-flex; align-items:center; gap:6px; font-size:12.5px; padding:8px 13px; border-radius:10px; border:1px solid var(--line); background:var(--surface); color:var(--text); cursor:pointer; font-family:inherit; }
.xb-dl-chip:hover{ color:var(--gold2); border-color:var(--gold); }
.xb-quiz b{ font-family:'Be Vietnam Pro'; font-weight:700; }
.xb-quiz p{ margin:8px 0 12px; }
.xb-quiz-opts{ display:flex; flex-direction:column; gap:8px; }
.xb-quiz-opt{ display:flex; justify-content:space-between; align-items:center; padding:12px 15px; border-radius:11px; border:1px solid var(--line); background:var(--surface2); color:var(--text); font-family:inherit; font-size:14px; text-align:left; cursor:pointer; transition:.15s; }
.xb-quiz-opt:hover{ border-color:var(--sky); }
.xb-quiz-opt.right{ border-color:#3ED598; background:rgba(62,213,152,.12); color:#3ED598; }
.xb-quiz-opt.wrong{ border-color:#E8657A; background:rgba(232,101,122,.1); }
.xb-ok-t{ color:#3ED598; } .xb-err-t{ color:#E8657A; }
.xb-lesson-nav{ display:flex; justify-content:space-between; gap:12px; margin-top:24px; flex-wrap:wrap; }
.xb-comments{ display:flex; flex-direction:column; gap:14px; margin-top:16px; }
.xb-comment{ display:flex; gap:12px; }
.xb-comment b{ font-size:13.5px; }
.xb-comment p{ font-size:13.5px; margin-top:2px; }
@media(max-width:860px){
  .xb-learn{ grid-template-columns:1fr; }
  .xb-learn-side{ position:static; }
}
`;
