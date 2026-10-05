/* Proton ISF — client script (không phụ thuộc thư viện) */
(function () {
  'use strict';
  var UI = window.__ui || {};
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var store = {
    get: function (k) { try { return window.localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { window.localStorage.setItem(k, v); } catch (e) {} },
  };

  /* Header shadow on scroll */
  var hdr = $('#hdr');
  var onScroll = function () { if (hdr) hdr.classList.toggle('scrolled', window.scrollY > 8); };
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

  /* Mega menu (click / keyboard) */
  $$('.nav .dd').forEach(function (dd) {
    var b = $('button', dd);
    b.addEventListener('click', function () {
      var open = dd.hasAttribute('data-open');
      $$('.nav .dd[data-open]').forEach(function (x) { x.removeAttribute('data-open'); $('button', x).setAttribute('aria-expanded', 'false'); });
      if (!open) { dd.setAttribute('data-open', ''); b.setAttribute('aria-expanded', 'true'); }
    });
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav .dd')) $$('.nav .dd[data-open]').forEach(function (x) { x.removeAttribute('data-open'); $('button', x).setAttribute('aria-expanded', 'false'); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      $$('.nav .dd[data-open]').forEach(function (x) { x.removeAttribute('data-open'); });
      closeMobile();
    }
  });

  /* Mobile nav */
  var burger = $('.burger'), mnav = $('#mnav');
  function closeMobile() { if (!mnav) return; mnav.classList.remove('open'); document.body.classList.remove('nav-open'); if (burger) burger.setAttribute('aria-expanded', 'false'); }
  if (burger && mnav) {
    burger.addEventListener('click', function () {
      var open = !mnav.classList.contains('open');
      mnav.classList.toggle('open', open); document.body.classList.toggle('nav-open', open);
      burger.setAttribute('aria-expanded', String(open));
    });
    $$('a', mnav).forEach(function (a) { a.addEventListener('click', closeMobile); });
  }

  /* Reveal on scroll */
  var rvs = $$('.rv');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    rvs.forEach(function (el, i) { el.style.transitionDelay = Math.min((i % 4) * 60, 180) + 'ms'; io.observe(el); });
  } else rvs.forEach(function (el) { el.classList.add('in'); });

  /* Count-up for hero stats */
  function countUp(el) {
    var raw = el.getAttribute('data-count') || el.textContent;
    var m = raw.match(/^([<~>]?)(\d+(?:[.,]\d+)?)(\D*)$/);
    if (!m || reduce) return;
    var sep = m[2].indexOf(',') > -1 ? ',' : '.';
    var target = parseFloat(m[2].replace(',', '.'));
    var dec = (m[2].split(/[.,]/)[1] || '').length;
    var t0 = null, dur = 1400;
    function step(t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / dur, 1), e = 1 - Math.pow(1 - p, 3);
      el.textContent = m[1] + (target * e).toFixed(dec).replace('.', sep) + m[3];
      if (p < 1) requestAnimationFrame(step); else el.textContent = raw;
    }
    requestAnimationFrame(step);
  }
  var counters = $$('[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    var cio = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { countUp(e.target); cio.unobserve(e.target); } });
    }, { threshold: 0.5 });
    counters.forEach(function (c) { cio.observe(c); });
  }

  /* Live platform status */
  var badges = $$('.status[data-url]');
  if (badges.length) {
    var L = UI.live || {};
    var setBadge = function (el, s) { el.setAttribute('data-s', s); $('span', el).textContent = s === 'up' ? L.up : s === 'down' ? L.down : L.chk; };
    fetch('/api/status', { headers: { accept: 'application/json' } })
      .then(function (r) { if (!r.ok) throw 0; return r.json(); })
      .then(function (d) {
        var map = {};
        (d.results || []).forEach(function (x) { map[x.url] = x; });
        badges.forEach(function (b) { var x = map[b.getAttribute('data-url')]; setBadge(b, x ? (x.up ? 'up' : 'down') : 'chk'); });
        $$('[data-ms]').forEach(function (m) { var x = map[m.getAttribute('data-ms')]; if (x && x.up && x.ms) m.textContent = '⏱ ' + x.ms + ' ms'; });
        var ca = $('#checked-at');
        if (ca && d.checked_at) ca.textContent = new Date(d.checked_at).toLocaleString(document.documentElement.lang, { dateStyle: 'medium', timeStyle: 'short' });
      })
      .catch(function () { /* giữ trạng thái "đang kiểm tra" nếu API chưa sẵn sàng */ });
  }

  /* Analytics — chỉ tải sau khi đồng ý cookie */
  var AN = window.__an;
  function loadAnalytics() {
    if (!AN || window.__anLoaded) return; window.__anLoaded = true;
    if (AN.ga4) {
      var s = document.createElement('script'); s.async = true; s.src = 'https://www.googletagmanager.com/gtag/js?id=' + AN.ga4; document.head.appendChild(s);
      window.dataLayer = window.dataLayer || []; window.gtag = function () { window.dataLayer.push(arguments); };
      window.gtag('js', new Date()); window.gtag('config', AN.ga4, { anonymize_ip: true });
    }
    if (AN.pixel) {
      !function (f, b, e, v, n, t, s) { if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); }; if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = []; t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s); }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
      window.fbq('init', AN.pixel); window.fbq('track', 'PageView');
    }
  }
  function track(name, params) {
    try { if (window.gtag) window.gtag('event', name, params || {}); if (window.fbq && name === 'lead_submit') window.fbq('track', 'Lead'); } catch (e) {}
    try { if (window.va) window.va('event', { name: name }); } catch (e) {}
  }
  var ck = $('#cookie');
  if (AN && ck) {
    var c = store.get('pisf_consent');
    if (c === '1') loadAnalytics(); else if (c !== '0') ck.classList.add('on');
    $$('[data-ck]', ck).forEach(function (b) {
      b.addEventListener('click', function () { var v = b.getAttribute('data-ck'); store.set('pisf_consent', v); ck.classList.remove('on'); if (v === '1') loadAnalytics(); });
    });
  }
  document.addEventListener('click', function (e) {
    var a = e.target.closest('[data-ev]');
    if (a) track(a.getAttribute('data-ev'), { link_url: a.href || '', page: location.pathname });
  });

  /* Lead form — 3 bước */
  var tsLoaded = false;
  function loadTurnstile() {
    if (!UI.ts || tsLoaded) return; tsLoaded = true;
    var s = document.createElement('script'); s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js'; s.async = true; s.defer = true; document.head.appendChild(s);
  }
  $$('form[data-lead]').forEach(function (form) {
    var steps = $$('.fstep', form), bars = $$('.steps-bar i', form);
    var prev = $('[data-prev]', form), next = $('[data-next]', form), submit = $('button[type="submit"]', form);
    var msg = $('.f-msg', form), done = $('.f-done', form);
    var T = {}; try { T = JSON.parse($('.f-i18n', form).textContent); } catch (e) {}
    var cur = 0;
    function show(i) {
      cur = i;
      steps.forEach(function (s, k) { s.classList.toggle('on', k === i); });
      bars.forEach(function (b, k) { b.classList.toggle('on', k <= i); });
      prev.hidden = i === 0; next.hidden = i === steps.length - 1; submit.hidden = i !== steps.length - 1;
      msg.className = 'f-msg';
      if (i === steps.length - 1) loadTurnstile();
    }
    function validStep(i) {
      var s = steps[i], ok = true;
      var radios = $$('input[type="radio"]', s);
      if (radios.length && !radios.some(function (r) { return r.checked; })) {
        msg.textContent = T.pick || ''; msg.className = 'f-msg err'; return false;
      }
      $$('.fld', s).forEach(function (f) {
        var inp = $('input,textarea', f); if (!inp) return;
        var bad = (inp.required && !inp.value.trim()) || (inp.type === 'email' && inp.value && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(inp.value.trim()));
        f.classList.toggle('bad', !!bad); if (bad) { if (ok) inp.focus(); ok = false; }
      });
      var cons = $('input[name="consent"]', s);
      if (cons) { var cl = cons.closest('.consent'); cl.classList.toggle('bad', !cons.checked); if (!cons.checked) ok = false; }
      return ok;
    }
    // Tự sang bước khi chọn radio
    steps.forEach(function (s, i) {
      $$('input[type="radio"]', s).forEach(function (r) {
        r.addEventListener('change', function () { if (i < steps.length - 1) setTimeout(function () { show(i + 1); }, 220); });
      });
    });
    next.addEventListener('click', function () { if (validStep(cur)) show(cur + 1); });
    prev.addEventListener('click', function () { show(Math.max(cur - 1, 0)); });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validStep(cur)) return;
      var fd = new FormData(form), data = {};
      fd.forEach(function (v, k) { data[k] = typeof v === 'string' ? v.trim() : v; });
      data.consent = !!data.consent;
      data.lang = form.getAttribute('data-lang');
      data.source_page = location.pathname + ' · ' + (form.getAttribute('data-source') || '');
      var p = new URLSearchParams(location.search), utm = {};
      ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(function (k) { if (p.get(k)) utm[k] = p.get(k); });
      data.utm = utm;
      var ts = $('[name="cf-turnstile-response"]', form); if (ts) data.turnstile = ts.value;
      var label = submit.innerHTML; submit.disabled = true; submit.textContent = T.sending || '…';
      fetch('/api/lead', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(data) })
        .then(function (r) { return r.json().then(function (j) { if (!r.ok || !j.ok) throw j; return j; }); })
        .then(function () {
          steps.forEach(function (s) { s.classList.remove('on'); });
          $('.f-nav', form).style.display = 'none'; $('.steps-bar', form).style.display = 'none';
          done.classList.add('on');
          track('lead_submit', { interest: data.interest, model: data.model, source: data.source_page });
        })
        .catch(function () { msg.textContent = T.err || 'Error'; msg.className = 'f-msg err'; submit.disabled = false; submit.innerHTML = label; });
    });
    show(0);
  });
})();
