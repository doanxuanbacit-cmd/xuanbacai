// ENGLISH CONTENT
import { SITE } from '../core.mjs';
import { SRC } from './vi.mjs';
const S = (k, label) => [label, SRC[k][1]];

export default {
  meta: {
    home: ['Proton ISF — AI-Driven Development, RWA infrastructure & GovTech', 'Proton ISF builds software with AI coding agents under architect supervision, runs SOVVN Chain for real-world asset tokenization, and operates GovTech platforms. MVP in 3–5 weeks, 55–60% lower cost.'],
    cap: ['Capabilities', 'Four deep-tech pillars: AI-Driven Development, RWA Blockchain Layer-0, AI supply-chain planning and GovTech.'],
    ai: ['AI-Driven Development (AI駆動開発)', 'A five-stage software process run by AI coding agents and supervised by human architects. MVP in 3–5 weeks, under 1.5 defects per 1,000 lines.'],
    eco: ['Ecosystem', 'Seven Proton ISF platforms running in public: taisan.xyz, DongScan, the craft-village platform and chosach.vn. Live status checks.'],
    proj: ['Projects', 'Case studies: craft-village digital export, SOVVN Chain, AI supply-chain planning for pharma–cosmetics, chosach.vn.'],
    part: ['Partnership', 'Three ways to work with Proton ISF: AI-Dev outsourcing & dedicated lab, technology transfer, M&A and investment. Start with a 2–3 week PoC.'],
    about: ['About', 'Proton Innovative Startup Investment Fund JSC, founded in Hanoi in 2019. Vision, mission, leadership and regulatory framework.'],
    ins: ['Insights', 'Proton ISF perspectives on AI-driven development, EU digital product passports and real-world asset tokenization in Vietnam.'],
    contact: ['Contact', 'Book a 30-minute call with Proton ISF. contact@protonisf.com · +84 918 281 726.'],
    profile: ['Capability profile', 'Get the Proton ISF 2026 capability profile in English and Vietnamese.'],
  },
  ui: { home: 'Home' },

  home: {
    kicker: 'AI駆動開発 · AI-First Technology Fund',
    h1: 'AI-driven software engineering for the <em>digital economy</em>',
    lead: 'Proton ISF builds software with AI coding agents under the control of human architects, runs infrastructure for real-world asset tokenization, and operates GovTech platforms for businesses, government and international partners.',
    cta1: 'Book a 30-minute call',
    cta2: 'Get the capability profile',
    stats: [['4.5×', 'faster MVP delivery: 3–5 weeks instead of 4–6 months'], ['55–60%', 'lower total cost of ownership'], ['<1.5', 'defects per 1,000 lines after go-live'], ['1 = 8–10', 'one architect plus AI agents matches 8–10 developers']],
    note: 'Internal benchmarks from completed projects; specific commitments are set in each contract or SLA.',
    partners: 'Working with',
    ps: {
      kicker: '課題と解決 · Problem → Solution',
      title: 'Five pressing needs, five solutions already running in production',
      text: 'Each solution below is tied to a platform or project you can verify yourself.',
      head: ['Pressing need', 'Proton ISF solution', 'Committed value'],
      rows: [
        ['Engineer shortage and high development cost', 'Japan may be short of up to ~790,000 IT engineers by 2030; traditional outsourcing takes 4–6 months to reach an MVP.', 'Dedicated AI-Dev Lab: one lead architect with a multi-agent AI coding system.', 'MVP in 3–5 weeks · 55–60% lower TCO · 100% source handover'],
        ['Locked startup capital, low liquidity', 'Startup equity and real assets are hard to transfer and often locked for 5–10 years.', 'SOVVN Chain & Dong Protocol: DP-DAS tokenization standard, escrow-backed reserves, VNeID identity.', 'Mainnet live with a public explorer'],
        ['Craft villages export through middlemen', 'The EU will require digital product passports (DPP) for a growing list of imported goods.', 'Craft-village platform: B2B operations, export storefront, 3D digitisation and on-chain DPP per shipment.', 'Product data aligned with EU ESPR'],
        ['Manual production planning', 'Multi-level BOMs, GMP rules and disconnected ERP data cause shortages and excess stock.', 'AI SCM/MRP: BOM explosion, Prophet + XGBoost forecasting, MILP optimisation, FAST / SAP / 1C sync.', 'Automatic nightly reconciliation'],
        ['Governments need new digital-economy models', 'Hanoi targets a digital economy of 40% of GRDP by 2030.', 'GovTech and e-commerce platforms operating under Hanoi’s controlled-testing mechanism.', 'High-load microservices, escrow and e-invoicing'],
      ],
    },
    proc: { kicker: 'AI駆動開発フレームワーク · Process', title: 'AI executes, human architects stay in control', text: 'Five stages from raw business notes to a running system. Every AI output is reviewed, tested and approved by an accountable engineer.', btn: 'See the full methodology' },
    cmp: { kicker: '定量的開発成果 · Comparison', title: 'Traditional outsourcing vs AI-driven, side by side', text: 'Same project scope. The difference is speed, team size and defect density.' },
    eco: { kicker: 'エコシステム · Living proof', title: 'Seven platforms running in public', text: 'Status is checked server-side every 5 minutes. Click “Verify” to open each system yourself.' },
    cases: { kicker: '導入事例 · Featured projects', title: 'From a Hanoi innovation programme to blockchain infrastructure', text: 'Each case study sets out the problem, architecture, technology and current status.', all: 'See all projects' },
    market: { kicker: '市場環境 · 2026 context', title: 'Three waves converging', text: 'AI is changing how software is built, real assets are moving on-chain, and import markets now ask for traceable data on every product.' },
    models: { kicker: '協業モデル · Partnership', title: 'Three ways to work with Proton ISF', text: 'From full-cycle development to strategic investment. Every engagement can start small.' },
    final: {
      kicker: '次のステップ · Next step',
      title: 'Start with a 30-minute conversation',
      text: 'Tell us about your challenge. We reply within one business day.',
      road: [['30-minute discovery call', 'Discuss your needs over Google Meet or Zoom.'], ['Live technical demo', 'SOVVN Chain, DongScan, the craft-village platform and our AI-driven workflow.'], ['NDA & proof of concept', 'A 2–3 week PoC on your own problem.']],
    },
  },

  pillars: {
    kicker: '事業領域 · Four pillars',
    title: 'Four deep-tech pillars on one AI engineering foundation',
    text: 'Each pillar is both a Proton ISF product and a capability we deploy for partners.',
    more: 'Learn more',
    items: [
      { tag: 'AI駆動開発', title: 'AI-Driven Development', bullets: ['Full SDLC automation with multi-agent AI coding systems.', 'Dedicated AI-Dev Labs for Japanese and international clients.', 'Web, mobile, ERP/CRM/SCM, Web3 and internal AI agents.'], ev: '<b>Metrics:</b> MVP 3–5 weeks · TCO −55–60% · <1.5 defects/KLOC' },
      { tag: 'RWA', title: 'RWA Blockchain Layer-0', bullets: ['SOVVN Chain (Substrate Layer-0) and Dong Protocol, built in-house.', 'DP-DAS (DP-1155) tokenization standard for equity, physical assets and IP.', 'wVND backed through an escrow bank account; VNeID identity.'], ev: '<b>Verify:</b> taisan.xyz · dongscan.taisan.xyz' },
      { tag: 'AI SCM / MRP', title: 'Enterprise AI SCM / MRP', bullets: ['Multi-level BOM explosion; hybrid Prophet + XGBoost demand forecasting.', 'Supplier allocation via mixed-integer programming (OR-Tools MILP).', 'Two-way sync with FAST, SAP, Oracle and 1C.'], ev: '<b>Fit:</b> pharma (GMP) · cosmetics · food processing · assembly' },
      { tag: 'GovTech', title: 'GovTech & Sandbox', bullets: ['Contributing to Hanoi’s craft-village digital export programme (Decision 131/2026/QĐ-UBND).', '3D digitisation and on-chain digital product passports (DPP).', 'chosach.vn e-commerce marketplace for publications.'], ev: '<b>Verify:</b> platform.cholangnghe.shop · chosach.vn' },
    ],
  },

  process: [
    ['AI requirements engineering', 'Meeting notes and raw documents become PRD, SRS and Given–When–Then user stories.', '2 days', '4 weeks'],
    ['Architecture design', 'Data schema, OpenAPI 3 specs, event bus and microservices.', '12 hours', '2 weeks'],
    ['AI coding agents', 'Clean Architecture code from coordinated agents, with engineers reviewing every pull request.', '2 weeks', '3 months'],
    ['Testing & security audit', 'Generated unit/E2E tests, >85% coverage, OWASP Top 10 scanning.', '<1.5 defects/KLOC', '8–12 defects/KLOC'],
    ['CI/CD & operations', 'Docker, auto-scaling Kubernetes, Cloudflare Zero Trust, 24/7 monitoring.', '99.5% SLA', ''],
  ],

  compare: {
    head: ['Criterion', 'Traditional outsourcing', 'Proton ISF AI-driven', 'Improvement'],
    rows: [['Discovery & PRD', '3–4 weeks', '2–3 days', '~7× faster'], ['MVP delivery', '4–6 months', '3–5 weeks', '4.5× faster'], ['Project team', '12–18 engineers & testers', '3–4 architects & AI specialists', '75% leaner'], ['Total cost (TCO)', '100% baseline', '40–45% of baseline', '55–60% saving'], ['Defect density', '8–12 defects/KLOC', '<1.5 defects/KLOC', '~80% fewer']],
    note: 'Figures are Proton ISF internal benchmarks across completed ERP, blockchain and GovTech projects; actual results depend on scope and are committed in each contract or SLA.',
  },

  market: [
    ['$39B', 'Vietnam’s digital economy GMV in 2025, up 17% — second-largest in Southeast Asia.', ...S('econ', 'Google, Temasek, Bain — e-Conomy SEA 2025')],
    ['17.3% → 40%', 'Digital economy share of Hanoi’s GRDP in 2025; targets of 22% in 2026 and 40% by 2030.', ...S('hn', 'Hanoi Department of Science & Technology via VietnamPlus, 2026')],
    ['84%', 'of developers use or plan to use AI tools in their work.', ...S('so', 'Stack Overflow Developer Survey 2025')],
    ['~790,000', 'IT engineers Japan may be short of by 2030 in the high-demand scenario.', ...S('meti', 'Japan METI, high-demand scenario')],
    ['$23.6B', 'Real-world assets tokenized on-chain (March 2026), up 66% year-to-date.', ...S('rwa', 'DefiLlama, RWA.xyz via Cointelegraph, Mar 2026')],
    ['2027', 'First EU digital product passport obligations; the DPP registry has run since July 2026.', ...S('dpp', 'EU ESPR 2024/1781 — DPP timeline')],
  ],

  models: {
    items: [
      { k: 'Model 01', title: 'AI-Dev Outsourcing & Dedicated AI Lab', bullets: ['Full-cycle Web, App, ERP, SCM, Web3/RWA and AI agent development.', 'Dedicated lab (ラボ型開発) for Japanese and international partners.', '100% source code and bilingual documentation handed over.', 'Daily reports, 24/7 support SLA.'] },
      { k: 'Model 02', title: 'Technology transfer & joint venture', bullets: ['Localise SOVVN Chain and the RWA tokenization platform for international markets.', 'Bring AI MRP/SCM into manufacturing groups’ supply chains.', 'Co-develop products with transparent revenue sharing.'] },
      { k: 'Model 03', title: 'M&A · Strategic investment', bullets: ['Open to M&A or strategic equity sale to funds and technology groups.', 'Combine AI engineering speed and a GovTech position in Vietnam with international capital and networks.', 'Long-term partnership.'] },
    ],
    poc: 'Every engagement can begin with a 2–3 week proof of concept after an NDA, so you can judge our capability on your own problem before any long-term commitment.',
    pocBtn: 'Propose a PoC',
  },

  capPage: {
    kicker: '事業領域 · Capabilities',
    title: 'Four deep-tech pillars on one AI engineering foundation',
    lead: 'AI-Driven Development is the layer underneath all four pillars — it is how we build them fast, consistently and with measurable quality.',
    aiBtn: 'AI-driven methodology',
    sections: [
      { tag: 'AI駆動開発', title: 'AI-Driven Development', lead: 'AI coding agents handle most repetitive work across the software lifecycle; architects own the architecture, business logic and approval of every output.', chips: ['Claude Code', 'Google Antigravity', 'GitHub Copilot', 'MCP', 'RAG', 'Spec-driven'], link: ['See the methodology', 'ai'],
        blocks: [['Scope', ['Web, mobile, PWA', 'ERP / CRM / SCM and legacy integration', 'Web3, smart contracts, RWA', 'AI agents and internal assistants']], ['Commitments', ['MVP in 3–5 weeks', 'Test coverage above 85%', '100% source code and documentation handover']]] },
      { tag: 'RWA', title: 'RWA Blockchain Layer-0', lead: 'SOVVN Chain is a Substrate Layer-0 network built by Proton ISF R&D, underpinning Dong Protocol and the DP-DAS real-world asset standard.', chips: ['Substrate (Rust)', 'Polkadot SDK', 'Solidity', 'IPFS', 'VNeID'], link: ['Open DongScan Explorer', 'https://dongscan.taisan.xyz/'],
        blocks: [['Components', ['SOVVN Chain — Chain ID 21091981', 'Dong Protocol & RWA Launchpad (app.taisan.xyz)', 'Public DongScan block explorer', 'Technical whitepaper v9.0']], ['Mechanisms', ['wVND backed 1:1 by VND in an escrow bank account', 'DP-DAS (DP-1155) multi-asset standard', 'KYC/AML via VNeID']]] },
      { tag: 'AI SCM / MRP', title: 'Enterprise AI SCM / MRP', lead: 'A material planning engine for manufacturers with multi-level formulas and strict quality standards.', chips: ['Python', 'Prophet', 'XGBoost', 'OR-Tools', '.NET 8', 'FastAPI'], link: ['Read the case study', 'p-scm'],
        blocks: [['Functions', ['Multi-level BOM explosion and net requirements', 'Demand forecasting and dynamic safety stock', 'Optimal supplier allocation via MILP', 'Expiry, retest and quarantine tracking']], ['Integration', ['FAST Business Online, SAP, Oracle, 1C', 'Idempotent two-way sync', 'Automatic nightly reconciliation']]] },
      { tag: 'GovTech', title: 'GovTech & Sandbox', lead: 'Platforms serving Hanoi’s digital-economy goals: digital export for craft villages and specialised e-commerce.', chips: ['Microservices', 'Go', '.NET 8', 'Escrow', 'DPP', '3D scanning'], link: ['See the craft-village project', 'p-cln'],
        blocks: [['Platforms', ['platform.cholangnghe.shop — craft-village B2B', 'cholangnghe.shop — export storefront', 'chosach.vn — publications marketplace']], ['Capabilities', ['3D digitisation and digital twins of crafts', 'On-chain digital product passports', 'Escrow, e-invoicing, logistics APIs']]] },
    ],
    stack: {
      kicker: '技術スタック · Technology', title: 'An enterprise-grade stack', text: 'Every layer has matching AI acceleration tools.',
      head: ['Layer', 'Core technologies', 'AI acceleration'],
      rows: [['AI / ML', 'Python, PyTorch, scikit-learn, Prophet, XGBoost, OR-Tools, LangGraph', 'Claude Code, Google Antigravity, MCP, RAG over codebases'], ['Backend & API', '.NET 8 (Clean Architecture), FastAPI, NestJS, Go, Rust (Substrate)', 'Multi-agent coding, GitHub Copilot, generated unit tests'], ['Frontend & mobile', 'React 19, Next.js, TanStack, TypeScript, Tailwind CSS, Flutter, PWA', 'AI component generation, automated UI testing'], ['Data', 'PostgreSQL 16, Redis, MinIO (S3), Supabase', 'Schema optimisation, execution-plan analysis'], ['Blockchain & RWA', 'Substrate Layer-0, Polkadot SDK, Solidity, IPFS', 'Slither, Mythril, OpenZeppelin'], ['Security & DevOps', 'Docker, Kubernetes, GitHub Actions, Cloudflare Zero Trust, SonarQube', 'Automated VAPT, OWASP Top 10, Prometheus alerting']],
    },
  },

  ai: {
    kicker: 'AI駆動開発 · AI-Driven Development',
    title: 'Ship software 4.5× faster at 55–60% lower cost',
    lead: 'AI coding agents handle requirements analysis, design, coding, testing and deployment. Human architects supervise and approve every output.',
    figs: [['3–5 weeks', 'MVP delivery instead of 4–6 months'], ['−55–60%', 'total cost of ownership'], ['<1.5', 'defects per 1,000 lines'], ['>85%', 'automated test coverage'], ['100%', 'source & documentation handover']],
    proc: {
      kicker: 'Five-stage process', title: 'From raw notes to a running system', text: 'Each stage has specialised AI agents and a human control point.',
      steps: [
        ['Requirements', '2 days', '4 weeks', ['Meeting notes and documents → PRD, SRS', 'Given–When–Then user stories', 'Client signs off the spec before coding']],
        ['Architecture', '12 hours', '2 weeks', ['Data schema, OpenAPI 3 specs', 'Event bus, microservices, access control', 'Approved by the lead architect']],
        ['AI coding agents', '2 weeks', '3 months', ['Coordinated agents following Clean Architecture', 'Every pull request reviewed', 'Continuously checked against the spec']],
        ['Testing & security', '<1.5 defects/KLOC', '8–12 defects/KLOC', ['Generated unit/E2E tests, >85% coverage', 'Static analysis, dependency & secret scans', 'OWASP Top 10 checks']],
        ['CI/CD & operations', '99.5% SLA', '', ['Docker, auto-scaling Kubernetes', 'Cloudflare Zero Trust', '24/7 monitoring and alerting']],
      ],
    },
    stack: {
      kicker: '2026 AI platform', title: 'The AI tools we use every day', text: 'Tools are chosen per problem; client data always stays within the agreed security scope.',
      items: [
        ['cpu', 'Multi-agent coding', 'Claude Code, GitHub Copilot agent mode and Google Antigravity plan, write code, run tests and fix issues in loops, supervised by engineers.'],
        ['plug', 'Model Context Protocol (MCP)', 'An open standard connecting agents to repositories, databases, ERP and internal tools with controlled access.'],
        ['doc', 'Spec-driven development', 'PRD, SRS and OpenAPI are the source of truth; code, tests and docs are generated and continuously checked against them.'],
        ['search', 'RAG over project knowledge', 'Context retrieved from source code, business documents and project history so agents understand each client’s system.'],
        ['shield', 'AI review & code security', 'Automated review on every pull request, static analysis (SonarQube, Slither), dependency and secret scanning before merge.'],
        ['gauge', 'Productivity measurement', 'Lead time, defect density and test coverage tracked per sprint and reported transparently.'],
      ],
    },
    lab: {
      kicker: 'ラボ型開発 · Dedicated AI-Dev Lab', title: 'A lean team with the output of a full development department',
      text: 'A dedicated lab per partner: lead architect, domain specialist and an AI agent system configured for your codebase.',
      eq: 'One lead architect + AI agents ≈ the output of 8–10 developers',
      bullets: ['<b>Flexible contracts:</b> fixed-scope (請負) or time-and-capability (準委任).', '<b>Communication:</b> bilingual documents, regular meetings in Japan time (JST).', '<b>Transparency:</b> daily reports, code in your GitHub/GitLab.', '<b>Scalable:</b> scale the team up or down by phase.'],
      btn: 'See partnership models',
    },
    gov: {
      kicker: 'Responsible AI governance', title: 'Speed without trading away safety', text: 'Our process follows Vietnam’s Law on Artificial Intelligence 134/2025/QH15 and each client’s security requirements.',
      bullets: ['<b>Humans are accountable:</b> every code change is reviewed and approved by an engineer.', '<b>Source code & IP protection:</b> NDA before any access; IP belongs to the client.', '<b>Traceability:</b> full agent activity logs and change history.', '<b>Risk classification:</b> AI risk assessed per system, AI-generated content labelled where required.', '<b>Data control:</b> client data used only within the agreed project scope.'],
      callout: '<b>Committed by metrics, not words.</b> Defect density, test coverage and delivery time are written into the contract or SLA and re-measured after each phase.',
    },
    faqTitle: 'Questions Japanese companies often ask',
    faqText: 'What partners usually want to know before starting a pilot.',
    faq: [
      ['How are source code and IP protected?', 'We sign an NDA before seeing any material. All IP in the deliverables belongs to the client; code lives in the client’s repository or a private, access-controlled one.'],
      ['Is AI-written code reliable?', 'AI is the execution layer. Architects approve the design, every pull request is reviewed, automated tests exceed 85% coverage and static analysis runs before merge. Target defect density is under 1.5 per 1,000 lines.'],
      ['How do you handle communication and time zones?', 'Vietnam is two hours behind Japan. We hold regular meetings in JST, keep specs and reports bilingual and assign a fixed point of contact per project.'],
      ['Which contract type fits?', 'Fixed-scope (請負契約) for well-defined scope, or time-and-capability (準委任契約) for long-term labs. You can start with a 2–3 week PoC.'],
      ['How is progress reported?', 'Short daily reports, a demo at the end of every sprint and a live quality dashboard (lead time, defects, coverage).'],
    ],
  },

  ecoPage: {
    kicker: 'エコシステム · Ecosystem', title: 'Capability proven by systems that are running',
    lead: 'Every platform below was built and is operated by Proton ISF. Open them directly to verify.',
    liveK: 'Live status', liveT: 'Seven platforms, checked automatically', liveP: 'Our server pings each platform periodically and records the response code and latency. Last check:',
    chain: {
      kicker: 'SOVVN Chain', title: 'Network parameters', text: 'A Layer-0 network built by Proton ISF R&D on Substrate.',
      kv: [['Network', 'SOVVN Chain — Substrate Layer-0'], ['Chain ID', '21091981'], ['Consensus', 'Proof-of-Deposit, near-zero fees'], ['Language', 'Rust (Substrate)'], ['Governance token', 'DONG — fixed supply of 10 billion'], ['Documentation', 'Technical whitepaper v9.0']],
      mech: [['wVND backed 1:1', 'Backed by VND held in an escrow bank account, with on-chain proof of reserves.'], ['DP-DAS standard', 'DP-1155 multi-asset tokenization for equity, crafts, agricultural goods and IP.'], ['VNeID identity', 'KYC/AML through Vietnam’s national e-ID before trading.'], ['Secondary liquidity', 'Transparent transfer of startup equity on a secondary market.']],
      note: 'Guiding regulatory framework: Law on Digital Technology Industry 71/2025/QH15 and Resolution 05/2025/NQ-CP on the pilot crypto-asset market. Nothing on this page is an offer to invest.',
    },
    how: {
      kicker: 'How to verify', title: 'Three ways to assess our capability', text: '',
      items: [['globe', 'Visit directly', 'Open each platform and go through real user flows.'], ['search', 'Read on-chain data', 'Look up blocks, transactions and contracts in DongScan.'], ['users', 'Book a technical demo', 'Our engineers walk through architecture and code live.']],
    },
  },

  projPage: { kicker: '導入事例 · Projects', title: 'Featured projects', lead: 'The problem, architecture, technology and current status of each project.', note: 'Some projects are described at a general level under client confidentiality agreements.' },
  caseLabels: { context: 'Context', problem: 'The problem', solution: 'Solution & architecture', archCap: 'High-level architecture', ai: 'AI-driven footprint', status: 'Status & verification' },
  cases: [
    {
      key: 'p-cln', kind: 'cln', cat: 'GovTech · Digital export', title: 'Craft-village digital export platform', short: 'Craft villages', metaTitle: 'Craft-village digital export — case study',
      sum: 'B2B operations, an export storefront and on-chain product passports for Bát Tràng ceramics and Hanoi craft villages.', meta: 'Innovation programme · Decision 131/2026',
      page: {
        title: 'Taking Vietnamese craft to global markets with digital product data', lead: 'Part of Hanoi’s innovation programme for craft-village digital export under Decision 131/2026/QĐ-UBND, to which Proton ISF contributes.',
        figs: [['VND 65B', 'programme budget'], ['1,350', 'beneficiary craft villages'], ['1,000', 'Bát Tràng DPPs (first-phase target)'], ['JP · EU · US', 'target markets']],
        context: ['Hanoi has more craft villages than any other province. Most exports still pass through several layers of intermediaries, artisans capture little value, and products lack the provenance data demanding markets expect.', 'From 2027 the EU begins enforcing digital product passports for its first product groups — both pressure and an opportunity to digitise exports.'],
        problem: ['Exports depend on middlemen; artisans have no direct access to international buyers.', 'No traceable data on origin, materials and artisan for each product.', 'New prototypes take months to make by hand.', 'Wholesale payments lack protection for both sides.'],
        solTitle: 'Three layers: B2B trade, cross-border retail and on-chain data',
        solution: ['<b>platform.cholangnghe.shop:</b> workshop digitisation, order allocation to co-operatives and artisans, electronic documents.', '<b>cholangnghe.shop:</b> cross-border retail in VND/JPY/USD with international payments.', '<b>Escrow:</b> wholesale payments locked at the bank and released on acceptance.', '<b>On-chain DPP:</b> each shipment carries a passport on SOVVN Chain; scan QR/NFC to see origin, artisan and a 3D model.', '<b>3D digitisation:</b> scanning at the kiln, digital twins and faster prototyping.'],
        tech: ['Microservices', 'PostgreSQL', 'SOVVN Chain', '3D scanning', 'QR / NFC', 'Escrow API'],
        arch: [['Users', ['Artisans · co-ops', 'Importers', 'Retail buyers']], ['Platform', ['B2B platform', 'Export store', '3D centre']], ['Infrastructure', ['SOVVN Chain\nDPP', 'Bank\nescrow', 'Logistics\nAPI']]],
        ai: 'All Given–When–Then user stories, the data architecture, integration APIs and the detailed cost estimate for the 3D digitisation component were produced through our AI-driven process.',
        status: ['The B2B platform and export storefront are publicly accessible.', 'The 3D digitisation centre and Bát Tràng DPP issuance follow the programme schedule.', 'The delivery alliance includes a bank, a logistics provider, a technology partner and local government.'],
        links: [['platform.cholangnghe.shop', 'https://platform.cholangnghe.shop/'], ['cholangnghe.shop', 'https://cholangnghe.shop/']],
      },
    },
    {
      key: 'p-sovvn', kind: 'sovvn', cat: 'Blockchain · RWA', title: 'SOVVN Chain & Dong Protocol — real-world asset infrastructure', short: 'SOVVN Chain', metaTitle: 'SOVVN Chain & Dong Protocol — case study',
      sum: 'An in-house Substrate Layer-0 network, RWA launchpad and public block explorer.', meta: 'Mainnet · Chain ID 21091981',
      page: {
        title: 'SOVVN Chain: Layer-0 infrastructure for real-world asset tokenization in Vietnam', lead: 'A Substrate Layer-0 blockchain built by Proton ISF R&D, underpinning Dong Protocol, the DP-DAS digital asset standard and the RWA Launchpad.',
        figs: [['Layer-0', 'Substrate architecture'], ['21091981', 'Chain ID'], ['~0', 'transaction fees'], ['v9.0', 'technical whitepaper']],
        context: ['Startup capital and many real assets in Vietnam are illiquid: equity is locked for years and physical assets are hard to split or transfer.', 'The global tokenized RWA market is growing quickly while Vietnam is building its legal framework for digital assets.'],
        problem: ['No sovereign, low-cost blockchain infrastructure.', 'Need for transparent backing between digital assets and fiat.', 'Strict identity and anti-money-laundering requirements.', 'Need for a tokenization standard that works across asset types.'],
        solTitle: 'From the core network to issuance apps',
        solution: ['<b>SOVVN Chain:</b> Substrate Layer-0, Proof-of-Deposit consensus, near-zero fees.', '<b>Dong Protocol:</b> issuance and management of digital assets.', '<b>DP-DAS (DP-1155):</b> multi-asset standard for equity, premium crafts, agricultural goods and IP.', '<b>wVND:</b> backed 1:1 by VND in an escrow bank account, with on-chain proof of reserves.', '<b>VNeID:</b> national e-ID for KYC/AML.'],
        tech: ['Rust', 'Substrate', 'Polkadot SDK', 'Solidity', 'IPFS', 'OpenZeppelin'],
        arch: [['Applications', ['taisan.xyz', 'RWA Launchpad', 'DongScan']], ['Protocol', ['Dong Protocol', 'DP-DAS', 'wVND']], ['Infrastructure', ['SOVVN Chain\nSubstrate L0', 'VNeID\nKYC/AML', 'Bank\ncustody']]],
        ai: 'Smart contracts are checked with Slither, Mythril and generated test suites; technical docs and the whitepaper are maintained alongside the code using a spec-driven process.',
        status: ['Mainnet live with a public block explorer.', 'RWA Launchpad available at app.taisan.xyz.', 'Guiding framework: Law 71/2025/QH15 and Resolution 05/2025/NQ-CP. This page is not an offer to invest.'],
        links: [['taisan.xyz', 'https://taisan.xyz/'], ['DongScan', 'https://dongscan.taisan.xyz/'], ['Whitepaper', 'https://taisan.xyz/whitepaper']],
      },
    },
    {
      key: 'p-scm', kind: 'scm', cat: 'Enterprise AI · SCM', title: 'AI supply-chain planning for a pharma–cosmetics manufacturer', short: 'AI SCM', metaTitle: 'AI SCM/MRP for pharma–cosmetics — case study',
      sum: 'Purchase planning, production tracking and supplier management integrated with FAST ERP.', meta: '8-module PRD in 4 days',
      page: {
        title: 'AI SCM/MRP: material planning for GMP-compliant manufacturing', lead: 'Purchase planning, production tracking and supplier management for a pharmaceutical and cosmetics manufacturer, with two-way integration to FAST Business Online.',
        figs: [['4 days', '8-module PRD, architecture & algorithms'], ['8', 'business modules'], ['2-way', 'sync with FAST ERP'], ['00:00', 'automatic nightly reconciliation']],
        context: ['A pharma–cosmetics manufacturer works with hundreds of suppliers and thousands of raw-material and packaging codes; every product has a multi-level formula.', 'GMP requires strict control of expiry, retest dates and quarantined stock.'],
        problem: ['Spreadsheet-based planning leads to shortages or excess stock.', 'Multi-level BOMs make net requirements hard to compute accurately.', 'ERP data and production plans are out of sync.'],
        solTitle: 'An MRP engine with forecasting and optimisation',
        solution: ['<b>Multi-level BOM explosion</b> with automatic net requirements.', '<b>Demand forecasting</b> with a hybrid Prophet + XGBoost model; dynamic safety stock by lead time.', '<b>Supplier allocation</b> optimised with OR-Tools MILP on price, capacity and delivery time.', '<b>FAST integration</b>, two-way and idempotent, with nightly reconciliation.'],
        tech: ['.NET 8', 'Clean Architecture', 'Python FastAPI', 'Prophet', 'XGBoost', 'OR-Tools', 'PostgreSQL'],
        arch: [['Data sources', ['FAST ERP', 'Production plan', 'Suppliers']], ['AI engine', ['BOM & MRP', 'Forecasting', 'MILP optimiser']], ['Outputs', ['Purchase\nproposals', 'Expiry\nalerts', 'Management\nreports']]],
        ai: 'The 8-module PRD, technical architecture and algorithms were completed in <b>4 working days</b>, versus 4–6 weeks with a traditional approach.',
        status: ['Specification phase completed: PRD, architecture and algorithms.', 'Client details are kept general under a confidentiality agreement.'],
        links: [],
      },
    },
    {
      key: 'p-chosach', kind: 'chosach', cat: 'GovTech · E-commerce', title: 'chosach.vn — publications marketplace', short: 'chosach.vn', metaTitle: 'chosach.vn — case study',
      sum: 'Publication identifiers against piracy, escrow and e-invoicing on a microservices architecture.', meta: 'Live',
      page: {
        title: 'chosach.vn: transparent e-commerce for the publishing industry', lead: 'A specialised marketplace for publications on a high-load microservices architecture, supporting Hanoi’s digital-economy goals.',
        figs: [['<50 ms', 'target API response time'], ['Microservices', 'Go & .NET 8'], ['Escrow', 'buyer protection'], ['e-Invoice', 'automatic e-invoicing']],
        context: ['Publishing loses heavily to piracy and lacks transparent digital distribution between publishers, distributors and readers.'],
        problem: ['Hard to verify the rights behind each title.', 'Revenue sharing between parties is opaque.', 'Invoice and shipping reconciliation is manual.'],
        solTitle: 'Identification, escrow and automated reconciliation',
        solution: ['<b>Publication identifiers:</b> a unique ID per title, traceable to publisher and author.', '<b>Escrow & instant revenue sharing</b> between retailers and publishers.', '<b>E-invoicing</b> and real-time courier APIs.', '<b>Microservices</b> ready to scale with traffic.'],
        tech: ['Go', '.NET 8', 'PostgreSQL', 'Redis', 'Kubernetes', 'e-Invoice API'],
        arch: [['Users', ['Readers', 'Bookstores', 'Publishers']], ['Services', ['Catalogue & ID', 'Orders\nescrow', 'Invoicing\nlogistics']], ['Infrastructure', ['PostgreSQL', 'Redis', 'Kubernetes']]],
        ai: 'New services are specified, generated and tested through the AI-driven process, letting a small team maintain many microservices.',
        status: ['Live at chosach.vn.', SITE.sandboxDecree ? `Participating in Hanoi’s controlled-testing mechanism under ${SITE.sandboxDecree}.` : 'Contributing to Hanoi’s digital-economy goals.'],
        links: [['chosach.vn', 'https://chosach.vn/']],
      },
    },
  ],

  partPage: {
    kicker: '協業モデル · Partnership', title: 'Flexible partnership, starting with a pilot', lead: 'Three models for companies that need software, groups that need technology and investors looking for opportunities.',
    flow: { kicker: 'Process', title: 'From first call to long-term contract', text: '', steps: [['Discovery call', '30 minutes on your problem and expectations.', 'Week 0', ''], ['Technical demo', 'Live systems and our AI-driven workflow.', 'Week 1', ''], ['NDA & proposal', 'Sign an NDA and receive a PoC scope.', 'Weeks 1–2', ''], ['2–3 week PoC', 'Solve a real problem, measured on agreed metrics.', 'Weeks 2–5', ''], ['Full contract', 'Fixed scope, long-term lab, JV or investment.', 'After PoC', '']] },
    commit: { kicker: 'Commitments', title: 'What you get', text: '', items: [['code', 'Full code ownership', '100% of source code, documentation and IP belongs to the client.'], ['gauge', 'Measurable metrics', 'Delivery time, defect density and test coverage written into the contract/SLA.'], ['globe', 'Bilingual delivery', 'Documents and reports in English and Vietnamese; Japanese support for Japanese partners.'], ['lock', 'Security', 'NDA before any document exchange, role-based access.'], ['bolt', 'Fast response', 'Reply within one business day, 24/7 support SLA after go-live.'], ['users', 'One point of contact', 'A lead architect accountable end-to-end.']] },
    partners: { kicker: '戦略的パートナー · Network', title: 'Working with institutions and businesses', text: '', groups: [['Government', ['Hanoi People’s Committee', 'Hanoi Dept. of Science & Technology', 'Bát Tràng Commune']], ['Banking & logistics', ['Asia Commercial Bank (ACB)', 'Viettel Post']], ['Enterprise software', ['FAST Software', '1C Vietnam']], ['Science & technology', ['Oritech Technology JSC', 'Substrate expert alliance']]], note: 'Organisations involved in projects and programmes Proton ISF participates in.' },
  },

  aboutPage: {
    kicker: '企業概要 · About', title: 'From startup investment fund to AI-first technology group', lead: 'Founded in Hanoi in 2019, Proton ISF combines investment thinking, AI engineering capability and a deep understanding of institutions to build digital platforms with real impact.',
    legalK: 'Corporate information', legalT: 'The company',
    kv: [['Legal name', SITE.legalEn], ['Vietnamese name', SITE.legal], ['Tax ID', `${SITE.taxId} — first issued 28 Oct 2019`], ['Head office', SITE.addressEn], ['Chairman', 'Mr. Ngô Hoàng Quyền'], ['CEO', 'Mr. Doãn Xuân Bắc'], ['Fields', 'AI-driven software development · Blockchain & RWA tokenization · AI supply-chain planning · GovTech & e-commerce · Innovation investment']],
    vision: { kicker: 'ビジョン · Vision 2030', text: 'To become a leading Southeast Asian venture studio and AI software engineering centre, where real assets, data and AI create lasting economic value together.', points: ['SOVVN Chain Layer-0 infrastructure linking venture capital with real assets.', 'A digital export network bringing Vietnamese craft to Japan, the EU and the US.', 'Helping manufacturers optimise supply chains with AI.'] },
    mission: { kicker: '使命 · Mission', title: 'Four missions', items: [['Free software engineers', 'AI takes on repetitive work so teams focus on architecture, business logic and innovation.'], ['Unlock investment liquidity', 'A real-asset tokenization standard so startup capital is no longer locked for years.'], ['Preserve and elevate heritage', '3D digitisation and digital product passports for traditional craft villages.'], ['Serve Hanoi’s digital transformation', 'Deliver innovation programmes under the Capital Law.']] },
    values: { kicker: 'コアバリュー · Values', title: 'Four values', items: [['Speed', 'Speed', ['MVP in 3–5 weeks', '60–75% shorter development cycles']], ['Efficiency', 'Efficiency', ['55–60% lower TCO', 'Direct partnership, no intermediaries']], ['Measurable quality', 'Quality', ['<1.5 defects/KLOC', '>85% coverage, OWASP Top 10']], ['Transparency', 'Trust', ['Compliant with Vietnamese law', 'Escrow through a blocked bank account']]] },
    tl: { kicker: '沿革 · Milestones', title: 'Our journey', items: [['2019', 'Innovation fund founded', 'Registered in Hanoi under Decree 38/2018/NĐ-CP; incubating digital technology projects.'], ['2021–23', 'Specialised e-commerce', 'Built chosach.vn; mastered high-load microservices.'], ['2024–25', 'RWA infrastructure', 'SOVVN Chain mainnet; launched taisan.xyz, Launchpad, DongScan, whitepaper v9.0.'], ['2026', 'The AI-first era', 'Standardised AI-Driven Development; joined the craft-village digital export programme.']] },
    team: { kicker: 'キーパーソン · Leadership', title: 'Investment, execution and research in one team', text: '', people: [
      ['NQ', 'Mr. Ngô Hoàng Quyền', 'Chairman · Founder', ['15+ years managing venture funds and enterprise digital transformation.', 'Sets high-tech investment strategy and fund risk management.', 'Founder of the Proton ISF and SOVVN Chain ecosystem.']],
      ['DB', 'Mr. Doãn Xuân Bắc', 'Chief Executive Officer', ['Bachelor’s degree, National Economics University (2006).', '18+ years leading IT and B2B trading companies; 17 years delivering enterprise IT solutions.', 'Leads project delivery, ecosystem commercialisation and international partnerships.']],
      ['ND', 'Dr. Nguyễn Mạnh Dũng', 'Chief Technology Officer', ['PhD in Computer Science; specialist in distributed networks, security and optimisation.', 'Lead architect of SOVVN Chain and the AI MRP engine.', '10+ years designing core enterprise architectures.']],
      ['OT', 'Oritech Technology JSC', 'Science & Technology partner', ['Certified Science and Technology Enterprise.', 'JV partner for measurement hardware, 3D digitisation and IoT integration.']],
    ] },
    legal: { kicker: 'Regulation', title: 'The legal framework we operate within', text: '', items: [['2018', 'Decree 38/2018/NĐ-CP', 'Investment in innovative startup SMEs.'], ['Effective 1 Jan 2025', 'Capital Law 39/2024/QH15', 'Controlled-testing mechanism in Hanoi.'], ['22 Dec 2024', 'Resolution 57-NQ/TW', 'Breakthroughs in science, innovation and digital transformation.'], ['Effective 1 Jan 2026', 'Digital Technology Industry Law 71/2025/QH15', 'Framework for AI, digital assets and tech firms.'], ['2025', 'Resolution 05/2025/NQ-CP', 'Pilot crypto-asset market — guiding framework.'], ['Effective 1 Mar 2026', 'AI Law 134/2025/QH15', 'Risk-based AI governance.'], ['2026', 'Decision 131/2026/QĐ-UBND', 'Craft-village digital export programme.'], ['2023', 'Decree 13/2023/NĐ-CP', 'Personal data protection.']] },
  },

  insPage: { kicker: 'インサイト · Insights', title: 'Perspectives from practice', lead: 'Analysis on AI software engineering, digital export and digital assets in Vietnam.', read: 'Read', sources: 'Sources', ctaT: 'Want to apply this in your company?', ctaP: 'Talk to a Proton ISF architect for 30 minutes.' },

  contactPage: { kicker: 'お問い合わせ · Contact', title: 'Talk to Proton ISF', lead: 'Fill in the form or reach us directly. We reply within one business day.', direct: 'Direct contact', mailNote: 'Partnerships, investment, press', phoneNote: 'Phone / Zalo · Mon–Fri, 8:30–17:30 (GMT+7)', office: 'Hanoi office', stepsT: 'After you submit' },

  profilePage: { kicker: '会社案内 · Capability profile', title: 'Proton ISF capability profile 2026', lead: 'A 16-page PDF in English and Vietnamese: capabilities, methodology, projects, team and partnership models.', inside: 'Inside', items: ['Company overview, vision and milestones', '2026 market context and regulation', 'Four pillars and the AI-Driven Development method', 'Technology stack and quality metrics', 'Case studies: craft villages, SOVVN Chain, AI SCM, chosach.vn', 'Leadership, partners and partnership models'], byEmail: '<b>Receive it by email.</b> Fill in the form and we will send both language versions within the business day.', formT: 'Which area interests you?', formH: 'So we can include the right materials.' },

  form: {
    s1: 'Which area interests you?', s1h: 'Pick one main area.',
    interests: [['ai_dev', 'AI-Driven Development', 'Software, dedicated lab'], ['rwa', 'RWA – Blockchain', 'Asset tokenization'], ['scm', 'AI SCM / MRP', 'Supply chain, manufacturing'], ['govtech', 'GovTech', 'Public-sector platforms'], ['investment', 'Investment – M&A', 'Equity, acquisition'], ['other', 'Other', '']],
    s2: 'Preferred engagement model?', s2h: 'Not sure yet is fine.',
    models: [['outsourcing', 'Outsourcing – Lab', 'Full-cycle or dedicated lab'], ['tech_transfer', 'Transfer – JV', 'Localisation, co-development'], ['ma', 'M&A – Investment', 'Strategic investment'], ['unknown', 'Not decided', 'Let’s talk first']],
    s3: 'Your details', s3h: 'We reply within one business day.',
    name: 'Full name', company: 'Company', email: 'Email', phone: 'Phone', country: 'Country', countryDefault: '', message: 'Message', msgPh: 'Briefly describe the problem, scale and timeline…',
    consent: 'I agree that Proton ISF may process my personal data to respond to this request, as described in the {privacy}.', privacy: 'Privacy policy',
    req: 'Please fill this in.', emailErr: 'Please enter a valid email.', pick: 'Please choose an option.',
    back: 'Back', next: 'Continue', submit: 'Send request', sending: 'Sending…',
    sendErr: 'We couldn’t send this. Please try again or email contact@protonisf.com directly.',
    doneT: 'Request received', doneP: 'Thank you. A Proton ISF architect will contact you within one business day. You can book a call now:', doneCal: 'Pick a 30-minute slot', doneMail: 'Email to book a call', mailSubject: '30-minute call with Proton ISF',
  },

  legal: {
    privacy: { kicker: 'Legal', title: 'Privacy policy', lead: 'How Proton ISF collects, uses and protects personal data, in line with Vietnam’s Decree 13/2023/NĐ-CP.', body: `
<p>Last updated: 5 October 2026. Data controller and processor: ${SITE.legalEn} (Tax ID ${SITE.taxId}), ${SITE.addressEn}. Contact: <a href="mailto:${SITE.email}">${SITE.email}</a>.</p>
<h2>1. Data we collect</h2><ul><li>Data you submit through forms: name, company, email, phone, country, message, area and model of interest.</li><li>Technical data: source page, campaign parameters (UTM), browser language.</li><li>Analytics cookies (Google Analytics, Meta Pixel) only if you accept them in the cookie banner.</li></ul>
<h2>2. Purposes</h2><ul><li>Responding to enquiries, scheduling calls, sending the capability profile.</li><li>Managing client and partner relationships.</li><li>Statistics and site improvement (with cookie consent).</li></ul>
<h2>3. Legal basis</h2><p>Your consent, given by ticking the consent box on forms and accepting the cookie banner. You may withdraw consent at any time.</p>
<h2>4. Sharing</h2><p>We do not sell personal data. Data may be stored and processed by infrastructure providers (cloud hosting, CRM, email, automation tools) under confidentiality terms, only for the purposes above.</p>
<h2>5. Retention</h2><p>Enquiry data is kept for up to 36 months after the last interaction, unless the law requires otherwise or you ask us to delete it sooner.</p>
<h2>6. Your rights</h2><p>You have the rights to be informed, consent, access, rectify, erase, restrict, object and withdraw consent under Decree 13/2023/NĐ-CP. Send requests to <a href="mailto:${SITE.email}">${SITE.email}</a>.</p>
<h2>7. Security</h2><p>Data travels over HTTPS, is stored with access controls, and is available only to responsible staff.</p>` },
    terms: { kicker: 'Legal', title: 'Terms of use', lead: 'Conditions for using protonisf.com.', body: `
<p>Last updated: 5 October 2026. This website is operated by ${SITE.legalEn} (Tax ID ${SITE.taxId}).</p>
<h2>1. Content</h2><p>Information on this site presents Proton ISF’s capabilities and services. Productivity figures are internal benchmarks from completed projects; specific commitments are set in each contract or SLA.</p>
<h2>2. Not an investment offer</h2><p>Content about digital assets, real-world asset tokenization and blockchain platforms is a technology presentation only and is not an offer, solicitation or financial advice.</p>
<h2>3. Intellectual property</h2><p>Trademarks, logos, content and design belong to Proton ISF or its licensors. No commercial reproduction without written consent.</p>
<h2>4. External links</h2><p>The site links to ecosystem platforms and third-party sources, each with its own terms.</p>
<h2>5. Governing law</h2><p>These terms are governed by the laws of Vietnam.</p>` },
  },

  nf: { title: 'Page not found', text: 'The page you’re looking for may have moved. Head back home or get in touch.', home: 'Back to home' },
};
