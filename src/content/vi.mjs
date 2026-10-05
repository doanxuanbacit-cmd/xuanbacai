// NỘI DUNG TIẾNG VIỆT — sửa chữ tại đây rồi chạy `npm run build`
import { SITE } from '../core.mjs';

const SRC = {
  econ: ['Google, Temasek, Bain — e-Conomy SEA 2025', 'https://ven.congthuong.vn/google-vietnam-s-digital-economy-to-reach-usd-39-billion-in-2025-58364.html'],
  hn: ['Sở KH&CN Hà Nội qua VietnamPlus, 2026', 'https://www.vietnamplus.vn/ha-noi-phan-dau-nang-ty-le-trong-kinh-te-so-dat-toi-thieu-22-trong-nam-2026-post1120847.vnp'],
  so: ['Stack Overflow Developer Survey 2025', 'https://stackoverflow.co/company/press/archive/stack-overflow-2025-developer-survey/'],
  meti: ['Bộ Kinh tế, Thương mại & Công nghiệp Nhật Bản (METI), kịch bản nhu cầu cao', 'https://richardkatz.substack.com/p/2025-digital-cliff-part-i'],
  rwa: ['DefiLlama, RWA.xyz qua Cointelegraph, 3/2026', 'https://cointelegraph.com/news/tokenized-rwas-rise-66-percent-2026-defillama'],
  dpp: ['Quy định EU ESPR 2024/1781 — lộ trình DPP', 'https://www.renoon.com/blog/the-timeline-of-digital-product-passport-regulation-in-eu-espr-from-product-groups-to-rollout-schedule'],
};
export { SRC };

export default {
  meta: {
    home: ['Proton ISF — Kỹ nghệ phần mềm bằng AI, hạ tầng tài sản số & GovTech', 'Proton ISF phát triển phần mềm bằng AI (AI-Driven Development), xây hạ tầng token hóa tài sản thực SOVVN Chain và nền tảng GovTech. MVP trong 3–5 tuần, tiết kiệm 55–60% chi phí.'],
    cap: ['Năng lực', 'Bốn trụ cột deep-tech của Proton ISF: AI-Driven Development, RWA Blockchain Layer-0, AI quản trị chuỗi cung ứng và GovTech.'],
    ai: ['AI-Driven Development (AI駆動開発)', 'Quy trình phát triển phần mềm 5 giai đoạn bằng AI Coding Agents dưới sự kiểm soát của kiến trúc sư. MVP 3–5 tuần, dưới 1,5 lỗi/1.000 dòng mã.'],
    eco: ['Hệ sinh thái nền tảng', '7 nền tảng Proton ISF đang vận hành công khai: taisan.xyz, DongScan, Chợ Làng Nghề, chosach.vn. Kiểm tra trạng thái trực tiếp.'],
    proj: ['Dự án tiêu biểu', 'Case study: Chợ Làng Nghề, SOVVN Chain, AI quản trị chuỗi cung ứng dược – mỹ phẩm, chosach.vn.'],
    part: ['Mô hình hợp tác', 'Ba mô hình hợp tác với Proton ISF: AI-Dev Outsourcing & Dedicated Lab, chuyển giao công nghệ, M&A và góp vốn. Bắt đầu bằng PoC 2–3 tuần.'],
    about: ['Giới thiệu', 'Proton ISF — Công ty CP Quỹ Đầu tư Khởi nghiệp Sáng tạo Proton, thành lập 2019 tại Hà Nội. Tầm nhìn, sứ mệnh, ban lãnh đạo và hành lang pháp lý.'],
    ins: ['Insights', 'Góc nhìn của Proton ISF về AI-Driven Development, hộ chiếu số sản phẩm EU và token hóa tài sản thực tại Việt Nam.'],
    contact: ['Liên hệ', 'Đặt lịch trao đổi 30 phút với Proton ISF. Email contact@protonisf.com, điện thoại/Zalo +84 918 281 726.'],
    profile: ['Tải hồ sơ năng lực', 'Nhận hồ sơ năng lực Proton ISF 2026 bản tiếng Việt và tiếng Anh.'],
  },
  ui: { home: 'Trang chủ' },

  home: {
    kicker: 'AI駆動開発 · AI-First Technology Fund',
    h1: 'Kỹ nghệ phần mềm bằng AI cho <em>kỷ nguyên kinh tế số</em>',
    lead: 'Proton ISF phát triển phần mềm bằng AI Coding Agents dưới sự kiểm soát của kiến trúc sư, xây hạ tầng token hóa tài sản thực và vận hành nền tảng GovTech cho doanh nghiệp, chính quyền và đối tác quốc tế.',
    cta1: 'Đặt lịch trao đổi 30 phút',
    cta2: 'Tải hồ sơ năng lực',
    stats: [['4,5×', 'tốc độ bàn giao MVP: 3–5 tuần thay vì 4–6 tháng'], ['55–60%', 'tiết kiệm tổng chi phí sở hữu (TCO)'], ['<1,5', 'lỗi trên 1.000 dòng mã sau go-live'], ['1 = 8–10', 'một kiến trúc sư + AI agents tương đương 8–10 lập trình viên']],
    note: 'Định mức nội bộ trên các dự án đã thực hiện; cam kết cụ thể theo hợp đồng/SLA.',
    partners: 'Đồng hành cùng',
    ps: {
      kicker: '課題と解決 · Nhu cầu → Lời giải',
      title: 'Năm nhu cầu cấp thiết, năm lời giải đã có hệ thống chạy thật',
      text: 'Mỗi lời giải dưới đây gắn với một nền tảng hoặc dự án mà Quý đối tác có thể tự kiểm chứng.',
      head: ['Nhu cầu cấp thiết', 'Lời giải của Proton ISF', 'Giá trị cam kết'],
      rows: [
        ['Thiếu kỹ sư, chi phí phát triển cao', 'Nhật Bản có thể thiếu tới ~790.000 kỹ sư CNTT vào 2030; dự án gia công truyền thống mất 4–6 tháng mới có MVP.', 'Dedicated AI-Dev Lab: một kiến trúc sư trưởng cùng hệ thống AI Coding Agents đa tác tử.', 'MVP 3–5 tuần · TCO giảm 55–60% · bàn giao 100% mã nguồn'],
        ['Vốn khởi nghiệp bị khóa, thiếu thanh khoản', 'Cổ phần khởi nghiệp và tài sản thực khó chuyển nhượng, thường bị khóa 5–10 năm.', 'SOVVN Chain & Dong Protocol: chuẩn token hóa DP-DAS, bảo chứng qua tài khoản phong tỏa, định danh VNeID.', 'Hạ tầng đã chạy mạng chính, có Explorer công khai'],
        ['Làng nghề xuất khẩu qua trung gian', 'EU sẽ yêu cầu hộ chiếu số sản phẩm (DPP) cho nhiều nhóm hàng nhập khẩu.', 'Chợ Làng Nghề: hạ tầng B2B, sàn xuất khẩu, số hóa 3D và cấp DPP on-chain cho từng lô hàng.', 'Dữ liệu sản phẩm theo chuẩn EU ESPR'],
        ['Sản xuất lập kế hoạch thủ công', 'BOM đa cấp, chuẩn GMP và ERP rời rạc gây thiếu nguyên vật liệu và tồn kho ứ đọng.', 'AI SCM/MRP: bóc tách BOM, dự báo Prophet + XGBoost, tối ưu MILP, đồng bộ FAST / SAP / 1C.', 'Đối soát dữ liệu tự động hằng đêm'],
        ['Chính quyền cần mô hình kinh tế số mới', 'Hà Nội đặt mục tiêu kinh tế số đạt 40% GRDP vào năm 2030.', 'Nền tảng GovTech và TMĐT vận hành theo cơ chế thử nghiệm có kiểm soát của Thủ đô.', 'Kiến trúc microservices chịu tải lớn, escrow và hóa đơn điện tử'],
      ],
    },
    proc: { kicker: 'AI駆動開発フレームワーク · Quy trình', title: 'AI thực thi, kiến trúc sư con người kiểm soát', text: 'Năm giai đoạn từ ghi chú nghiệp vụ thô đến hệ thống vận hành. Mỗi đầu ra của AI đều qua review, kiểm thử và phê duyệt của kỹ sư chịu trách nhiệm.', btn: 'Xem chi tiết phương pháp' },
    cmp: { kicker: '定量的開発成果 · So sánh', title: 'Gia công truyền thống và AI-Driven, đặt cạnh nhau', text: 'Cùng một phạm vi dự án, khác biệt nằm ở tốc độ, quy mô đội và mật độ lỗi.' },
    eco: { kicker: 'エコシステム · Bằng chứng sống', title: 'Bảy nền tảng đang vận hành công khai', text: 'Trạng thái được kiểm tra tự động từ máy chủ mỗi 5 phút. Bấm “Kiểm chứng” để tự truy cập từng hệ thống.' },
    cases: { kicker: '導入事例 · Dự án tiêu biểu', title: 'Từ đề án Thủ đô đến hạ tầng chuỗi khối', text: 'Mỗi case study nêu rõ bài toán, kiến trúc, công nghệ và trạng thái thực tế.', all: 'Xem tất cả dự án' },
    market: { kicker: '市場環境 · Bối cảnh 2026', title: 'Ba làn sóng đang hội tụ', text: 'AI thay đổi cách làm phần mềm, tài sản thực lên chuỗi khối và thị trường nhập khẩu đòi hỏi dữ liệu truy xuất cho từng sản phẩm.' },
    models: { kicker: '協業モデル · Hợp tác', title: 'Ba cách làm việc cùng Proton ISF', text: 'Từ nhận phát triển trọn gói đến góp vốn chiến lược. Mọi hợp tác đều có thể bắt đầu nhỏ.' },
    final: {
      kicker: '次のステップ · Bước tiếp theo',
      title: 'Bắt đầu bằng một cuộc trao đổi 30 phút',
      text: 'Cho chúng tôi biết bài toán của Quý đối tác. Chúng tôi phản hồi trong 1 ngày làm việc.',
      road: [['Discovery call 30 phút', 'Trao đổi nhu cầu qua Google Meet hoặc Zoom.'], ['Trình diễn kỹ thuật trực tiếp', 'Live demo SOVVN Chain, DongScan, Chợ Làng Nghề và quy trình AI-Driven.'], ['NDA & dự án thử nghiệm', 'PoC 2–3 tuần trên chính bài toán của Quý đối tác.']],
    },
  },

  pillars: {
    kicker: '事業領域 · Bốn trụ cột năng lực',
    title: 'Bốn trụ cột deep-tech, dùng chung một nền tảng kỹ nghệ AI',
    text: 'Mỗi trụ cột vừa là sản phẩm của Proton ISF, vừa là năng lực có thể triển khai cho đối tác.',
    more: 'Tìm hiểu thêm',
    items: [
      { tag: 'AI駆動開発', title: 'AI-Driven Development', bullets: ['Tự động hóa toàn bộ vòng đời SDLC bằng AI Coding Agents đa tác tử.', 'Dedicated AI-Dev Lab cho doanh nghiệp Nhật Bản và quốc tế.', 'Web, mobile, ERP/CRM/SCM, Web3, AI agents nội bộ.'], ev: '<b>Chỉ số:</b> MVP 3–5 tuần · TCO −55–60% · <1,5 lỗi/KLOC' },
      { tag: 'RWA', title: 'RWA Blockchain Layer-0', bullets: ['SOVVN Chain (Substrate Layer-0) và Dong Protocol do đội ngũ tự phát triển.', 'Chuẩn token hóa DP-DAS (DP-1155) cho cổ phần, tài sản vật lý, sở hữu trí tuệ.', 'wVND bảo chứng qua tài khoản phong tỏa; định danh VNeID.'], ev: '<b>Kiểm chứng:</b> taisan.xyz · dongscan.taisan.xyz' },
      { tag: 'AI SCM / MRP', title: 'Enterprise AI SCM / MRP', bullets: ['Bóc tách BOM đa cấp; dự báo nhu cầu bằng mô hình lai Prophet + XGBoost.', 'Tối ưu phân bổ nhà cung cấp bằng quy hoạch nguyên hỗn hợp (OR-Tools MILP).', 'Đồng bộ hai chiều với FAST, SAP, Oracle, 1C.'], ev: '<b>Ngành phù hợp:</b> dược (GMP) · mỹ phẩm · chế biến · lắp ráp' },
      { tag: 'GovTech', title: 'GovTech & Sandbox', bullets: ['Tham gia xây dựng Đề án ĐMST xuất khẩu số cho làng nghề (QĐ 131/2026/QĐ-UBND).', 'Số hóa 3D và cấp hộ chiếu số sản phẩm (DPP) on-chain.', 'Sàn TMĐT chosach.vn cho xuất bản phẩm.'], ev: '<b>Kiểm chứng:</b> platform.cholangnghe.shop · chosach.vn' },
    ],
  },

  process: [
    ['Kỹ nghệ yêu cầu bằng AI', 'Ghi chú họp, tài liệu thô thành PRD, SRS và user story chuẩn Given–When–Then.', '2 ngày', '4 tuần'],
    ['Thiết kế kiến trúc', 'Lược đồ dữ liệu, đặc tả OpenAPI 3, event bus và microservices.', '12 giờ', '2 tuần'],
    ['AI Coding Agents', 'Mã nguồn theo Clean Architecture, nhiều tác tử phối hợp, kỹ sư review từng pull request.', '2 tuần', '3 tháng'],
    ['Kiểm thử & audit bảo mật', 'Tự sinh Unit/E2E test, độ bao phủ trên 85%, quét OWASP Top 10.', '<1,5 lỗi/KLOC', '8–12 lỗi/KLOC'],
    ['CI/CD & vận hành', 'Docker, Kubernetes tự co giãn, Cloudflare Zero Trust, giám sát 24/7.', 'SLA 99,5%', ''],
  ],

  compare: {
    head: ['Tiêu chí', 'Gia công truyền thống', 'Proton ISF AI-Driven', 'Cải thiện'],
    rows: [['Khảo sát & lập PRD', '3–4 tuần', '2–3 ngày', '~7× nhanh hơn'], ['Bàn giao MVP', '4–6 tháng', '3–5 tuần', '4,5× nhanh hơn'], ['Quy mô đội dự án', '12–18 kỹ sư & kiểm thử', '3–4 kiến trúc sư & chuyên gia AI', 'Tinh gọn 75%'], ['Tổng chi phí (TCO)', '100% định mức', '40–45% định mức', 'Tiết kiệm 55–60%'], ['Mật độ lỗi', '8–12 lỗi/KLOC', '<1,5 lỗi/KLOC', 'Giảm ~80%']],
    note: 'Số liệu là định mức nội bộ của Proton ISF trên các dự án ERP, blockchain và GovTech đã thực hiện; kết quả cụ thể phụ thuộc phạm vi từng dự án và được cam kết trong hợp đồng/SLA.',
  },

  market: [
    ['39 tỷ USD', 'Quy mô GMV kinh tế số Việt Nam năm 2025, tăng 17%, đứng thứ hai Đông Nam Á.', ...SRC.econ],
    ['17,3% → 40%', 'Tỷ trọng kinh tế số trong GRDP Hà Nội năm 2025; mục tiêu tối thiểu 22% năm 2026 và 40% năm 2030.', ...SRC.hn],
    ['84%', 'Lập trình viên đang dùng hoặc dự định dùng công cụ AI trong công việc.', ...SRC.so],
    ['~790.000', 'Kỹ sư CNTT Nhật Bản có thể thiếu hụt vào năm 2030 ở kịch bản nhu cầu cao.', ...SRC.meti],
    ['23,6 tỷ USD', 'Giá trị tài sản thực được token hóa on-chain (3/2026), tăng 66% từ đầu năm.', ...SRC.rwa],
    ['2027', 'Nghĩa vụ hộ chiếu số sản phẩm (DPP) đầu tiên của EU; hệ thống đăng ký DPP vận hành từ 7/2026.', ...SRC.dpp],
  ],

  models: {
    items: [
      { k: 'Mô hình 01', title: 'AI-Dev Outsourcing & Dedicated AI Lab', bullets: ['Phát triển trọn gói Web, App, ERP, SCM, Web3/RWA, AI agents.', 'Lab chuyên trách (ラボ型開発) cho đối tác Nhật Bản và quốc tế.', 'Chuyển giao 100% mã nguồn, tài liệu song ngữ.', 'Báo cáo hằng ngày, SLA hỗ trợ 24/7.'] },
      { k: 'Mô hình 02', title: 'Chuyển giao công nghệ & liên doanh', bullets: ['Bản địa hóa SOVVN Chain và nền tảng token hóa RWA tại thị trường quốc tế.', 'Đưa giải pháp AI MRP/SCM vào chuỗi cung ứng của tập đoàn sản xuất.', 'Đồng phát triển sản phẩm, chia sẻ doanh thu minh bạch.'] },
      { k: 'Mô hình 03', title: 'M&A · Góp vốn chiến lược', bullets: ['Sẵn sàng đàm phán M&A hoặc bán cổ phần chiến lược cho quỹ, tập đoàn công nghệ.', 'Kết hợp tốc độ kỹ nghệ AI và vị thế GovTech tại Việt Nam với vốn và mạng lưới quốc tế.', 'Đồng hành dài hạn.'] },
    ],
    poc: 'Mọi hợp tác đều có thể bắt đầu bằng một dự án thử nghiệm 2–3 tuần sau khi ký thỏa thuận bảo mật (NDA), để Quý đối tác đánh giá năng lực trên chính bài toán của mình trước khi cam kết dài hạn.',
    pocBtn: 'Đề xuất PoC',
  },

  capPage: {
    kicker: '事業領域 · Năng lực',
    title: 'Bốn trụ cột deep-tech trên một nền tảng kỹ nghệ AI',
    lead: 'Phương pháp AI-Driven Development là lớp nền giúp cả bốn trụ cột được xây dựng nhanh, đồng bộ và có chất lượng đo được.',
    aiBtn: 'Phương pháp AI-Driven',
    sections: [
      { tag: 'AI駆動開発', title: 'AI-Driven Development', lead: 'Hệ thống AI Coding Agents đảm nhận phần lớn khối lượng lặp lại trong vòng đời phần mềm; kiến trúc sư chịu trách nhiệm kiến trúc, nghiệp vụ và phê duyệt mọi đầu ra.', chips: ['Claude Code', 'Google Antigravity', 'GitHub Copilot', 'MCP', 'RAG', 'Spec-driven'], link: ['Xem phương pháp chi tiết', 'ai'],
        blocks: [['Phạm vi', ['Web, mobile, PWA', 'ERP / CRM / SCM, tích hợp hệ thống cũ', 'Web3, smart contract, RWA', 'AI agents và trợ lý nội bộ cho doanh nghiệp']], ['Cam kết', ['MVP 3–5 tuần', 'Độ bao phủ kiểm thử trên 85%', 'Chuyển giao 100% mã nguồn và tài liệu']]] },
      { tag: 'RWA', title: 'RWA Blockchain Layer-0', lead: 'SOVVN Chain là mạng Substrate Layer-0 do đội R&D Proton ISF tự phát triển, nền móng cho Dong Protocol và chuẩn token hóa tài sản thực DP-DAS.', chips: ['Substrate (Rust)', 'Polkadot SDK', 'Solidity', 'IPFS', 'VNeID'], link: ['Mở DongScan Explorer', 'https://dongscan.taisan.xyz/'],
        blocks: [['Thành phần', ['SOVVN Chain — Chain ID 21091981', 'Dong Protocol & RWA Launchpad (app.taisan.xyz)', 'DongScan Block Explorer công khai', 'Sách trắng kỹ thuật v9.0']], ['Cơ chế', ['wVND bảo chứng 1:1 qua tài khoản phong tỏa tại ngân hàng', 'Chuẩn DP-DAS (DP-1155) cho đa loại tài sản', 'KYC/AML qua định danh VNeID']]] },
      { tag: 'AI SCM / MRP', title: 'Enterprise AI SCM / MRP', lead: 'Động cơ lập kế hoạch nguyên vật liệu cho doanh nghiệp sản xuất có công thức nhiều cấp và tiêu chuẩn chất lượng nghiêm ngặt.', chips: ['Python', 'Prophet', 'XGBoost', 'OR-Tools', '.NET 8', 'FastAPI'], link: ['Xem case study', 'p-scm'],
        blocks: [['Chức năng', ['Bóc tách BOM đa cấp, tính nhu cầu ròng', 'Dự báo nhu cầu, tồn kho an toàn động theo lead-time', 'Phân bổ nhà cung cấp tối ưu bằng MILP', 'Theo dõi hạn dùng, hạn kiểm nghiệm lại, tồn cách ly']], ['Tích hợp', ['FAST Business Online, SAP, Oracle, 1C', 'Đồng bộ hai chiều có khóa idempotency', 'Đối soát tự động hằng đêm']]] },
      { tag: 'GovTech', title: 'GovTech & Sandbox', lead: 'Nền tảng phục vụ mục tiêu kinh tế số của Thủ đô: xuất khẩu số cho làng nghề và thương mại điện tử chuyên ngành.', chips: ['Microservices', 'Go', '.NET 8', 'Escrow', 'DPP', '3D scanning'], link: ['Xem dự án Chợ Làng Nghề', 'p-cln'],
        blocks: [['Nền tảng', ['platform.cholangnghe.shop — hạ tầng B2B làng nghề', 'cholangnghe.shop — sàn xuất khẩu', 'chosach.vn — sàn TMĐT xuất bản phẩm']], ['Năng lực', ['Số hóa 3D và Digital Twins sản phẩm thủ công', 'Hộ chiếu số sản phẩm (DPP) on-chain', 'Escrow, hóa đơn điện tử, API logistics']]] },
    ],
    stack: {
      kicker: '技術スタック · Công nghệ', title: 'Ngăn xếp công nghệ cấp doanh nghiệp', text: 'Mỗi tầng đều có công cụ AI gia tốc tương ứng.',
      head: ['Phân tầng', 'Công nghệ cốt lõi', 'Công cụ AI gia tốc'],
      rows: [['AI / ML', 'Python, PyTorch, scikit-learn, Prophet, XGBoost, OR-Tools, LangGraph', 'Claude Code, Google Antigravity, MCP, RAG trên mã nguồn'], ['Backend & API', '.NET 8 (Clean Architecture), FastAPI, NestJS, Go, Rust (Substrate)', 'Lập trình đa tác tử, GitHub Copilot, tự sinh unit test'], ['Frontend & di động', 'React 19, Next.js, TanStack, TypeScript, Tailwind CSS, Flutter, PWA', 'Sinh component bằng AI, kiểm thử giao diện tự động'], ['Dữ liệu', 'PostgreSQL 16, Redis, MinIO (S3), Supabase', 'Tối ưu lược đồ, phân tích execution plan'], ['Blockchain & RWA', 'Substrate Layer-0, Polkadot SDK, Solidity, IPFS', 'Slither, Mythril, OpenZeppelin'], ['Bảo mật & DevOps', 'Docker, Kubernetes, GitHub Actions, Cloudflare Zero Trust, SonarQube', 'Quét VAPT tự động, OWASP Top 10, cảnh báo Prometheus']],
    },
  },

  ai: {
    kicker: 'AI駆動開発 · AI-Driven Development',
    title: 'Phát triển phần mềm nhanh gấp 4,5 lần, chi phí giảm 55–60%',
    lead: 'Hệ thống AI Coding Agents đảm nhận phân tích yêu cầu, thiết kế, viết mã, kiểm thử và triển khai. Kiến trúc sư con người kiểm soát và phê duyệt mọi đầu ra.',
    figs: [['3–5 tuần', 'bàn giao MVP thay vì 4–6 tháng'], ['−55–60%', 'tổng chi phí sở hữu'], ['<1,5', 'lỗi trên 1.000 dòng mã'], ['>85%', 'độ bao phủ kiểm thử tự động'], ['100%', 'mã nguồn & tài liệu bàn giao']],
    proc: {
      kicker: 'Quy trình 5 giai đoạn', title: 'Từ ghi chú thô đến hệ thống vận hành', text: 'Mỗi giai đoạn có tác tử AI chuyên biệt và điểm kiểm soát của con người.',
      steps: [
        ['Kỹ nghệ yêu cầu', '2 ngày', '4 tuần', ['Ghi chú họp, tài liệu thô → PRD, SRS', 'User story chuẩn Given–When–Then', 'Khách hàng duyệt đặc tả trước khi code']],
        ['Thiết kế kiến trúc', '12 giờ', '2 tuần', ['Lược đồ dữ liệu, đặc tả OpenAPI 3', 'Event bus, microservices, phân quyền', 'Kiến trúc sư trưởng phê duyệt']],
        ['AI Coding Agents', '2 tuần', '3 tháng', ['Nhiều tác tử phối hợp theo Clean Architecture', 'Review từng pull request', 'Đối chiếu liên tục với đặc tả']],
        ['Kiểm thử & bảo mật', '<1,5 lỗi/KLOC', '8–12 lỗi/KLOC', ['Tự sinh Unit/E2E test, coverage >85%', 'Phân tích tĩnh, quét phụ thuộc và bí mật', 'Kiểm tra OWASP Top 10']],
        ['CI/CD & vận hành', 'SLA 99,5%', '', ['Docker, Kubernetes tự co giãn', 'Cloudflare Zero Trust', 'Giám sát, cảnh báo 24/7']],
      ],
    },
    stack: {
      kicker: 'Nền tảng AI 2026', title: 'Công nghệ AI chúng tôi đang dùng hằng ngày', text: 'Công cụ được chọn theo bài toán; dữ liệu khách hàng luôn nằm trong phạm vi bảo mật đã thỏa thuận.',
      items: [
        ['cpu', 'Agentic coding đa tác tử', 'Claude Code, GitHub Copilot agent mode, Google Antigravity tự lập kế hoạch, viết mã, chạy test và sửa lỗi theo vòng lặp, dưới sự giám sát của kỹ sư.'],
        ['plug', 'Model Context Protocol (MCP)', 'Chuẩn mở kết nối AI agent với kho mã, cơ sở dữ liệu, ERP và công cụ nội bộ, có kiểm soát quyền truy cập.'],
        ['doc', 'Spec-driven development', 'PRD, SRS và OpenAPI là nguồn sự thật; mã nguồn, test và tài liệu được sinh và đối chiếu liên tục với đặc tả.'],
        ['search', 'RAG trên tri thức dự án', 'Truy hồi ngữ cảnh từ mã nguồn, tài liệu nghiệp vụ và lịch sử dự án để agent hiểu đúng hệ thống của từng khách hàng.'],
        ['shield', 'AI review & bảo mật mã', 'Review tự động mỗi pull request, phân tích tĩnh (SonarQube, Slither), quét phụ thuộc và bí mật trước khi hợp nhất.'],
        ['gauge', 'Đo lường năng suất', 'Theo dõi lead time, mật độ lỗi, độ bao phủ test theo từng sprint và báo cáo minh bạch cho khách hàng.'],
      ],
    },
    lab: {
      kicker: 'ラボ型開発 · Dedicated AI-Dev Lab', title: 'Một đội tinh gọn, năng suất của cả một phòng phát triển',
      text: 'Lab chuyên trách cho từng đối tác: kiến trúc sư trưởng, chuyên gia nghiệp vụ và hệ thống AI agents được cấu hình riêng cho mã nguồn của Quý đối tác.',
      eq: 'Một kiến trúc sư trưởng + AI agents ≈ năng suất 8–10 lập trình viên',
      bullets: ['<b>Hợp đồng linh hoạt:</b> trọn gói (請負) hoặc theo năng lực (準委任).', '<b>Giao tiếp:</b> tài liệu song ngữ, họp định kỳ theo giờ Nhật Bản (JST).', '<b>Minh bạch:</b> báo cáo hằng ngày, mã nguồn trên GitHub/GitLab của khách hàng.', '<b>Co giãn:</b> tăng giảm quy mô theo giai đoạn dự án.'],
      btn: 'Xem mô hình hợp tác',
    },
    gov: {
      kicker: 'Quản trị AI có trách nhiệm', title: 'Tốc độ không đánh đổi an toàn', text: 'Quy trình tuân thủ Luật Trí tuệ nhân tạo 134/2025/QH15 và yêu cầu bảo mật của khách hàng.',
      bullets: ['<b>Con người chịu trách nhiệm cuối:</b> mọi thay đổi mã đều có kỹ sư review và phê duyệt.', '<b>Bảo mật mã nguồn & IP:</b> ký NDA trước khi tiếp cận; quyền sở hữu trí tuệ thuộc khách hàng.', '<b>Truy vết:</b> nhật ký hoạt động của agent và lịch sử thay đổi đầy đủ.', '<b>Phân loại rủi ro:</b> đánh giá rủi ro AI theo từng hệ thống, ghi nhãn nội dung do AI tạo khi cần.', '<b>Kiểm soát dữ liệu:</b> dữ liệu khách hàng chỉ dùng trong phạm vi dự án đã thỏa thuận.'],
      callout: '<b>Cam kết bằng chỉ số, không bằng lời.</b> Mật độ lỗi, độ bao phủ test và thời gian bàn giao được ghi vào hợp đồng hoặc SLA, và đo lại sau mỗi giai đoạn.',
    },
    faqTitle: 'Câu hỏi thường gặp từ doanh nghiệp Nhật Bản',
    faqText: 'Những điều đối tác thường hỏi trước khi bắt đầu một dự án thử nghiệm.',
    faq: [
      ['Mã nguồn và sở hữu trí tuệ được bảo vệ thế nào?', 'Chúng tôi ký NDA trước khi tiếp cận bất kỳ tài liệu nào. Toàn bộ quyền sở hữu trí tuệ đối với sản phẩm thuộc về khách hàng; mã nguồn được lưu trên kho của khách hàng hoặc kho riêng có phân quyền.'],
      ['AI viết mã thì chất lượng có ổn định không?', 'AI chỉ là lực lượng thực thi. Kiến trúc sư phê duyệt thiết kế, mỗi pull request đều được review, test tự động có độ bao phủ trên 85% và phân tích tĩnh chạy trước khi hợp nhất. Mật độ lỗi mục tiêu dưới 1,5 lỗi/1.000 dòng mã.'],
      ['Giao tiếp và múi giờ xử lý ra sao?', 'Việt Nam chênh Nhật Bản 2 giờ. Chúng tôi họp định kỳ theo giờ JST, tài liệu đặc tả và báo cáo song ngữ, có đầu mối liên lạc cố định cho từng dự án.'],
      ['Hình thức hợp đồng nào phù hợp?', 'Hợp đồng trọn gói (請負契約) cho phạm vi rõ ràng, hoặc hợp đồng theo năng lực (準委任契約) cho mô hình Lab dài hạn. Có thể bắt đầu bằng PoC 2–3 tuần.'],
      ['Báo cáo tiến độ như thế nào?', 'Báo cáo hằng ngày ngắn gọn, demo cuối mỗi sprint, bảng chỉ số chất lượng (lead time, lỗi, coverage) cập nhật liên tục.'],
    ],
  },

  ecoPage: {
    kicker: 'エコシステム · Hệ sinh thái', title: 'Năng lực được chứng minh bằng hệ thống đang chạy',
    lead: 'Mỗi nền tảng dưới đây do Proton ISF xây dựng và vận hành. Quý đối tác có thể truy cập trực tiếp để kiểm chứng.',
    liveK: 'Trạng thái trực tiếp', liveT: 'Bảy nền tảng, kiểm tra tự động', liveP: 'Máy chủ kiểm tra từng nền tảng định kỳ và trả về mã phản hồi, độ trễ. Lần kiểm tra gần nhất:',
    chain: {
      kicker: 'SOVVN Chain', title: 'Thông số mạng lưới', text: 'Hạ tầng Layer-0 do đội R&D Proton ISF phát triển trên Substrate.',
      kv: [['Tên mạng', 'SOVVN Chain — Substrate Layer-0'], ['Chain ID', '21091981'], ['Đồng thuận', 'Proof-of-Deposit, phí giao dịch tiệm cận 0'], ['Ngôn ngữ', 'Rust (Substrate)'], ['Token quản trị', 'DONG — tổng cung cố định 10 tỷ'], ['Tài liệu', 'Sách trắng kỹ thuật v9.0']],
      mech: [['wVND bảo chứng 1:1', 'Bảo chứng bằng VND lưu ký tại tài khoản phong tỏa; bằng chứng dự trữ hiển thị on-chain.'], ['Chuẩn DP-DAS', 'Chuẩn token hóa đa tài sản DP-1155 cho cổ phần, hàng thủ công, nông sản, sở hữu trí tuệ.'], ['Định danh VNeID', 'KYC/AML qua định danh điện tử trước khi giao dịch.'], ['Thanh khoản thứ cấp', 'Chuyển nhượng cổ phần khởi nghiệp minh bạch trên thị trường thứ cấp.']],
      note: 'Khung pháp lý định hướng: Luật Công nghiệp Công nghệ số 71/2025/QH15 và Nghị quyết 05/2025/NQ-CP về thí điểm thị trường tài sản mã hóa. Thông tin trên trang không phải lời mời đầu tư.',
    },
    how: {
      kicker: 'Cách kiểm chứng', title: 'Ba cách tự đánh giá năng lực', text: '',
      items: [['globe', 'Truy cập trực tiếp', 'Mở từng nền tảng, trải nghiệm luồng người dùng thật.'], ['search', 'Đọc dữ liệu on-chain', 'Tra cứu khối, giao dịch và hợp đồng trên DongScan Explorer.'], ['users', 'Đặt lịch demo kỹ thuật', 'Kỹ sư của chúng tôi trình bày kiến trúc và mã nguồn trực tiếp.']],
    },
  },

  projPage: { kicker: '導入事例 · Dự án', title: 'Dự án tiêu biểu', lead: 'Bài toán, kiến trúc, công nghệ và trạng thái thực tế của từng dự án.', note: 'Một số dự án trình bày ở mức khái quát theo thỏa thuận bảo mật với khách hàng.' },
  caseLabels: { context: 'Bối cảnh', problem: 'Bài toán', solution: 'Giải pháp & kiến trúc', archCap: 'Sơ đồ kiến trúc khái quát', ai: 'Dấu ấn AI-Driven', status: 'Trạng thái & kiểm chứng' },
  cases: [
    {
      key: 'p-cln', kind: 'cln', cat: 'GovTech · Xuất khẩu số', title: 'Chợ Làng Nghề — hạ tầng xuất khẩu số cho làng nghề Việt', short: 'Chợ Làng Nghề', metaTitle: 'Chợ Làng Nghề — case study',
      sum: 'Hạ tầng B2B, sàn xuất khẩu và hộ chiếu số sản phẩm on-chain cho gốm Bát Tràng và các làng nghề Hà Nội.', meta: 'Đề án ĐMST · QĐ 131/2026',
      page: {
        title: 'Chợ Làng Nghề: đưa tinh hoa làng nghề Việt ra thị trường quốc tế bằng dữ liệu số', lead: 'Hợp phần của Đề án đổi mới sáng tạo phát triển xuất khẩu số cho làng nghề theo Quyết định 131/2026/QĐ-UBND của UBND TP. Hà Nội, do Proton ISF tham gia xây dựng.',
        figs: [['65 tỷ đ', 'quy mô đề án'], ['1.350', 'làng nghề là đối tượng thụ hưởng'], ['1.000', 'hộ chiếu số DPP Bát Tràng (mục tiêu giai đoạn đầu)'], ['JP · EU · US', 'thị trường đích']],
        context: ['Hà Nội là địa phương có số làng nghề lớn nhất cả nước. Phần lớn sản phẩm thủ công xuất khẩu vẫn đi qua nhiều tầng trung gian, nghệ nhân nhận phần giá trị nhỏ và thiếu dữ liệu nguồn gốc mà các thị trường khó tính đòi hỏi.', 'Từ 2027, EU bắt đầu áp dụng nghĩa vụ hộ chiếu số sản phẩm cho các nhóm hàng đầu tiên, tạo áp lực và cơ hội số hóa cho hàng xuất khẩu.'],
        problem: ['Xuất khẩu phụ thuộc trung gian, nghệ nhân không tiếp cận trực tiếp người mua quốc tế.', 'Thiếu dữ liệu truy xuất nguồn gốc, chất liệu, nghệ nhân cho từng sản phẩm.', 'Tạo mẫu mới thủ công mất nhiều tháng.', 'Thanh toán buôn thiếu cơ chế đảm bảo cho cả hai bên.'],
        solTitle: 'Ba lớp: giao dịch B2B, bán lẻ xuyên biên giới và dữ liệu on-chain',
        solution: ['<b>platform.cholangnghe.shop:</b> số hóa xưởng, phân bổ đơn hàng cho hợp tác xã và nghệ nhân, chứng từ điện tử.', '<b>cholangnghe.shop:</b> bán lẻ xuyên biên giới, đa tiền tệ VND/JPY/USD, thanh toán quốc tế.', '<b>Escrow:</b> tiền mua buôn được khóa tại ngân hàng và giải phóng khi nghiệm thu.', '<b>DPP on-chain:</b> mỗi lô hàng có hộ chiếu số trên SOVVN Chain, quét QR/NFC để xem nguồn gốc, nghệ nhân, mô hình 3D.', '<b>Số hóa 3D:</b> quét 3D tác phẩm tại lò gốm, lưu Digital Twins, rút ngắn tạo phôi mẫu mới.'],
        tech: ['Microservices', 'PostgreSQL', 'SOVVN Chain', 'Quét 3D', 'QR / NFC', 'Escrow API'],
        arch: [['Người dùng', ['Nghệ nhân · HTX', 'Nhà nhập khẩu', 'Người mua lẻ']], ['Nền tảng', ['B2B Platform', 'Sàn xuất khẩu', 'Trung tâm 3D']], ['Hạ tầng', ['SOVVN Chain\nDPP', 'Ngân hàng\nEscrow', 'Logistics\nAPI']]],
        ai: 'Toàn bộ user story chuẩn Given–When–Then, kiến trúc dữ liệu, API liên thông và hồ sơ dự toán chi tiết của hợp phần số hóa 3D được hoàn thiện bằng quy trình AI-Driven Development.',
        status: ['Hai nền tảng B2B và sàn xuất khẩu đang truy cập công khai.', 'Hợp phần trung tâm số hóa 3D và cấp DPP Bát Tràng triển khai theo tiến độ đề án.', 'Liên minh triển khai gồm ngân hàng, đơn vị logistics, đối tác KH&CN và chính quyền địa phương.'],
        links: [['platform.cholangnghe.shop', 'https://platform.cholangnghe.shop/'], ['cholangnghe.shop', 'https://cholangnghe.shop/']],
      },
    },
    {
      key: 'p-sovvn', kind: 'sovvn', cat: 'Blockchain · RWA', title: 'SOVVN Chain & Dong Protocol — hạ tầng token hóa tài sản thực', short: 'SOVVN Chain', metaTitle: 'SOVVN Chain & Dong Protocol — case study',
      sum: 'Mạng Substrate Layer-0 tự phát triển, RWA Launchpad và Block Explorer công khai.', meta: 'Mạng chính · Chain ID 21091981',
      page: {
        title: 'SOVVN Chain: hạ tầng Layer-0 cho token hóa tài sản thực tại Việt Nam', lead: 'Mạng chuỗi khối Substrate Layer-0 do đội R&D Proton ISF phát triển, nền móng cho Dong Protocol, chuẩn tài sản số DP-DAS và RWA Launchpad.',
        figs: [['Layer-0', 'kiến trúc Substrate'], ['21091981', 'Chain ID'], ['~0', 'phí giao dịch'], ['v9.0', 'sách trắng kỹ thuật']],
        context: ['Vốn đầu tư khởi nghiệp và nhiều loại tài sản thực tại Việt Nam có thanh khoản thấp: cổ phần bị khóa nhiều năm, tài sản vật lý khó chia nhỏ và chuyển nhượng.', 'Thị trường tài sản thực token hóa toàn cầu đang tăng nhanh, trong khi Việt Nam bắt đầu hình thành khung pháp lý cho tài sản số.'],
        problem: ['Thiếu hạ tầng chuỗi khối chủ quyền, chi phí giao dịch thấp.', 'Cần cơ chế bảo chứng minh bạch giữa tài sản số và tiền pháp định.', 'Yêu cầu định danh và chống rửa tiền chặt chẽ.', 'Cần chuẩn token hóa áp dụng cho nhiều loại tài sản.'],
        solTitle: 'Từ mạng lõi đến ứng dụng phát hành',
        solution: ['<b>SOVVN Chain:</b> Substrate Layer-0, đồng thuận Proof-of-Deposit, phí giao dịch tiệm cận 0.', '<b>Dong Protocol:</b> giao thức phát hành và quản lý tài sản số.', '<b>DP-DAS (DP-1155):</b> chuẩn token hóa đa tài sản cho cổ phần, hàng thủ công cao cấp, nông sản, sở hữu trí tuệ.', '<b>wVND:</b> bảo chứng 1:1 bằng VND lưu ký tại tài khoản phong tỏa, bằng chứng dự trữ on-chain.', '<b>VNeID:</b> định danh điện tử cho KYC/AML.'],
        tech: ['Rust', 'Substrate', 'Polkadot SDK', 'Solidity', 'IPFS', 'OpenZeppelin'],
        arch: [['Ứng dụng', ['taisan.xyz', 'RWA Launchpad', 'DongScan']], ['Giao thức', ['Dong Protocol', 'DP-DAS', 'wVND']], ['Hạ tầng', ['SOVVN Chain\nSubstrate L0', 'VNeID\nKYC/AML', 'Ngân hàng\nlưu ký']]],
        ai: 'Smart contract được kiểm tra bằng Slither, Mythril và bộ test tự sinh; tài liệu kỹ thuật và sách trắng được duy trì song song với mã nguồn theo quy trình spec-driven.',
        status: ['Mạng chính đang hoạt động, Block Explorer công khai.', 'RWA Launchpad truy cập được tại app.taisan.xyz.', 'Khung pháp lý định hướng: Luật CN Công nghệ số 71/2025/QH15, Nghị quyết 05/2025/NQ-CP. Trang này không phải lời mời đầu tư.'],
        links: [['taisan.xyz', 'https://taisan.xyz/'], ['DongScan', 'https://dongscan.taisan.xyz/'], ['Whitepaper', 'https://taisan.xyz/whitepaper']],
      },
    },
    {
      key: 'p-scm', kind: 'scm', cat: 'Enterprise AI · SCM', title: 'AI quản trị chuỗi cung ứng cho doanh nghiệp dược – mỹ phẩm', short: 'AI SCM', metaTitle: 'AI SCM/MRP cho dược – mỹ phẩm — case study',
      sum: 'Lập kế hoạch mua hàng, theo dõi sản xuất và quản lý nhà cung cấp tích hợp FAST ERP.', meta: 'PRD 8 phân hệ trong 4 ngày',
      page: {
        title: 'AI SCM/MRP: lập kế hoạch nguyên vật liệu cho sản xuất đạt chuẩn GMP', lead: 'Giải pháp lập kế hoạch mua hàng, theo dõi sản xuất và quản lý nhà cung cấp cho một doanh nghiệp dược – mỹ phẩm, tích hợp hai chiều với FAST Business Online.',
        figs: [['4 ngày', 'PRD 8 phân hệ, kiến trúc & giải thuật'], ['8', 'phân hệ nghiệp vụ'], ['2 chiều', 'đồng bộ với FAST ERP'], ['00:00', 'đối soát tự động hằng đêm']],
        context: ['Doanh nghiệp dược – mỹ phẩm làm việc với hàng trăm nhà cung cấp và hàng nghìn mã nguyên vật liệu, bao bì; mỗi sản phẩm có công thức nhiều cấp.', 'Chuẩn GMP đòi hỏi quản lý chặt hạn dùng, hạn kiểm nghiệm lại và hàng chờ kiểm định.'],
        problem: ['Lập kế hoạch thủ công trên bảng tính, dễ thiếu nguyên vật liệu hoặc tồn kho ứ đọng.', 'BOM nhiều cấp khó tính nhu cầu ròng chính xác.', 'Dữ liệu ERP và kế hoạch sản xuất không đồng bộ.'],
        solTitle: 'Động cơ MRP có dự báo và tối ưu hóa',
        solution: ['<b>Bóc tách BOM đa cấp</b> và tính nhu cầu ròng tự động.', '<b>Dự báo nhu cầu</b> bằng mô hình lai Prophet + XGBoost; tồn kho an toàn động theo lead-time.', '<b>Phân bổ nhà cung cấp</b> tối ưu bằng OR-Tools MILP theo giá, năng lực, thời gian giao.', '<b>Tích hợp FAST</b> hai chiều có khóa idempotency, đối soát hằng đêm.'],
        tech: ['.NET 8', 'Clean Architecture', 'Python FastAPI', 'Prophet', 'XGBoost', 'OR-Tools', 'PostgreSQL'],
        arch: [['Nguồn dữ liệu', ['FAST ERP', 'Kế hoạch SX', 'Nhà cung cấp']], ['Động cơ AI', ['BOM & MRP', 'Dự báo', 'Tối ưu MILP']], ['Đầu ra', ['Đề xuất\nmua hàng', 'Cảnh báo\nhạn dùng', 'Báo cáo\nquản trị']]],
        ai: 'Bộ PRD 8 phân hệ, kiến trúc kỹ thuật và giải thuật được hoàn thành trong <b>4 ngày làm việc</b>, so với 4–6 tuần theo cách làm truyền thống.',
        status: ['Hoàn thành giai đoạn đặc tả: PRD, kiến trúc và giải thuật.', 'Thông tin khách hàng được trình bày khái quát theo thỏa thuận bảo mật.'],
        links: [],
      },
    },
    {
      key: 'p-chosach', kind: 'chosach', cat: 'GovTech · E-commerce', title: 'chosach.vn — sàn TMĐT xuất bản phẩm', short: 'chosach.vn', metaTitle: 'chosach.vn — case study',
      sum: 'Định danh xuất bản phẩm chống sách lậu, escrow và hóa đơn điện tử trên kiến trúc microservices.', meta: 'Đang vận hành',
      page: {
        title: 'chosach.vn: thương mại điện tử minh bạch cho ngành xuất bản', lead: 'Sàn thương mại điện tử chuyên ngành xuất bản phẩm, xây trên kiến trúc microservices chịu tải lớn, phục vụ mục tiêu kinh tế số của Thủ đô.',
        figs: [['<50 ms', 'mục tiêu độ trễ phản hồi API'], ['Microservices', 'Go & .NET 8'], ['Escrow', 'bảo vệ người mua'], ['e-Invoice', 'hóa đơn điện tử tự động']],
        context: ['Ngành xuất bản chịu thiệt hại lớn từ sách lậu và thiếu kênh phân phối số minh bạch giữa nhà xuất bản, nhà phát hành và người đọc.'],
        problem: ['Khó xác thực bản quyền từng ấn phẩm.', 'Doanh thu chia giữa các bên thiếu minh bạch.', 'Đối soát hóa đơn và vận chuyển thủ công.'],
        solTitle: 'Định danh, ký quỹ và tự động hóa đối soát',
        solution: ['<b>Định danh xuất bản phẩm:</b> mã duy nhất cho từng ấn phẩm, truy xuất bản quyền tới nhà xuất bản và tác giả.', '<b>Escrow & chia sẻ doanh thu</b> tức thì giữa nhà bán lẻ và nhà xuất bản.', '<b>Hóa đơn điện tử</b> và API thời gian thực với đơn vị chuyển phát.', '<b>Microservices</b> sẵn sàng mở rộng khi lưu lượng tăng.'],
        tech: ['Go', '.NET 8', 'PostgreSQL', 'Redis', 'Kubernetes', 'e-Invoice API'],
        arch: [['Người dùng', ['Người đọc', 'Nhà sách', 'Nhà xuất bản']], ['Dịch vụ', ['Catalog & ID', 'Đơn hàng\nEscrow', 'Hóa đơn\nLogistics']], ['Hạ tầng', ['PostgreSQL', 'Redis', 'Kubernetes']]],
        ai: 'Các dịch vụ mới được đặc tả, sinh mã và kiểm thử theo quy trình AI-Driven, giúp đội ngũ nhỏ duy trì nhiều microservices.',
        status: ['Đang vận hành công khai tại chosach.vn.', SITE.sandboxDecree ? `Tham gia cơ chế thử nghiệm có kiểm soát theo ${SITE.sandboxDecree}.` : 'Đóng góp vào mục tiêu phát triển kinh tế số của Thủ đô.'],
        links: [['chosach.vn', 'https://chosach.vn/']],
      },
    },
  ],

  partPage: {
    kicker: '協業モデル · Hợp tác', title: 'Hợp tác linh hoạt, bắt đầu từ một dự án thử nghiệm', lead: 'Ba mô hình phù hợp với doanh nghiệp cần phát triển phần mềm, tập đoàn cần công nghệ và nhà đầu tư cần cơ hội.',
    flow: { kicker: 'Quy trình', title: 'Từ cuộc gọi đầu tiên đến hợp đồng dài hạn', text: '', steps: [['Discovery call', 'Trao đổi 30 phút về bài toán và kỳ vọng.', 'Tuần 0', ''], ['Demo kỹ thuật', 'Trình diễn hệ thống thật và quy trình AI-Driven.', 'Tuần 1', ''], ['NDA & đề xuất', 'Ký NDA, gửi đề xuất phạm vi PoC.', 'Tuần 1–2', ''], ['PoC 2–3 tuần', 'Giải bài toán thật, đo bằng chỉ số đã thống nhất.', 'Tuần 2–5', ''], ['Hợp đồng chính thức', 'Trọn gói, Lab dài hạn, liên doanh hoặc đầu tư.', 'Sau PoC', '']] },
    commit: { kicker: 'Cam kết', title: 'Điều Quý đối tác nhận được', text: '', items: [['code', 'Toàn quyền mã nguồn', '100% mã nguồn, tài liệu và quyền sở hữu trí tuệ thuộc về khách hàng.'], ['gauge', 'Chỉ số đo được', 'Thời gian bàn giao, mật độ lỗi, độ bao phủ test ghi trong hợp đồng/SLA.'], ['globe', 'Làm việc song ngữ', 'Tài liệu và báo cáo tiếng Việt, tiếng Anh; hỗ trợ tiếng Nhật cho đối tác Nhật Bản.'], ['lock', 'Bảo mật', 'NDA trước mọi trao đổi tài liệu, phân quyền truy cập theo vai trò.'], ['bolt', 'Phản hồi nhanh', 'Phản hồi trong 1 ngày làm việc, SLA hỗ trợ 24/7 sau go-live.'], ['users', 'Đầu mối cố định', 'Một kiến trúc sư trưởng chịu trách nhiệm xuyên suốt dự án.']] },
    partners: { kicker: '戦略的パートナー · Mạng lưới', title: 'Đồng hành cùng định chế và doanh nghiệp', text: '', groups: [['Cơ quan nhà nước', ['UBND TP. Hà Nội', 'Sở KH&CN Hà Nội', 'UBND xã Bát Tràng']], ['Ngân hàng & logistics', ['Ngân hàng TMCP Á Châu (ACB)', 'Viettel Post']], ['Phần mềm doanh nghiệp', ['FAST Software', '1C Vietnam']], ['Khoa học & công nghệ', ['CTCP Công nghệ Oritech', 'Liên minh chuyên gia Substrate']]], note: 'Danh sách thể hiện các đơn vị liên quan trong các dự án và đề án Proton ISF tham gia.' },
  },

  aboutPage: {
    kicker: '企業概要 · Giới thiệu', title: 'Từ quỹ đầu tư khởi nghiệp sáng tạo đến tổ hợp công nghệ AI-First', lead: 'Thành lập năm 2019 tại Hà Nội, Proton ISF kết hợp tư duy đầu tư, năng lực kỹ nghệ AI và hiểu biết sâu về thể chế để xây dựng các nền tảng số có tác động thực.',
    legalK: 'Thông tin pháp nhân', legalT: 'Doanh nghiệp',
    kv: [['Tên doanh nghiệp', SITE.legal], ['Tên giao dịch', `${SITE.legalEn} (Proton ISF., JSC)`], ['Mã số thuế', `${SITE.taxId} — cấp lần đầu 28/10/2019`], ['Trụ sở', SITE.address], ['Chủ tịch HĐQT', 'Ông Ngô Hoàng Quyền'], ['Tổng Giám đốc', 'Ông Doãn Xuân Bắc'], ['Lĩnh vực', 'Phát triển phần mềm bằng AI · Blockchain & token hóa tài sản thực · AI quản trị chuỗi cung ứng · GovTech & TMĐT · Đầu tư đổi mới sáng tạo']],
    vision: { kicker: 'ビジョン · Tầm nhìn 2030', text: 'Trở thành Venture Studio và trung tâm kỹ nghệ phần mềm bằng AI hàng đầu Đông Nam Á, nơi tài sản thực, dữ liệu và trí tuệ nhân tạo cùng tạo ra giá trị kinh tế bền vững.', points: ['Hạ tầng Layer-0 SOVVN Chain kết nối vốn mạo hiểm với tài sản thực.', 'Mạng lưới xuất khẩu số đưa sản phẩm làng nghề Việt tới Nhật Bản, EU và Hoa Kỳ.', 'Đồng hành cùng doanh nghiệp sản xuất tối ưu chuỗi cung ứng bằng AI.'] },
    mission: { kicker: '使命 · Sứ mệnh', title: 'Bốn sứ mệnh', items: [['Giải phóng kỹ sư phần mềm', 'AI đảm nhận tác vụ lặp lại để đội ngũ tập trung vào kiến trúc, nghiệp vụ và đổi mới.'], ['Khơi thông thanh khoản đầu tư', 'Chuẩn token hóa tài sản thực giúp vốn khởi nghiệp không còn bị khóa nhiều năm.'], ['Gìn giữ và nâng tầm di sản', 'Số hóa 3D và hộ chiếu số sản phẩm cho làng nghề truyền thống.'], ['Phục vụ chuyển đổi số Thủ đô', 'Hiện thực hóa các đề án đổi mới sáng tạo theo Luật Thủ đô.']] },
    values: { kicker: 'コアバリュー · Giá trị cốt lõi', title: 'Bốn giá trị', items: [['Tốc độ', 'Speed', ['MVP 3–5 tuần', 'Rút ngắn 60–75% chu kỳ phát triển']], ['Hiệu quả', 'Efficiency', ['TCO giảm 55–60%', 'Hợp tác trực tiếp, không trung gian']], ['Chất lượng đo được', 'Quality', ['<1,5 lỗi/KLOC', 'Coverage >85%, OWASP Top 10']], ['Minh bạch', 'Trust', ['Tuân thủ pháp luật Việt Nam', 'Ký quỹ qua tài khoản phong tỏa']]] },
    tl: { kicker: '沿革 · Cột mốc', title: 'Hành trình phát triển', items: [['2019', 'Thành lập quỹ ĐMST', 'Đăng ký doanh nghiệp tại Hà Nội, hoạt động theo NĐ 38/2018/NĐ-CP; ươm tạo dự án công nghệ số.'], ['2021–23', 'TMĐT chuyên ngành', 'Phát triển chosach.vn; làm chủ kiến trúc microservices chịu tải cao.'], ['2024–25', 'Hạ tầng RWA', 'SOVVN Chain lên mạng chính; ra mắt taisan.xyz, Launchpad, DongScan, sách trắng v9.0.'], ['2026', 'Kỷ nguyên AI-First', 'Chuẩn hóa AI-Driven Development; tham gia Đề án ĐMST xuất khẩu số làng nghề; vận hành Chợ Làng Nghề.']] },
    team: { kicker: 'キーパーソン · Ban lãnh đạo', title: 'Đầu tư, thực thi và học thuật trong một đội ngũ', text: '', people: [
      ['NQ', 'Ông Ngô Hoàng Quyền', 'Chủ tịch HĐQT · Sáng lập viên', ['Hơn 15 năm quản trị quỹ đầu tư mạo hiểm và chuyển đổi số doanh nghiệp.', 'Định hướng chiến lược đầu tư công nghệ cao và quản trị rủi ro quỹ.', 'Sáng lập hệ sinh thái Proton ISF và SOVVN Chain.']],
      ['DB', 'Ông Doãn Xuân Bắc', 'Tổng Giám đốc (CEO)', ['Cử nhân Đại học Kinh tế Quốc dân (2006).', 'Hơn 18 năm điều hành doanh nghiệp CNTT, thương mại B2B; 17 năm cung cấp giải pháp CNTT cho khối doanh nghiệp.', 'Điều hành triển khai dự án, thương mại hóa hệ sinh thái và hợp tác quốc tế.']],
      ['ND', 'TS. Nguyễn Mạnh Dũng', 'Giám đốc Công nghệ (CTO)', ['Tiến sĩ Khoa học Máy tính; chuyên gia mạng phân tán, bảo mật và tối ưu hóa.', 'Kiến trúc sư trưởng SOVVN Chain và động cơ AI MRP.', 'Hơn 10 năm thiết kế kiến trúc lõi cho hệ thống doanh nghiệp.']],
      ['OT', 'CTCP Công nghệ Oritech', 'Đối tác Khoa học & Công nghệ', ['Doanh nghiệp Khoa học và Công nghệ.', 'Đối tác liên danh về phần cứng đo kiểm, số hóa 3D và tích hợp IoT.']],
    ] },
    legal: { kicker: 'Pháp lý', title: 'Hành lang pháp lý Proton ISF vận hành và tuân thủ', text: '', items: [['2018', 'NĐ 38/2018/NĐ-CP', 'Đầu tư cho doanh nghiệp nhỏ và vừa khởi nghiệp sáng tạo.'], ['Hiệu lực 01/01/2025', 'Luật Thủ đô 39/2024/QH15', 'Cơ chế thử nghiệm có kiểm soát tại Hà Nội.'], ['22/12/2024', 'Nghị quyết 57-NQ/TW', 'Đột phá KH&CN, đổi mới sáng tạo và chuyển đổi số.'], ['Hiệu lực 01/01/2026', 'Luật CN Công nghệ số 71/2025/QH15', 'Khung cho AI, tài sản số và doanh nghiệp công nghệ số.'], ['2025', 'Nghị quyết 05/2025/NQ-CP', 'Thí điểm thị trường tài sản mã hóa — khung pháp lý định hướng.'], ['Hiệu lực 01/03/2026', 'Luật Trí tuệ nhân tạo 134/2025/QH15', 'Quản lý AI theo mức rủi ro.'], ['2026', 'QĐ 131/2026/QĐ-UBND', 'Đề án ĐMST xuất khẩu số cho làng nghề.'], ['2023', 'NĐ 13/2023/NĐ-CP', 'Bảo vệ dữ liệu cá nhân.']] },
  },

  insPage: { kicker: 'インサイト · Insights', title: 'Góc nhìn từ thực tiễn', lead: 'Phân tích về kỹ nghệ phần mềm bằng AI, xuất khẩu số và tài sản số tại Việt Nam.', read: 'Đọc bài', sources: 'Nguồn tham khảo', ctaT: 'Muốn áp dụng cho doanh nghiệp của bạn?', ctaP: 'Trao đổi 30 phút với kiến trúc sư của Proton ISF.' },

  contactPage: { kicker: 'お問い合わせ · Liên hệ', title: 'Trao đổi với Proton ISF', lead: 'Điền biểu mẫu hoặc liên hệ trực tiếp. Chúng tôi phản hồi trong 1 ngày làm việc.', direct: 'Liên hệ trực tiếp', mailNote: 'Hợp tác, đầu tư, báo chí', phoneNote: 'Điện thoại / Zalo · T2–T6, 8:30–17:30', office: 'Văn phòng Hà Nội', stepsT: 'Sau khi gửi biểu mẫu' },

  profilePage: { kicker: '会社案内 · Hồ sơ năng lực', title: 'Hồ sơ năng lực Proton ISF 2026', lead: 'Bản PDF 16 trang, tiếng Việt và tiếng Anh: năng lực, phương pháp, dự án, đội ngũ và mô hình hợp tác.', inside: 'Trong hồ sơ', items: ['Tổng quan doanh nghiệp, tầm nhìn và cột mốc', 'Bối cảnh thị trường 2026 và hành lang pháp lý', 'Bốn trụ cột năng lực và phương pháp AI-Driven Development', 'Ngăn xếp công nghệ và chỉ số chất lượng', 'Case study: Chợ Làng Nghề, SOVVN Chain, AI SCM, chosach.vn', 'Ban lãnh đạo, đối tác và mô hình hợp tác'], byEmail: '<b>Nhận hồ sơ qua email.</b> Điền biểu mẫu bên cạnh, chúng tôi gửi bản tiếng Việt và tiếng Anh trong ngày làm việc.', formT: 'Bạn quan tâm lĩnh vực nào?', formH: 'Giúp chúng tôi gửi kèm tài liệu phù hợp.' },

  form: {
    s1: 'Bạn quan tâm lĩnh vực nào?', s1h: 'Chọn một lĩnh vực chính.',
    interests: [['ai_dev', 'AI-Driven Development', 'Phát triển phần mềm, Lab'], ['rwa', 'RWA – Blockchain', 'Token hóa tài sản'], ['scm', 'AI SCM / MRP', 'Chuỗi cung ứng, sản xuất'], ['govtech', 'GovTech', 'Nền tảng cho chính quyền'], ['investment', 'Đầu tư – M&A', 'Góp vốn, mua bán'], ['other', 'Khác', '']],
    s2: 'Mô hình hợp tác mong muốn?', s2h: 'Chưa chắc chắn cũng không sao.',
    models: [['outsourcing', 'Outsourcing – Lab', 'Phát triển trọn gói hoặc Lab chuyên trách'], ['tech_transfer', 'Chuyển giao – Liên doanh', 'Bản địa hóa, đồng phát triển'], ['ma', 'M&A – Góp vốn', 'Đầu tư chiến lược'], ['unknown', 'Chưa xác định', 'Muốn trao đổi thêm']],
    s3: 'Thông tin liên hệ', s3h: 'Chúng tôi phản hồi trong 1 ngày làm việc.',
    name: 'Họ và tên', company: 'Công ty', email: 'Email', phone: 'Điện thoại', country: 'Quốc gia', countryDefault: 'Việt Nam', message: 'Nội dung', msgPh: 'Mô tả ngắn bài toán, quy mô, thời gian mong muốn…',
    consent: 'Tôi đồng ý để Proton ISF xử lý dữ liệu cá nhân nhằm phản hồi yêu cầu này, theo {privacy} và Nghị định 13/2023/NĐ-CP.', privacy: 'Chính sách bảo mật',
    req: 'Vui lòng nhập thông tin này.', emailErr: 'Email chưa hợp lệ.', pick: 'Vui lòng chọn một lựa chọn.',
    back: 'Quay lại', next: 'Tiếp tục', submit: 'Gửi yêu cầu', sending: 'Đang gửi…',
    sendErr: 'Chưa gửi được. Vui lòng thử lại hoặc email trực tiếp tới contact@protonisf.com.',
    doneT: 'Đã nhận yêu cầu của bạn', doneP: 'Cảm ơn bạn. Kiến trúc sư của Proton ISF sẽ liên hệ trong 1 ngày làm việc. Bạn có thể đặt lịch trao đổi ngay:', doneCal: 'Chọn lịch trao đổi 30 phút', doneMail: 'Gửi email đặt lịch', mailSubject: 'Đặt lịch trao đổi 30 phút với Proton ISF',
  },

  legal: {
    privacy: { kicker: 'Pháp lý', title: 'Chính sách bảo mật', lead: 'Cách Proton ISF thu thập, sử dụng và bảo vệ dữ liệu cá nhân, theo Nghị định 13/2023/NĐ-CP.', body: `
<p>Cập nhật: 05/10/2026. Bên kiểm soát và xử lý dữ liệu: ${SITE.legal} (MST ${SITE.taxId}), ${SITE.address}. Liên hệ về dữ liệu cá nhân: <a href="mailto:${SITE.email}">${SITE.email}</a>.</p>
<h2>1. Dữ liệu chúng tôi thu thập</h2><ul><li>Dữ liệu bạn cung cấp qua biểu mẫu: họ tên, công ty, email, điện thoại, quốc gia, nội dung yêu cầu, lĩnh vực và mô hình quan tâm.</li><li>Dữ liệu kỹ thuật: trang nguồn, tham số chiến dịch (UTM), ngôn ngữ trình duyệt.</li><li>Cookie phân tích (Google Analytics, Meta Pixel) chỉ khi bạn đồng ý trên banner cookie.</li></ul>
<h2>2. Mục đích xử lý</h2><ul><li>Phản hồi yêu cầu tư vấn, đặt lịch trao đổi, gửi hồ sơ năng lực.</li><li>Quản lý quan hệ khách hàng và đối tác.</li><li>Thống kê, cải thiện website (khi có đồng ý cookie).</li></ul>
<h2>3. Cơ sở xử lý</h2><p>Sự đồng ý của bạn khi đánh dấu ô đồng ý trên biểu mẫu và trên banner cookie. Bạn có thể rút lại sự đồng ý bất kỳ lúc nào.</p>
<h2>4. Chia sẻ dữ liệu</h2><p>Chúng tôi không bán dữ liệu cá nhân. Dữ liệu có thể được lưu trữ, xử lý bởi các nhà cung cấp dịch vụ hạ tầng (lưu trữ đám mây, CRM, email, công cụ tự động hóa) theo hợp đồng bảo mật, chỉ trong phạm vi mục đích nêu trên.</p>
<h2>5. Thời gian lưu trữ</h2><p>Dữ liệu yêu cầu được lưu tối đa 36 tháng kể từ lần tương tác cuối, trừ khi pháp luật yêu cầu khác hoặc bạn yêu cầu xóa sớm hơn.</p>
<h2>6. Quyền của bạn</h2><p>Bạn có quyền được biết, đồng ý, truy cập, chỉnh sửa, xóa, hạn chế xử lý, phản đối xử lý và rút lại sự đồng ý theo Nghị định 13/2023/NĐ-CP. Gửi yêu cầu tới <a href="mailto:${SITE.email}">${SITE.email}</a>; chúng tôi phản hồi trong thời hạn luật định.</p>
<h2>7. Bảo mật</h2><p>Dữ liệu được truyền qua HTTPS, lưu trữ có phân quyền truy cập, và chỉ nhân sự có trách nhiệm mới được tiếp cận.</p>` },
    terms: { kicker: 'Pháp lý', title: 'Điều khoản sử dụng', lead: 'Điều kiện sử dụng website protonisf.com.', body: `
<p>Cập nhật: 05/10/2026. Website do ${SITE.legal} (MST ${SITE.taxId}) quản lý.</p>
<h2>1. Nội dung</h2><p>Thông tin trên website nhằm giới thiệu năng lực và dịch vụ của Proton ISF. Các chỉ số năng suất là định mức nội bộ trên các dự án đã thực hiện; cam kết cụ thể được xác lập trong hợp đồng hoặc SLA của từng dự án.</p>
<h2>2. Không phải lời mời đầu tư</h2><p>Nội dung liên quan đến tài sản số, token hóa tài sản thực và các nền tảng blockchain chỉ mang tính giới thiệu công nghệ, không phải lời chào bán, lời mời đầu tư hay tư vấn tài chính.</p>
<h2>3. Sở hữu trí tuệ</h2><p>Nhãn hiệu, logo, nội dung và thiết kế website thuộc quyền sở hữu của Proton ISF hoặc bên cấp phép. Không sao chép cho mục đích thương mại khi chưa có chấp thuận bằng văn bản.</p>
<h2>4. Liên kết bên ngoài</h2><p>Website có liên kết tới các nền tảng trong hệ sinh thái và nguồn tham khảo bên thứ ba. Mỗi nền tảng có điều khoản riêng.</p>
<h2>5. Luật áp dụng</h2><p>Điều khoản này được điều chỉnh bởi pháp luật Việt Nam.</p>` },
  },

  nf: { title: 'Không tìm thấy trang', text: 'Trang bạn tìm có thể đã được di chuyển. Quay về trang chủ hoặc liên hệ với chúng tôi.', home: 'Về trang chủ' },
};
