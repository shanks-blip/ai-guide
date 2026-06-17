/* ===========================================================
   AI 비서 활용 가이드 — 공통 스크립트
   헤더/푸터 주입, 다크모드, 모바일 메뉴, 프롬프트 복사,
   등장 애니메이션, 업데이트 피드 렌더링
   =========================================================== */

(function () {
  "use strict";

  const PAGE = document.body.getAttribute("data-page") || "";

  const NAV = [
    { key: "home", label: "홈", href: "index.html" },
    { key: "start", label: "시작하기", href: "start.html" },
    { key: "prompting", label: "프롬프트", href: "prompting.html" },
    { key: "claude", label: "Claude", href: "claude.html" },
    { key: "chatgpt", label: "ChatGPT", href: "chatgpt.html" },
    { key: "usecases", label: "활용사례", href: "usecases.html" },
    { key: "advanced", label: "심화", href: "advanced.html" },
    { key: "updates", label: "새소식", href: "updates.html" },
    { key: "resources", label: "자료실", href: "resources.html" },
    { key: "glossary", label: "용어집", href: "glossary.html" },
  ];

  function buildHeader() {
    const links = NAV.map(
      (n) => `<a href="${n.href}" class="${n.key === PAGE ? "active" : ""}">${n.label}</a>`
    ).join("");

    const header = document.createElement("header");
    header.className = "site-header";
    header.innerHTML = `
      <nav class="nav">
        <a class="brand" href="index.html">
          <span class="logo">✦</span> AI 비서 가이드
        </a>
        <button class="nav-toggle" aria-label="메뉴 열기">☰</button>
        <div class="nav-links">${links}</div>
        <button class="theme-toggle" aria-label="테마 전환" title="라이트/다크 전환">🌙</button>
      </nav>`;
    document.body.prepend(header);

    const toggle = header.querySelector(".nav-toggle");
    const linksEl = header.querySelector(".nav-links");
    toggle.addEventListener("click", () => linksEl.classList.toggle("open"));
  }

  function buildFooter() {
    const footer = document.createElement("footer");
    footer.className = "site-footer";
    footer.innerHTML = `
      <div class="footer-inner">
        <div>
          <div class="f-brand"><span class="logo" style="width:28px;height:28px;font-size:15px;border-radius:8px">✦</span> AI 비서 활용 가이드</div>
          <p>입문부터 고급까지, AI 비서를 제대로 쓰는 법. 매일 새로운 기술·코드·논문 소식으로 업데이트됩니다.</p>
          <p class="muted" id="footer-updated"></p>
        </div>
        <div class="footer-links">
          <div>
            <strong>가이드</strong>
            <a href="start.html">시작하기</a>
            <a href="prompting.html">프롬프트 작성법</a>
            <a href="advanced.html">심화 활용</a>
          </div>
          <div>
            <strong>도구별</strong>
            <a href="claude.html">Claude · Cowork</a>
            <a href="chatgpt.html">ChatGPT · Codex</a>
          </div>
          <div>
            <strong>더보기</strong>
            <a href="updates.html">오늘의 AI</a>
            <a href="resources.html">자료실</a>
          </div>
        </div>
      </div>`;
    document.body.appendChild(footer);

    const u = document.getElementById("footer-updated");
    if (u && window.AI_UPDATES_META && window.AI_UPDATES_META.lastUpdated) {
      u.textContent = "최근 업데이트: " + window.AI_UPDATES_META.lastUpdated;
    }
  }

  function initTheme() {
    const saved = (function () {
      try { return localStorage.getItem("ai-guide-theme"); } catch (e) { return null; }
    })();
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = saved || (prefersDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
    updateToggleIcon(theme);

    const btn = document.querySelector(".theme-toggle");
    if (btn) {
      btn.addEventListener("click", () => {
        const cur = document.documentElement.getAttribute("data-theme");
        const next = cur === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", next);
        try { localStorage.setItem("ai-guide-theme", next); } catch (e) {}
        updateToggleIcon(next);
      });
    }
  }
  function updateToggleIcon(theme) {
    const btn = document.querySelector(".theme-toggle");
    if (btn) btn.textContent = theme === "dark" ? "☀️" : "🌙";
  }

  function initCopyButtons() {
    document.querySelectorAll(".prompt").forEach((box) => {
      if (box.querySelector(".copy")) return;
      const btn = document.createElement("button");
      btn.className = "copy";
      btn.textContent = "복사";
      btn.addEventListener("click", () => {
        const text = box.getAttribute("data-prompt") || box.innerText.replace("복사", "").trim();
        navigator.clipboard.writeText(text).then(() => {
          btn.textContent = "복사됨!";
          btn.classList.add("done");
          setTimeout(() => { btn.textContent = "복사"; btn.classList.remove("done"); }, 1400);
        });
      });
      box.appendChild(btn);
    });
  }

  function initReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || !els.length) {
      els.forEach((e) => e.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    els.forEach((e) => io.observe(e));
  }

  function initTabs() {
    document.querySelectorAll(".tabs").forEach((tabs) => {
      const btns = tabs.querySelectorAll(".tab-btns button");
      const panels = tabs.querySelectorAll(".tab-panel");
      btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
          btns.forEach((b) => b.classList.remove("active"));
          panels.forEach((p) => p.classList.remove("active"));
          btn.classList.add("active");
          const target = btn.getAttribute("data-tab");
          const panel = target ? tabs.querySelector('.tab-panel[data-tab="' + target + '"]') : panels[i];
          if (panel) panel.classList.add("active");
        });
      });
      if (btns.length && !tabs.querySelector(".tab-btns button.active")) btns[0].classList.add("active");
      if (panels.length && !tabs.querySelector(".tab-panel.active")) panels[0].classList.add("active");
    });
  }

  const CAT_META = {
    news: { label: "뉴스", cls: "cat-news" },
    github: { label: "GitHub", cls: "cat-github" },
    paper: { label: "논문", cls: "cat-paper" },
    tool: { label: "도구", cls: "cat-tool" },
    community: { label: "커뮤니티", cls: "cat-community" },
  };

  function escapeHtml(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function updateCard(item) {
    const cat = CAT_META[item.category] || { label: item.category || "기타", cls: "cat-news" };
    const lvl = item.level
      ? `<span class="badge ${item.level === "입문" ? "beginner" : item.level === "중급" ? "inter" : "adv"}">${item.level}</span>`
      : "";
    const title = item.url
      ? `<a href="${item.url}" target="_blank" rel="noopener">${escapeHtml(item.title)} ↗</a>`
      : escapeHtml(item.title);
    const src = item.source ? `<span class="badge">${escapeHtml(item.source)}</span>` : "";
    return `<article class="update" data-cat="${item.category || ""}">
        <div class="u-top">
          <span class="u-cat ${cat.cls}">${cat.label}</span>
          ${lvl}${src}
          <span class="u-date">${escapeHtml(item.date || "")}</span>
        </div>
        <h3 class="u-title">${title}</h3>
        ${item.summary ? `<p class="u-summary">${escapeHtml(item.summary)}</p>` : ""}
      </article>`;
  }

  function renderUpdatesPreview(targetId, n) {
    const el = document.getElementById(targetId);
    if (!el) return;
    const items = (window.AI_UPDATES || []).slice(0, n || 4);
    if (!items.length) { el.innerHTML = '<div class="feed-empty">아직 업데이트가 없습니다. 매일 자동으로 채워집니다.</div>'; return; }
    el.innerHTML = items.map(updateCard).join("");
  }

  function renderUpdatesFull(targetId) {
    const el = document.getElementById(targetId);
    if (!el) return;
    const all = window.AI_UPDATES || [];

    function draw(filter) {
      const items = filter && filter !== "all" ? all.filter((i) => i.category === filter) : all;
      if (!items.length) { el.innerHTML = '<div class="feed-empty">표시할 항목이 없습니다.</div>'; return; }
      const groups = {};
      items.forEach((i) => { (groups[i.date] = groups[i.date] || []).push(i); });
      el.innerHTML = Object.keys(groups)
        .sort((a, b) => (a < b ? 1 : -1))
        .map((d) => `<div class="date-group">${escapeHtml(d)}</div>` + groups[d].map(updateCard).join(""))
        .join("");
    }

    const bar = document.getElementById("filter-bar");
    if (bar) {
      bar.addEventListener("click", (e) => {
        if (e.target.tagName !== "BUTTON") return;
        bar.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
        e.target.classList.add("active");
        draw(e.target.getAttribute("data-filter"));
      });
    }
    draw("all");
  }

  function injectMeta() {
    if (!document.querySelector('link[rel="icon"]')) {
      const fav = document.createElement("link");
      fav.rel = "icon";
      fav.type = "image/svg+xml";
      fav.href = "favicon.svg";
      document.head.appendChild(fav);
    }
    if (!document.querySelector('meta[name="theme-color"]')) {
      const tc = document.createElement("meta");
      tc.name = "theme-color";
      tc.content = "#6366f1";
      document.head.appendChild(tc);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    injectMeta();
    buildHeader();
    buildFooter();
    initTheme();
    initCopyButtons();
    initTabs();
    initReveal();
    renderUpdatesPreview("updates-preview", 4);
    renderUpdatesFull("updates-full");
  });
})();
