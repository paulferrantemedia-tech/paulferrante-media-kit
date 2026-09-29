// ============================================================================
// main.js  —  renders the whole page from src/config/*. No hardcoded numbers,
// no runtime API calls, no credentials. Static in, static out.
// ============================================================================
import { stats, NEEDS_VALUE } from "./config/stats.js";
import { content } from "./config/content.js";

const isPending = (v) => v == null || v === NEEDS_VALUE;
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => (
  { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
));

// ── inline SVG icons (no external requests) ─────────────────────────────────
const ICON = {
  travel: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M2.5 19h19v2h-19zM21.5 12.2c.2-.8-.3-1.6-1.1-1.8l-5-1.3-3.3-6.2-1.5.4 1.9 6.6-4.7-1.2-1.4-2.1-1.1.3 1 3.6 1 3.6 1.1-.3.1-2.5 4.7 1.3 3.7 6 1.5-.4-1.6-6.7 5-1.3c.8-.2 1.3-.9 1.7-1.7z"/></svg>`,
  lifestyle: `<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.2 5.2l1.8 1.8M17 17l1.8 1.8M18.8 5.2 17 7M7 17l-1.8 1.8"/></g></svg>`,
  commentary: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M4 5.5h16a1 1 0 0 1 1 1V16a1 1 0 0 1-1 1H9l-4 3.5V17H4a1 1 0 0 1-1-1V6.5a1 1 0 0 1 1-1Z"/></svg>`,
  hacks: `<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.6 10.8c.5.4.9 1 1 1.7l.1.5h5l.1-.5c.1-.7.5-1.3 1-1.7A6 6 0 0 0 12 3Z"/></g></svg>`,
  instagram: `<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5"/><circle cx="12" cy="12" r="4.1"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></g></svg>`,
  youtube: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M23 12s0-3.2-.4-4.7a2.5 2.5 0 0 0-1.7-1.7C19.3 5.2 12 5.2 12 5.2s-7.3 0-8.9.4A2.5 2.5 0 0 0 1.4 7.3C1 8.8 1 12 1 12s0 3.2.4 4.7a2.5 2.5 0 0 0 1.7 1.7c1.6.4 8.9.4 8.9.4s7.3 0 8.9-.4a2.5 2.5 0 0 0 1.7-1.7C23 15.2 23 12 23 12ZM9.8 15.1V8.9l5.3 3.1z"/></svg>`,
  play: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M8 5.5v13l11-6.5z"/></svg>`,
  globe: `<svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="12" cy="12" r="9.3"/><ellipse cx="12" cy="12" rx="4" ry="9.3"/><path d="M2.7 12h18.6M4.2 7h15.6M4.2 17h15.6"/></g></svg>`,
  arrow: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M13 6l6 6-6 6"/></svg>`,
};
const platformIcon = (p) => (p || "").toLowerCase().includes("youtube") ? ICON.youtube : ICON.instagram;

// ── sections ────────────────────────────────────────────────────────────────
function renderNav() {
  const { logo, nav } = content.site;
  const links = nav.map((n) =>
    n.button
      ? `<a class="nav-cta" href="${n.href}">${esc(n.label)}</a>`
      : `<a class="nav-link" href="${n.href}">${esc(n.label)}</a>`
  ).join("");
  return `
  <header class="nav" id="top">
    <a class="logo" href="#top">${esc(logo)}</a>
    <button class="nav-toggle" aria-label="menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
    <nav class="nav-links">${links}</nav>
  </header>`;
}

function renderHero() {
  const h = content.hero;
  const btns = h.buttons.map((b) =>
    `<a class="btn ${b.filled ? "btn-fill" : "btn-outline"}" href="${b.href}">${esc(b.label)}</a>`
  ).join("");
  return `
  <section class="hero" id="hero">
    <div class="hero-text reveal">
      <p class="eyebrow">${esc(h.eyebrow)}</p>
      <h1 class="hero-title">${esc(h.headline)}</h1>
      <p class="hero-sub">${esc(h.subhead)}</p>
      <div class="hero-btns">${btns}</div>
    </div>
    <div class="hero-media reveal">
      <img src="${h.image}" alt="paul ferrante" width="1100" height="1467"
           onerror="this.closest('.hero-media').classList.add('img-missing')" />
      <div class="img-fallback">add a solo portrait at<br><code>${esc(h.image)}</code></div>
    </div>
  </section>`;
}

function renderPerformance() {
  const p = content.performance;
  const cards = p.cards.map((c) => {
    const val = stats.performance[c.key];
    const pending = isPending(val);
    const url = c.linkKey ? stats.performance[c.linkKey] : null;
    const linkable = !pending && c.linkKey && !isPending(url);
    const inner = `
      <span class="stat-num">${pending ? "&middot;&middot;" : esc(val)}</span>
      <span class="stat-label">${esc(c.label)}${linkable ? ` <span class="stat-go">${ICON.arrow}</span>` : ""}</span>
      ${c.sub && !pending ? `<span class="stat-sub">${esc(c.sub)}</span>` : ""}
      ${pending ? `<span class="stat-pending">stat pending</span>` : ""}`;
    if (linkable) {
      return `<a class="stat-card ${pending ? "is-pending" : ""}" href="${esc(url)}" target="_blank" rel="noopener">${inner}</a>`;
    }
    return `<div class="stat-card ${pending ? "is-pending" : ""}">${inner}</div>`;
  }).join("");
  return `
  <section class="section" id="performance">
    <div class="section-head reveal">
      <p class="eyebrow">${esc(p.eyebrow)}</p>
      <h2>${esc(p.heading)}</h2>
    </div>
    <div class="stat-row reveal">${cards}</div>
  </section>`;
}

function renderPillars() {
  const p = content.pillars;
  const cards = p.items.map((it) => `
    <div class="pillar reveal">
      <span class="pillar-icon">${ICON[it.icon] || ""}</span>
      <h3>${esc(it.title)}</h3>
      <p>${esc(it.body)}</p>
    </div>`).join("");
  return `
  <section class="section" id="pillars">
    <div class="section-head reveal">
      <p class="eyebrow">${esc(p.eyebrow)}</p>
      <h2>${esc(p.heading)}</h2>
    </div>
    <div class="pillar-grid">${cards}</div>
  </section>`;
}

function renderFeatured() {
  const f = content.featured;
  const filters = Array.isArray(f.filters) && f.filters.length ? f.filters : ["all"];
  const tabs = filters.map((t, i) => `
    <button type="button" class="filter-tab${i === 0 ? " is-active" : ""}" data-filter="${esc(t)}" aria-pressed="${i === 0 ? "true" : "false"}">${esc(t)}</button>`).join("");
  const cards = f.items.map((v) => `
    <a class="work-card reveal" href="${esc(v.url)}" target="_blank" rel="noopener" data-category="${esc(v.category || "all")}">
      <div class="work-cover">
        <img src="${v.cover}" alt="${esc(v.title)}" loading="lazy" width="1080" height="1350" />
        <span class="work-play">${ICON.play}</span>
        <span class="work-badge">${platformIcon(v.platform)}<span>${esc(v.platform)}</span></span>
      </div>
      <div class="work-meta">
        <span class="work-label">${esc(v.label)}</span>
        <span class="work-title">${esc(v.title)}</span>
      </div>
    </a>`).join("");
  return `
  <section class="section" id="featured">
    <div class="section-head reveal">
      <p class="eyebrow">${esc(f.eyebrow)}</p>
      <h2>${esc(f.heading)}</h2>
    </div>
    <div class="filter-tabs reveal" role="tablist" aria-label="filter work by category">${tabs}</div>
    <div class="work-grid">${cards}</div>
    <p class="work-empty" hidden>nothing here yet — more coming soon.</p>
    <p class="work-footer reveal">${esc(f.footer)}</p>
  </section>`;
}

function bars(rows, cls) {
  return rows.map((r) => `
    <div class="bar-row">
      <span class="bar-label">${r.flag ? r.flag + " " : ""}${esc(r.label)}</span>
      <span class="bar-track"><span class="bar-fill ${cls}" style="--w:${r.pct}%"></span></span>
      <span class="bar-pct">${r.pct}%</span>
    </div>`).join("");
}

function genderDonut(male, female) {
  const R = 54, C = 2 * Math.PI * R, mLen = (male / 100) * C;
  return `
  <div class="donut-wrap">
    <svg viewBox="0 0 140 140" class="donut" aria-hidden="true">
      <circle cx="70" cy="70" r="${R}" fill="none" stroke="var(--parchment)" stroke-width="20"/>
      <circle cx="70" cy="70" r="${R}" fill="none" stroke="var(--sky)" stroke-width="20"
              stroke-dasharray="${mLen} ${C - mLen}" transform="rotate(-90 70 70)" stroke-linecap="butt"/>
      <text x="70" y="66" class="donut-big">${male}%</text>
      <text x="70" y="86" class="donut-small">male</text>
    </svg>
    <div class="donut-legend">
      <span><i style="background:var(--sky)"></i>male ${male}%</span>
      <span><i style="background:var(--parchment)"></i>female ${female}%</span>
    </div>
  </div>`;
}

function renderDemographics() {
  const d = content.demographics, a = stats.audience;
  const ageRows = Object.entries(a.age).map(([label, pct]) => ({ label, pct }));
  const platRow = (name, val) => `<div class="plat"><span class="plat-num">${esc(val)}</span><span class="plat-name">${name}</span></div>`;
  return `
  <section class="section" id="demographics">
    <div class="section-head reveal">
      <p class="eyebrow">${esc(d.eyebrow)}</p>
      <h2>${esc(d.heading)}</h2>
    </div>

    <div class="reach reveal">
      <div class="reach-globe">
        <span class="reach-icon">${ICON.globe}</span>
        <div>
          <span class="reach-num">${esc(a.totalFollowers)}</span>
          <span class="reach-cap">total followers</span>
        </div>
      </div>
      <div class="plat-row">
        ${platRow("tiktok", a.tiktok)}
        ${platRow("instagram", a.instagram)}
        ${platRow("youtube", a.youtube)}
      </div>
    </div>

    <div class="demo-grid">
      <div class="demo-card reveal">
        <h4>age</h4>
        <div class="bars">${bars(ageRows, "sky")}</div>
      </div>
      <div class="demo-card reveal">
        <h4>gender</h4>
        ${genderDonut(a.gender.male, a.gender.female)}
      </div>
      <div class="demo-card reveal">
        <h4>location</h4>
        <div class="bars">${bars(a.location.map((l) => ({ label: l.country, pct: l.pct, flag: l.flag })), "sand")}</div>
      </div>
      <div class="demo-card demo-core reveal">
        <h4>core audience</h4>
        <span class="core-age">${esc(a.coreAudience)}</span>
        <div class="core-tags">${a.coreTags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
      </div>
    </div>
  </section>`;
}

function renderPartners() {
  const p = content.partners;
  const item = (b) => {
    const name = typeof b === "string" ? b : b.name;
    const url = typeof b === "object" ? b.url : null;
    const more = String(name).trim().startsWith("+");
    return url
      ? `<a class="partner partner-link" href="${esc(url)}" target="_blank" rel="noopener">${esc(name)}</a>`
      : `<span class="partner ${more ? "partner-more" : ""}">${esc(name)}</span>`;
  };
  return `
  <section class="section partners" id="partners">
    <p class="eyebrow reveal">${esc(p.eyebrow)}</p>
    <div class="partner-list reveal">
      ${p.items.map(item).join("")}
    </div>
  </section>`;
}

function renderServices() {
  const s = content.services;
  const cards = s.items.map((it) => `
    <div class="service reveal">
      <h3>${esc(it.title)}${it.tag ? `<span class="service-tag">${esc(it.tag)}</span>` : ""}</h3>
      <p>${esc(it.body)}</p>
    </div>`).join("");
  return `
  <section class="section" id="services">
    <div class="section-head reveal">
      <p class="eyebrow">${esc(s.eyebrow)}</p>
      <h2>${esc(s.heading)}</h2>
    </div>
    <div class="service-grid">${cards}</div>
  </section>`;
}

function renderPress() {
  const p = content.press;
  if (!p.items || p.items.length === 0) return ""; // hide entirely, no placeholder press
  const logos = p.items.map((m) => `
    <a class="press-item reveal" href="${esc(m.url)}" target="_blank" rel="noopener">
      <span class="press-outlet">${esc(m.outlet)}</span>
      ${m.title ? `<span class="press-title">${esc(m.title)}</span>` : ""}
    </a>`).join("");
  return `
  <section class="section press" id="press">
    <p class="eyebrow reveal">${esc(p.eyebrow)}</p>
    <div class="press-strip">${logos}</div>
  </section>`;
}

function renderAbout() {
  const a = content.about;
  return `
  <section class="section about" id="about">
    <div class="about-media reveal">
      <img src="${a.image}" alt="paul ferrante" loading="lazy"
           onerror="this.closest('.about-media').classList.add('img-missing')" />
      <div class="img-fallback">add a photo at<br><code>${esc(a.image)}</code></div>
    </div>
    <div class="about-text reveal">
      <p class="eyebrow">${esc(a.eyebrow)}</p>
      <h2>${esc(a.heading)}</h2>
      ${a.body.map((para) => `<p>${esc(para)}</p>`).join("")}
    </div>
  </section>`;
}

function renderContact() {
  const c = content.contact, email = content.site.contactEmail;
  return `
  <section class="section contact" id="contact">
    <div class="section-head reveal">
      <p class="eyebrow">${esc(c.eyebrow)}</p>
      <h2>${esc(c.heading)}</h2>
      <p class="contact-copy">${esc(c.copy)}</p>
    </div>
    <form class="contact-form reveal" data-endpoint="${esc(c.formEndpoint)}">
      <div class="field-row">
        <label>name<input name="name" type="text" required autocomplete="name" /></label>
        <label>email<input name="email" type="email" required autocomplete="email" /></label>
      </div>
      <label>message<textarea name="message" rows="4" required placeholder="campaign, timeline, goals"></textarea></label>
      <div class="form-actions">
        <button type="submit" class="btn btn-fill">send message</button>
        <a class="btn btn-ghost" href="mailto:${esc(email)}">send me an email</a>
      </div>
      <p class="form-note" role="status" aria-live="polite"></p>
    </form>
  </section>`;
}

function renderFooter() {
  const { logo, contactEmail } = content.site;
  const year = document.lastModified ? new Date(document.lastModified).getFullYear() : "";
  return `
  <footer class="footer">
    <span class="logo">${esc(logo)}</span>
    <a href="mailto:${esc(contactEmail)}">${esc(contactEmail)}</a>
    <span class="footer-fine">${year ? year + " · " : ""}travel &amp; lifestyle creator</span>
  </footer>`;
}

// ── interactions ────────────────────────────────────────────────────────────
function wire() {
  // mobile nav
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  toggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  document.querySelectorAll(".nav-links a").forEach((a) =>
    a.addEventListener("click", () => nav.classList.remove("open"))
  );

  // scroll reveal + bar fill. Hardened so content can never stay invisible:
  // anything on screen reveals immediately, and a safety net reveals everything
  // after a moment even if the observer never fires.
  const reveals = [...document.querySelectorAll(".reveal")];
  const revealInView = () => reveals.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) el.classList.add("in");
  });
  if (!("IntersectionObserver" in window)) {
    reveals.forEach((el) => el.classList.add("in"));
  } else {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); obs.unobserve(e.target); } });
    }, { threshold: 0.12 });
    reveals.forEach((el) => io.observe(el));
    revealInView();                        // no blank hero on load
    setTimeout(revealInView, 400);         // catch late image layout
    setTimeout(() => reveals.forEach((el) => el.classList.add("in")), 2500); // safety net
  }

  // featured work filters
  const tabs = [...document.querySelectorAll(".filter-tab")];
  const cards = [...document.querySelectorAll(".work-card")];
  const emptyNote = document.querySelector(".work-empty");
  tabs.forEach((tab) => tab.addEventListener("click", () => {
    const filter = tab.dataset.filter;
    tabs.forEach((t) => {
      const active = t === tab;
      t.classList.toggle("is-active", active);
      t.setAttribute("aria-pressed", String(active));
    });
    let visible = 0;
    cards.forEach((card) => {
      const show = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("is-hidden", !show);
      if (show) visible++;
    });
    if (emptyNote) emptyNote.hidden = visible > 0;
  }));

  // contact form
  const form = document.querySelector(".contact-form");
  form?.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const note = form.querySelector(".form-note");
    const endpoint = form.dataset.endpoint || "";
    if (endpoint.includes("your-form-id")) {
      note.textContent = "form endpoint not configured yet. use the email button above, or add your formspree id in src/config/content.js.";
      note.className = "form-note warn";
      return;
    }
    note.textContent = "sending…";
    note.className = "form-note";
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (res.ok) {
        form.reset();
        note.textContent = "thanks. i'll get back to you within 24 hours.";
        note.className = "form-note ok";
      } else {
        note.textContent = "something went wrong. email me directly instead.";
        note.className = "form-note warn";
      }
    } catch {
      note.textContent = "network error. email me directly instead.";
      note.className = "form-note warn";
    }
  });
}

// ── mount ────────────────────────────────────────────────────────────────────
document.getElementById("app").innerHTML = [
  renderNav(),
  renderHero(),
  renderPerformance(),
  renderPillars(),
  renderFeatured(),
  renderDemographics(),
  renderPartners(),
  renderServices(),
  renderPress(),
  renderAbout(),
  renderContact(),
  renderFooter(),
].join("");

wire();
