// BÀI VIẾT INSIGHTS — thêm bài mới: thêm 1 object vào mảng của từng ngôn ngữ (cùng slug)
const SRC = {
  so: ['Stack Overflow Developer Survey 2025', 'https://stackoverflow.co/company/press/archive/stack-overflow-2025-developer-survey/'],
  gartner: ['Gartner — AI code assistants by 2028', 'https://futurecio.tech/enterprise-software-engineers-to-use-ai-code-assistants-by-2028/'],
  meti: ['METI IT talent shortage estimate', 'https://richardkatz.substack.com/p/2025-digital-cliff-part-i'],
  dpp: ['Renoon — EU ESPR / DPP timeline', 'https://www.renoon.com/blog/the-timeline-of-digital-product-passport-regulation-in-eu-espr-from-product-groups-to-rollout-schedule'],
  craft: ['Báo Đại biểu Nhân dân — Thủ công mỹ nghệ Việt Nam', 'https://daibieunhandan.vn/thu-cong-my-nghe-viet-nam-kien-tao-vi-the-moi-10399303.html'],
  nq05: ['LSVN — Nghị quyết 05/2025/NQ-CP', 'https://lsvn.vn/mot-so-quy-dinh-dang-chu-y-ve-thi-diem-tai-san-ma-hoa-tai-nghi-quyet-05-2025-nq-cp-a163232.html'],
  l71: ['LuatVietnam — Luật Công nghiệp Công nghệ số 71/2025/QH15', 'https://luatvietnam.vn/cong-nghiep/luat-cong-nghiep-cong-nghe-so-2025-so-71-2025-qh15-405695-d1.html'],
  rwa: ['Cointelegraph — Tokenized RWAs 2026', 'https://cointelegraph.com/news/tokenized-rwas-rise-66-percent-2026-defillama'],
};

export default {
  vi: [
    {
      slug: 'ai-driven-development-mvp-5-tuan', tag: 'AI駆動開発', short: 'AI-Driven Development', date: '2026-10-05', dateLabel: '05/10/2026',
      title: 'AI駆動開発 là gì, và vì sao MVP có thể rút từ 6 tháng xuống 5 tuần',
      excerpt: 'AI không thay kỹ sư. Nó thay đổi chỗ kỹ sư dành thời gian. Đây là cách quy trình 5 giai đoạn của Proton ISF tạo ra khác biệt về tốc độ và chất lượng.',
      sources: [SRC.so, SRC.gartner, SRC.meti],
      body: `<p>Ở Nhật Bản, cụm từ <b>AI駆動開発</b> (phát triển dẫn dắt bởi AI) đang xuất hiện ngày càng nhiều trong các yêu cầu tìm đối tác gia công. Lý do dễ hiểu: Bộ Kinh tế, Thương mại và Công nghiệp Nhật Bản ước tính nước này có thể thiếu tới khoảng 790.000 kỹ sư CNTT vào năm 2030 ở kịch bản nhu cầu cao. Thuê thêm người không còn là lời giải đủ nhanh.</p>
<p>Nhưng “dùng AI để viết code” và “AI-Driven Development” là hai chuyện khác nhau. Phần lớn đội ngũ hiện nay đã dùng trợ lý AI: khảo sát Stack Overflow 2025 cho thấy 84% lập trình viên đang hoặc sẽ dùng công cụ AI. Năng suất tăng, nhưng quy trình vẫn như cũ. AI-Driven Development là khi <b>cả quy trình được thiết kế lại</b> quanh việc AI làm phần thực thi.</p>
<h2>Thời gian của một dự án truyền thống nằm ở đâu?</h2>
<p>Một MVP gia công thông thường mất 4–6 tháng. Phần lớn thời gian không nằm ở việc gõ code, mà ở chuỗi chuyển giao: khảo sát viết tài liệu, BA chuyển cho kiến trúc sư, kiến trúc sư chuyển cho lập trình viên, lập trình viên chuyển cho kiểm thử. Mỗi lần chuyển giao là một lần mất ngữ cảnh và một vòng chờ đợi.</p>
<h2>Quy trình 5 giai đoạn</h2>
<ul><li><b>Kỹ nghệ yêu cầu (2 ngày thay vì 4 tuần):</b> tác tử AI biến ghi chú họp và tài liệu thô thành PRD, SRS và user story chuẩn Given–When–Then. Khách hàng duyệt đặc tả trước khi viết một dòng code.</li>
<li><b>Thiết kế kiến trúc (12 giờ thay vì 2 tuần):</b> lược đồ dữ liệu, đặc tả OpenAPI và phân rã dịch vụ được sinh từ đặc tả, kiến trúc sư trưởng phê duyệt.</li>
<li><b>AI Coding Agents (2 tuần thay vì 3 tháng):</b> nhiều tác tử phối hợp viết mã theo Clean Architecture; kỹ sư review từng pull request.</li>
<li><b>Kiểm thử và bảo mật:</b> test được sinh song song với mã, độ bao phủ trên 85%, phân tích tĩnh và quét OWASP chạy trước khi hợp nhất.</li>
<li><b>CI/CD và vận hành:</b> hạ tầng dưới dạng mã, triển khai tự động, giám sát liên tục.</li></ul>
<blockquote>Điểm mấu chốt: đặc tả là nguồn sự thật. Mã, test và tài liệu đều được sinh và đối chiếu liên tục với đặc tả, nên ngữ cảnh không bị mất giữa các khâu.</blockquote>
<h2>Con người làm gì?</h2>
<p>Kiến trúc sư không biến mất, vai trò của họ quan trọng hơn. Họ quyết định kiến trúc, hiểu nghiệp vụ, đặt ranh giới cho tác tử và chịu trách nhiệm cuối cùng với từng thay đổi. Với cách tổ chức này, một kiến trúc sư trưởng cùng hệ thống AI agents đạt năng suất tương đương 8–10 lập trình viên theo định mức nội bộ của chúng tôi.</p>
<h2>Chất lượng có bị đánh đổi?</h2>
<p>Ngược lại. Vì test được sinh cùng lúc với mã và mọi thay đổi đều qua review tự động lẫn review của người, mật độ lỗi sau go-live trên các dự án của Proton ISF được kiểm soát dưới 1,5 lỗi trên 1.000 dòng mã, so với mức 8–12 thường gặp.</p>
<h2>Bắt đầu thế nào?</h2>
<p>Cách an toàn nhất là một dự án thử nghiệm 2–3 tuần trên một bài toán thật, đo bằng các chỉ số thống nhất từ đầu: thời gian bàn giao, mật độ lỗi, độ bao phủ test. Nếu con số không thuyết phục, Quý đối tác không mất gì ngoài vài tuần.</p>
<p class="note">Các chỉ số năng suất trong bài là định mức nội bộ của Proton ISF trên các dự án đã thực hiện.</p>`,
    },
    {
      slug: 'ho-chieu-so-san-pham-eu-lang-nghe', tag: 'Xuất khẩu số', short: 'Hộ chiếu số sản phẩm EU', date: '2026-09-28', dateLabel: '28/09/2026',
      title: 'Hộ chiếu số sản phẩm của EU và cơ hội cho làng nghề Việt',
      excerpt: 'Từ 2027, EU bắt đầu yêu cầu hộ chiếu số cho các nhóm hàng đầu tiên. Với làng nghề, đây không chỉ là gánh nặng tuân thủ mà còn là cách kể câu chuyện sản phẩm bằng dữ liệu.',
      sources: [SRC.dpp, SRC.craft],
      body: `<p>Quy định về Thiết kế sinh thái cho sản phẩm bền vững của EU (ESPR, 2024/1781) đưa ra khái niệm <b>Hộ chiếu số sản phẩm</b> (Digital Product Passport — DPP): mỗi sản phẩm hoặc lô hàng đi kèm một bản ghi dữ liệu số về nguồn gốc, vật liệu, tác động môi trường và khả năng sửa chữa, tái chế, truy cập qua mã QR hoặc NFC.</p>
<h2>Lộ trình</h2>
<ul><li>ESPR có hiệu lực từ 7/2024.</li><li>Hệ thống đăng ký DPP của EU vận hành từ tháng 7/2026.</li><li>Các nghĩa vụ DPP đầu tiên áp dụng từ 2027, sau đó mở rộng dần theo từng nhóm sản phẩm qua các đạo luật ủy quyền.</li></ul>
<p>Thủ công mỹ nghệ chưa nằm trong nhóm ưu tiên đầu tiên. Nhưng các nhà nhập khẩu và nhà bán lẻ lớn tại châu Âu đã bắt đầu yêu cầu dữ liệu tương tự từ nhà cung cấp, vì họ phải chuẩn bị chuỗi cung ứng cho toàn bộ danh mục.</p>
<h2>Vì sao đây là cơ hội</h2>
<p>Việt Nam xuất khẩu khoảng 1,7 tỷ USD hàng thủ công mỹ nghệ mỗi năm tới hơn 160 quốc gia. Phần lớn giá trị nằm ở khâu trung gian, vì người mua cuối không biết chiếc bình gốm do ai làm, làm ở đâu, bằng đất gì. DPP biến chính những thông tin đó thành tài sản:</p>
<ul><li><b>Minh bạch nguồn gốc:</b> người mua quét mã, thấy nghệ nhân, làng nghề, quy trình.</li><li><b>Chống hàng giả:</b> bản ghi trên chuỗi khối không thể sửa sau khi phát hành.</li><li><b>Định giá cao hơn:</b> câu chuyện có kiểm chứng là lý do để người mua trả giá cao hơn.</li></ul>
<h2>Một DPP cho gốm Bát Tràng gồm gì?</h2>
<ul><li>Định danh lô hàng và từng sản phẩm.</li><li>Nghệ nhân, xưởng, làng nghề; ảnh và mô hình 3D.</li><li>Nguyên liệu (loại đất, men), nhiệt độ nung, phương pháp sản xuất.</li><li>Thông tin vận chuyển, chứng từ xuất khẩu.</li></ul>
<p>Trong Đề án đổi mới sáng tạo phát triển xuất khẩu số cho làng nghề của Hà Nội mà Proton ISF tham gia xây dựng, mục tiêu giai đoạn đầu là phát hành 1.000 hộ chiếu số cho sản phẩm Bát Tràng trên SOVVN Chain, kết hợp số hóa 3D tại lò gốm.</p>
<h2>Làng nghề nên chuẩn bị gì ngay?</h2>
<ul><li>Bắt đầu ghi chép có cấu trúc: mỗi lô hàng một mã, một bộ ảnh, một danh sách nguyên liệu.</li><li>Chụp và lưu hồ sơ nghệ nhân, quy trình.</li><li>Hỏi trước nhà nhập khẩu về định dạng dữ liệu họ cần.</li></ul>
<p>Dữ liệu ghi từ hôm nay sẽ là lợi thế cạnh tranh khi nghĩa vụ đến.</p>`,
    },
    {
      slug: 'token-hoa-tai-san-thuc-khung-phap-ly-2025-2026', tag: 'RWA · Pháp lý', short: 'Token hóa tài sản thực', date: '2026-09-20', dateLabel: '20/09/2026',
      title: 'Token hóa tài sản thực tại Việt Nam: khung pháp lý 2025–2026',
      excerpt: 'Luật Công nghiệp Công nghệ số và Nghị quyết 05/2025/NQ-CP mở ra hành lang đầu tiên cho tài sản số. Điều gì đã rõ, điều gì vẫn đang chờ?',
      sources: [SRC.l71, SRC.nq05, SRC.rwa],
      body: `<p>Trên thế giới, giá trị tài sản thực được token hóa on-chain đạt khoảng 23,6 tỷ USD vào tháng 3/2026, tăng 66% chỉ trong vài tháng đầu năm. Tại Việt Nam, 2025–2026 là giai đoạn khung pháp lý cho tài sản số lần đầu được định hình.</p>
<h2>Luật Công nghiệp Công nghệ số (71/2025/QH15)</h2>
<p>Có hiệu lực từ 01/01/2026, luật lần đầu đưa khái niệm tài sản số vào văn bản cấp luật, phân biệt tài sản ảo và tài sản mã hóa, đồng thời đặt trí tuệ nhân tạo và công nghệ số vào nhóm được ưu tiên phát triển. Đây là nền tảng để các văn bản hướng dẫn chi tiết được ban hành.</p>
<h2>Nghị quyết 05/2025/NQ-CP về thí điểm thị trường tài sản mã hóa</h2>
<ul><li>Thời gian thí điểm 5 năm.</li><li>Tài sản mã hóa được phát hành phải dựa trên tài sản thực, không dựa trên chứng khoán hay tiền pháp định.</li><li>Thanh toán bằng đồng Việt Nam.</li><li>Tổ chức cung cấp dịch vụ phải đáp ứng điều kiện rất cao, trong đó có vốn điều lệ tối thiểu lớn và cơ cấu cổ đông chặt chẽ.</li></ul>
<blockquote>Hàm ý thực tế: giai đoạn đầu, thị trường dành cho số ít tổ chức đủ điều kiện. Các đơn vị công nghệ đóng vai trò cung cấp hạ tầng, tiêu chuẩn và giải pháp kỹ thuật.</blockquote>
<h2>Proton ISF đặt mình ở đâu</h2>
<p>SOVVN Chain và Dong Protocol được thiết kế theo các nguyên tắc mà khung pháp lý đang hướng tới: tài sản bảo chứng bằng tài sản thực, định danh người dùng qua VNeID, dòng tiền đi qua tài khoản phong tỏa tại ngân hàng, dữ liệu minh bạch trên Explorer công khai. Chúng tôi coi Nghị quyết 05/2025/NQ-CP là <b>khung pháp lý định hướng</b> cho thiết kế kỹ thuật, không phải giấy phép hoạt động.</p>
<h2>Những điều còn chờ</h2>
<ul><li>Hướng dẫn chi tiết về thuế đối với giao dịch tài sản số.</li><li>Cơ chế liên thông giữa tài sản token hóa và đăng ký sở hữu tài sản truyền thống.</li><li>Tiêu chuẩn kỹ thuật cho chuỗi khối dùng trong lĩnh vực tài chính.</li></ul>
<p class="note">Bài viết mang tính thông tin, không phải tư vấn pháp lý hay lời mời đầu tư.</p>`,
    },
  ],

  en: [
    {
      slug: 'ai-driven-development-mvp-5-tuan', tag: 'AI駆動開発', short: 'AI-Driven Development', date: '2026-10-05', dateLabel: '5 Oct 2026',
      title: 'What AI駆動開発 means, and why an MVP can shrink from six months to five weeks',
      excerpt: 'AI doesn’t replace engineers. It changes where they spend their time. Here is how Proton ISF’s five-stage process changes both speed and quality.',
      sources: [SRC.so, SRC.gartner, SRC.meti],
      body: `<p>In Japan, <b>AI駆動開発</b> (AI-driven development) now appears in more and more outsourcing requests. The reason is simple: Japan’s Ministry of Economy, Trade and Industry estimates the country may be short of up to around 790,000 IT engineers by 2030 in its high-demand scenario. Hiring more people is no longer fast enough.</p>
<p>But “using AI to write code” and “AI-driven development” are different things. Most teams already use AI assistants — 84% of developers use or plan to use AI tools, according to Stack Overflow’s 2025 survey. Productivity rises, but the process stays the same. AI-driven development means <b>redesigning the whole process</b> around AI doing the execution.</p>
<h2>Where does the time go in a traditional project?</h2>
<p>A typical outsourced MVP takes 4–6 months. Most of that is not typing code but hand-offs: analysts write documents, pass them to architects, who pass them to developers, who pass them to testers. Every hand-off loses context and adds waiting time.</p>
<h2>The five-stage process</h2>
<ul><li><b>Requirements (2 days instead of 4 weeks):</b> agents turn meeting notes and raw documents into PRD, SRS and Given–When–Then user stories. The client signs off the spec before any code is written.</li>
<li><b>Architecture (12 hours instead of 2 weeks):</b> data schema, OpenAPI specs and service boundaries are generated from the spec and approved by the lead architect.</li>
<li><b>AI coding agents (2 weeks instead of 3 months):</b> coordinated agents write Clean Architecture code; engineers review every pull request.</li>
<li><b>Testing and security:</b> tests are generated alongside code, coverage exceeds 85%, static analysis and OWASP scans run before merge.</li>
<li><b>CI/CD and operations:</b> infrastructure as code, automated deployment, continuous monitoring.</li></ul>
<blockquote>The key: the specification is the source of truth. Code, tests and docs are generated and continuously checked against it, so context is never lost between stages.</blockquote>
<h2>What do humans do?</h2>
<p>Architects don’t disappear; their role matters more. They decide the architecture, understand the business, set boundaries for agents and remain accountable for every change. Organised this way, one lead architect with AI agents matches the output of 8–10 developers on our internal benchmarks.</p>
<h2>Is quality traded away?</h2>
<p>The opposite. Because tests are generated with the code and every change passes both automated and human review, post-go-live defect density on Proton ISF projects stays below 1.5 per 1,000 lines, against a typical 8–12.</p>
<h2>How to start</h2>
<p>The safest path is a 2–3 week pilot on a real problem, measured on metrics agreed up front: delivery time, defect density, test coverage. If the numbers don’t convince you, you’ve lost only a few weeks.</p>
<p class="note">Productivity figures are Proton ISF internal benchmarks from completed projects.</p>`,
    },
    {
      slug: 'ho-chieu-so-san-pham-eu-lang-nghe', tag: 'Digital export', short: 'EU product passports', date: '2026-09-28', dateLabel: '28 Sep 2026',
      title: 'EU digital product passports — and the opportunity for Vietnamese craft villages',
      excerpt: 'From 2027 the EU begins requiring passports for its first product groups. For craft villages, it is a chance to tell each product’s story with data, not just a compliance burden.',
      sources: [SRC.dpp, SRC.craft],
      body: `<p>The EU Ecodesign for Sustainable Products Regulation (ESPR, 2024/1781) introduces the <b>Digital Product Passport</b> (DPP): each product or batch carries a digital record of origin, materials, environmental impact and repairability, accessed via QR code or NFC.</p>
<h2>Timeline</h2>
<ul><li>ESPR entered into force in July 2024.</li><li>The EU DPP registry has operated since July 2026.</li><li>The first DPP obligations apply from 2027, expanding product group by product group through delegated acts.</li></ul>
<p>Handicrafts are not in the first priority group. But large European importers and retailers already ask suppliers for similar data, because they must prepare their supply chains across whole catalogues.</p>
<h2>Why this is an opportunity</h2>
<p>Vietnam exports around USD 1.7 billion of handicrafts a year to more than 160 countries. Much of the value is captured by intermediaries, because the end buyer doesn’t know who made the vase, where, or from what clay. A DPP turns that information into an asset:</p>
<ul><li><b>Transparent origin:</b> buyers scan a code and see the artisan, village and process.</li><li><b>Anti-counterfeiting:</b> an on-chain record can’t be altered after issue.</li><li><b>Higher prices:</b> a verifiable story gives buyers a reason to pay more.</li></ul>
<h2>What goes into a DPP for Bát Tràng ceramics?</h2>
<ul><li>Batch and item identifiers.</li><li>Artisan, workshop, village; photos and a 3D model.</li><li>Materials (clay, glaze), firing temperature, production method.</li><li>Shipping information and export documents.</li></ul>
<p>In Hanoi’s craft-village digital export programme, to which Proton ISF contributes, the first-phase target is 1,000 passports for Bát Tràng products on SOVVN Chain, combined with 3D scanning at the kiln.</p>
<h2>What craft villages can do now</h2>
<ul><li>Start structured records: one code, one photo set and one materials list per batch.</li><li>Document artisans and processes.</li><li>Ask importers early which data formats they need.</li></ul>
<p>Data recorded today becomes a competitive advantage when the obligations arrive.</p>`,
    },
    {
      slug: 'token-hoa-tai-san-thuc-khung-phap-ly-2025-2026', tag: 'RWA · Regulation', short: 'Real-world asset tokenization', date: '2026-09-20', dateLabel: '20 Sep 2026',
      title: 'Real-world asset tokenization in Vietnam: the 2025–2026 legal framework',
      excerpt: 'The Digital Technology Industry Law and Resolution 05/2025/NQ-CP open the first legal path for digital assets. What is clear, and what is still pending?',
      sources: [SRC.l71, SRC.nq05, SRC.rwa],
      body: `<p>Globally, tokenized real-world assets on-chain reached about USD 23.6 billion in March 2026, up 66% in the first months of the year. In Vietnam, 2025–2026 is when a legal framework for digital assets takes shape for the first time.</p>
<h2>Law on Digital Technology Industry (71/2025/QH15)</h2>
<p>Effective 1 January 2026, the law brings the concept of digital assets into statute for the first time, distinguishes virtual assets from crypto-assets, and places AI and digital technology among priority sectors. It is the foundation for detailed implementing regulations.</p>
<h2>Resolution 05/2025/NQ-CP on the pilot crypto-asset market</h2>
<ul><li>A five-year pilot.</li><li>Issued crypto-assets must be backed by real assets, not securities or fiat.</li><li>Settlement in Vietnamese dong.</li><li>Service providers face demanding conditions, including high minimum charter capital and strict shareholder structures.</li></ul>
<blockquote>In practice: early on, the market is open to a small number of qualifying institutions. Technology companies contribute infrastructure, standards and technical solutions.</blockquote>
<h2>Where Proton ISF stands</h2>
<p>SOVVN Chain and Dong Protocol follow the principles the framework points towards: assets backed by real assets, users identified through VNeID, funds flowing through escrow bank accounts, and transparent data on a public explorer. We treat Resolution 05/2025/NQ-CP as a <b>guiding framework</b> for technical design, not as an operating licence.</p>
<h2>Still pending</h2>
<ul><li>Detailed tax guidance for digital-asset transactions.</li><li>Links between tokenized assets and traditional ownership registries.</li><li>Technical standards for blockchains used in finance.</li></ul>
<p class="note">This article is for information only and is not legal advice or an offer to invest.</p>`,
    },
  ],

  ja: [
    {
      slug: 'ai-driven-development-mvp-5-tuan', tag: 'AI駆動開発', short: 'AI駆動開発', date: '2026-10-05', dateLabel: '2026年10月5日',
      title: 'AI駆動開発とは何か — MVPが6か月から5週間に短縮できる理由',
      excerpt: 'AIはエンジニアを置き換えるのではなく、時間の使い方を変えます。Proton ISFの5段階プロセスがスピードと品質をどう変えるかをご紹介します。',
      sources: [SRC.so, SRC.gartner, SRC.meti],
      body: `<p>日本では「<b>AI駆動開発</b>」という言葉が、開発パートナー募集の要件に頻繁に登場するようになりました。背景は明確です。経済産業省は、高位シナリオで2030年に最大約79万人のIT人材が不足し得ると試算しています。人員の増強だけでは追いつきません。</p>
<p>ただし「AIでコードを書く」ことと「AI駆動開発」は別物です。Stack Overflowの2025年調査では84%の開発者がAIツールを利用中または利用予定ですが、多くの場合プロセス自体は従来のままです。AI駆動開発とは、AIが実行を担う前提で<b>プロセス全体を再設計</b>することです。</p>
<h2>従来型プロジェクトの時間はどこに消えるのか</h2>
<p>一般的なオフショア開発のMVPは4〜6か月かかります。その大半はコーディングではなく引き継ぎです。要件定義→設計→実装→テストと工程が移るたびに文脈が失われ、待ち時間が生じます。</p>
<h2>5段階のプロセス</h2>
<ul><li><b>要件定義（4週間→2日）：</b>議事録や資料からPRD、SRS、Given–When–Then形式のユーザーストーリーを生成。実装前にお客様が仕様を承認します。</li>
<li><b>アーキテクチャ設計（2週間→12時間）：</b>仕様からデータスキーマ、OpenAPI、サービス分割を生成し、リードアーキテクトが承認します。</li>
<li><b>AIコーディング（3か月→2週間）：</b>複数のエージェントがクリーンアーキテクチャで実装し、エンジニアが全プルリクエストをレビューします。</li>
<li><b>テスト・セキュリティ：</b>コードと同時にテストを生成し、カバレッジ85%超。マージ前に静的解析とOWASP検査を実施します。</li>
<li><b>CI/CD・運用：</b>インフラのコード化、自動デプロイ、継続的な監視。</li></ul>
<blockquote>要点は、仕様を唯一の正とすることです。コード・テスト・文書はすべて仕様から生成・照合されるため、工程間で文脈が失われません。</blockquote>
<h2>人間の役割</h2>
<p>アーキテクトの役割はむしろ重要になります。設計を決め、業務を理解し、エージェントの範囲を定め、すべての変更に最終責任を持ちます。この体制により、当社の社内基準ではリードアーキテクト1名とAIエージェントで開発者8〜10名分の生産性を実現しています。</p>
<h2>品質は犠牲にならないのか</h2>
<p>むしろ向上します。テストがコードと同時に生成され、すべての変更が自動レビューと人によるレビューを経るため、当社案件の本番稼働後の不具合密度は1,000行あたり1.5件未満（一般的には8〜12件）に抑えられています。</p>
<h2>始め方</h2>
<p>最も安全なのは、実課題を対象とした2〜3週間のPoCです。納期、不具合密度、テストカバレッジなどの指標を事前に合意し、結果で判断いただけます。</p>
<p class="note">本記事の生産性に関する数値は当社実績に基づく社内基準値です。</p>`,
    },
    {
      slug: 'ho-chieu-so-san-pham-eu-lang-nghe', tag: 'デジタル輸出', short: 'EUデジタル製品パスポート', date: '2026-09-28', dateLabel: '2026年9月28日',
      title: 'EUデジタル製品パスポートとベトナム伝統工芸村の機会',
      excerpt: '2027年からEUは最初の製品群にパスポートを義務化します。伝統工芸村にとっては負担であると同時に、製品の物語をデータで伝える機会でもあります。',
      sources: [SRC.dpp, SRC.craft],
      body: `<p>EUの持続可能な製品のためのエコデザイン規則（ESPR, 2024/1781）は<b>デジタル製品パスポート</b>（DPP）を導入します。製品やロットごとに、原産地、素材、環境負荷、修理・リサイクル性のデジタル記録をQRコードやNFCで参照できるようにする仕組みです。</p>
<h2>スケジュール</h2>
<ul><li>ESPRは2024年7月に発効。</li><li>EUのDPP登録システムは2026年7月から稼働。</li><li>最初のDPP義務は2027年から適用され、委任法令により製品群ごとに順次拡大。</li></ul>
<p>工芸品は第1優先グループには含まれていません。しかし欧州の大手輸入業者・小売業者は、カタログ全体のサプライチェーン対応を進めるため、すでに同様のデータを取引先に求め始めています。</p>
<h2>なぜ機会なのか</h2>
<p>ベトナムは年間約17億ドルの工芸品を160か国以上に輸出していますが、価値の多くは仲介段階にとどまっています。最終購入者が、誰がどこでどの土で作ったかを知らないためです。DPPはその情報を資産に変えます。</p>
<ul><li><b>原産地の透明性：</b>コードを読み取ると職人、工芸村、製法が分かります。</li><li><b>偽造防止：</b>発行後のオンチェーン記録は改ざんできません。</li><li><b>価格向上：</b>検証可能なストーリーは高価格の根拠になります。</li></ul>
<h2>バッチャン焼のDPPに含まれる情報</h2>
<ul><li>ロットおよび個品の識別子。</li><li>職人、工房、工芸村、写真と3Dモデル。</li><li>素材（土、釉薬）、焼成温度、製法。</li><li>輸送情報と輸出書類。</li></ul>
<p>当社が参画するハノイ市の伝統工芸村デジタル輸出事業では、第1期の目標として、窯元での3Dスキャンと組み合わせ、SOVVN Chain上でバッチャン製品1,000件のパスポート発行を計画しています。</p>
<h2>工芸村が今できること</h2>
<ul><li>ロットごとにコード・写真・素材リストを構造的に記録する。</li><li>職人と製法を記録に残す。</li><li>輸入業者に必要なデータ形式を早めに確認する。</li></ul>
<p>今日記録したデータが、義務化の際の競争優位になります。</p>`,
    },
    {
      slug: 'token-hoa-tai-san-thuc-khung-phap-ly-2025-2026', tag: 'RWA・法規制', short: '実物資産のトークン化', date: '2026-09-20', dateLabel: '2026年9月20日',
      title: 'ベトナムにおける実物資産トークン化：2025〜2026年の法的枠組み',
      excerpt: 'デジタル技術産業法と政府決議05/2025/NQ-CPにより、デジタル資産の法的な道筋が初めて示されました。明確になった点と残る課題を整理します。',
      sources: [SRC.l71, SRC.nq05, SRC.rwa],
      body: `<p>世界のオンチェーン実物資産（RWA）は2026年3月に約236億ドルに達し、年初から66%増加しました。ベトナムでは2025〜2026年に、デジタル資産の法的枠組みが初めて形になりつつあります。</p>
<h2>デジタル技術産業法（71/2025/QH15）</h2>
<p>2026年1月1日に施行され、デジタル資産の概念を初めて法律レベルで規定し、仮想資産と暗号資産を区別したうえで、AIとデジタル技術を優先分野に位置づけました。詳細な施行規則の基盤となります。</p>
<h2>暗号資産市場の試行に関する政府決議05/2025/NQ-CP</h2>
<ul><li>試行期間は5年。</li><li>発行される暗号資産は実物資産を裏付けとし、証券や法定通貨を裏付けとしない。</li><li>決済はベトナムドン。</li><li>サービス提供者には高い最低資本金や厳格な株主構成など、厳しい条件が課される。</li></ul>
<blockquote>実務上の意味：初期段階の市場は少数の適格機関に限られ、技術企業はインフラ、標準、技術ソリューションの提供で貢献します。</blockquote>
<h2>Proton ISFの立ち位置</h2>
<p>SOVVN ChainとDong Protocolは、実物資産による裏付け、VNeIDによる本人確認、銀行エスクロー口座を通じた資金管理、公開エクスプローラーでの透明なデータという、法的枠組みが目指す原則に沿って設計されています。当社は決議05/2025/NQ-CPを技術設計の<b>参照枠組み</b>と位置づけており、営業許可を意味するものではありません。</p>
<h2>今後の課題</h2>
<ul><li>デジタル資産取引に関する詳細な税務ガイダンス。</li><li>トークン化資産と従来の所有権登記との連携。</li><li>金融分野で用いるブロックチェーンの技術標準。</li></ul>
<p class="note">本記事は情報提供を目的としたものであり、法的助言や投資勧誘ではありません。</p>`,
    },
  ],
};
