/* Renders the pages from js/content.js. You shouldn't need to edit this. */
(function () {
  const S = window.SITE;
  const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const pad = (n) => String(n).padStart(2, "0");
  const arrow = `<span class="arr" aria-hidden="true">→</span>`;

  // Render into #app (created if missing) so <link>/<script> tags stay intact.
  function root() {
    let r = document.getElementById("app");
    if (!r) { r = document.createElement("div"); r.id = "app"; document.body.appendChild(r); }
    return r;
  }

  /* ---------- media ---------- */
  let fig = 0;

  function placeholder(m) {
    if (!S.showPlaceholders) return "";
    const kind = m.type === "youtube" ? "YouTube video" : m.type === "video" ? "Video" : "Image";
    return `<div class="ph" style="aspect-ratio:${m.ratio || "4/3"}">
      <span class="ph-kind">${kind}</span>
      ${m.hint ? `<span class="ph-hint">${esc(m.hint)}</span>` : ""}
      ${m.src ? `<code>${esc(m.src)}</code>` : ""}
    </div>`;
  }

  // Called when an <img>/<video> fails to load: swap in the placeholder (or hide).
  window.__mediaMissing = function (node) {
    const wrap = node.closest(".media");
    if (!wrap) return;
    const m = JSON.parse(wrap.dataset.m);
    const ph = placeholder(m);
    if (!ph) { (node.closest("figure") || wrap).remove(); return; }
    wrap.innerHTML = ph;
  };

  function mediaInner(m, alt, bg) {
    const ratio = m.ratio && !bg ? ` style="aspect-ratio:${m.ratio}"`
      : bg && m.fit === "contain" ? ` style="object-fit:contain;object-position:${m.position || "right center"}" class="fit-contain"`
      : bg && m.position ? ` style="object-position:${m.position}"` : "";
    if (!m.src) return placeholder(m);
    if (m.type === "youtube") {
      return `<div class="embed" style="aspect-ratio:${m.ratio || "16/9"}"><iframe src="https://www.youtube-nocookie.com/embed/${esc(m.src)}" title="${esc(m.caption || alt)}" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
    }
    if (m.type === "video") {
      // As a background (project bands), videos play silently on loop.
      const play = bg || m.autoplay ? "autoplay muted loop" : "controls";
      return `<video${ratio} src="${esc(m.src)}" ${m.poster ? `poster="${esc(m.poster)}"` : ""} ${play} playsinline preload="metadata" onerror="__mediaMissing(this)"></video>`;
    }
    // A tall photo in a band: show it whole, with a blurred copy filling the band behind it.
    const backdrop = bg && m.fit === "contain" ? `<img class="fit-bg" src="${esc(m.src)}" alt="" aria-hidden="true">` : "";
    return `${backdrop}<img${ratio} src="${esc(m.src)}" alt="${esc(m.alt || m.caption || alt || "")}" loading="lazy" onerror="__mediaMissing(this)">`;
  }

  function media(m, { alt = "", numbered = true, cls = "", bg = false } = {}) {
    if (!m) return "";
    if (!m.src && !S.showPlaceholders) return "";
    const n = numbered && m.caption ? ++fig : null;
    const yt = m.type === "youtube" && m.src && !bg
      ? ` <a class="yt-link" href="https://youtu.be/${esc(m.src)}" target="_blank" rel="noopener">Watch on YouTube ${arrow}</a>` : "";
    const cap = (m.caption || yt) && !bg
      ? `<figcaption>${n ? `<span class="fig-no">Fig. ${n}</span>` : ""}${esc(m.caption || "")}${yt}</figcaption>`
      : "";
    return `<figure class="${cls}"><div class="media" data-m='${esc(JSON.stringify(m)).replace(/'/g, "&#39;")}'>${mediaInner(m, alt, bg)}</div>${cap}</figure>`;
  }

  /* A full-bleed photo band with text laid over it. */
  function band(m, inner, { cls = "", alt = "" } = {}) {
    if (m && m.dim) cls += " dim";
    return `<section class="band ${cls}">
      <div class="band-media">${media(m, { alt, numbered: false, bg: true })}</div>
      <div class="band-inner">${inner}</div>
    </section>`;
  }

  /* ---------- shared chrome ---------- */
  function header(active) {
    const home = active === "home" ? "" : "index.html";
    return `<header class="top">
      <a class="wordmark" href="index.html">${esc(S.name)}</a>
      <nav>
        <a href="${home}#work">Work</a>
        <a href="${home}#about">About</a>
        <a href="${esc(S.resume)}" target="_blank" rel="noopener">Resume</a>
        <a href="${home}#contact">Contact</a>
      </nav>
    </header>`;
  }

  function footer() {
    const links = [
      `<a href="mailto:${esc(S.email)}">${esc(S.email)}</a>`,
      S.linkedin && `<a href="${esc(S.linkedin)}" target="_blank" rel="noopener">LinkedIn ${arrow}</a>`,
      S.github && `<a href="${esc(S.github)}" target="_blank" rel="noopener">GitHub ${arrow}</a>`,
      `<a href="${esc(S.resume)}" target="_blank" rel="noopener">Resume (PDF) ${arrow}</a>`,
    ].filter(Boolean);
    return `<footer class="foot" id="contact">
      <div class="grid">
        <div class="foot-lead">
          <h2>Open to co-ops in mechanical design, vehicles, robotics and manufacturing.</h2>
        </div>
        <ul class="foot-links">${links.map((l) => `<li>${l}</li>`).join("")}</ul>
      </div>
      <div class="foot-base">
        <p class="foot-name">${esc(S.name)}</p>
        <p class="foot-meta">${esc(S.location)} · © ${new Date().getFullYear()}</p>
      </div>
    </footer>`;
  }

  /* ---------- home ---------- */
  function home() {
    document.title = `${S.name} — Mechanical Engineering`;
    const total = S.projects.length;

    const hero = band(
      S.hero,
      `<p class="hero-kicker">${esc(S.role)}<br>Class of ${esc(S.gradYear)}<br>${esc(S.location)}</p>
       <h1 class="hero-name">${esc(S.name)}</h1>`,
      { cls: S.hero ? "hero" : "hero no-photo", alt: S.name }
    );

    const projects = S.projects
      .map((p, i) =>
        band(
          p.thumb || p.hero,
          `<div class="band-text">
             <h2>${esc(p.title)}</h2>
             <p class="band-sub">${esc(p.summary)}</p>
           </div>
           <div class="band-foot">
             <a class="pill" href="project.html?id=${encodeURIComponent(p.id)}">View project ${arrow}</a>
             ${p.keyStat ? `<p class="band-stat"><span>${esc(p.keyStat.value)}</span> ${esc(p.keyStat.label)}</p>` : ""}
           </div>
           <p class="band-index">${pad(i + 1)} / ${pad(total)} · ${esc(p.dates)}${p.status ? ` · ${esc(p.status)}` : ""}</p>`,
          { cls: "proj", alt: p.title }
        )
      )
      .join("");

    const teams = S.teams
      .map((t) => `
      <article class="team">
        ${media(t.media, { alt: t.name, numbered: false })}
        <h3>${esc(t.name)}</h3>
        <p class="meta">${esc(t.role)} · ${esc(t.dates)}</p>
        <ul class="points">${t.points.map((x) => `<li>${x}</li>`).join("")}</ul>
      </article>`)
      .join("");

    const skills = S.skills
      .map((g) => `<div class="skill"><h3>${esc(g.group)}</h3><ul>${g.items.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>`)
      .join("");

    const exp = S.experience
      .map((e) => `
      <li class="exp">
        <p class="meta">${esc(e.dates)}</p>
        <div>
          <h3>${esc(e.name)}</h3>
          <p class="meta">${esc(e.role)}</p>
          <p>${e.text}</p>
        </div>
      </li>`)
      .join("");

    root().innerHTML = `
    ${header("home")}
    <main>
      ${hero}

      <section class="sheet intro">
        <div class="grid">
          <h2 class="lead">${esc(S.intro)}</h2>
          <aside class="now">
            <p class="meta">Currently</p>
            <ul>${S.now.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
          </aside>
        </div>
      </section>

      <div id="work">${projects}</div>

      <section class="sheet" id="teams">
        <div class="grid">
          <h2 class="sheet-title">Clubs</h2>
          <div class="team-grid">${teams}</div>
        </div>
      </section>

      <section class="sheet" id="skills">
        <div class="grid">
          <h2 class="sheet-title">Tools and skills</h2>
          <div class="skill-grid">${skills}</div>
          <p class="coursework"><span class="meta">Coursework</span>${S.coursework.map(esc).join(" · ")}</p>
        </div>
      </section>

      <section class="sheet" id="about">
        <div class="grid">
          <h2 class="sheet-title">About</h2>
          <div class="about${S.about.photo ? "" : " no-photo"}">
            ${media(S.about.photo, { alt: S.name, numbered: false, cls: "about-photo" })}
            <div class="about-text">
              ${S.about.paragraphs.map((p) => `<p>${p}</p>`).join("")}
              <p class="meta">Outside the shop</p>
              <p>${S.about.interests.map(esc).join(" · ")}</p>
              ${media(S.about.interestsPhoto, { alt: "Outside the shop", numbered: false, cls: "interests-photo" })}
            </div>
          </div>
          <ol class="exp-list">${exp}</ol>
        </div>
      </section>
    </main>
    ${footer()}`;
  }

  /* ---------- project page ---------- */
  function project() {
    const id = new URLSearchParams(location.search).get("id");
    const i = Math.max(0, S.projects.findIndex((p) => p.id === id));
    const p = S.projects[i];
    const next = S.projects[(i + 1) % S.projects.length];
    document.title = `${p.title} — ${S.name}`;

    const specs = (p.specs || []).map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("");

    const sections = (p.sections || [])
      .map((s) => {
        const list = (s.media || []).map((m) => media(m, { alt: p.title })).filter(Boolean);
        const gal = list.length ? `<div class="gallery g${Math.min(list.length, 3)}">${list.join("")}</div>` : "";
        return `<section class="psec">
          <div class="grid">
            <h2 class="psec-title">${esc(s.heading)}</h2>
            <div class="psec-text">
              ${(s.body || []).map((x) => `<p>${x}</p>`).join("")}
              ${s.bullets ? `<ul class="points">${s.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>` : ""}
            ${s.table ? `<div class="ptable"><table><thead><tr>${s.table.head.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${s.table.rows.map((r) => `<tr>${r.map((c, ci) => ci ? `<td>${esc(c)}</td>` : `<th scope="row">${esc(c)}</th>`).join("")}</tr>`).join("")}</tbody></table></div>` : ""}
            </div>
            ${gal}
          </div>
        </section>`;
      })
      .join("");

    root().innerHTML = `
    ${header("project")}
    <main>
      ${band(
        p.hero,
        `<div class="band-text">
           <p class="band-kicker"><a href="index.html#work">← All work</a></p>
           <h1>${esc(p.title)}</h1>
           <p class="band-sub">${esc(p.summary)}</p>
         </div>
         <p class="band-index">${esc(p.context)} · ${esc(p.dates)}${p.status ? ` · ${esc(p.status)}` : ""}</p>`,
        { cls: "proj phero", alt: p.title }
      )}

      <section class="sheet specs-sheet">
        <div class="grid">
          <h2 class="sheet-title">Specifications</h2>
          <dl class="specs">${specs}</dl>
          <div class="tags"><p class="meta">Tools</p><ul>${(p.tags || []).map((t) => `<li>${esc(t)}</li>`).join("")}</ul></div>
        </div>
      </section>

      <div class="psecs">${sections}</div>

      ${S.projects.length > 1 ? band(
        next.thumb || next.hero,
        `<div class="band-text">
           <p class="band-kicker">Next project</p>
           <h2>${esc(next.title)}</h2>
         </div>
         <div class="band-foot"><a class="pill" href="project.html?id=${encodeURIComponent(next.id)}">View project ${arrow}</a></div>`,
        { cls: "proj next", alt: next.title }
      ) : ""}
    </main>
    ${footer()}`;
  }

  (document.body.dataset.page === "project" ? project : home)();

  // Always open a page at the top (unless the link points to a section like #work).
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
  const toTop = () => {
    if (location.hash) {
      const t = document.getElementById(location.hash.slice(1));
      if (t) { t.scrollIntoView({ behavior: "instant" }); return; }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };
  toTop();
  window.addEventListener("load", toTop);
  window.addEventListener("pageshow", (e) => { if (e.persisted) toTop(); });

  // Header: see-through over photo bands, solid white over text sections.
  const top = document.querySelector(".top");
  function headerMode() {
    const h = top.offsetHeight;
    top.style.visibility = "hidden";
    const under = document.elementFromPoint(window.innerWidth / 2, h - 2);
    top.style.visibility = "";
    top.classList.toggle("solid", !(under && under.closest(".band, .foot")));
  }
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) { ticking = true; requestAnimationFrame(() => { headerMode(); ticking = false; }); }
  }, { passive: true });
  window.addEventListener("resize", headerMode);
  headerMode();
})();
