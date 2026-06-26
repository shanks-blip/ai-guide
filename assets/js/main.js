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
    { title: "실습·도구", color: "#7c3aed", items: [
      { key: "prompts", label: "프롬프트 도구상자", href: "prompts.html", ic: "chat" },
      { key: "guide-me", label: "맞춤 학습 경로", href: "guide-me.html", ic: "compass" },
    ]},
    { title: "도구별 가이드", color: "#5b5bd6", items: [
      { key: "claude", label: "Claude · Cowork", href: "claude.html", ic: "sparkle" },
      { key: "chatgpt", label: "ChatGPT · Codex", href: "chatgpt.html", ic: "code" },
    ]},
    { title: "실전", color: "#c07a14", items: [
      { key: "usecases", label: "활용 사례", href: "usecases.html", ic: "briefcase" },
      { key: "advanced", label: "심화·개발 가이드", href: "advanced.html", ic: "layers" },
    ]},
    { title: "참고", color: "#0e8f9e", items: [
      { key: "updates", label: "AI 소식", href: "updates.html", ic: "rss" },
    ]},
  ];

  /* 각 페이지 섹션(h2[id]) 정적 맵 — 사이드바 트리/펼침 유지에 사용. 페이지 제목 변경 시 재생성 필요 */
  window.AI_NAV_SECTIONS = {"start":[{"id":"what","text":"생성형 AI란 무엇인가요?"},{"id":"can","text":"무엇을 할 수 있나요?"},{"id":"how","text":"어떻게 작동하나요?"},{"id":"signup","text":"가입하고 접속하기"},{"id":"first","text":"첫 대화 5분 따라하기"},{"id":"improve","text":"결과를 좋게 만드는 작은 습관"},{"id":"settings","text":"알아두면 좋은 기본 설정"},{"id":"caution","text":"안전하게 쓰기"},{"id":"tools","text":"다른 AI 도구들"},{"id":"verify","text":"AI 답 검증·저작권"},{"id":"ethics","text":"AI 편향·윤리"},{"id":"next","text":"다음 단계"}],"prompting":[{"id":"why","text":"왜 프롬프트가 중요한가"},{"id":"anatomy","text":"프롬프트 해부도 — 5요소"},{"id":"principles","text":"좋은 프롬프트 7원칙"},{"id":"advanced","text":"한 단계 위 기법"},{"id":"templates","text":"복사용 템플릿 모음"},{"id":"mistakes","text":"흔한 실수 & 체크리스트"},{"id":"next","text":"다음 단계로"}],"claude":[{"id":"diff","text":"한눈에 보는 차이"},{"id":"basic","text":"기초 — Claude 챗 시작하기 입문"},{"id":"features","text":"꼭 쓰는 핵심 기능"},{"id":"cowork","text":"Claude Cowork 시작하기 중급"},{"id":"cowork-use","text":"Cowork 실전 예시 중급"},{"id":"adv","text":"심화 — API · Claude Code · MCP 고급"},{"id":"faq","text":"자주 묻는 질문"},{"id":"video","text":"영상으로 배우기"},{"id":"links","text":"추천 자료 (전부 접속 확인)"}],"chatgpt":[{"id":"basic","text":"기초 — ChatGPT 시작하기 입문"},{"id":"features","text":"핵심 기능 깊이 보기"},{"id":"price","text":"요금제 한눈에 ChatGPT"},{"id":"usage","text":"실전 활용 예시 활용"},{"id":"codex","text":"Codex — 코딩 에이전트 중급"},{"id":"adv","text":"심화 — API · Function Calling 고급"},{"id":"faq","text":"자주 묻는 질문"},{"id":"video","text":"영상으로 배우기"},{"id":"links","text":"추천 자료 (전부 접속 확인)"}],"usecases":[{"id":"docs","text":"1. 기획·문서 쓰기"},{"id":"comms","text":"2. 마케팅·고객 커뮤니케이션"},{"id":"dev","text":"3. 개발"},{"id":"data","text":"4. 데이터·분석"},{"id":"automation","text":"5. 자동화·에이전트 활용"},{"id":"excel","text":"6. 스프레드시트·Excel 심화"},{"id":"imagegen","text":"7. AI 이미지 생성"},{"id":"research","text":"8. 리서치·Deep Research"},{"id":"design","text":"9. 디자인·크리에이티브"},{"id":"learn","text":"10. 교육·학습"},{"id":"voice","text":"11. 음성·오디오 AI"},{"id":"vision","text":"12. 비전·이미지 읽기"},{"id":"videogen","text":"13. AI 영상 생성"},{"id":"backoffice","text":"14. 법무·인사·재무"}],"advanced":[{"id":"ladder","text":"활용 사다리","cat":"개요"},{"id":"overview","text":"개발 공통 준비","cat":"개요"},{"id":"api","text":"API 첫 호출","cat":"연결·연동"},{"id":"api-deep","text":"API 심화","cat":"연결·연동"},{"id":"mcp","text":"MCP 쓰기","cat":"연결·연동"},{"id":"mcp-build","text":"MCP 서버 만들기","cat":"연결·연동"},{"id":"function","text":"함수 호출","cat":"연결·연동"},{"id":"connectors","text":"커넥터·확장","cat":"연결·연동"},{"id":"auto","text":"자동화·예약","cat":"자동화·에이전트"},{"id":"nocode","text":"노코드 자동화","cat":"자동화·에이전트"},{"id":"agent","text":"에이전트 개념","cat":"자동화·에이전트"},{"id":"agents","text":"에이전트 엔지니어링","cat":"자동화·에이전트"},{"id":"subagents","text":"서브에이전트","cat":"자동화·에이전트"},{"id":"dynamic-workflows","text":"동적 워크플로","cat":"자동화·에이전트"},{"id":"agent-ops","text":"에이전트 운영","cat":"자동화·에이전트"},{"id":"rag","text":"RAG 구현","cat":"구축·데이터"},{"id":"evals","text":"평가·Evals","cat":"구축·데이터"},{"id":"frameworks","text":"프레임워크 선택","cat":"구축·데이터"},{"id":"local","text":"로컬·파인튜닝","cat":"구축·데이터"},{"id":"security","text":"AI 앱 보안","cat":"운영·보안"},{"id":"llmops","text":"프로덕션·LLMOps","cat":"운영·보안"},{"id":"models","text":"모델 선택","cat":"운영·보안"},{"id":"cc-skills","text":"Claude Code 스킬","cat":"도구별 실전"},{"id":"cc-plugins","text":"Claude Code 플러그인","cat":"도구별 실전"},{"id":"codex-goal","text":"Codex goal","cat":"도구별 실전"},{"id":"vibe-launch","text":"바이브코딩 런칭","cat":"도구별 실전"},{"id":"harness","text":"하네스 엔지니어링","cat":"도구별 실전"},{"id":"ai-env","text":"AI 환경 만들기","cat":"도구별 실전"},{"id":"links","text":"더 배울 자료","cat":"자료"}]};
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
    terminal:'<rect x="2.5" y="4" width="19" height="15.5" rx="2.5"/><path d="M7 9.5l2.8 2.5L7 14.5"/><path d="M12.5 15h4.5"/>',
  };
  function svgIcon(name){ return '<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">'+(ICONS[name]||"")+"</svg>"; }
  const DESC = {
    home: "가이드 홈", start: "생성형 AI 첫걸음 · 가입 · 첫 대화",
    prompting: "좋은 질문 만드는 법 · 템플릿",
    claude: "Claude·Cowork 사용법과 자동화", chatgpt: "ChatGPT·Codex 사용법",
    usecases: "직군별 업무 활용 사례", advanced: "API·커넥터·자동화·에이전트",
    updates: "매일 갱신되는 AI 소식", dev: "API·RAG·Evals·MCP·에이전트·보안",
  };

  /* ---------- 섹션(h2[id]) 수집 ---------- */
  function pageSections() {
    const c = document.querySelector("section.block .content");
    if (!c) return [];
    return Array.from(c.querySelectorAll("h2[id]")).map((h) => ({
      id: h.id,
      text: (h.getAttribute("data-nav") || h.textContent || "").replace(/\s+/g, " ").trim(),
      cat: h.getAttribute("data-cat") || "",
    }));
  }
  // 섹션 링크 목록을 카테고리(cat)별 소제목과 함께 렌더 (cat 없으면 평평하게)
  function groupedLinks(items, base, catClass) {
    var out = "", last = null;
    items.forEach(function (s) {
      if (s.cat && s.cat !== last) { out += '<div class="' + catClass + '">' + s.cat + "</div>"; last = s.cat; }
      out += '<a href="' + base + s.id + '" title="' + (s.text || "").replace(/"/g, "&quot;") + '">' + s.text + "</a>";
    });
    return out;
  }

  // 사이드바 섹션 목록 — 카테고리(cat)가 있으면 접이식 하위 트리로, 없으면 평평하게
  function sidebarSecs(items, base) {
    function link(s) { return '<a href="' + base + s.id + '" title="' + (s.text || "").replace(/"/g, "&quot;") + '">' + s.text + "</a>"; }
    var hasCat = items.some(function (s) { return s.cat; });
    if (!hasCat) return items.map(link).join("");
    var groups = [], cur = null;
    items.forEach(function (s) {
      var c = s.cat || "";
      if (!cur || cur.cat !== c) { cur = { cat: c, items: [] }; groups.push(cur); }
      cur.items.push(s);
    });
    return groups.map(function (g) {
      return '<div class="ss-cat-node" data-cat="' + g.cat.replace(/"/g, "&quot;") + '">' +
        '<div class="ss-cat-head" role="button" tabindex="0"><span class="ss-cat-caret"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 6 6 6-6 6"/></svg></span><span class="ss-cat-name">' + g.cat + "</span></div>" +
        '<div class="ss-cat-items">' + g.items.map(link).join("") + "</div></div>";
    }).join("");
  }

  /* ---------- 사이드바 ---------- */
  function buildSidebar() {
    const secs = pageSections();
    let nav = "";
    function navOpenState(key, active, has) {
      if (!has) return false;
      var st = null; try { st = localStorage.getItem("aiguide.nav." + key); } catch (e) {}
      return st != null ? st === "1" : false; // 저장된 펼침 상태 유지(없으면 모두 접힘)
    }
    GROUPS.forEach((g) => {
      nav += '<div class="side-group" style="--g:' + g.color + '"><div class="grp-title">' + g.title + "</div>";
      g.items.forEach((n) => {
        const active = n.key === PAGE;
        const itemSecs = active ? secs : (window.AI_NAV_SECTIONS && window.AI_NAV_SECTIONS[n.key]) || [];
        const hasSecs = itemSecs.length > 0;
        const open = navOpenState(n.key, active, hasSecs);
        const caret = hasSecs ? '<span class="sl-caret" role="button" aria-label="펼치기 / 접기"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 6 6 6-6 6"/></svg></span>' : "";
        nav += '<a class="side-link' + (active ? " active" : "") + (hasSecs ? " has-secs" : "") + (open ? " open" : "") + '" href="' + n.href + '" data-key="' + n.key + '" data-label="' + n.label + '"><span class="sl-ico">' + svgIcon(n.ic) + '</span><span class="sl-label">' + n.label + "</span>" + caret + "</a>";
        if (hasSecs) {
          const base = active ? "#" : (n.href + "#");
          nav += '<div class="side-secs' + (open ? " open" : "") + '" data-key="' + n.key + '"><div class="ss-inner' + (itemSecs.some(function (s) { return s.cat; }) ? " has-cats" : "") + '">' + sidebarSecs(itemSecs, base) + "</div></div>";
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
      '<div class="nav-results home-results" id="navsearch-results" hidden></div>' +
      '<nav class="side-nav">' + nav + "</nav>" +
      '<div class="side-foot" id="side-foot"></div>';
    document.body.prepend(aside);

    // 검색: 섹션·본문 인덱스 → 결과 드롭다운
    const inp = aside.querySelector("#navsearch");
    const navRes = aside.querySelector("#navsearch-results");
    const sideNavTree = aside.querySelector(".side-nav");
    inp.addEventListener("focus", loadSearchIndex);
    inp.addEventListener("input", () => {
      const q = inp.value.trim();
      if (!q) { navRes.hidden = true; navRes.innerHTML = ""; if (sideNavTree) sideNavTree.style.display = ""; return; }
      loadSearchIndex().then(() => {
        navRes.innerHTML = renderResults(searchHits(q), q);
        navRes.hidden = false;
        if (sideNavTree) sideNavTree.style.display = "none";
      });
    });
    inp.addEventListener("keydown", (e) => { if (e.key === "Escape") { inp.value = ""; inp.dispatchEvent(new Event("input")); inp.blur(); } });
    // 결과 클릭 시: 검색 닫고 좌측 메뉴를 '현재 섹션'에 맞춰 펼침·스크롤(본문↔메뉴 위치 동기화)
    navRes.addEventListener("click", (e) => {
      const a = e.target.closest("a");
      if (!a || a.classList.contains("sr-empty")) return;
      setTimeout(() => {
        inp.value = ""; navRes.hidden = true; navRes.innerHTML = "";
        if (sideNavTree) sideNavTree.style.display = "";
        const act = document.querySelector(".side-secs a.active");
        if (act) {
          const box = act.closest(".side-secs"); if (box) box.classList.add("open");
          const catNode = act.closest(".ss-cat-node"); if (catNode) catNode.classList.add("open");
          const lnk = box && box.previousElementSibling;
          if (lnk && lnk.classList.contains("side-link")) lnk.classList.add("open");
          try { act.scrollIntoView({ block: "nearest" }); } catch (er) {}
        }
      }, 70);
    });

    // 메뉴명(또는 캐럿) 클릭 = 하위 항목 전부 펼치기/접기. 상태는 localStorage에 저장(이동·새로고침해도 유지)
    function navSetOpen(key, link, box, open) {
      if (box) box.classList.toggle("open", open);
      if (link) link.classList.toggle("open", open);
      try { localStorage.setItem("aiguide.nav." + key, open ? "1" : "0"); } catch (e) {}
      if (open && box) {
        // 펼칠 때 하위 카테고리까지 전부 펼치고 상태 저장
        box.querySelectorAll(".ss-cat-node").forEach(function (node) {
          node.classList.add("open");
          var cat = node.getAttribute("data-cat") || "";
          try { localStorage.setItem("aiguide.cat." + key + "." + cat, "1"); } catch (e) {}
        });
      }
    }
    aside.querySelectorAll(".side-link.has-secs").forEach(function (link) {
      const key = link.getAttribute("data-key");
      const box = link.nextElementSibling && link.nextElementSibling.classList.contains("side-secs") ? link.nextElementSibling : null;
      link.addEventListener("click", function (e) {
        e.preventDefault();
        navSetOpen(key, link, box, !(box && box.classList.contains("open")));
      });
    });

    // 하위 트리(카테고리): 클릭으로 접기/펼치기 + localStorage로 상태 유지(한 번 열면 유지, 자동으로 닫지 않음)
    (function () {
      // 모든 페이지의 하위 트리(카테고리)에 동일 적용 — 활성/비활성 화면이 같게 보이도록
      aside.querySelectorAll(".side-secs").forEach(function (box) {
        var pageKey = box.getAttribute("data-key") || "";
        var hash = (pageKey === PAGE) ? (location.hash || "").slice(1) : "";
        box.querySelectorAll(".ss-cat-node").forEach(function (node) {
          var cat = node.getAttribute("data-cat") || "";
          var skey = "aiguide.cat." + pageKey + "." + cat;
          var st = null; try { st = localStorage.getItem(skey); } catch (e) {}
          var open = (st != null) ? (st === "1") : false; // 첫 방문: 모두 접힘
          node.classList.toggle("open", open);
          var head = node.querySelector(".ss-cat-head");
          if (head) head.addEventListener("click", function () {
            var nowOpen = !node.classList.contains("open");
            node.classList.toggle("open", nowOpen);
            try { localStorage.setItem(skey, nowOpen ? "1" : "0"); } catch (e) {}
          });
        });
      });
    })();

    const foot = aside.querySelector("#side-foot");
    if (window.AI_UPDATES_META && window.AI_UPDATES_META.lastUpdated) {
      foot.textContent = "업데이트: " + window.AI_UPDATES_META.lastUpdated;
    }

    // 사이드바 스크롤 위치 유지 — 페이지를 이동해도 좌측 메뉴가 보던 위치 그대로
    var navEl = aside.querySelector(".side-nav");
    if (navEl) {
      function restoreNavScroll() {
        try { var sp = sessionStorage.getItem("aiguide.navScroll"); if (sp != null) navEl.scrollTop = parseInt(sp, 10) || 0; } catch (e) {}
      }
      restoreNavScroll();
      setTimeout(restoreNavScroll, 0);
      navEl.addEventListener("scroll", function () {
        try { sessionStorage.setItem("aiguide.navScroll", String(navEl.scrollTop)); } catch (e) {}
      }, { passive: true });
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
    document.querySelectorAll(".sidebar .side-link:not(.has-secs), .sidebar .side-secs a").forEach((a) =>
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
      toc.innerHTML = '<div class="ptoc-title">이 페이지</div>' + groupedLinks(secs, "#", "ptoc-cat");
      wrap.appendChild(toc);
      // 스크롤스파이 (우측 목차 + 사이드바 섹션)
      const links = {};
      toc.querySelectorAll("a").forEach((a) => { links[a.getAttribute("href").slice(1)] = a; });
      const sideLinks = {};
      document.querySelectorAll('.side-secs a[href^="#"]').forEach((a) => { sideLinks[a.getAttribute("href").slice(1)] = a; });
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((ents) => {
          ents.forEach((e) => {
            if (e.isIntersecting) {
              Object.values(links).forEach((x) => x.classList.remove("active"));
              Object.values(sideLinks).forEach((x) => x.classList.remove("active"));
              if (links[e.target.id]) links[e.target.id].classList.add("active");
              if (sideLinks[e.target.id]) {
                sideLinks[e.target.id].classList.add("active");
                var _n = sideLinks[e.target.id].closest(".ss-cat-node");
                if (_n) { document.querySelectorAll(".ss-cat-node.cur").forEach(function (o) { o.classList.remove("cur"); }); _n.classList.add("cur"); }
              }
            }
          });
        }, { rootMargin: "-70px 0px -75% 0px" });
        content.querySelectorAll("h2[id]").forEach((h) => io.observe(h));
      }
    }
  }

  /* ---------- 통합 검색 인덱스 (섹션 제목·카테고리·본문) ---------- */
  var SEARCH_IDX = null, SEARCH_PROM = null;
  function loadSearchIndex() {
    if (SEARCH_IDX) return Promise.resolve(SEARCH_IDX);
    if (SEARCH_PROM) return SEARCH_PROM;
    SEARCH_PROM = fetch("data/search-index.json")
      .then(function (r) { return r.ok ? r.json() : []; })
      .then(function (d) { SEARCH_IDX = d || []; return SEARCH_IDX; })
      .catch(function () { SEARCH_IDX = []; return SEARCH_IDX; });
    return SEARCH_PROM;
  }
  function searchHits(q) {
    q = (q || "").trim().toLowerCase();
    if (!q || !SEARCH_IDX) return [];
    var terms = q.split(/\s+/).filter(Boolean), out = [];
    SEARCH_IDX.forEach(function (s) {
      var t = (s.t||"").toLowerCase(), c = (s.c||"").toLowerCase(),
          pt = (s.pt||"").toLowerCase(), x = (s.x||"").toLowerCase();
      var hay = t+" "+c+" "+pt+" "+x;
      if (!terms.every(function (k){ return hay.indexOf(k) >= 0; })) return;
      var score = 0;
      terms.forEach(function (k){
        if (t.indexOf(k)>=0) score += 12;
        if (c.indexOf(k)>=0||pt.indexOf(k)>=0) score += 3;
        if (x.indexOf(k)>=0) score += 1;
      });
      var snip = "", raw = s.x||"", pos = x.indexOf(terms[0]);
      if (pos >= 0) { var st = Math.max(0, pos-28); snip = (st>0?"…":"")+raw.substr(st,84).trim()+"…"; }
      out.push({ s:s, score:score, snip:snip });
    });
    out.sort(function (a,b){ return b.score - a.score; });
    return out.slice(0, 14);
  }
  function searchHref(s) { return s.p === PAGE ? "#"+s.id : s.p+".html#"+s.id; }
  function renderResults(hits, q) {
    if (!hits.length) return '<a class="sr-empty"><span class="r-d">\u2018'+escapeHtml(q)+'\u2019 \uac80\uc0c9 \uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.</span></a>';
    return hits.map(function (h){ var s = h.s;
      return '<a href="'+searchHref(s)+'"><strong>'+escapeHtml(s.t)+'</strong>'+
        '<span class="r-d"> \u2014 '+escapeHtml(s.pt)+(s.c?' \u00b7 '+escapeHtml(s.c):'')+'</span>'+
        (h.snip?'<span class="r-x">'+escapeHtml(h.snip)+'</span>':'')+'</a>';
    }).join("");
  }

  /* ---------- 홈 검색 ---------- */
  function initHomeSearch() {
    const inp = document.getElementById("homesearch");
    const box = document.getElementById("home-results");
    if (!inp || !box) return;
    inp.addEventListener("focus", loadSearchIndex);
    inp.addEventListener("input", () => {
      const q = inp.value.trim();
      if (!q) { box.style.display = "none"; box.innerHTML = ""; return; }
      loadSearchIndex().then(() => {
        box.innerHTML = renderResults(searchHits(q), q);
        box.style.display = "block";
      });
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
  function monogram(name) {
    name = (name || "").trim();
    if (!name) return "";
    var w = name.split(/[\s·\-]+/).filter(Boolean);
    if (/[A-Za-z]/.test(name.charAt(0))) {
      var a = w[0].replace(/[^A-Za-z0-9]/g, "");
      return (a.slice(0, 2) || name.slice(0, 2)).toUpperCase();
    }
    return name.replace(/\s+/g, "").slice(0, 2);
  }
  function wrapThumb(cls, dataCat, inner, url) {
    var attr = dataCat ? ' data-cat="' + dataCat + '"' : "";
    return url
      ? '<a class="' + cls + '"' + attr + ' href="' + url + '" target="_blank" rel="noopener">' + inner + "</a>"
      : '<span class="' + cls + '"' + attr + ">" + inner + "</span>";
  }
  function faviconUrl(host) { return "https://www.google.com/s2/favicons?domain=" + encodeURIComponent(host) + "&sz=128"; }
  function catIconSvg(c) {
    const ic = CAT_ICON[c] || CAT_ICON.news;
    return '<span class="u-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + ic + "</svg></span>";
  }
  // 출처명으로 브랜드 로고 매칭 (링크 host와 출처가 다를 때 우선 — 예: "Google DeepMind"가 huggingface.co로 링크되는 경우)
  function brandForSource(src) {
    var s = (src || "").toLowerCase();
    if (/openai/.test(s)) return BRAND.openai;
    if (/anthropic|claude/.test(s)) return BRAND.anthropic;
    if (/google|deepmind|gemini/.test(s)) return BRAND.google;
    if (/github/.test(s)) return BRAND.github;
    if (/hugging\s*face/.test(s)) return BRAND.hf;
    if (/hacker\s*news/.test(s)) return BRAND.hn;
    if (/arxiv/.test(s)) return BRAND.arxiv;
    if (/reddit/.test(s)) return BRAND.reddit;
    return null;
  }
  window.AIGuideFavFallback = function (img, cat) {
    var w = img && img.parentNode; if (!w) return;
    w.classList.add("u-iconfallback"); w.setAttribute("data-cat", cat || "news");
    w.innerHTML = catIconSvg(cat || "news");
  };
  // 저해상도 파비콘이면 더 큰 아이콘(DuckDuckGo/apple-touch-icon)으로 자동 업그레이드
  window.AIGuideUpgradeFav = function (img) {
    if (!img || img.dataset.upg) return; img.dataset.upg = "1";
    var host = img.getAttribute("data-host"); if (!host) return;
    if ((img.naturalWidth || 0) >= 48) return;
    var cands = ["https://icons.duckduckgo.com/ip3/" + host + ".ico", "https://" + host + "/apple-touch-icon.png"];
    (function tryNext(i) {
      if (i >= cands.length) return;
      var t = new Image();
      t.onload = function () { if ((t.naturalWidth || 0) > (img.naturalWidth || 0)) { img.src = cands[i]; } else { tryNext(i + 1); } };
      t.onerror = function () { tryNext(i + 1); };
      t.src = cands[i];
    })(0);
  };
  // 출처의 상징 아이콘만 — 배경 없이 가운데 정렬. 1) 출처명 로고 2) 링크 host 로고 3) 사이트 파비콘 4) 카테고리 아이콘
  function coverThumb(item) {
    const c = item.category || "news";
    const host = hostOf(item.url);
    const brand = brandForSource(item.source) || brandFor(host);
    if (brand) {
      return wrapThumb("u-thumb u-icononly u-brandmark", c, '<span class="u-logo">' + brand + "</span>", item.url);
    }
    if (host) {
      const fav = '<img class="u-fav" data-host="' + escapeHtml(host) + '" src="' + faviconUrl(host) + '" alt="" loading="lazy" onload="AIGuideUpgradeFav(this)" onerror="AIGuideFavFallback(this,&quot;' + c + '&quot;)" />';
      return wrapThumb("u-thumb u-icononly u-favwrap", c, fav, item.url);
    }
    return wrapThumb("u-thumb u-icononly", c, catIconSvg(c), item.url);
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
  // 주간(월~일) 그룹화 헬퍼
  function pad2(n){ return (n<10?"0":"")+n; }
  function ymdOf(d){ return d.getFullYear()+"-"+pad2(d.getMonth()+1)+"-"+pad2(d.getDate()); }
  function mondayOf(dateStr){
    const d = new Date((dateStr||"").slice(0,10) + "T00:00:00");
    if (isNaN(d)) return null;
    const off = (d.getDay()+6)%7;
    d.setDate(d.getDate()-off); d.setHours(0,0,0,0);
    return d;
  }
  function weekLabel(monday){
    const sun = new Date(monday); sun.setDate(sun.getDate()+6);
    const f = (x)=> (x.getMonth()+1)+"\uc6d4 "+x.getDate()+"\uc77c";
    const todayMon = mondayOf(ymdOf(new Date()));
    let rel = "";
    if (todayMon){
      const diff = Math.round((todayMon - monday)/(7*864e5));
      if (diff===0) rel = "\uc774\ubc88 \uc8fc";
      else if (diff===1) rel = "\uc9c0\ub09c \uc8fc";
      else if (diff>1) rel = diff+"\uc8fc \uc804";
    }
    return (rel ? rel+" \u00b7 " : "") + f(monday)+" ~ "+f(sun);
  }
  function renderFull(id) {
    const el = document.getElementById(id); if (!el) return;
    const all = (window.AI_UPDATES || []).filter((i) => i.category !== "ops");
    const bar = document.getElementById("filter-bar");
    function draw(f) {
      const items = f && f !== "all" ? all.filter((i) => i.category === f) : all;
      if (!items.length) { el.innerHTML = '<div class="feed-empty">표시할 항목이 없습니다.</div>'; return; }
      const weeks = {};
      items.forEach((i) => {
        const mon = mondayOf(i.date);
        const wk = mon ? ymdOf(mon) : (i.date || "0000-00-00");
        if (!weeks[wk]) weeks[wk] = { mon: mon, dates: {}, count: 0 };
        (weeks[wk].dates[i.date] = weeks[wk].dates[i.date] || []).push(i);
        weeks[wk].count++;
      });
      const wkKeys = Object.keys(weeks).sort((a, b) => (a < b ? 1 : -1));
      el.innerHTML = wkKeys.map((wk, idx) => {
        const w = weeks[wk];
        const label = w.mon ? weekLabel(w.mon) : wk;
        const open = idx === 0 ? " open" : "";
        const inner = Object.keys(w.dates).sort((a, b) => (a < b ? 1 : -1))
          .map((d) => '<div class="date-group">' + escapeHtml(d) + "</div>" + w.dates[d].map(updateCard).join("")).join("");
        return '<details class="week-group"' + open + '><summary class="week-summary">' +
          '<span class="wk-caret" aria-hidden="true"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 6 6 6-6 6"/></svg></span>' +
          '<span class="wk-label">' + escapeHtml(label) + '</span>' +
          '<span class="wk-count">' + w.count + '\uac74</span></summary>' +
          '<div class="week-body">' + inner + '</div></details>';
      }).join("");
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

  /* ---------- 문서 최종 업데이트 스탬프 (배포 캐시버스트 v= 타임스탬프에서 추출) ---------- */
  function buildDocStamp() {
    var content = document.querySelector("section.block .content");
    if (!content) return;
    var v = "";
    try {
      var s = document.querySelector('script[src*="main.js"]');
      var m = s && s.getAttribute("src").match(/[?&]v=(\d{8})/);
      if (m) v = m[1].slice(0,4) + "-" + m[1].slice(4,6) + "-" + m[1].slice(6,8);
    } catch (e) {}
    if (!v) return;
    var el = document.createElement("div");
    el.className = "doc-stamp";
    el.textContent = "최종 업데이트 · " + v;
    content.insertBefore(el, content.firstChild);
  }

  /* ---------- 사이트 공통 푸터(면책·법적 링크) ---------- */
  function buildFooter() {
    if (document.querySelector(".site-foot")) return;
    var f = document.createElement("footer");
    f.className = "site-foot";
    f.innerHTML =
      '<div class="sf-inner">' +
      '<p class="sf-disc">이 사이트는 <b>비공식·독립 학습 가이드</b>입니다. Anthropic·OpenAI·Google 등과 제휴·후원 관계가 없으며, 모든 제품명·상표·로고는 각 소유자의 자산입니다. 외부 영상·자료는 출처로 링크하며 저작권은 원저작자에게 있습니다.</p>' +
      '<nav class="sf-links"><a href="index.html">홈</a><span>·</span><a href="privacy.html">개인정보처리방침</a><span>·</span><a href="terms.html">이용약관 · 면책</a></nav>' +
      '<p class="sf-copy">© 2026 AI 활용 가이드</p>' +
      '</div>';
    document.body.appendChild(f);
  }

  /* ---------- 문서형(한 섹션씩 보기) — 시작 페이지 시범 적용 ---------- */
  function buildDocMode() {
    var DOC_PAGES = ["start", "prompting", "claude", "chatgpt", "usecases", "advanced"];
    if (DOC_PAGES.indexOf(PAGE) < 0) return;
    var content = document.querySelector(".docwrap > .content") || document.querySelector("section.block > .content");
    if (!content) return;
    var kids = [].slice.call(content.childNodes);
    var sections = [], cur = null;
    kids.forEach(function (node) {
      if (node.nodeType === 1 && node.tagName === "H2") {
        cur = document.createElement("div");
        cur.className = "doc-section";
        cur.setAttribute("data-sec", node.id || "");
        content.insertBefore(cur, node);
        cur.appendChild(node);
        sections.push(cur);
      } else if (cur) {
        cur.appendChild(node);
      }
    });
    if (sections.length < 2) return;
    document.body.classList.add("doc-mode");

    function titleOf(sec) { var h = sec.querySelector("h2"); return h ? (h.textContent || "").trim() : ""; }
    function secForId(id) {
      if (!id) return null;
      for (var i = 0; i < sections.length; i++) if (sections[i].getAttribute("data-sec") === id) return sections[i];
      var el = document.getElementById(id);
      if (el && el.closest) { var s = el.closest(".doc-section"); if (s) return s; }
      return null;
    }
    sections.forEach(function (sec, i) {
      var prev = sections[i - 1], next = sections[i + 1];
      var nav = document.createElement("div");
      nav.className = "doc-nav";
      nav.innerHTML =
        (prev ? '<a class="doc-nav-btn doc-prev" href="#' + prev.getAttribute("data-sec") + '"><span class="dn-dir">\u2190 \uc774\uc804</span><span class="dn-t">' + titleOf(prev) + '</span></a>' : '<span></span>') +
        (next ? '<a class="doc-nav-btn doc-next" href="#' + next.getAttribute("data-sec") + '"><span class="dn-dir">\ub2e4\uc74c \u2192</span><span class="dn-t">' + titleOf(next) + '</span></a>' : '<span></span>');
      sec.appendChild(nav);
    });
    function setActiveNav(id) {
      document.querySelectorAll('.pagetoc a, .side-secs a').forEach(function (a) {
        a.classList.toggle("active", (a.getAttribute("href") || "") === "#" + id);
      });
    }
    function show(sec, subId, doScroll) {
      if (!sec) return;
      sections.forEach(function (s) { s.classList.toggle("doc-hidden", s !== sec); });
      var id = sec.getAttribute("data-sec");
      setActiveNav(id);
      try { history.replaceState(null, "", "#" + id); } catch (e) {}
      if (doScroll) {
        var wrap = content.closest(".docwrap") || content;
        var y = wrap.getBoundingClientRect().top + window.pageYOffset - 64;
        window.scrollTo(0, Math.max(0, y));
        if (subId) { setTimeout(function () { var t = document.getElementById(subId); if (t) t.scrollIntoView({ block: "start" }); }, 30); }
      }
    }
    document.addEventListener("click", function (e) {
      var a = e.target.closest && e.target.closest('a[href^="#"]');
      if (!a) return;
      var id = a.getAttribute("href").slice(1);
      if (!id) return;
      var sec = secForId(id);
      if (sec) { e.preventDefault(); show(sec, sec.getAttribute("data-sec") === id ? null : id, true); }
    });
    window.addEventListener("hashchange", function () {
      var sec = secForId((location.hash || "").slice(1));
      if (sec) show(sec, null, true);
    });
    var initSec = secForId((location.hash || "").slice(1)) || sections[0];
    show(initSec, null, false);
  }

  document.addEventListener("DOMContentLoaded", function () {
    try { document.title = document.title.replace(/AI 비서/g, "AI"); } catch (e) {}
    injectMeta();
    buildSidebar();
    buildTopbar();
    buildContentLayout();
    buildFooter();
    buildDocStamp();
    buildDocMode();
    initHomeSearch();
    initTheme();
    initCopyButtons();
    initTabs();
    renderPreview("updates-preview", 6);
    renderFull("updates-full");
  });
})();
