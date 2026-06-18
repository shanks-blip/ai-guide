/* ===========================================================
   AI 활용 가이드 — 셸 스크립트 (사이드바·검색·우측 목차·피드)
   =========================================================== */
(function () {
  "use strict";
  const PAGE = document.body.getAttribute("data-page") || "";

  const GROUPS = [
    { title: "시작", color: "#1a9d6a", items: [
      { key: "home", label: "홈", href: "index.html", ic: "home" },
      { key: "start", label: "시작하기", href: "start.html", ic: "compass" },
      { key: "prompting", label: "프롬프트 작성법", href: "prompting.html", ic: "chat" },
    ]},
    { title: "도구별 가이드", color: "#5b5bd6", items: [
      { key: "claude", label: "Claude · Cowork", href: "claude.html", ic: "sparkle" },
      { key: "chatgpt", label: "ChatGPT · Codex", href: "chatgpt.html", ic: "code" },
    ]},
    { title: "실전", color: "#c07a14", items: [
      { key: "usecases", label: "활용 사례", href: "usecases.html", ic: "briefcase" },
      { key: "advanced", label: "심화 활용", href: "advanced.html", ic: "layers" },
    ]},
    { title: "참고", color: "#0e8f9e", items: [
      { key: "updates", label: "AI 소식", href: "updates.html", ic: "rss" },
      { key: "glossary", label: "용어집", href: "glossary.html", ic: "book" },
    ]},
  ];
  const ICONS = {
    home:'<path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v9.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10"/><path d="M9.5 20.5V14h5v6.5"/>',
    compass:'<circle cx="12" cy="12" r="9"/><path d="M15.6 8.4l-2.1 5.1-5.1 2.1 2.1-5.1z"/>',
    chat:'<path d="M21 11.5a8.5 8.5 0 0 1-12.2 7.7L3 21l1.8-5.3A8.5 8.5 0 1 1 21 11.5z"/><path d="M8.5 11h7M8.5 14h4"/>',
    sparkle:'<path d="M12 3l1.8 4.7L18.5 9.5 13.8 11.3 12 16l-1.8-4.7L5.5 9.5l4.7-1.8z"/>',
    code:'<rect x="3" y="4" width="18" height="16" rx="2.5"/><path d="M8 9.5l3 2.5-3 2.5"/><path d="M13 15h4"/>',
    briefcase:'<rect x="3" y="7.5" width="18" height="12.5" rx="2"/><path d="M8 7.5V6A2.5 2.5 0 0 1 10.5 3.5h3A2.5 2.5 0 0 1 16 6v1.5"/><path d="M3 13h18"/>',
    layers:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
    rss:'<path d="M5 12a7 7 0 0 1 7 7"/><path d="M5 6a13 13 0 0 1 13 13"/><circle cx="6" cy="18" r="1.4" fill="currentColor" stroke="none"/>',
    book:'<path d="M12 6.5C10.3 5.2 7.8 4.7 4 5.2v13c3.8-.5 6.3 0 8 1.3 1.7-1.3 4.2-1.8 8-1.3v-13c-3.8-.5-6.3 0-8 1.3z"/><path d="M12 6.5V19.5"/>',
  };
  function svgIcon(name){ return '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">'+(ICONS[name]||"")+"</svg>"; }
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
      nav += '<div class="side-group" style="--g:' + g.color + '"><div class="grp-title">' + g.title + "</div>";
      g.items.forEach((n) => {
        const active = n.key === PAGE;
        const hasSecs = active && secs.length;
        const caret = hasSecs ? '<span class="sl-caret"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 6 6 6-6 6"/></svg></span>' : "";
        nav += '<a class="side-link' + (active ? " active" : "") + (hasSecs ? " has-secs" : "") + '" href="' + n.href + '" data-label="' + n.label + '"><span class="sl-ico">' + svgIcon(n.ic) + '</span><span class="sl-label">' + n.label + "</span>" + caret + "</a>";
        if (hasSecs) {
          nav += '<div class="side-secs"><div class="ss-inner">' + secs.map((s) => '<a href="#' + s.id + '">' + s.text + "</a>").join("") + "</div></div>";
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

    // 활성 카테고리 하위 목록: 로드 시 부드럽게 펼침 + 클릭 토글(열린 상태 유지)
    const secsEl = aside.querySelector(".side-secs");
    const toggleLink = aside.querySelector(".side-link.has-secs");
    if (secsEl) {
      requestAnimationFrame(function () { requestAnimationFrame(function () { secsEl.classList.add("open"); }); });
      if (toggleLink) {
        toggleLink.classList.add("open");
        toggleLink.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopImmediatePropagation();
          const open = secsEl.classList.toggle("open");
          toggleLink.classList.toggle("open", open);
        });
      }
    }

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
  const CAT_ICON = {
    news:'<rect x="3" y="5" width="14" height="15" rx="1.5"/><path d="M17 9h3v9a2 2 0 0 1-2 2"/><path d="M6.5 9h7M6.5 13h7M6.5 17h4"/>',
    github:'<circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="7" r="2.5"/><path d="M6 8.5v7"/><path d="M18 9.5c0 4-3 5.5-6 5.5"/>',
    paper:'<path d="M14 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8z"/><path d="M14 3v5h5"/><path d="M8.5 13h7M8.5 16.5h5"/>',
    tool:'<circle cx="12" cy="12" r="3.2"/><path d="M12 2.5v3M12 18.5v3M21.5 12h-3M5.5 12h-3M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1M18.7 18.7l-2.1-2.1M7.4 7.4 5.3 5.3"/>',
    community:'<circle cx="9" cy="8" r="3.2"/><path d="M3.5 20a5.5 5.5 0 0 1 11 0"/><path d="M16 5.2a3.2 3.2 0 0 1 0 5.6M20.5 20a5.5 5.5 0 0 0-4-5.3"/>',
    video:'<path d="M9 7.5v9l7-4.5z" fill="#fff" stroke="none"/>',
    ops:'<path d="M4 18a9 9 0 1 1 16 0"/><path d="m12 13 3.5-3"/><circle cx="12" cy="13" r="1.3" fill="#fff" stroke="none"/>',
  };
  function escapeHtml(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function ytId(u) { const m = String(u || "").match(/(?:[?&]v=|youtu\.be\/|\/embed\/)([A-Za-z0-9_-]{6,})/); return m ? m[1] : ""; }
  function hostOf(u) { try { return new URL(u).hostname.replace(/^www\./, ""); } catch (e) { return ""; } }
  // 출처별 실제 시스템 로고 (벡터 — 어떤 화면에서도 선명)
  const BRAND = {
    openai: `<svg viewBox="0 0 24 24"><path fill="#000" d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973v5.677a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071.006l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387 2.02-1.164a.076.076 0 0 1 .071-.005l4.83 2.785a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zM8.305 12.863l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.602 1.5-2.607-1.5z"/></svg>`,
    anthropic: `<svg viewBox="0 0 24 24"><g stroke="#D97757" stroke-width="2.1" stroke-linecap="round"><path d="M12 2.6v18.8M2.6 12h18.8M5.25 5.25l13.5 13.5M18.75 5.25L5.25 18.75"/></g></svg>`,
    google: `<svg viewBox="0 0 24 24"><path fill="#4285F4" d="M12 2c.45 4.9 4.1 8.55 9 9-4.9.45-8.55 4.1-9 9-.45-4.9-4.1-8.55-9-9 4.9-.45 8.55-4.1 9-9z"/></svg>`,
    github: `<svg viewBox="0 0 24 24"><path fill="#181717" d="M12 .5C5.37.5 0 5.78 0 12.29c0 5.21 3.44 9.63 8.2 11.19.6.11.82-.25.82-.56v-2.2c-3.34.71-4.04-1.58-4.04-1.58-.55-1.36-1.34-1.73-1.34-1.73-1.09-.73.08-.72.08-.72 1.2.08 1.84 1.21 1.84 1.21 1.07 1.8 2.81 1.28 3.5.98.11-.76.42-1.28.76-1.57-2.67-.3-5.47-1.31-5.47-5.84 0-1.29.47-2.34 1.24-3.17-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.21a11.6 11.6 0 0 1 6 0c2.28-1.53 3.29-1.21 3.29-1.21.66 1.66.25 2.88.12 3.18.77.83 1.23 1.88 1.23 3.17 0 4.54-2.8 5.54-5.48 5.83.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57C20.57 21.91 24 17.5 24 12.29 24 5.78 18.63.5 12 .5z"/></svg>`,
    hf: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12.5" r="8.5" fill="#FFD21E"/><circle cx="9" cy="11" r="1.2" fill="#3b3b3b"/><circle cx="15" cy="11" r="1.2" fill="#3b3b3b"/><path d="M8.5 14c1 1.2 2.1 1.8 3.5 1.8s2.5-.6 3.5-1.8" fill="none" stroke="#3b3b3b" stroke-width="1.3" stroke-linecap="round"/></svg>`,
    hn: `<svg viewBox="0 0 24 24"><rect width="24" height="24" rx="3" fill="#FF6600"/><path d="M12 6.5l-3 5.5M12 6.5l3 5.5M12 12v5.5" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/></svg>`,
    arxiv: `<svg viewBox="0 0 24 24"><rect width="24" height="24" rx="3" fill="#fff" stroke="#e6e6e6"/><text x="12" y="15.6" text-anchor="middle" font-family="Georgia, serif" font-size="8.2" font-weight="700" fill="#B31B1B">arXiv</text></svg>`,
    reddit: `<svg viewBox="0 0 24 24"><circle cx="12" cy="13.5" r="8" fill="#FF4500"/><circle cx="9.2" cy="13" r="1.15" fill="#fff"/><circle cx="14.8" cy="13" r="1.15" fill="#fff"/><path d="M9 16c1.7 1.2 4.3 1.2 6 0" fill="none" stroke="#fff" stroke-width="1.3" stroke-linecap="round"/><circle cx="16.6" cy="6.6" r="1.5" fill="#FF4500"/></svg>`,
  };
  function brandFor(host) {
    if (!host) return null;
    if (host.indexOf("openai.") >= 0) return BRAND.openai;
    if (host.indexOf("anthropic.") >= 0 || host.indexOf("claude.") >= 0) return BRAND.anthropic;
    if (host.indexOf("deepmind.") >= 0 || host.indexOf("gemini.") >= 0 || host.indexOf("blog.google") >= 0 || host.indexOf("ai.google") >= 0) return BRAND.google;
    if (host.indexOf("github.") >= 0 || host.indexOf("github.io") >= 0) return BRAND.github;
    if (host.indexOf("huggingface.") >= 0) return BRAND.hf;
    if (host.indexOf("ycombinator") >= 0) return BRAND.hn;
    if (host.indexOf("arxiv.") >= 0) return BRAND.arxiv;
    if (host.indexOf("reddit.") >= 0) return BRAND.reddit;
    return null;
  }
  function coverThumb(item) {
    const c = item.category || "news";
    const host = hostOf(item.url);
    const brand = brandFor(host);
    if (brand) {
      const inner = '<span class="u-logo">' + brand + "</span>";
      return item.url
        ? '<a class="u-thumb u-cover u-brand" href="' + item.url + '" target="_blank" rel="noopener">' + inner + "</a>"
        : '<span class="u-thumb u-cover u-brand">' + inner + "</span>";
    }
    const ic = CAT_ICON[c] || CAT_ICON.news;
    const inner = '<span class="u-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + ic + "</svg></span>";
    return item.url
      ? '<a class="u-thumb u-cover" data-cat="' + c + '" href="' + item.url + '" target="_blank" rel="noopener">' + inner + "</a>"
      : '<span class="u-thumb u-cover" data-cat="' + c + '">' + inner + "</span>";
  }
  function updateCard(item) {
    const cat = CAT_META[item.category] || { label: item.category || "기타", cls: "cat-news" };
    const lvl = item.level ? '<span class="badge ' + (item.level === "입문" ? "beginner" : item.level === "중급" ? "inter" : "adv") + '">' + item.level + "</span>" : "";
    const title = item.url ? '<a href="' + item.url + '" target="_blank" rel="noopener">' + escapeHtml(item.title) + " ↗</a>" : escapeHtml(item.title);
    const src = item.source ? '<span class="badge">' + escapeHtml(item.source) + "</span>" : "";
    const vid = ytId(item.url);
    let thumb;
    if (vid) {
      thumb = '<a class="u-thumb" href="' + item.url + '" target="_blank" rel="noopener"><img src="https://i.ytimg.com/vi/' + vid + '/mqdefault.jpg" alt="" loading="lazy" /><span class="u-play"><span>▶</span></span></a>';
    } else if (item.image) {
      thumb = '<a class="u-thumb" href="' + (item.url || "#") + '" target="_blank" rel="noopener"><img src="' + escapeHtml(item.image) + '" alt="" loading="lazy" onerror="this.parentNode.outerHTML=\'\'" /></a>';
    } else {
      thumb = coverThumb(item);
    }
    return '<article class="update has-thumb" data-cat="' + escapeHtml(item.category || "news") + '">' + thumb +
      '<div class="u-body">' +
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
    try { document.title = document.title.replace(/AI 비서/g, "AI"); } catch (e) {}
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
