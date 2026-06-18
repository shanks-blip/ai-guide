/* ===========================================================
   AI 활용 가이드 — 셸 스크립트 (사이드바·검색·우측 목차·피드)
   =========================================================== */
(function () {
  "use strict";
  const PAGE = document.body.getAttribute("data-page") || "";

  const GROUPS = [
    { title: "시작", items: [
      { key: "home", label: "홈", href: "index.html" },
      { key: "start", label: "시작하기", href: "start.html" },
      { key: "prompting", label: "프롬프트 작성법", href: "prompting.html" },
    ]},
    { title: "도구별 가이드", items: [
      { key: "claude", label: "Claude · Cowork", href: "claude.html" },
      { key: "chatgpt", label: "ChatGPT · Codex", href: "chatgpt.html" },
    ]},
    { title: "실전", items: [
      { key: "usecases", label: "활용 사례", href: "usecases.html" },
      { key: "advanced", label: "심화 활용", href: "advanced.html" },
    ]},
    { title: "참고", items: [
      { key: "updates", label: "AI 소식", href: "updates.html" },
      { key: "glossary", label: "용어집", href: "glossary.html" },
    ]},
  ];
  const DESC = {
    home: "가이드 홈", start: "AI 비서 첫걸음 · 가입 · 첫 대화",
    prompting: "좋은 질문 만드는 법 · 템플릿",
    claude: "Claude·Cowork 사용법과 자동화", chatgpt: "ChatGPT·Codex 사용법",
    usecases: "직군별 업무 활용 사례", advanced: "API·커넥터·자동화·에이전트",
    updates: "매일 갱신되는 AI 소식", glossary: "AI 용어 사전 · FAQ",
  };

  /* ---------- 섹션(h2[id]) 수집 ---------- */
  function pageSections() {
    const c = document.querySelector("section.block > .content");
    if (!c) return [];
    return Array.from(c.querySelectorAll("h2[id]")).map((h) => ({
      id: h.id,
      text: (h.textContent || "").replace(/\s+/g, " ").trim(),
    }));
  }

  /* ---------- 사이드바 ---------- */
  function buildSidebar() {
    const secs = pageSections();
    let nav = "";
    GROUPS.forEach((g) => {
      nav += '<div class="side-group"><div class="grp-title">' + g.title + "</div>";
      g.items.forEach((n) => {
        const active = n.key === PAGE;
        nav += '<a class="side-link' + (active ? " active" : "") + '" href="' + n.href + '" data-label="' + n.label + '">' + n.label + "</a>";
        if (active && secs.length) {
          nav += '<div class="side-secs">' + secs.map((s) => '<a href="#' + s.id + '">' + s.text + "</a>").join("") + "</div>";
        }
      });
      nav += "</div>";
    });

    const aside = document.createElement("aside");
    aside.className = "sidebar";
    aside.innerHTML =
      '<div class="side-top"><a class="side-brand" href="index.html"><span class="logo">✦</span> AI 활용 가이드</a>' +
      '<button class="side-theme theme-toggle" title="라이트/다크">🌙</button></div>' +
      '<div class="side-search"><input type="search" id="navsearch" placeholder="검색…" autocomplete="off" /></div>' +
      '<nav class="side-nav">' + nav + "</nav>" +
      '<div class="side-foot" id="side-foot"></div>';
    document.body.prepend(aside);

    // 검색: 사이드바 항목 필터
    const inp = aside.querySelector("#navsearch");
    inp.addEventListener("input", () => {
      const q = inp.value.trim().toLowerCase();
      aside.querySelectorAll(".side-group").forEach((grp) => {
        let any = false;
        grp.querySelectorAll(".side-link").forEach((a) => {
          const hit = !q || a.getAttribute("data-label").toLowerCase().includes(q);
          a.style.display = hit ? "" : "none";
          if (hit) any = true;
        });
        grp.style.display = any ? "" : "none";
      });
    });

    const foot = aside.querySelector("#side-foot");
    if (window.AI_UPDATES_META && window.AI_UPDATES_META.lastUpdated) {
      foot.textContent = "업데이트: " + window.AI_UPDATES_META.lastUpdated;
    }
  }

  /* ---------- 모바일 상단바 + 드로어 ---------- */
  function buildTopbar() {
    const bar = document.createElement("div");
    bar.className = "topbar";
    bar.innerHTML =
      '<button class="hamb" aria-label="메뉴">☰</button>' +
      '<span class="tb-brand">AI 활용 가이드</span>' +
      '<button class="side-theme theme-toggle" title="라이트/다크" style="margin-left:auto">🌙</button>';
    document.body.prepend(bar);
    const scrim = document.createElement("div");
    scrim.className = "scrim";
    document.body.appendChild(scrim);
    bar.querySelector(".hamb").addEventListener("click", () => document.body.classList.toggle("nav-open"));
    scrim.addEventListener("click", () => document.body.classList.remove("nav-open"));
    document.querySelectorAll(".sidebar .side-link").forEach((a) =>
      a.addEventListener("click", () => document.body.classList.remove("nav-open"))
    );
  }

  /* ---------- 본문 + 우측 목차 ---------- */
  function buildContentLayout() {
    const content = document.querySelector("section.block > .content");
    if (!content) return;
    const oldtoc = content.querySelector(".toc"); if (oldtoc) oldtoc.remove();
    content.querySelectorAll(".levelbar").forEach((e) => e.remove());

    const block = content.closest("section.block");
    const wrap = document.createElement("div");
    wrap.className = "docwrap";
    content.classList.remove("container", "narrow");
    block.insertBefore(wrap, content);
    wrap.appendChild(content);

    const secs = pageSections();
    if (secs.length >= 2) {
      const toc = document.createElement("aside");
      toc.className = "pagetoc";
      toc.innerHTML = '<div class="ptoc-title">이 페이지</div>' +
        secs.map((s) => '<a href="#' + s.id + '">' + s.text + "</a>").join("");
      wrap.appendChild(toc);
      // 스크롤스파이 (우측 목차 + 사이드바 섹션)
      const links = {};
      toc.querySelectorAll("a").forEach((a) => { links[a.getAttribute("href").slice(1)] = a; });
      const sideLinks = {};
      document.querySelectorAll(".side-secs a").forEach((a) => { sideLinks[a.getAttribute("href").slice(1)] = a; });
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((ents) => {
          ents.forEach((e) => {
            if (e.isIntersecting) {
              Object.values(links).forEach((x) => x.classList.remove("active"));
              Object.values(sideLinks).forEach((x) => x.classList.remove("active"));
              if (links[e.target.id]) links[e.target.id].classList.add("active");
              if (sideLinks[e.target.id]) sideLinks[e.target.id].classList.add("active");
            }
          });
        }, { rootMargin: "-70px 0px -75% 0px" });
        content.querySelectorAll("h2[id]").forEach((h) => io.observe(h));
      }
    }
  }

  /* ---------- 홈 검색 ---------- */
  function initHomeSearch() {
    const inp = document.getElementById("homesearch");
    const box = document.getElementById("home-results");
    if (!inp || !box) return;
    const idx = [];
    GROUPS.forEach((g) => g.items.forEach((n) => { if (n.key !== "home") idx.push({ label: n.label, href: n.href, desc: DESC[n.key] || "" }); }));
    inp.addEventListener("input", () => {
      const q = inp.value.trim().toLowerCase();
      if (!q) { box.style.display = "none"; box.innerHTML = ""; return; }
      const hits = idx.filter((x) => (x.label + " " + x.desc).toLowerCase().includes(q));
      box.innerHTML = hits.length
        ? hits.map((x) => '<a href="' + x.href + '"><strong>' + x.label + '</strong><span class="r-d"> — ' + x.desc + "</span></a>").join("")
        : '<a><span class="r-d">검색 결과가 없습니다.</span></a>';
      box.style.display = "block";
    });
  }

  /* ---------- 테마 ---------- */
  function initTheme() {
    let saved = null; try { saved = localStorage.getItem("ai-guide-theme"); } catch (e) {}
    const theme = saved || "light";
    document.documentElement.setAttribute("data-theme", theme);
    setIcon(theme);
    document.querySelectorAll(".theme-toggle").forEach((btn) =>
      btn.addEventListener("click", () => {
        const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        try { localStorage.setItem("ai-guide-theme", next); } catch (e) {}
        setIcon(next);
      })
    );
  }
  function setIcon(theme) { document.querySelectorAll(".theme-toggle").forEach((b) => (b.textContent = theme === "dark" ? "☀️" : "🌙")); }

  /* ---------- 프롬프트 복사 ---------- */
  function initCopyButtons() {
    document.querySelectorAll(".prompt").forEach((box) => {
      if (box.querySelector(".copy")) return;
      const btn = document.createElement("button");
      btn.className = "copy"; btn.textContent = "복사";
      btn.addEventListener("click", () => {
        const text = box.getAttribute("data-prompt") || box.innerText.replace("복사", "").trim();
        navigator.clipboard.writeText(text).then(() => {
          btn.textContent = "복사됨!"; btn.classList.add("done");
          setTimeout(() => { btn.textContent = "복사"; btn.classList.remove("done"); }, 1400);
        });
      });
      box.appendChild(btn);
    });
  }

  /* ---------- 탭 ---------- */
  function initTabs() {
    document.querySelectorAll(".tabs").forEach((tabs) => {
      const btns = tabs.querySelectorAll(".tab-btns button");
      const panels = tabs.querySelectorAll(".tab-panel");
      btns.forEach((btn, i) => btn.addEventListener("click", () => {
        btns.forEach((b) => b.classList.remove("active"));
        panels.forEach((p) => p.classList.remove("active"));
        btn.classList.add("active");
        const target = btn.getAttribute("data-tab");
        const panel = target ? tabs.querySelector('.tab-panel[data-tab="' + target + '"]') : panels[i];
        if (panel) panel.classList.add("active");
      }));
      if (btns.length && !tabs.querySelector(".tab-btns button.active")) btns[0].classList.add("active");
      if (panels.length && !tabs.querySelector(".tab-panel.active")) panels[0].classList.add("active");
    });
  }

  /* ---------- 피드 ---------- */
  const CAT_META = {
    news: { label: "뉴스", cls: "cat-news" }, github: { label: "GitHub", cls: "cat-github" },
    paper: { label: "논문", cls: "cat-paper" }, tool: { label: "도구", cls: "cat-tool" },
    community: { label: "커뮤니티", cls: "cat-community" }, video: { label: "영상", cls: "cat-video" },
    ops: { label: "운영", cls: "cat-ops" },
  };
  function escapeHtml(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function ytId(u) { const m = String(u || "").match(/(?:[?&]v=|youtu\.be\/|\/embed\/)([A-Za-z0-9_-]{6,})/); return m ? m[1] : ""; }
  function updateCard(item) {
    const cat = CAT_META[item.category] || { label: item.category || "기타", cls: "cat-news" };
    const lvl = item.level ? '<span class="badge ' + (item.level === "입문" ? "beginner" : item.level === "중급" ? "inter" : "adv") + '">' + item.level + "</span>" : "";
    const title = item.url ? '<a href="' + item.url + '" target="_blank" rel="noopener">' + escapeHtml(item.title) + " ↗</a>" : escapeHtml(item.title);
    const src = item.source ? '<span class="badge">' + escapeHtml(item.source) + "</span>" : "";
    const vid = ytId(item.url);
    const thumb = vid ? '<a class="u-thumb" href="' + item.url + '" target="_blank" rel="noopener"><img src="https://i.ytimg.com/vi/' + vid + '/mqdefault.jpg" alt="" loading="lazy" /><span class="u-play"><span>▶</span></span></a>' : "";
    return '<article class="update' + (vid ? " has-thumb" : "") + '"><div class="u-body">' +
      '<div class="u-top"><span class="u-cat ' + cat.cls + '">' + cat.label + "</span>" + lvl + src +
      '<span class="u-date">' + escapeHtml(item.date || "") + "</span></div>" +
      '<h3 class="u-title">' + title + "</h3>" +
      (item.summary ? '<p class="u-summary">' + escapeHtml(item.summary) + "</p>" : "") + "</div></article>";
  }
  function renderPreview(id, n) {
    const el = document.getElementById(id); if (!el) return;
    const items = (window.AI_UPDATES || []).filter((i) => i.category !== "ops").slice(0, n || 4);
    el.innerHTML = items.length ? items.map(updateCard).join("") : '<div class="feed-empty">아직 소식이 없습니다.</div>';
  }
  function renderFull(id) {
    const el = document.getElementById(id); if (!el) return;
    const all = (window.AI_UPDATES || []).filter((i) => i.category !== "ops");
    const bar = document.getElementById("filter-bar");
    function draw(f) {
      const items = f && f !== "all" ? all.filter((i) => i.category === f) : all;
      if (!items.length) { el.innerHTML = '<div class="feed-empty">표시할 항목이 없습니다.</div>'; return; }
      const g = {}; items.forEach((i) => { (g[i.date] = g[i.date] || []).push(i); });
      el.innerHTML = Object.keys(g).sort((a, b) => (a < b ? 1 : -1))
        .map((d) => '<div class="date-group">' + escapeHtml(d) + "</div>" + g[d].map(updateCard).join("")).join("");
    }
    if (bar) bar.addEventListener("click", (e) => {
      if (e.target.tagName !== "BUTTON") return;
      bar.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
      e.target.classList.add("active"); draw(e.target.getAttribute("data-filter"));
    });
    draw("all");
  }

  function injectMeta() {
    if (!document.querySelector('link[rel="icon"]')) {
      const l = document.createElement("link"); l.rel = "icon"; l.type = "image/svg+xml"; l.href = "favicon.svg"; document.head.appendChild(l);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    injectMeta();
    buildSidebar();
    buildTopbar();
    buildContentLayout();
    initHomeSearch();
    initTheme();
    initCopyButtons();
    initTabs();
    renderPreview("updates-preview", 6);
    renderFull("updates-full");
  });
})();
