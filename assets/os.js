import { PROFILE, APPS, SITES, BUILDING, CASES, EXPERIENCE, EDUCATION, CERTS } from "./data.js";

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const icon = (n, cls = "") => `<svg class="i ${cls}" aria-hidden="true"><use href="assets/icons.svg#i-${n}"/></svg>`;
const phone = matchMedia("(max-width: 860px)");
const calm = matchMedia("(prefers-reduced-motion: reduce)");
const EASE = "cubic-bezier(0.23, 1, 0.32, 1)";
const DRAWER = "cubic-bezier(0.32, 0.72, 0, 1)";
const appIcon = (a) => `<img class="app-icon" src="assets/apps/${a.id}.webp" alt="" width="64" height="64" loading="lazy">`;

/* ---------- Window contents ---------- */

function about() {
  return `<div class="about">
    <div class="about-head">
      <img class="avatar" src="assets/me.webp" width="84" height="84" alt="Dagus Ansi">
      <div><h1 class="about-name">${esc(PROFILE.name)}</h1><p class="about-role">${esc(PROFILE.role)}</p></div>
    </div>
    <p class="about-intro">${esc(PROFILE.intro)}</p>
    <div class="now">${EXPERIENCE.filter((x) => x.when === "Now")
      .map((x) => `<div class="now-row"><span>${esc(x.role)}</span><span>${esc(x.org)}</span></div>`).join("")}</div>
    <button class="proof" type="button" data-open="apps">
      <span class="proof-icons">${APPS.slice(0, 5).map((a) => `<img src="assets/apps/${a.id}.webp" alt="" width="34" height="34">`).join("")}</span>
      <span class="proof-text"><strong>${APPS.length} apps live</strong><span>on the App Store and Google Play</span></span>
      ${icon("arrow-up-right")}
    </button>
    <div class="actions">
      <a class="btn btn-primary" href="mailto:${PROFILE.email}">${icon("envelope-simple")}Email me</a>
      <a class="btn" href="cv.html">${icon("file-text")}View CV</a>
    </div>
    <p class="meta"><span>${icon("map-pin")}${esc(PROFILE.location)}, ${esc(PROFILE.timezone)}</span><span>${esc(PROFILE.availability)}</span></p>
  </div>`;
}

const appsState = { tab: "mobile", app: null };

function appsView() {
  const tabs = [["mobile", "Mobile apps", APPS.length], ["web", "Websites", SITES.length], ["building", "Building now", BUILDING.length]];
  const bar = `<div class="tabs" role="tablist" aria-label="Projects">${tabs.map(([id, label, n]) =>
    `<button class="tab" type="button" role="tab" data-tab="${id}" aria-selected="${appsState.tab === id}">${label}<span class="tab-count">${n}</span></button>`).join("")}</div>`;
  if (appsState.tab === "web") {
    return bar + `<div class="site-grid">${SITES.map((s) => `<a class="site-card" href="${s.url}" target="_blank" rel="noopener">
      <img src="assets/web/${s.id}.webp" alt="${esc(s.name)} home page" width="640" height="400" loading="lazy">
      <span class="site-name">${esc(s.name)}${icon("arrow-up-right")}</span>
      <span class="site-about">${esc(s.about)}</span>
      <span class="site-url">${esc(s.url.replace("https://", ""))}</span></a>`).join("")}</div>`;
  }
  if (appsState.tab === "building") {
    return bar + `<div class="build-list">${BUILDING.map((b) => `<div class="build-item"><h3>${esc(b.name)}</h3><p>${esc(b.about)}</p>
      ${b.url ? `<a href="${b.url}" target="_blank" rel="noopener">${esc(b.url.replace("https://", ""))}</a>` : ""}</div>`).join("")}</div>`;
  }
  const a = APPS.find((x) => x.id === appsState.app);
  if (a) {
    return `<div class="detail">
      <button class="back" type="button" data-back>${icon("arrow-left")}All apps</button>
      <div class="detail-head">${appIcon(a)}<div><h3 class="detail-name">${esc(a.name)}</h3><p class="detail-tag">${esc(a.tag)}</p></div></div>
      <div class="actions">
        ${a.ios ? `<a class="btn" href="${a.ios}" target="_blank" rel="noopener">${icon("apple-logo")}App Store</a>` : ""}
        ${a.android ? `<a class="btn" href="${a.android}" target="_blank" rel="noopener">${icon("google-play-logo")}Google Play</a>` : ""}
      </div>
      <p>${esc(a.about)}</p>
      ${a.stack ? `<ul class="chips" aria-label="Built with">${a.stack.map((s) => `<li class="chip">${esc(s)}</li>`).join("")}</ul>` : ""}
      <div class="shots">${[1, 2, 3].map((n) => `<img src="assets/shots/${a.id}-${n}.webp" alt="${esc(a.name)} screenshot ${n}" width="300" height="650" loading="lazy">`).join("")}</div>
    </div>`;
  }
  return bar + `<div class="app-grid">${APPS.map((x) => `<button class="app-btn" type="button" data-app="${x.id}">
    ${appIcon(x)}<span class="app-name">${esc(x.name)}</span><span class="app-tag">${esc(x.tag)}</span></button>`).join("")}</div>`;
}

function security() {
  return `<p class="label">Casebook</p>
    <p class="lede">Security work rarely shows up in a screenshot. This is what it looks like on real projects.</p>
    <div class="cases">${CASES.map((c) => `<article class="case"><span class="case-icon">${icon(c.icon)}</span>
      <div><h3>${esc(c.title)}</h3><p>${esc(c.text)}</p></div></article>`).join("")}</div>
    <p class="note">B.Tech in Cyber Security Science, plus IBM, Google and Cisco security certificates.
      <button type="button" data-open="experience">See experience</button></p>`;
}

function experience() {
  const rows = (list, a, b, c) => list.map((x) => `<div class="xp-row"><div><strong>${esc(x[a])}</strong><span>${esc(x[b])}</span></div>${c && x[c] ? `<span class="xp-when">${esc(x[c])}</span>` : ""}</div>`).join("");
  return `<div class="xp">
    <section><h3>Works with</h3><ul class="chips">${PROFILE.stack.map((s) => `<li class="chip">${esc(s)}</li>`).join("")}</ul></section>
    <section><h3>Work</h3>${rows(EXPERIENCE, "role", "org", "when")}</section>
    <section><h3>Education</h3>${rows(EDUCATION, "title", "org")}</section>
    <section><h3>Certificates</h3>${rows(CERTS, "title", "org")}</section>
  </div>`;
}

function contact() {
  return `<div class="contact">
    <p class="contact-lede">The quickest way to reach me is email. I usually reply within a day.</p>
    <div class="email-row"><code>${esc(PROFILE.email)}</code>
      <button class="btn" type="button" data-copy>${icon("copy")}<span>Copy</span></button></div>
    <div class="actions">
      <a class="btn btn-primary" href="mailto:${PROFILE.email}">${icon("envelope-simple")}Email me</a>
      <a class="btn" href="${PROFILE.linkedin}" target="_blank" rel="noopener">${icon("linkedin-logo")}LinkedIn</a>
      <a class="btn" href="${PROFILE.github}" target="_blank" rel="noopener">${icon("github-logo")}GitHub</a>
    </div>
    <p class="meta"><span>${icon("map-pin")}${esc(PROFILE.location)}, ${esc(PROFILE.timezone)}</span><span>${esc(PROFILE.availability)}</span></p>
  </div>`;
}

function terminal() {
  return `<div class="term-out" aria-live="polite"><span class="muted">DagusOS terminal. Type "help" to see what it can do.</span>\n</div>
    <form class="term-line"><label class="term-prompt" for="term-input">guest@dagusos:~$</label>
    <input class="term-input" id="term-input" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Terminal command"></form>`;
}

const WINDOWS = {
  about: { title: "About", icon: "user-circle", w: 520, render: about },
  apps: { title: "Apps", icon: "squares-four", w: 760, render: appsView },
  security: { title: "Security", icon: "shield-check", w: 600, render: security },
  experience: { title: "Experience", icon: "briefcase", w: 540, render: experience },
  terminal: { title: "Terminal", icon: "terminal-window", w: 620, render: terminal },
  contact: { title: "Contact", icon: "envelope-simple", w: 460, render: contact },
};

/* ---------- Window manager ---------- */

const desktop = $("#desktop");
const wins = {};
const pos = {};
let zTop = 10;
let booted = false; // the address bar only follows windows the visitor opens, not the first paint

for (const [id, def] of Object.entries(WINDOWS)) {
  const el = document.createElement("section");
  el.className = `win win-${id}`;
  el.id = `win-${id}`;
  el.hidden = true;
  el.tabIndex = -1;
  el.setAttribute("role", "dialog");
  el.setAttribute("aria-labelledby", `t-${id}`);
  el.style.setProperty("--w", `${def.w}px`);
  el.innerHTML = `<header class="win-bar">
      <h2 class="win-title" id="t-${id}">${icon(def.icon)}${def.title}</h2>
      <button class="win-close" type="button" data-close aria-label="Close ${def.title}">${icon("x")}</button>
      <button class="win-done" type="button" data-close>Done</button>
    </header><div class="win-body">${def.render()}</div>`;
  desktop.append(el);
  wins[id] = el;
  bindWindow(id, el);
}

function rerender(id) { $(".win-body", wins[id]).innerHTML = WINDOWS[id].render(); }
const isOpen = (id) => !wins[id].hidden;
const openIds = () => Object.keys(wins).filter(isOpen);

function place(id, x, y) {
  pos[id] = { x, y };
  wins[id].style.translate = `${Math.round(x)}px ${Math.round(y)}px`;
}

// About and Apps open side by side when the screen allows; Apps narrows on small laptops before they overlap.
function pairLayout() {
  const vw = innerWidth, gap = 20, aboutW = WINDOWS.about.w;
  const appsW = Math.max(560, Math.min(WINDOWS.apps.w, vw - 48 - aboutW - gap));
  const total = aboutW + gap + appsW;
  const start = Math.max(24, (vw - total) / 2);
  wins.apps.style.setProperty("--w", `${appsW}px`);
  return { about: [start, 64], apps: [Math.min(start + aboutW + gap, vw - appsW - 24), 84] };
}

function defaultPos(id) {
  if (id === "about" || id === "apps") return pairLayout()[id];
  const vw = innerWidth, vh = innerHeight, w = Math.min(WINDOWS[id].w, vw - 32), n = openIds().length;
  return [Math.max(24, (vw - w) / 2 + n * 24 - 48), Math.min(vh * 0.1 + n * 20, 140)];
}

function focusWin(id) {
  if (++zTop > 880) { zTop = 10; for (const k of openIds().sort((a, b) => wins[a].style.zIndex - wins[b].style.zIndex)) wins[k].style.zIndex = ++zTop; zTop++; }
  wins[id].style.zIndex = zTop + (phone.matches ? 1100 : 0); // phone sheets sit above the status bar
  for (const [k, el] of Object.entries(wins)) el.classList.toggle("is-focused", k === id);
  $("#active-app").textContent = WINDOWS[id].title;
}

function syncChrome() {
  for (const b of $$("[data-dock]")) b.classList.toggle("is-open", isOpen(b.dataset.dock));
  const top = openIds().sort((a, b) => wins[b].style.zIndex - wins[a].style.zIndex)[0];
  $("#active-app").textContent = top ? WINDOWS[top].title : "Desktop";
  const appsHash = appsState.app ? `#app/${appsState.app}` : { web: "#apps/websites", building: "#apps/building" }[appsState.tab] || "#apps";
  const hash = top ? (top === "apps" ? appsHash : `#${top}`) : "";
  if (booted && location.hash !== hash) history.replaceState(null, "", hash || location.pathname);
}

function openWin(id, { from, instant } = {}) {
  const el = wins[id];
  if (el.closing) { el.closing.cancel(); el.closing = null; } // reopened mid-close: keep it open
  if (isOpen(id)) { focusWin(id); syncChrome(); return; }
  el.hidden = false;
  if (!phone.matches) {
    const p = pos[id] || defaultPos(id);
    place(id, p[0] ?? p.x, p[1] ?? p.y);
    el.style.maxHeight = `${Math.max(280, innerHeight - pos[id].y - 112)}px`; // stop above the dock
  }
  focusWin(id);
  syncChrome();
  if (booted) el.focus({ preventScroll: true }); // screen readers land in the window the visitor opened
  if (instant || calm.matches) return;
  if (phone.matches) {
    el.animate([{ transform: "translateY(100%)" }, { transform: "translateY(0)" }], { duration: 420, easing: DRAWER });
  } else {
    if (from) {
      const r = from.getBoundingClientRect();
      el.style.transformOrigin = `${r.left + r.width / 2 - pos[id].x}px ${r.top + r.height / 2 - pos[id].y}px`;
    } else el.style.transformOrigin = "50% 0";
    el.animate([{ opacity: 0, scale: 0.94 }, { opacity: 1, scale: 1 }], { duration: 240, easing: EASE });
  }
  if (id === "terminal" && !phone.matches) $("#term-input").focus();
}

function closeWin(id, { instant } = {}) {
  const el = wins[id];
  if (!isOpen(id) || el.closing) return;
  const done = () => {
    el.closing = null;
    el.hidden = true;
    const next = openIds().sort((a, b) => wins[b].style.zIndex - wins[a].style.zIndex)[0];
    if (next) focusWin(next);
    syncChrome();
  };
  if (instant || calm.matches) return done();
  const anim = phone.matches
    ? el.animate([{ transform: "translateY(0)" }, { transform: "translateY(100%)" }], { duration: 280, easing: DRAWER })
    : el.animate([{ opacity: 1, scale: 1 }, { opacity: 0, scale: 0.97 }], { duration: 140, easing: EASE });
  el.closing = anim;
  anim.onfinish = done;
}

function bindWindow(id, el) {
  el.addEventListener("pointerdown", () => { if (!el.classList.contains("is-focused")) { focusWin(id); syncChrome(); } }, true);
  const bar = $(".win-bar", el);
  bar.addEventListener("pointerdown", (e) => {
    if (phone.matches || e.button !== 0 || e.target.closest("button")) return;
    const sx = e.clientX, sy = e.clientY, { x, y } = pos[id];
    bar.setPointerCapture(e.pointerId);
    const move = (m) => {
      const nx = Math.min(Math.max(x + m.clientX - sx, 80 - el.offsetWidth), innerWidth - 80);
      const ny = Math.min(Math.max(y + m.clientY - sy, 36), innerHeight - 60);
      place(id, nx, ny);
    };
    const up = () => { bar.removeEventListener("pointermove", move); bar.removeEventListener("pointerup", up); bar.removeEventListener("pointercancel", up); };
    bar.addEventListener("pointermove", move);
    bar.addEventListener("pointerup", up);
    bar.addEventListener("pointercancel", up);
  });
  bar.addEventListener("dblclick", (e) => {
    if (e.target.closest("button") || phone.matches) return;
    place(id, ...defaultPos(id));
    el.style.maxHeight = `${Math.max(280, innerHeight - pos[id].y - 112)}px`;
  });
  el.addEventListener("click", (e) => {
    const t = e.target.closest("[data-close],[data-open],[data-tab],[data-app],[data-back],[data-copy]");
    if (!t) return;
    if (t.matches("[data-close]")) closeWin(id);
    else if (t.matches("[data-open]")) openWin(t.dataset.open, { from: t });
    else if (t.matches("[data-tab]")) { appsState.tab = t.dataset.tab; appsState.app = null; rerender("apps"); syncChrome(); $(`[data-tab="${appsState.tab}"]`, el).focus(); }
    else if (t.matches("[data-app]")) showApp(t.dataset.app);
    else if (t.matches("[data-back]")) { appsState.app = null; rerender("apps"); syncChrome(); $(`[data-app]`, el)?.focus(); }
    else if (t.matches("[data-copy]")) copyEmail(t);
  });
}

function showApp(appId, from) {
  appsState.tab = "mobile";
  appsState.app = appId;
  rerender("apps");
  $(".win-body", wins.apps).scrollTop = 0;
  openWin("apps", { from });
  syncChrome();
}

async function copyEmail(btn) {
  const label = $("span", btn);
  try { await navigator.clipboard.writeText(PROFILE.email); label.textContent = "Copied"; btn.querySelector("use").setAttribute("href", "assets/icons.svg#i-check"); }
  catch { label.textContent = "Select it above"; }
  setTimeout(() => { label.textContent = "Copy"; btn.querySelector("use").setAttribute("href", "assets/icons.svg#i-copy"); }, 1600);
}

/* ---------- Terminal ---------- */

const HELP = `<span class="ok">help</span>         list commands
<span class="ok">whoami</span>       who built this
<span class="ok">ls</span>           list shipped apps
<span class="ok">open</span> <name>  open an app or window (try: open var66, open security)
<span class="ok">contact</span>      how to reach me
<span class="ok">cv</span>           open the plain CV page
<span class="ok">theme</span>        switch light and dark
<span class="ok">clear</span>        clear the screen`;

const cmdHistory = [];
let hIdx = 0;
$("#win-terminal form").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = $("#term-input"), out = $("#win-terminal .term-out"), raw = input.value.trim();
  input.value = "";
  if (!raw) return;
  cmdHistory.push(raw); hIdx = cmdHistory.length;
  const [cmd, ...rest] = raw.split(/\s+/), arg = rest.join(" ").toLowerCase();
  const print = (html) => { out.insertAdjacentHTML("beforeend", `<span class="muted">$ ${esc(raw)}</span>\n${html ? html + "\n" : ""}`); };
  switch (cmd.toLowerCase()) {
    case "help": print(HELP); break;
    case "whoami": print(`${esc(PROFILE.name)}, ${esc(PROFILE.role.toLowerCase())}. ${APPS.length} apps live.`); break;
    case "ls": print(APPS.map((a) => `${a.id.padEnd(16)}${esc(a.tag)}`).join("\n")); break;
    case "contact": print(`${esc(PROFILE.email)}\n${esc(PROFILE.linkedin)}`); break;
    case "cv": print("Opening the CV page..."); location.href = "cv.html"; break;
    case "theme": toggleTheme(); print(`Theme: ${document.documentElement.dataset.theme}`); break;
    case "clear": out.textContent = ""; break;
    case "open": {
      const win = Object.keys(WINDOWS).find((k) => k === arg);
      const app = APPS.find((a) => a.id === arg.replace(/\s/g, "") || a.name.toLowerCase() === arg);
      if (win) { print(`Opening ${WINDOWS[win].title}`); openWin(win); }
      else if (app) { print(`Opening ${esc(app.name)}`); showApp(app.id); }
      else print(`Nothing called "${esc(arg)}". Try "ls".`);
      break;
    }
    default: print(`command not found: ${esc(cmd)}. Type "help".`);
  }
  $("#win-terminal .win-body").scrollTop = 1e6;
});
$("#term-input").addEventListener("keydown", (e) => {
  if (e.key !== "ArrowUp" && e.key !== "ArrowDown") return;
  e.preventDefault();
  hIdx = Math.max(0, Math.min(cmdHistory.length, hIdx + (e.key === "ArrowUp" ? -1 : 1)));
  e.target.value = cmdHistory[hIdx] ?? "";
});

/* ---------- Dock, home screen, menubar ---------- */

const SYSTEM = ["about", "apps", "security", "experience", "terminal", "contact"];
$("#dock-apps").innerHTML = SYSTEM.map((id) => `<button class="dock-item" type="button" data-dock="${id}" aria-controls="win-${id}">
  <span class="dock-tile">${icon(WINDOWS[id].icon)}</span><span class="dock-label">${WINDOWS[id].title}</span></button>`).join("");
$("#home-system").innerHTML = SYSTEM.map((id) => `<button class="app-btn" type="button" data-dock="${id}">
  <span class="sys-tile">${icon(WINDOWS[id].icon)}</span><span class="app-name">${WINDOWS[id].title}</span></button>`).join("") +
  `<a class="app-btn" href="cv.html"><span class="sys-tile">${icon("file-text")}</span><span class="app-name">CV</span></a>`;
$("#home-apps").innerHTML = APPS.map((a) => `<button class="app-btn" type="button" data-home-app="${a.id}">${appIcon(a)}<span class="app-name">${esc(a.name)}</span></button>`).join("");
$("#home-card").innerHTML = `<div class="about-head"><img class="avatar" src="assets/me.webp" width="64" height="64" alt="Dagus Ansi">
  <div><h1 class="about-name">${esc(PROFILE.name)}</h1><p class="about-role">${esc(PROFILE.role)}</p></div></div>
  <p class="meta"><span>${icon("map-pin")}${esc(PROFILE.location)}, ${esc(PROFILE.timezone)}</span><span>${esc(PROFILE.availability)}</span></p>
  <div class="actions"><a class="btn btn-primary" href="mailto:${PROFILE.email}">${icon("envelope-simple")}Email me</a><a class="btn" href="cv.html">${icon("file-text")}View CV</a></div>`;

document.addEventListener("click", (e) => {
  const d = e.target.closest("[data-dock]");
  if (d) { const id = d.dataset.dock; if (id === "apps") { appsState.app = null; rerender("apps"); } openWin(id, { from: d }); return; }
  const h = e.target.closest("[data-home-app]");
  if (h) showApp(h.dataset.homeApp, h);
});

addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  const top = openIds().sort((a, b) => wins[b].style.zIndex - wins[a].style.zIndex)[0];
  if (top) closeWin(top, { instant: true });
});

function setTheme(t) {
  document.documentElement.dataset.theme = t;
  localStorage.setItem("theme", t);
  const b = $("#theme-toggle");
  b.setAttribute("aria-label", t === "dark" ? "Switch to light mode" : "Switch to dark mode");
  $("use", b).setAttribute("href", `assets/icons.svg#i-${t === "dark" ? "sun" : "moon"}`);
  $('meta[name="theme-color"]').content = t === "dark" ? "#121211" : "#eeece7";
}
function toggleTheme() { setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"); }
$("#theme-toggle").addEventListener("click", toggleTheme);
setTheme(document.documentElement.dataset.theme || "light");

const clock = $("#clock");
const fmt = new Intl.DateTimeFormat("en-GB", { timeZone: "Africa/Lagos", hour: "2-digit", minute: "2-digit" });
const tick = () => { clock.textContent = `${fmt.format(new Date())} WAT`; };
tick();
setInterval(tick, 20000);

/* ---------- Routing and first paint ---------- */

function route() {
  const h = location.hash.slice(1);
  if (h.startsWith("app/") && APPS.some((a) => a.id === h.slice(4))) return showApp(h.slice(4)), true;
  const tab = { "apps/websites": "web", "apps/building": "building" }[h];
  if (tab) { appsState.tab = tab; appsState.app = null; rerender("apps"); openWin("apps"); return true; }
  if (WINDOWS[h]) return openWin(h), true;
  return false;
}

if (!phone.matches) {
  const first = innerWidth >= 1148 ? ["apps", "about"] : ["about"]; // both only when they fit side by side
  for (const id of first) openWin(id, { instant: true });
  if (!calm.matches) first.forEach((id, i) => wins[id].animate(
    [{ opacity: 0, translate: `${pos[id].x}px ${pos[id].y + 10}px` }, { opacity: 1, translate: `${pos[id].x}px ${pos[id].y}px` }],
    { duration: 420, delay: (first.length - 1 - i) * 90, easing: EASE, fill: "backwards" }));
}
route();
booted = true;
addEventListener("hashchange", route);
