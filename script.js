const CONFIG = {
  logo: "rafaelabrari.dev",
  shortName: "Rafael",
  name: "Moh. Rafael Abrari",
  photo: "assets/images/home.png",  // foto di kartu ID (beranda)
  photoAbout: "assets/images/about.jpeg",  // foto bulat di halaman About
  cvUrl: "#",              // link Google Drive CV
  typed: ["Building end-to-end web applications.", "From the database to the user interface.", "Ready to learn and contribute."],
  heroChips: ["Laravel", "Flutter", "Dart", "PHP", "PostgreSQL"],
  socials: [
    { name: "Email", handle: "rafaellokajaya@gmail.com", href: "mailto:rafaellokajaya@gmail.com", icon: "mail" },
    { name: "No Handphone (WhatsApp)", handle: "0896-7834-3160", href: "https://wa.me/6289678343160", icon: "phone" },
    { name: "LinkedIn", handle: "Moh. Rafael Abrari", href: "https://linkedin.com/in/rafael80", icon: "in" },
    { name: "Instagram", handle: "@rflabrarii_", href: "https://instagram.com/rflabrarii_", icon: "ig" },
  ],
  projects: [
    { id: "p1", title: "IVSS-LAB", short: "PBL (Project-Based Learning) Group Project.",
      desc: "The official website of the Intelligent Vision and Smart System (IVSS) Research Laboratory in Department of Information Technology at the State Polytechnic of Malang. This website serves as a central hub for information about the lab, covering everything from its profile and research areas to its members, publications, and activities. For this project, my team and I developed the user interface and key features, and ensured that the site is responsive across various screen sizes.",
      image: "", 
      tech: ["PHP", "CSS", "JavaScript", "HTML", "MySQL"], 
      demo: "", 
      repoFront: "https://github.com/AhnafRifqi/IVSS-LAB",
      features: ["Lab Profile and Research Area", "List of Members and Advisors", "Publications and Research Projects", "Lab News and Activities"] },
    { id: "p2", title: "Byteme Digital Marketplace", short: "PBL (Project-Based Learning) Group Project.",
      desc: "A simple e-commerce mobile app built with Flutter and Dart. Users can browse products, view their details, add them to the cart, and place orders through a streamlined process. For this project, my team and I designed a responsive user interface, managed the application's state, connected the application to an API as a data source, and integrated the Midtrans API for the payment process.",
      image: "assets/images/byteme.jpg", 
      tech: ["Dart", "Flutter", "PHP","Laravel", "PostgreSQL"], 
      demo: "https://drive.google.com/file/d/1D4s1e3fcu_SrK4zJzxKwiMFSGEJASHx2/view?usp=drivesdk", 
      repoFront: "https://github.com/chiquixs/byteme_digital_marketplace",
      repoBack: "https://github.com/PratamaAngga/Backend-Laravel-ByteMe",
      features: ["Catalog and Search", "Shopping Cart", "Midtrans Payment"] },
    { id: "p3", title: "Outgear Station", short: "PBL (Project-Based Learning) Group Project - (On-Going).",
      desc: "A rental website for outdoor gear partners, built to help them receive more orders and replace manual order recording and stock management. This project is in progress with a team of 4. My role is backend developer.",
      image: "assets/images/outgear.png", 
      tech: ["Laravel", "PHP", "PostgreSQL", "JavaScript"], 
      demo: "", 
      repoFront: "https://github.com/fael83/Pbl-Smt5_Outgear-Station",
      features: ["Digital order recording", "Stock management", "Booking platform"] },
  ],
  certificates: [
    { title: "Sertifikat PKL", org: "PT Nama Perusahaan", image: "" },
  ],
  tech: [
    ["HTML", "html5"], ["CSS", "css3"], ["JavaScript", "javascript"],
    ["PHP", "php"], ["Dart", "dart"], ["Laravel", "laravel"], 
    ["Node.js", "nodejs"], ["Flutter", "flutter"],
  ],
  tools: [
  ["Git", "git"], ["GitHub", "github"], ["PostgreSQL", "postgresql"], ["Figma", "figma"], ["VS Code", "vscode"], //  ["Postman", "postman"],
  ],  
};
/* ========================================================= */

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
};

/* ---- static config ---- */
const silhouette = "data:image/svg+xml," + encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 390"><defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#2a2a2d"/><stop offset=".5" stop-color="#d8d8da"/><stop offset="1" stop-color="#1a1a1c"/></linearGradient></defs><rect width="300" height="390" fill="url(#g)"/><circle cx="150" cy="140" r="58" fill="#0d0d0e"/><path d="M40 390c0-90 50-130 110-130s110 40 110 130z" fill="#0d0d0e"/></svg>`);
$$("[data-cfg]").forEach(el => { const v = CONFIG[el.dataset.cfg]; if (v) el.textContent = v; });
$$("[data-photo]").forEach(img => { img.src = CONFIG.photo || silhouette; });
$$("[data-photo-about]").forEach(img => { img.src = CONFIG.photoAbout || CONFIG.photo || silhouette; });
$("#heroChips").innerHTML = CONFIG.heroChips.map(c => `<span class="chip">${esc(c)}</span>`).join("");
$("#nProj").textContent = CONFIG.projects.length;
// $("#nCert").textContent = CONFIG.certificates.length;   // sertifikat
$("#nTech").textContent = CONFIG.tech.length;

const socIcons = {
  in: '<path d="M6 9v10M6 5.5v.01M10 19V9m0 4c0-2 1.5-4 4-4s4 1.5 4 4v6"/>',
  ig: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5v.01"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
};
$("#soc").innerHTML = CONFIG.socials.map(s =>
  `<a href="${esc(s.href)}" target="_blank" rel="noopener"><svg class="ic" viewBox="0 0 24 24">${socIcons[s.icon] || socIcons.in}</svg><span>${esc(s.name)}<small>${esc(s.handle)}</small></span></a>`).join("");

/* ---- typed line ---- */
(function typer() {
  const el = $("#typed"), words = CONFIG.typed; let w = 0, i = 0, del = false;
  if (matchMedia("(prefers-reduced-motion:reduce)").matches) { el.textContent = words[0]; return; }
  (function tick() {
    const word = words[w];
    el.textContent = word.slice(0, i);
    let t = del ? 40 : 90;
    if (!del && i === word.length) { del = true; t = 1600; }
    else if (del && i === 0) { del = false; w = (w + 1) % words.length; t = 350; }
    else i += del ? -1 : 1;
    setTimeout(tick, t);
  })();
})();

/* ---- portfolio tabs ---- */
const arrow = '<svg class="ic" viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9"/></svg>';
function renderTab(tab) {
  $$(".tabs button").forEach(b => b.setAttribute("aria-selected", b.dataset.tab === tab));
  const p = $("#panel");
  if (tab === "projects") {
    p.innerHTML = `<div class="grid">${CONFIG.projects.map(x => `
      <button class="card" data-open="${x.id}">
        <div class="thumb">${x.image ? `<img src="${esc(x.image)}" alt="">` : `<span class="mono" style="color:var(--dim);font-size:12px">preview</span>`}</div>
        <div class="body"><h3>${esc(x.title)}</h3><p>${esc(x.short)}</p></div></button>`).join("") || `<div class="empty">Belum ada project.</div>`}</div>`;
  } else if (tab === "certs") {
    p.innerHTML = `<div class="grid">${CONFIG.certificates.map(c => `
      <div class="card cert">
        <div class="thumb">${c.image ? `<img src="${esc(c.image)}" alt="${esc(c.title)}">` : `<div class="paper"><span>PT NAMA PERUSAHAAN</span><b>SERTIFIKAT</b><span>2026</span></div>`}</div>
        <div class="body">${esc(c.title)} ${esc(c.org)}</div></div>`).join("")}</div>`;
  } else {
    const list = tab === "tools" ? CONFIG.tools : CONFIG.tech;
    const ico = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";
    const dark = ["github", "nextjs"];
    p.innerHTML = `<div class="grid tech">${list.map(([n, slug]) =>
      `<div class="tile"><div class="mk"><img src="${ico}/${slug}/${slug}-original.svg" alt="" loading="lazy"${dark.includes(slug) ? ' style="filter:invert(1)"' : ""}></div><span>${esc(n)}</span></div>`).join("")}</div>`;
  }
}
$$(".tabs button").forEach(b => b.addEventListener("click", () => renderTab(b.dataset.tab)));
renderTab("projects");
$$("[data-go]").forEach(b => b.addEventListener("click", () => {
  renderTab(b.dataset.go);
  $("#portfolio").scrollIntoView({ behavior: "smooth" });
}));

/* ---- project detail ---- */
const detail = $("#detail");
$("#panel").addEventListener("click", e => {
  const c = e.target.closest("[data-open]"); if (!c) return;
  const x = CONFIG.projects.find(p => p.id === c.dataset.open);
  detail.innerHTML = `<div class="in">
    <button class="back" id="back"><svg class="ic" viewBox="0 0 24 24"><path d="M19 12H5m6-6-6 6 6 6"/></svg>Back</button>
    <div class="dgrid">
      <div>
        <h2>${esc(x.title)}</h2><hr>
        <p class="desc">${esc(x.desc)}</p>
        <div class="mini">
          <div><svg class="ic" viewBox="0 0 24 24"><path d="m8 7-5 5 5 5M16 7l5 5-5 5"/></svg><span><b>${x.tech.length}</b><small>Technologies Used</small></span></div>
          <div><svg class="ic" viewBox="0 0 24 24"><path d="m12 3 9 5-9 5-9-5zM3 13l9 5 9-5"/></svg><span><b>${x.features.length}</b><small>Key Features</small></span></div>
        </div>
        <div class="links">
          ${x.demo ? `<a href="${esc(x.demo)}" target="_blank" rel="noopener">Live Demo ${arrow}</a>` : `<span>No Link Demo</span>`}
          ${x.repoFront ? `<a href="${esc(x.repoFront)}" target="_blank" rel="noopener">GitHub ${arrow}</a>` : ""}
          ${x.repoBack ? `<a href="${esc(x.repoBack)}" target="_blank" rel="noopener">GitHub ${arrow}</a>` : ""}
          ${!x.repoFront && !x.repoBack ? `<span>No Link</span>` : ""}
        </div>
        <h4><svg class="ic" viewBox="0 0 24 24"><path d="m8 7-5 5 5 5M16 7l5 5-5 5"/></svg>Technologies Used</h4>
        <div>${x.tech.map(t => `<span class="pill">${esc(t)}</span>`).join("")}</div>
      </div>
      <div>
        <div class="shot">${x.image ? `<img src="${esc(x.image)}" alt="">` : `<span class="mono" style="color:var(--dim);font-size:12px">preview ${esc(x.title)}</span>`}</div>
        <div class="feat"><h4>Key Features</h4><ul>${x.features.map(f => `<li>${esc(f)}</li>`).join("")}</ul></div>
      </div>
    </div></div>`;
  detail.hidden = false; detail.scrollTop = 0; document.body.style.overflow = "hidden";
  $("#back").focus();
});
function closeDetail() { detail.hidden = true; document.body.style.overflow = ""; }
detail.addEventListener("click", e => { if (e.target.closest("#back")) closeDetail(); });
addEventListener("keydown", e => { if (e.key === "Escape" && !detail.hidden) closeDetail(); });

/* ---- scrollspy ---- */
const links = $$(".nav a[data-s]");
const spy = new IntersectionObserver(es => {
  es.forEach(en => { if (en.isIntersecting) links.forEach(a => a.classList.toggle("on", a.dataset.s === en.target.id)); });
}, { rootMargin: "-40% 0px -55% 0px" });
$$("main section").forEach(s => spy.observe(s));
links[0].classList.add("on");

/* ---- lanyard physics: pendulum with drag ---- */
(function lanyard() {
  const sw = $("#swing"), card = $("#idcard"), lan = $("#lan");
  let ang = 0, vel = 0, drag = false, target = 0;
  if (matchMedia("(prefers-reduced-motion:reduce)").matches) return;
  vel = 0.9; /* small initial swing */
  const pivot = () => { const r = sw.getBoundingClientRect(); return { x: r.left, y: r.top }; };
  card.addEventListener("pointerdown", e => { drag = true; card.setPointerCapture(e.pointerId); e.preventDefault(); });
  card.addEventListener("pointermove", e => {
    if (!drag) return;
    const p = pivot(), dx = e.clientX - p.x, dy = Math.max(120, e.clientY - p.y);
    target = Math.max(-60, Math.min(60, Math.atan2(dx, dy) * 180 / Math.PI));
  });
  const up = () => { drag = false; };
  card.addEventListener("pointerup", up); card.addEventListener("pointercancel", up);
  let last = performance.now();
  (function loop(t) {
    const dt = Math.min(.04, (t - last) / 1000); last = t;
    if (drag) { const prev = ang; ang += (target - ang) * Math.min(1, dt * 18); vel = (ang - prev) / Math.max(dt, .001); }
    else { vel += (-38 * ang - 2.1 * vel) * dt; ang += vel * dt; if (Math.abs(ang) < .01 && Math.abs(vel) < .05) { ang = 0; vel = 0; } }
    sw.style.transform = `rotate(${ang}deg)`;
    requestAnimationFrame(loop);
  })(last);
})();
