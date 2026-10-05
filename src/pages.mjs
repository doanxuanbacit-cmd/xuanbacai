// Template các trang. Nội dung lấy từ content/<lang>.mjs (cấu trúc giống nhau giữa 3 ngôn ngữ)
import { SITE, esc, ic, href, ROUTES, orbitBig, heroMark, orbitSmall, pageHero, breadcrumbLd, secHead, btn, platformCards, partnerStrip, caseVis, PLATFORMS } from './core.mjs';

const bullets = (arr, cls = 'bul') => `<ul class="${cls}">${arr.map((x) => `<li>${x}</li>`).join('')}</ul>`;
const crumbsFor = (C, lang, trail) => [[C.ui.home, ROUTES.home[lang]], ...trail];

// ---------- Lead form ----------
export function leadForm(C, lang, source, compact = false) {
  const f = C.form;
  const ch = (name, items, req) => `<div class="choices">${items.map(([v, l, s], i) => `<label class="choice"><input type="radio" name="${name}" value="${v}"${i === 0 && req ? ' required' : ''}><span>${l}${s ? `<small>${s}</small>` : ''}</span></label>`).join('')}</div>`;
  return `<form class="form" id="form" data-lead novalidate data-source="${source}" data-lang="${lang}">
<div class="steps-bar" aria-hidden="true"><i class="on"></i><i></i><i></i></div>
<fieldset class="fstep on" data-step="1"><legend>${f.s1}</legend><p class="hint">${f.s1h}</p>${ch('interest', f.interests, true)}</fieldset>
<fieldset class="fstep" data-step="2"><legend>${f.s2}</legend><p class="hint">${f.s2h}</p>${ch('model', f.models, true)}</fieldset>
<fieldset class="fstep" data-step="3"><legend>${f.s3}</legend><p class="hint">${f.s3h}</p>
<div class="fields">
<div class="fld"><label for="f-name">${f.name} *</label><input id="f-name" name="name" autocomplete="name" required maxlength="120"><span class="err">${f.req}</span></div>
<div class="fld"><label for="f-company">${f.company}</label><input id="f-company" name="company" autocomplete="organization" maxlength="160"></div>
<div class="fld"><label for="f-email">${f.email} *</label><input id="f-email" name="email" type="email" autocomplete="email" required maxlength="160"><span class="err">${f.emailErr}</span></div>
<div class="fld"><label for="f-phone">${f.phone}</label><input id="f-phone" name="phone" type="tel" autocomplete="tel" maxlength="40"></div>
<div class="fld full"><label for="f-country">${f.country}</label><input id="f-country" name="country" autocomplete="country-name" maxlength="80" value="${f.countryDefault}"></div>
${compact ? '' : `<div class="fld full"><label for="f-msg">${f.message}</label><textarea id="f-msg" name="message" maxlength="3000" placeholder="${esc(f.msgPh)}"></textarea></div>`}
<label class="consent full" style="grid-column:1/-1"><input type="checkbox" name="consent" value="1" required><span>${f.consent.replace('{privacy}', `<a href="${href('privacy', lang)}" target="_blank">${f.privacy}</a>`)}</span></label>
<input class="hp" type="text" name="website" tabindex="-1" autocomplete="off" aria-hidden="true">
${SITE.turnstile ? `<div class="cf-turnstile full" style="grid-column:1/-1" data-sitekey="${SITE.turnstile}" data-size="flexible"></div>` : ''}
</div></fieldset>
<div class="f-nav"><button class="btn btn-ghost" type="button" data-prev hidden>${f.back}</button><button class="btn btn-primary" type="button" data-next style="margin-left:auto">${f.next}${ic.arrow}</button><button class="btn btn-primary" type="submit" hidden style="margin-left:auto">${f.submit}${ic.arrow}</button></div>
<div class="f-msg" role="alert"></div>
<div class="f-done" aria-live="polite"><div class="ok">${ic.check}</div><h3>${f.doneT}</h3><p>${f.doneP}</p>
<div class="btn-row" style="justify-content:center">${SITE.cal ? `<a class="btn btn-primary" href="${SITE.cal}" target="_blank" rel="noopener" data-ev="cta_book_call">${f.doneCal}${ic.cal}</a>` : `<a class="btn btn-primary" href="mailto:${SITE.email}?subject=${encodeURIComponent(f.mailSubject)}">${f.doneMail}${ic.mail}</a>`}</div></div>
<script type="application/json" class="f-i18n">${JSON.stringify({ err: f.sendErr, pick: f.pick, sending: f.sending })}</script>
</form>`;
}

// ---------- Shared sections ----------
const pillarsBento = (P, lang, withLinks = true) => {
  const sizes = ['b-7', 'b-5', 'b-5', 'b-7'];
  const ids = ['ai', 'rwa', 'scm', 'govtech'];
  return `<div class="bento">${P.items.map((p, i) => `<article class="pillar rv ${sizes[i]}${i === 0 ? ' feat' : ''}" id="p-${ids[i]}">
${i === 0 ? orbitSmall() : ''}
<div class="top"><span class="no">0${i + 1}</span><span class="tag">${p.tag}</span></div>
<h3>${p.title}</h3>${bullets(p.bullets, '')}
<p class="ev">${p.ev}</p>
${withLinks ? `<a class="link-arrow" href="${i === 0 ? href('ai', lang) : href('cap#' + ids[i], lang)}">${P.more}${ic.arrow}</a>` : ''}
</article>`).join('')}</div>`;
};

const processSteps = (S) => `<div class="proc">${S.map(([t, d, a, b], i) => `<div class="step rv"><span class="dot">0${i + 1}</span><div><h4>${t}</h4><p>${d}</p><div class="t"><b>${a}</b>${b ? `<s>${b}</s>` : ''}</div></div></div>`).join('')}</div>`;

const compareTable = (T) => `<div class="tbl-wrap rv"><table class="tbl"><thead><tr><th>${T.head[0]}</th><th>${T.head[1]}</th><th class="hl">${T.head[2]}</th><th>${T.head[3]}</th></tr></thead>
<tbody>${T.rows.map(([a, b, c, d]) => `<tr><td>${a}</td><td>${b}</td><td class="hl">${c}</td><td class="gain">${d}</td></tr>`).join('')}</tbody></table></div><p class="note">${T.note}</p>`;

const caseCards = (C, lang) => `<div class="cases">${C.cases.slice(0, 3).map((c) => caseCard(c, lang)).join('')}</div>`;
const caseCard = (c, lang) => `<a class="case rv" href="${href(c.key, lang)}"><div class="vis">${caseVis(c.kind)}</div><div class="body"><span class="cat">${c.cat}</span><h3>${c.title}</h3><p>${c.sum}</p><div class="meta"><span>${c.meta}</span>${ic.arrow.replace('<svg', '<svg width="18" height="18"')}</div></div></a>`;

const marketStats = (M) => `<div class="stats">${M.map(([n, d, s, u]) => `<div class="stat rv"><b>${n}</b><p>${d}</p><cite>${u ? `<a href="${u}" target="_blank" rel="noopener">${s}</a>` : s}</cite></div>`).join('')}</div>`;

const modelsBlock = (M, lang) => `<div class="models">${M.items.map((m, i) => `<article class="model rv${i === 0 ? ' feat' : ''}"><span class="k">${m.k}</span><h3>${m.title}</h3>${bullets(m.bullets, '')}</article>`).join('')}</div>
<div class="poc rv"><span class="big">PoC</span><p>${M.poc}</p>${btn(M.pocBtn, href('contact', lang) + '#form', 'primary', 'cta_book_call')}</div>`;

const finalCta = (C, lang, source) => {
  const F = C.home.final;
  return `<section class="section dark" id="lien-he"><div class="wrap cta">
<div class="rv"><p class="kicker">${F.kicker}</p><h2 style="color:#fff">${F.title}</h2><p class="lead" style="margin-top:18px">${F.text}</p>
<ol class="road">${F.road.map(([t, s], i) => `<li><span class="n">${i + 1}</span><div><b>${t}</b><span>${s}</span></div></li>`).join('')}</ol>
<div class="contact-lines"><span>${ic.mail.replace('<svg', '<svg style="display:inline;width:16px;vertical-align:-3px;margin-right:8px"')}<a href="mailto:${SITE.email}">${SITE.email}</a></span><span>${ic.phone.replace('<svg', '<svg style="display:inline;width:16px;vertical-align:-3px;margin-right:8px"')}<a href="tel:${SITE.phoneRaw}">${SITE.phone}</a> (Zalo)</span></div>
</div>
<div class="rv">${leadForm(C, lang, source)}</div>
</div></section>`;
};

// =============== PAGES ===============
export function home(C, lang) {
  const H = C.home;
  const body = `<section class="hero dark"><div class="grid-bg"></div><div class="wrap">
<div class="hero-grid"><div>
<p class="kicker">${H.kicker}</p>
<h1>${H.h1}</h1>
<p class="lead">${H.lead}</p>
<div class="btn-row">${btn(H.cta1, href('contact', lang) + '#form', 'primary', 'cta_book_call', 'cal')}${btn(H.cta2, href('profile', lang), 'ghost', 'download_profile', 'download')}</div>
</div>
<div class="orbit">${orbitBig()}${heroMark()}</div></div>
<div class="hero-stats">${H.stats.map(([n, l]) => `<div><b data-count="${n}">${n}</b><span>${l}</span></div>`).join('')}</div>
<p class="foot-note">${H.note}</p>
</div></section>
${partnerStrip(H.partners)}

<section class="section"><div class="wrap">
${secHead(H.ps.kicker, H.ps.title, H.ps.text)}
<div class="ps rv"><div class="ps-row ps-head"><div>#</div><div>${H.ps.head[0]}</div><div>${H.ps.head[1]}</div><div>${H.ps.head[2]}</div></div>
${H.ps.rows.map(([t, d, s, v], i) => `<div class="ps-row"><div class="n">0${i + 1}</div><div><h4>${t}</h4><p>${d}</p></div><div class="sol"><p>${s}</p></div><div class="val">${v}</div></div>`).join('')}</div>
</div></section>

<section class="section alt" id="nang-luc"><div class="wrap">
${secHead(C.pillars.kicker, C.pillars.title, C.pillars.text)}
${pillarsBento(C.pillars, lang)}
</div></section>

<section class="section dark"><div class="wrap">
${secHead(H.proc.kicker, H.proc.title, H.proc.text)}
${processSteps(C.process)}
<div style="margin-top:40px" class="rv">${btn(H.proc.btn, href('ai', lang), 'ghost')}</div>
</div></section>

<section class="section"><div class="wrap">
${secHead(H.cmp.kicker, H.cmp.title, H.cmp.text)}
${compareTable(C.compare)}
</div></section>

<section class="section alt"><div class="wrap">
${secHead(H.eco.kicker, H.eco.title, H.eco.text)}
${platformCards(lang)}
</div></section>

<section class="section"><div class="wrap">
${secHead(H.cases.kicker, H.cases.title, H.cases.text)}
${caseCards(C, lang)}
<div style="margin-top:32px" class="rv"><a class="link-arrow" href="${href('proj', lang)}">${H.cases.all}${ic.arrow}</a></div>
</div></section>

<section class="section alt"><div class="wrap">
${secHead(H.market.kicker, H.market.title, H.market.text)}
${marketStats(C.market)}
</div></section>

<section class="section"><div class="wrap">
${secHead(H.models.kicker, H.models.title, H.models.text)}
${modelsBlock(C.models, lang)}
</div></section>
${finalCta(C, lang, 'home')}`;
  return { key: 'home', title: C.meta.home[0], desc: C.meta.home[1], body };
}

export function capabilities(C, lang) {
  const P = C.capPage;
  const ids = ['ai', 'rwa', 'scm', 'govtech'];
  const sections = P.sections.map((s, i) => `<section class="section${i % 2 ? ' alt' : ''}" id="${ids[i]}"><div class="wrap grid-2">
<div class="rv"><p class="kicker">0${i + 1} · ${s.tag}</p><h2>${s.title}</h2><p class="lead" style="margin-top:18px">${s.lead}</p>
<div class="chips" style="margin-top:24px">${s.chips.map((c) => `<span class="chip">${c}</span>`).join('')}</div>
${s.link ? `<div style="margin-top:28px">${btn(s.link[0], s.link[1].startsWith('http') ? s.link[1] : href(s.link[1], lang), 'primary', '', s.link[1].startsWith('http') ? 'ext' : 'arrow', s.link[1].startsWith('http') ? ' target="_blank" rel="noopener"' : '')}</div>` : ''}
</div>
<div class="rv">${s.blocks.map(([h, list]) => `<div class="card" style="margin-bottom:14px"><h4>${h}</h4>${bullets(list)}</div>`).join('')}</div>
</div></section>`).join('');
  const stack = `<section class="section dark"><div class="wrap">
${secHead(P.stack.kicker, P.stack.title, P.stack.text)}
<div class="tbl-wrap rv"><table class="tbl"><thead><tr>${P.stack.head.map((h, i) => `<th${i === 2 ? ' class="hl"' : ''}>${h}</th>`).join('')}</tr></thead>
<tbody>${P.stack.rows.map(([a, b, c]) => `<tr><td>${a}</td><td>${b}</td><td class="hl">${c}</td></tr>`).join('')}</tbody></table></div>
</div></section>`;
  const body = pageHero({ kicker: P.kicker, title: P.title, lead: P.lead, crumbs: crumbsFor(C, lang, [[C.ui.nav.cap, null]]),
    actions: btn(C.ui.cta, href('contact', lang) + '#form', 'primary', 'cta_book_call') + btn(P.aiBtn, href('ai', lang), 'ghost') }) +
    `<section class="section tight alt"><div class="wrap">${pillarsBento(C.pillars, lang, false)}</div></section>` + sections + stack + finalCta(C, lang, 'capabilities');
  return { key: 'cap', title: C.meta.cap[0], desc: C.meta.cap[1], body, jsonld: [breadcrumbLd([[C.ui.home, ROUTES.home[lang]], [C.ui.nav.cap, ROUTES.cap[lang]]])] };
}

export function aiPage(C, lang) {
  const A = C.ai;
  const body = pageHero({ kicker: A.kicker, title: A.title, lead: A.lead, crumbs: crumbsFor(C, lang, [[C.ui.nav.cap, href('cap', lang)], ['AI-Driven Development', null]]),
    actions: btn(C.ui.cta, href('contact', lang) + '#form', 'primary', 'cta_book_call', 'cal') + btn(C.home.cta2, href('profile', lang), 'ghost', 'download_profile', 'download') }) +
  `<section class="section tight"><div class="wrap"><div class="figs rv">${A.figs.map(([b, s]) => `<div><b>${b}</b><span>${s}</span></div>`).join('')}</div><p class="note">${C.home.note}</p></div></section>
<section class="section alt"><div class="wrap">
${secHead(A.proc.kicker, A.proc.title, A.proc.text)}
<div class="grid-3" style="grid-template-columns:repeat(auto-fit,minmax(190px,1fr))">${A.proc.steps.map(([t, time, trad, list], i) => `<article class="card rv"><span class="kicker" style="margin:0">0${i + 1}</span><h4>${t}</h4>${bullets(list)}<div style="margin-top:auto;padding-top:14px;border-top:1px solid var(--border)"><b style="font-size:22px;letter-spacing:-.02em">${time}</b>${trad ? `<br><s style="color:var(--text-3);font-size:13.5px">${trad}</s>` : ''}</div></article>`).join('')}</div>
</div></section>
<section class="section"><div class="wrap">
${secHead(A.stack.kicker, A.stack.title, A.stack.text)}
<div class="grid-3">${A.stack.items.map(([i, t, d]) => `<article class="card rv"><span class="ic">${ic[i]}</span><h4>${t}</h4><p>${d}</p></article>`).join('')}</div>
</div></section>
<section class="section dark"><div class="wrap grid-2">
<div class="rv"><p class="kicker">${A.lab.kicker}</p><h2 style="color:#fff">${A.lab.title}</h2><p class="lead" style="margin-top:18px">${A.lab.text}</p>
<div style="font-size:clamp(56px,8vw,96px);font-weight:800;letter-spacing:-.04em;color:var(--teal-300);line-height:1;margin-top:28px" class="num">1 = 8–10</div><p style="color:#9FB0B9;margin-top:8px">${A.lab.eq}</p></div>
<div class="rv">${bullets(A.lab.bullets)}<div style="margin-top:28px">${btn(A.lab.btn, href('part', lang), 'ghost')}</div></div>
</div></section>
<section class="section"><div class="wrap">
${secHead(A.gov.kicker, A.gov.title, A.gov.text)}
<div class="grid-2"><div class="rv">${bullets(A.gov.bullets)}</div><div class="callout rv">${A.gov.callout}</div></div>
</div></section>
<section class="section alt"><div class="wrap">
${secHead(C.home.cmp.kicker, C.home.cmp.title, C.home.cmp.text)}
${compareTable(C.compare)}
</div></section>
<section class="section"><div class="wrap grid-2" style="align-items:start">
<div class="rv"><p class="kicker">FAQ</p><h2>${A.faqTitle}</h2><p class="lead" style="margin-top:18px">${A.faqText}</p></div>
<div class="faq rv">${A.faq.map(([q, a]) => `<details><summary>${q}</summary><div class="a">${a}</div></details>`).join('')}</div>
</div></section>
${finalCta(C, lang, 'ai-driven-development')}`;
  const faqLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: A.faq.map(([q, a]) => ({ '@type': 'Question', name: q.replace(/<[^>]+>/g, ''), acceptedAnswer: { '@type': 'Answer', text: a.replace(/<[^>]+>/g, '') } })) };
  const svcLd = { '@context': 'https://schema.org', '@type': 'Service', name: 'AI-Driven Development', serviceType: 'Software development', provider: { '@id': SITE.url + '/#org' }, areaServed: ['VN', 'JP'], description: A.lead.replace(/<[^>]+>/g, '') };
  return { key: 'ai', title: C.meta.ai[0], desc: C.meta.ai[1], body, jsonld: [faqLd, svcLd, breadcrumbLd([[C.ui.home, ROUTES.home[lang]], [C.ui.nav.cap, ROUTES.cap[lang]], ['AI-Driven Development', ROUTES.ai[lang]]])] };
}

export function ecosystem(C, lang) {
  const E = C.ecoPage;
  const body = pageHero({ kicker: E.kicker, title: E.title, lead: E.lead, crumbs: crumbsFor(C, lang, [[C.ui.nav.eco, null]]) }) +
  `<section class="section"><div class="wrap">
<div class="sec-head rv"><div><p class="kicker">${E.liveK}</p><h2>${E.liveT}</h2></div><p>${E.liveP} <span id="checked-at" class="num"></span></p></div>
${platformCards(lang)}
</div></section>
<section class="section alt"><div class="wrap">
${secHead(E.chain.kicker, E.chain.title, E.chain.text)}
<div class="grid-2"><dl class="kv rv">${E.chain.kv.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl>
<div class="grid-2 rv" style="gap:14px">${E.chain.mech.map(([t, d]) => `<div class="card"><h4>${t}</h4><p>${d}</p></div>`).join('')}</div></div>
<p class="note">${E.chain.note}</p>
</div></section>
<section class="section"><div class="wrap">
${secHead(E.how.kicker, E.how.title, E.how.text)}
<div class="grid-3">${E.how.items.map(([i, t, d]) => `<article class="card rv"><span class="ic">${ic[i]}</span><h4>${t}</h4><p>${d}</p></article>`).join('')}</div>
</div></section>
${finalCta(C, lang, 'ecosystem')}`;
  return { key: 'eco', title: C.meta.eco[0], desc: C.meta.eco[1], body, jsonld: [breadcrumbLd([[C.ui.home, ROUTES.home[lang]], [C.ui.nav.eco, ROUTES.eco[lang]]])] };
}

export function projects(C, lang) {
  const P = C.projPage;
  const body = pageHero({ kicker: P.kicker, title: P.title, lead: P.lead, crumbs: crumbsFor(C, lang, [[C.ui.nav.proj, null]]) }) +
  `<section class="section"><div class="wrap"><div class="cases" style="grid-template-columns:repeat(auto-fit,minmax(300px,1fr))">${C.cases.map((c) => caseCard(c, lang)).join('')}</div>
<p class="note" style="margin-top:28px">${P.note}</p></div></section>${finalCta(C, lang, 'projects')}`;
  return { key: 'proj', title: C.meta.proj[0], desc: C.meta.proj[1], body, jsonld: [breadcrumbLd([[C.ui.home, ROUTES.home[lang]], [C.ui.nav.proj, ROUTES.proj[lang]]])] };
}

const archSvg = (layers) => {
  const W = 560, rowH = 70, gap = 30, top = 10;
  const H = top + 14 + layers.length * rowH + (layers.length - 1) * gap + 10;
  let out = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Architecture" font-family="inherit">`;
  layers.forEach(([label, boxes], r) => {
    const y = top + 14 + r * (rowH + gap);
    out += `<text x="0" y="${y - 6}" font-size="10.5" font-weight="700" letter-spacing="1.4" fill="currentColor" opacity=".55">${esc(label.toUpperCase())}</text>`;
    const x0 = 0, w = (W - (boxes.length - 1) * 10) / boxes.length;
    boxes.forEach((b, i) => {
      const x = x0 + i * (w + 10);
      const hl = r === 1;
      out += `<rect x="${x}" y="${y}" width="${w}" height="${rowH}" rx="6" fill="${hl ? '#0E7C86' : 'none'}" fill-opacity="${hl ? .1 : 0}" stroke="${hl ? '#0E7C86' : 'currentColor'}" stroke-opacity="${hl ? 1 : .3}" stroke-width="1.4"/>`;
      const words = esc(b).split('\n');
      words.forEach((wd, k) => { out += `<text x="${x + w / 2}" y="${y + rowH / 2 + 5 + (k - (words.length - 1) / 2) * 17}" text-anchor="middle" font-size="${k === 0 ? 14 : 12}" font-weight="${k === 0 ? 700 : 400}" fill="currentColor" opacity="${k === 0 ? 1 : .7}">${wd}</text>`; });
      if (r < layers.length - 1) out += `<path d="M${x + w / 2} ${y + rowH + 4}v${gap - 8}" stroke="#0E7C86" stroke-width="1.4" stroke-dasharray="3 3"/>`;
    });
  });
  return out + '</svg>';
};

export function caseStudy(C, lang, c) {
  const S = c.page;
  const L = C.caseLabels;
  const body = pageHero({ kicker: c.cat, title: S.title, lead: S.lead, crumbs: crumbsFor(C, lang, [[C.ui.nav.proj, href('proj', lang)], [c.short || c.title, null]]) }) +
  `<section class="section tight"><div class="wrap"><div class="figs rv">${S.figs.map(([b, s]) => `<div><b>${b}</b><span>${s}</span></div>`).join('')}</div></div></section>
<section class="section tight"><div class="wrap grid-2">
<div class="rv"><p class="kicker">${L.context}</p><div class="prose">${S.context.map((p) => `<p>${p}</p>`).join('')}</div></div>
<div class="rv"><p class="kicker">${L.problem}</p>${bullets(S.problem)}</div>
</div></section>
<section class="section alt"><div class="wrap">
<div class="sec-head rv"><div><p class="kicker">${L.solution}</p><h2>${S.solTitle}</h2></div><span></span></div>
<div class="grid-2"><div class="rv">${bullets(S.solution)}<div class="chips" style="margin-top:28px">${S.tech.map((t) => `<span class="chip">${t}</span>`).join('')}</div></div>
<figure class="arch rv" style="margin:0">${archSvg(S.arch)}<figcaption class="note">${L.archCap}</figcaption></figure></div>
</div></section>
<section class="section"><div class="wrap grid-2">
<div class="rv"><p class="kicker">${L.ai}</p><div class="callout">${S.ai}</div></div>
<div class="rv"><p class="kicker">${L.status}</p>${bullets(S.status)}
${S.links.length ? `<div class="btn-row" style="margin-top:24px">${S.links.map(([l, u]) => btn(l, u, 'ghost', 'platform_verify_click', 'ext', ' target="_blank" rel="noopener"')).join('')}</div>` : ''}</div>
</div></section>
${finalCta(C, lang, 'case-' + c.key)}`;
  const art = { '@context': 'https://schema.org', '@type': 'Article', headline: S.title.replace(/<[^>]+>/g, ''), description: S.lead.replace(/<[^>]+>/g, ''), author: { '@id': SITE.url + '/#org' }, publisher: { '@id': SITE.url + '/#org' }, inLanguage: lang, datePublished: '2026-10-05' };
  return { key: c.key, title: c.metaTitle, desc: S.lead.replace(/<[^>]+>/g, '').slice(0, 158), body, ogType: 'article', jsonld: [art, breadcrumbLd([[C.ui.home, ROUTES.home[lang]], [C.ui.nav.proj, ROUTES.proj[lang]], [c.short || c.title, ROUTES[c.key][lang]]])] };
}

export function partnership(C, lang) {
  const P = C.partPage;
  const body = pageHero({ kicker: P.kicker, title: P.title, lead: P.lead, crumbs: crumbsFor(C, lang, [[C.ui.nav.part, null]]), actions: btn(C.ui.cta, href('contact', lang) + '#form', 'primary', 'cta_book_call', 'cal') }) +
  `<section class="section"><div class="wrap">${modelsBlock(C.models, lang)}</div></section>
<section class="section alt"><div class="wrap">
${secHead(P.flow.kicker, P.flow.title, P.flow.text)}
${processSteps(P.flow.steps)}
</div></section>
<section class="section"><div class="wrap">
${secHead(P.commit.kicker, P.commit.title, P.commit.text)}
<div class="grid-3">${P.commit.items.map(([i, t, d]) => `<article class="card rv"><span class="ic">${ic[i]}</span><h4>${t}</h4><p>${d}</p></article>`).join('')}</div>
</div></section>
<section class="section alt"><div class="wrap">
${secHead(P.partners.kicker, P.partners.title, P.partners.text)}
<div class="grid-4">${P.partners.groups.map(([h, list]) => `<div class="card rv"><h4>${h}</h4>${bullets(list)}</div>`).join('')}</div>
<p class="note">${P.partners.note}</p>
</div></section>
${finalCta(C, lang, 'partnership')}`;
  return { key: 'part', title: C.meta.part[0], desc: C.meta.part[1], body, jsonld: [breadcrumbLd([[C.ui.home, ROUTES.home[lang]], [C.ui.nav.part, ROUTES.part[lang]]])] };
}

export function about(C, lang) {
  const A = C.aboutPage;
  const body = pageHero({ kicker: A.kicker, title: A.title, lead: A.lead, crumbs: crumbsFor(C, lang, [[C.ui.nav.about, null]]) }) +
  `<section class="section"><div class="wrap grid-2">
<div class="rv"><p class="kicker">${A.legalK}</p><h2>${A.legalT}</h2></div>
<dl class="kv rv">${A.kv.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl>
</div></section>
<section class="section dark"><div class="wrap">
<p class="kicker rv">${A.vision.kicker}</p>
<p class="rv" style="font-size:clamp(24px,3vw,36px);line-height:1.35;font-weight:700;color:#fff;max-width:1000px;letter-spacing:-.015em">${A.vision.text}</p>
<div class="grid-3" style="margin-top:48px">${A.vision.points.map((p) => `<p class="rv" style="color:#B6C3CA;border-top:1px solid rgba(231,238,240,.16);padding-top:16px;margin:0">${p}</p>`).join('')}</div>
</div></section>
<section class="section"><div class="wrap">
${secHead(A.mission.kicker, A.mission.title)}
<div class="grid-4">${A.mission.items.map(([t, d], i) => `<div class="card rv"><span class="kicker" style="margin:0">0${i + 1}</span><h4>${t}</h4><p>${d}</p></div>`).join('')}</div>
</div></section>
<section class="section alt"><div class="wrap">
${secHead(A.values.kicker, A.values.title)}
<div class="grid-4">${A.values.items.map(([t, e, list]) => `<div class="card rv"><span class="chip" style="align-self:flex-start">${e}</span><h4>${t}</h4>${bullets(list)}</div>`).join('')}</div>
</div></section>
<section class="section"><div class="wrap">
${secHead(A.tl.kicker, A.tl.title)}
<div class="timeline">${A.tl.items.map(([y, t, d], i) => `<div class="tl rv${i === A.tl.items.length - 1 ? ' now' : ''}"><i></i><b>${y}</b><h4>${t}</h4><p>${d}</p></div>`).join('')}</div>
</div></section>
<section class="section alt" id="team"><div class="wrap">
${secHead(A.team.kicker, A.team.title, A.team.text)}
<div class="grid-2">${A.team.people.map(([ini, n, r, list]) => `<article class="card person rv"><div class="avatar" role="img" aria-label="${esc(n)}">${ini}</div><div><h3>${n}</h3><p class="role">${r}</p>${bullets(list)}</div></article>`).join('')}</div>
</div></section>
<section class="section"><div class="wrap">
${secHead(A.legal.kicker, A.legal.title, A.legal.text)}
<div class="legal-grid">${A.legal.items.map(([s, b, p]) => `<div class="lg rv"><small>${s}</small><b>${b}</b><p>${p}</p></div>`).join('')}</div>
</div></section>
${finalCta(C, lang, 'about')}`;
  return { key: 'about', title: C.meta.about[0], desc: C.meta.about[1], body, jsonld: [breadcrumbLd([[C.ui.home, ROUTES.home[lang]], [C.ui.nav.about, ROUTES.about[lang]]])] };
}

export function insights(C, lang) {
  const I = C.insPage;
  const body = pageHero({ kicker: I.kicker, title: I.title, lead: I.lead, crumbs: crumbsFor(C, lang, [[C.ui.nav.ins, null]]) }) +
  `<section class="section"><div class="wrap"><div class="posts">${C.posts.map((p) => `<a class="post rv" href="${ROUTES.ins[lang]}/${p.slug}"><span class="kicker" style="margin:0">${p.tag}</span><h3>${p.title}</h3><time datetime="${p.date}">${p.dateLabel}</time><p>${p.excerpt}</p><span class="link-arrow">${I.read}${ic.arrow}</span></a>`).join('')}</div></div></section>`;
  return { key: 'ins', title: C.meta.ins[0], desc: C.meta.ins[1], body };
}

export function post(C, lang, p) {
  const I = C.insPage;
  const body = pageHero({ kicker: p.tag, title: p.title, lead: p.excerpt, crumbs: crumbsFor(C, lang, [[C.ui.nav.ins, href('ins', lang)], [p.short, null]]) }) +
  `<article class="section"><div class="wrap"><p class="note" style="margin:0 0 32px"><time datetime="${p.date}">${p.dateLabel}</time> · Proton ISF</p><div class="prose">${p.body}</div>
${p.sources?.length ? `<div class="prose" style="margin-top:48px;padding-top:24px;border-top:1px solid var(--border)"><h3 style="margin-top:0">${I.sources}</h3><ul>${p.sources.map(([l, u]) => `<li><a href="${u}" target="_blank" rel="noopener">${l}</a></li>`).join('')}</ul></div>` : ''}
<div class="callout" style="margin-top:48px;max-width:760px"><b>${I.ctaT}</b> ${I.ctaP}<div style="margin-top:16px">${btn(C.ui.cta, href('contact', lang) + '#form', 'primary', 'cta_book_call', 'cal')}</div></div>
</div></article>`;
  const ld = { '@context': 'https://schema.org', '@type': 'Article', headline: p.title, description: p.excerpt, datePublished: p.date, inLanguage: lang, author: { '@id': SITE.url + '/#org' }, publisher: { '@id': SITE.url + '/#org' }, mainEntityOfPage: SITE.url + ROUTES.ins[lang] + '/' + p.slug };
  return { key: 'ins', title: p.title, desc: p.excerpt, body, ogType: 'article', jsonld: [ld, breadcrumbLd([[C.ui.home, ROUTES.home[lang]], [C.ui.nav.ins, ROUTES.ins[lang]], [p.short, ROUTES.ins[lang] + '/' + p.slug]])] };
}

export function contact(C, lang) {
  const K = C.contactPage;
  const addr = lang === 'vi' ? SITE.address : lang === 'en' ? SITE.addressEn : SITE.addressJa;
  const body = pageHero({ kicker: K.kicker, title: K.title, lead: K.lead, crumbs: crumbsFor(C, lang, [[C.ui.f.contact, null]]) }) +
  `<section class="section"><div class="wrap cta" style="align-items:start">
<div class="rv">
<h2 style="font-size:28px">${K.direct}</h2>
<div class="grid-2" style="gap:14px;margin-top:24px;grid-template-columns:1fr">
<a class="card" href="mailto:${SITE.email}" style="flex-direction:row;align-items:center;gap:16px;text-decoration:none"><span class="ic">${ic.mail}</span><span><b style="display:block;color:var(--text)">${SITE.email}</b><span style="color:var(--text-3);font-size:14px">${K.mailNote}</span></span></a>
<a class="card" href="tel:${SITE.phoneRaw}" style="flex-direction:row;align-items:center;gap:16px;text-decoration:none"><span class="ic">${ic.phone}</span><span><b style="display:block;color:var(--text)">${SITE.phone}</b><span style="color:var(--text-3);font-size:14px">${K.phoneNote}</span></span></a>
<a class="card" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('29T1 Hoàng Đạo Thúy, Trung Hòa, Cầu Giấy, Hà Nội')}" target="_blank" rel="noopener" style="flex-direction:row;align-items:center;gap:16px;text-decoration:none"><span class="ic">${ic.pin}</span><span><b style="display:block;color:var(--text)">${K.office}</b><span style="color:var(--text-3);font-size:14px">${addr}</span></span></a>
</div>
<h3 style="margin-top:40px;font-size:20px">${K.stepsT}</h3>
<ol class="bul" style="margin-top:16px">${C.home.final.road.map(([t, s]) => `<li><b>${t}</b> — ${s}</li>`).join('')}</ol>
<div class="arch" style="margin-top:32px;padding:0;overflow:hidden"><iframe title="${esc(K.office)}" src="https://www.google.com/maps?q=${encodeURIComponent('29T1 Hoàng Đạo Thúy, Trung Hòa, Cầu Giấy, Hà Nội')}&output=embed" width="100%" height="280" style="border:0;display:block" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
</div>
<div class="rv">${leadForm(C, lang, 'contact')}</div>
</div></section>`;
  const lb = { '@context': 'https://schema.org', '@type': 'LocalBusiness', '@id': SITE.url + '/#office', name: 'Proton ISF', parentOrganization: { '@id': SITE.url + '/#org' }, email: SITE.email, telephone: SITE.phone, address: { '@type': 'PostalAddress', streetAddress: 'Tầng 2, Tòa 29T1 Hoàng Đạo Thúy', addressLocality: 'Cầu Giấy', addressRegion: 'Hà Nội', addressCountry: 'VN' }, geo: { '@type': 'GeoCoordinates', latitude: 21.0079, longitude: 105.8037 }, openingHours: 'Mo-Fr 08:30-17:30' };
  return { key: 'contact', title: C.meta.contact[0], desc: C.meta.contact[1], body, jsonld: [lb] };
}

export function profile(C, lang, files) {
  const P = C.profilePage;
  const dl = files.filter((f) => f.exists);
  const body = pageHero({ kicker: P.kicker, title: P.title, lead: P.lead, crumbs: crumbsFor(C, lang, [[C.ui.f.profile, null]]), actions: dl.map((f) => btn(f.label, f.url, 'primary', 'download_profile', 'download', ' download')).join('') }) +
  `<section class="section"><div class="wrap cta" style="align-items:start">
<div class="rv"><h2 style="font-size:28px">${P.inside}</h2>${bullets(P.items)}
${dl.length ? `<div class="btn-row" style="margin-top:32px">${dl.map((f) => btn(f.label, f.url, 'primary', 'download_profile', 'download', ' download')).join('')}</div>` : `<div class="callout" style="margin-top:32px">${P.byEmail}</div>`}
</div>
<div class="rv">${leadForm({ ...C, form: { ...C.form, s1: P.formT, s1h: P.formH } }, lang, 'profile-download', true)}</div>
</div></section>`;
  return { key: 'profile', title: C.meta.profile[0], desc: C.meta.profile[1], body };
}

export function legal(C, lang, which) {
  const L = C.legal[which];
  const body = pageHero({ kicker: L.kicker, title: L.title, lead: L.lead, crumbs: crumbsFor(C, lang, [[L.title, null]]) }) +
  `<section class="section"><div class="wrap"><div class="prose">${L.body}</div></div></section>`;
  return { key: which, title: L.title, desc: L.lead, body };
}

export function notFound(C, lang) {
  const N = C.nf;
  const body = `<section class="hero dark" style="min-height:70vh;display:flex;align-items:center"><div class="grid-bg"></div><div class="wrap"><div class="hero-grid"><div>
<p class="kicker">404</p><h1>${N.title}</h1><p class="lead">${N.text}</p>
<div class="btn-row">${btn(N.home, ROUTES.home[lang], 'primary')}${btn(C.ui.cta, href('contact', lang) + '#form', 'ghost')}</div></div>
<div class="orbit">${orbitBig()}</div></div></div></section>`;
  return { key: '404', title: N.title, desc: N.text, body, noindex: true };
}
