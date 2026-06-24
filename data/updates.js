/* ===========================================================
   매일 업데이트 피드 데이터
   - 이 파일은 매일 자동 실행되는 예약 작업이 갱신합니다.
   - 형식: window.AI_UPDATES 배열의 "맨 앞"에 새 항목을 추가하세요.
   - 각 항목 필드:
       date     : "YYYY-MM-DD"
       category : "news" | "github" | "paper" | "tool" | "community"
       title    : 제목 (한국어 권장)
       summary  : 한 줄 요약 (왜 중요한지)
       url      : 원문 링크 (실제로 열리는지 확인된 것만)
       source   : 출처명 (예: "OpenAI", "GitHub", "arXiv")
       level    : "입문" | "중급" | "고급"  (대상 난이도, 선택)
   =========================================================== */

window.AI_UPDATES_META = {
  lastUpdated: "2026-06-25",
  note: "시드 데이터입니다. 매일 자동 업데이트로 최신 항목이 맨 위에 쌓입니다."
};

window.AI_UPDATES = [
  { date: "2026-06-25", category: "ops", title: "일일 운영 — 소식 11건 · 신규 갭(AI 영상 생성) · 보강(무엇을 할 수 있나요)", summary: "A) 실전·심화 위주 소식 11건 — 영상3(AI 영상 생성 비교가이드[AI Master]·Claude Code 서브에이전트 입문[Thetips4you]·Codex 입문 2026[Charlie Chang]) · GitHub2(punkpeye/awesome-mcp-servers·modelcontextprotocol/servers 공식) · 해외 1차2(Runway Gen-4.5·Anthropic ‘고급 도구 사용’ 3종 베타) · 기술블로그1(ByteByteGo: Cursor 코딩 에이전트 양산기) · 논문1(arXiv 2510.12399 바이브코딩 서베이) · 국내2(딥시크 ‘하네스’ 팀·패스트캠퍼스 바이브코딩 매출 175%↑). 영상은 YouTube oembed로 제목·채널 검증, 해외·GitHub·블로그·논문은 web_fetch 본문 확인, 국내는 NaverSearch 당일 pubDate로 실링크 확인. 06-23~06-24 자동분과 중복 제외. ※날짜=KST 2026-06-25(직전 자동분 06-24와 구분). B) 백로그 pending-fix 없음. 신규 갭 usecases#videogen(영상 생성·편집 — 텍스트/이미지→영상; Sora·Veo·Runway·Kling·Pika; Sora 공식 도움말·Runway 무료플랜·Veo DeepMind 실링크 근거; #13 삽입·TOC·main.js 동기화, 점수 100). 보강 start#can(‘직접 시켜보기’ steps·이메일 io 2개·강점/주의 함정표·체크리스트·OpenAI/Anthropic 기능 공식 링크 → 36→93). 검토 에이전트: 두 섹션 5항목 PASS·링크 6/6 일치, Sora 자격 표기 정밀화 1건만 반영(Plus·Team·Pro). 채점 평균 61.5→62.7·중앙 64(n76→77, 0–39 12→11·80–100 15→17, 하락 섹션 0). HOLD/롤백 없음.", source: "운영봇", level: "입문" },
  { date: "2026-06-25", category: "video", title: "[영상] AI 영상 생성 완전정복 — Sora 2·Runway 4.5·Veo 3.1 비교", summary: "텍스트·이미지로 영상을 만드는 2025~2026 주요 모델(Sora 2·Runway 4.5·Veo 3.1·Nano Banana Pro)을 한 영상에서 비교·실습하는 종합 가이드.", url: "https://www.youtube.com/watch?v=Kib8UcDiNJA", source: "YouTube · AI Master", level: "중급" },
  { date: "2026-06-25", category: "video", title: "[영상] Claude Code 서브에이전트 입문 — 단계별 튜토리얼", summary: "전문 비서처럼 일을 위임받는 Claude Code 서브에이전트를 만들고 활용하는 법을 처음부터 따라하는 입문 튜토리얼.", url: "https://www.youtube.com/watch?v=MbKUeufUZIY", source: "YouTube · Thetips4you", level: "중급" },
  { date: "2026-06-25", category: "video", title: "[영상] Codex 입문 완전 가이드 2026 — 처음 쓰는 사람을 위한", summary: "OpenAI Codex 코딩 에이전트를 제로부터 다루는 2026년 초보자용 풀가이드. 설치·기본 사용·워크플로를 한 영상에 정리.", url: "https://www.youtube.com/watch?v=0TitiOk7hbI", source: "YouTube · Charlie Chang", level: "입문" },
  { date: "2026-06-25", category: "github", title: "punkpeye/awesome-mcp-servers — MCP 서버 대형 큐레이션", summary: "에이전트에 도구·데이터를 붙이는 Model Context Protocol(MCP) 서버를 한국어 포함 여러 언어로 정리한 인기 awesome 리스트(8만+ 스타).", url: "https://github.com/punkpeye/awesome-mcp-servers", source: "GitHub · punkpeye", level: "중급" },
  { date: "2026-06-25", category: "github", title: "modelcontextprotocol/servers — MCP 공식 레퍼런스 서버", summary: "Fetch·Filesystem·Git·Memory·Time 등 MCP 공식 레퍼런스 서버 구현 모음. MCP를 직접 붙여볼 때의 출발점.", url: "https://github.com/modelcontextprotocol/servers", source: "GitHub · Model Context Protocol", level: "중급" },
  { date: "2026-06-25", category: "tool", title: "Runway Gen-4.5 공개 — 텍스트→영상 최상위 성능 주장", summary: "Runway가 플래그십 영상 생성 모델 Gen-4.5를 공개. 모션 품질·프롬프트 충실도·이미지→영상을 끌어올렸다고 발표한 공식 리서치 페이지.", url: "https://runwayml.com/research/introducing-runway-gen-4.5", source: "Runway", level: "중급" },
  { date: "2026-06-25", category: "tool", title: "Anthropic, 개발자 플랫폼에 ‘고급 도구 사용’ 3종 베타 공개", summary: "도구가 많아도 에이전트가 효율적으로 고르도록 Tool Search·Programmatic Tool Calling·Tool Use Examples 세 기능을 베타로 공개한 Anthropic 공식 발표.", url: "https://www.anthropic.com/engineering/advanced-tool-use", source: "Anthropic", level: "고급" },
  { date: "2026-06-25", category: "news", title: "How Cursor Shipped its Coding Agent to Production — 코딩 에이전트 양산기", summary: "Cursor의 Composer 에이전트를 프로덕션에 올리기까지의 아키텍처(라우터·오케스트레이터·샌드박스)와 diff·지연·샌드박싱 과제를 풀어낸 엔지니어링 심층기.", url: "https://blog.bytebytego.com/p/how-cursor-shipped-its-coding-agent", source: "ByteByteGo", level: "고급" },
  { date: "2026-06-25", category: "paper", title: "[논문] A Survey of Vibe Coding with LLMs — 바이브코딩 1000편 총정리", summary: "1000편+ 논문으로 ‘바이브코딩’ 생태계를 정리하고, 제약 MDP로 형식화해 5가지 개발 모델(자율·대화·계획·테스트·컨텍스트)로 분류한 2025 서베이.", url: "https://arxiv.org/abs/2510.12399", source: "arXiv", level: "고급" },
  { date: "2026-06-25", category: "news", title: "[국내] 딥시크, ‘하네스’ 팀 조직 — AI 에이전트 시장 선점 가속", summary: "클로드 코드 같은 코딩 에이전트가 주목받으며 모델을 실제 업무 도구로 바꾸는 ‘하네스 아키텍처’가 새 경쟁 무대로. 딥시크가 전담팀을 꾸렸다는 국내 보도.", url: "https://www.aitimes.com/news/articleView.html?idxno=212059", source: "AI타임스", level: "중급" },
  { date: "2026-06-25", category: "news", title: "[국내] 패스트캠퍼스 바이브코딩 강의 매출 175%↑ — 커서·클로드 코드·코덱스 수요", summary: "데이원컴퍼니 패스트캠퍼스의 바이브코딩 강의 매출이 175% 증가. 커서·클로드 코드·코덱스 활용 교육 수요가 국내에서도 빠르게 늘고 있다는 신호.", url: "https://n.news.naver.com/mnews/article/029/0003033499?sid=105", source: "디지털타임스", level: "입문" },
  { date: "2026-06-24", category: "ops", title: "일일 운영 — 소식 11건 · 신규 갭(비전·이미지 읽기) · 보강(생성형 AI란?)", summary: "A) 실전·심화 소식 11건 — 영상3(Claude Code 입문 1시간 마스터·Codex 풀코스 2026·Claude Code 핵심 12기능) · GitHub2(wong2/awesome-mcp-servers·caramaschiHG/awesome-ai-agents-2026) · 해외 1차3(Anthropic Managed Agents 엔지니어링·OpenAI Codex 체인지로그·Google 에이전트 베이크오프 5팁) · 논문1(arXiv 2604.05172 ClawsBench) · 국내2(KT B2B AX ‘PoC 1000원’·AI타임스 ‘추론 투자’). 영상은 WebSearch 인덱싱, 해외·GitHub·논문은 web_fetch/WebSearch(Anthropic·arXiv 본문 확인), 국내는 NaverSearch 당일 pubDate로 실링크 검증. 06-21~06-23 자동분과 중복 제외. B) 백로그 pending-fix 없음. 신규 갭 usecases#vision(비전·이미지 읽기 — OCR·표 정리·화면/차트 이해·번역, ChatGPT/Claude/Gemini 공식문서 근거, 점수 100; usecases #12 삽입·personal/videos/recipe→13/14/15 재번호·TOC·main.js 동기화). 보강 start#what(‘1분만 해보기’ steps·예시 io·오해/실제 함정표·체크리스트·공식 링크 → 29→93). 채점 평균 57.0→58.3·중앙 57 유지(n 79→80, 0–39 15→14·80–100 11→13, 하락 섹션 0). B5 검토 에이전트: start#what PASS · usecases#vision FIX 1건 반영(‘무료 포함 모든 모델’ 과장→‘무료 플랜도 되나 하루 제한’ 수정, 영상도 이미지·스크린샷 전용으로 교체). HOLD/롤백 없음.", source: "운영봇", level: "입문" },
  { date: "2026-06-24", category: "video", title: "[영상] Claude Code 입문 1시간 마스터 — 스킬·서브에이전트·훅·MCP", summary: "설치부터 CLAUDE.md·스킬·서브에이전트·훅·MCP까지 Claude Code 핵심을 한 시간에 훑는 2026 입문 튜토리얼.", url: "https://www.youtube.com/watch?v=sX-FmJL7Wd0", source: "YouTube", level: "입문" },
  { date: "2026-06-24", category: "video", title: "[영상] Codex 풀코스 2026 — 새로 떠오른 최강 AI 코딩 도구", summary: "OpenAI Codex를 제로부터 다루는 풀코스. 터미널 CLI 기반 에이전틱 코딩 워크플로를 한 영상에 정리.", url: "https://www.youtube.com/watch?v=KXIdYEdOPys", source: "YouTube", level: "중급" },
  { date: "2026-06-24", category: "video", title: "[영상] 엔지니어가 알아야 할 Claude Code 핵심 12기능", summary: "서브에이전트·CLAUDE.md·체크포인트·MCP 등 실무에서 자주 쓰는 Claude Code 기능 12가지를 짚어주는 중급 영상.", url: "https://www.youtube.com/watch?v=E4fzxVMOav4", source: "YouTube", level: "중급" },
  { date: "2026-06-24", category: "github", title: "wong2/awesome-mcp-servers — MCP 서버 큐레이션", summary: "에이전트에 도구·데이터를 붙이는 Model Context Protocol(MCP) 서버를 한곳에 모은 대표 awesome 리스트.", url: "https://github.com/wong2/awesome-mcp-servers", source: "GitHub · wong2", level: "중급" },
  { date: "2026-06-24", category: "github", title: "awesome-ai-agents-2026 — AI 에이전트·프레임워크 총정리", summary: "2026년 AI 에이전트·프레임워크·도구 300여 개를 20개+ 카테고리로 매월 갱신하는 큐레이션 리스트.", url: "https://github.com/caramaschiHG/awesome-ai-agents-2026", source: "GitHub · caramaschiHG", level: "입문" },
  { date: "2026-06-24", category: "tool", title: "Anthropic 엔지니어링 — Managed Agents: ‘두뇌’와 ‘손’ 분리하기", summary: "장시간 에이전트를 위한 호스팅 서비스 설계기. 세션·하네스·샌드박스를 인터페이스로 분리해 모델이 발전해도 살아남는 구조와 TTFT 60% 단축을 공개.", url: "https://www.anthropic.com/engineering/managed-agents", source: "Anthropic Engineering", level: "고급" },
  { date: "2026-06-24", category: "tool", title: "OpenAI Codex 공식 체인지로그", summary: "Codex의 Goal 모드 정식화, 데스크톱 핸드오프, Agent Skills 호환 등 최신 업데이트를 한곳에서 추적하는 공식 변경 이력.", url: "https://developers.openai.com/codex/changelog", source: "OpenAI Developers", level: "중급" },
  { date: "2026-06-24", category: "news", title: "Google 개발자 블로그 — 에이전트 베이크오프에서 얻은 5가지 교훈", summary: "데모를 넘어 프로덕션으로 가려면 ‘갓 프롬프트’가 아니라 멀티에이전트 구조·상태 관리·결정론적 가드레일이 핵심이라는 구글 클라우드 경진대회 회고.", url: "https://developers.googleblog.com/build-better-ai-agents-5-developer-tips-from-the-agent-bake-off/", source: "Google Developers", level: "고급" },
  { date: "2026-06-24", category: "paper", title: "[논문] ClawsBench — 모의 워크스페이스에서 LLM 에이전트의 능력·안전성 평가", summary: "Gmail·Slack·캘린더 등 모의 서비스와 44개 과제로 모델·하네스를 비교. 스캐폴딩(하네스)이 성능을 크게 끌어올려 모델 차이를 압도함을 보인 2026 벤치마크.", url: "https://arxiv.org/abs/2604.05172", source: "arXiv", level: "고급" },
  { date: "2026-06-24", category: "news", title: "[국내] KT, B2B AX 승부수 — ‘PoC 1000원으로 1억 아낀다’", summary: "9개 코어 에이전트+3개 옵션 에이전트로 팀을 꾸려 토큰 비용 1000원대에 개념검증(PoC)을 끝내는 KT의 AX 전략. AI 도입 기업 62%가 파일럿에 정체된 가운데 2년 노하우로 차별화.", url: "https://n.news.naver.com/mnews/article/008/0005376177?sid=105", source: "머니투데이", level: "입문" },
  { date: "2026-06-24", category: "news", title: "[국내] ‘토큰 아끼지 마라’ — 새 AI 경쟁력은 ‘추론 투자’", summary: "AI 에이전트 확산·바이브코딩 일상화로 토큰 사용이 급증하는 가운데, 비용을 아끼기보다 추론에 투자하는 것이 경쟁력이라는 분석(클로드 코드 개발자 보리스 체르니 발언 인용).", url: "https://www.aitimes.com/news/articleView.html?idxno=212009", source: "AI타임스", level: "중급" },
  { date: "2026-06-23", category: "ops", title: "일일 운영 — 소식 13건 · 신규 갭(음성·오디오 AI) · 보강(프롬프트 해부도 5요소)", summary: "A) 실전·심화 위주 소식 13건 추가 — 영상3(Cowork 15분 정복·Claude Code로 100만달러 SaaS·궁극의 Claude Code 가이드) · GitHub3(awesome-agent-skills·awesome-claude-code-toolkit·microsoft/agent-framework) · 해외 1차3(OpenAI GPT-5.5·MS Agent Framework@BUILD 2026·OpenAI Codex 전직군 확장) · 기술블로그1(Anthropic 컨테인먼트 설계) · 논문1(arXiv 2604.00594 에이전트 사이코메트릭스) · 국내2(황민호 카카오 하네스 인터뷰·통신3사 AX). 전 항목 web_fetch/WebSearch·NaverSearch로 실링크 검증, 06-21·06-22 자동분과 중복 제외. B) 신규 갭 usecases#voice(음성·오디오 AI: 받아쓰기 STT·음성생성 TTS·ChatGPT 음성·NotebookLM, 점수 100 · 사이드바·TOC·main.js 동기화). 보강 prompting#anatomy(인라인 SVG 5요소 표·한 줄씩 조립 steps·약→강 예시·함정표·체크리스트·공식 링크 → 36→93). 백로그 pending-fix 없음. 채점 평균 56.0→57.2·중앙 50→57. 검토 에이전트 통과 후 배포.", source: "운영봇", level: "입문" },
  { date: "2026-06-23", category: "video", title: "[영상] Claude Cowork 15분 완전 정복 (2026 가이드)", summary: "Claude Code와 Cowork의 차이부터 outcome·context·format 3단계 프레임워크, 스킬·커넥터·플러그인까지 비개발자 실무 활용을 압축한 입문 영상.", url: "https://www.youtube.com/watch?v=PnPsf-hwGtI", source: "YouTube · Aishwarya Srinivasan", level: "입문" },
  { date: "2026-06-23", category: "video", title: "[영상] Claude Code로 연 매출 100만 달러 SaaS 만든 방법", summary: "Claude Code와 AI 에이전트로 실제 ARR 100만 달러 SaaS를 구축한 과정을 아이디어·가격·제품 루프까지 보여주는 인디해커 실전 사례.", url: "https://www.youtube.com/watch?v=K65vd9EYbDU", source: "YouTube · Nick Saraev", level: "중급" },
  { date: "2026-06-23", category: "video", title: "[영상] 궁극의 Claude Code 가이드 — MCP·스킬·서브에이전트", summary: "MCP 서버 연결·커스텀 스킬·서브에이전트·메모리까지 전문가 셋업을 시연하는 고급 Claude Code 워크플로 튜토리얼.", url: "https://www.youtube.com/watch?v=uogzSxOw4LU", source: "YouTube · Tech With Tim", level: "고급" },
  { date: "2026-06-23", category: "github", title: "heilcheng/awesome-agent-skills — 코딩 에이전트 스킬 큐레이션", summary: "Claude·Codex·Copilot·Antigravity 등 주요 코딩 에이전트의 Agent Skills를 한국어 포함 여러 언어로 정리한 큐레이션 리스트.", url: "https://github.com/heilcheng/awesome-agent-skills", source: "GitHub · heilcheng", level: "입문" },
  { date: "2026-06-23", category: "github", title: "rohitg00/awesome-claude-code-toolkit — Claude Code 종합 툴킷", summary: "에이전트·스킬·플러그인·MCP 설정까지 Claude Code 생태계를 한곳에 모은, 활발히 갱신되는 종합 툴킷 저장소.", url: "https://github.com/rohitg00/awesome-claude-code-toolkit", source: "GitHub · rohitg00", level: "중급" },
  { date: "2026-06-23", category: "github", title: "microsoft/agent-framework — 멀티에이전트 워크플로 SDK", summary: "AutoGen과 Semantic Kernel을 통합한 마이크로소프트의 프로덕션급 AI 에이전트·멀티에이전트 오케스트레이션 오픈소스 SDK(Python/.NET, MCP·관측성 내장).", url: "https://github.com/microsoft/agent-framework", source: "GitHub · Microsoft", level: "고급" },
  { date: "2026-06-23", category: "tool", title: "OpenAI, GPT-5.5 공개 — 에이전틱 코딩 SOTA", summary: "Terminal-Bench 2.0 82.7%로 에이전틱 코딩 최강 성능을 기록하고 토큰 효율까지 끌어올려 Codex·ChatGPT에 적용된 OpenAI 신규 플래그십 모델.", url: "https://openai.com/index/introducing-gpt-5-5/", source: "OpenAI", level: "중급" },
  { date: "2026-06-23", category: "news", title: "Microsoft, BUILD 2026서 'Agent Harness'·Hosted Agents 발표", summary: "셸·파일시스템 접근, 컨텍스트 자동 압축, 서브에이전트 위임을 기본 내장한 'Agent Harness'와 모델 호출을 줄이는 CodeAct를 공개한 MS 에이전트 프레임워크 업데이트.", url: "https://devblogs.microsoft.com/agent-framework/microsoft-agent-framework-at-build-2026-announce/", source: "Microsoft", level: "고급" },
  { date: "2026-06-23", category: "news", title: "OpenAI, '모든 역할·도구·워크플로를 위한 Codex' 발표", summary: "엔지니어링을 넘어 재무·마케팅·데이터 등 전 직무로 Codex 사용을 확장(컴퓨터 유즈·MCP 포함)하는 OpenAI의 통합 발표.", url: "https://openai.com/index/codex-for-every-role-tool-workflow/", source: "OpenAI", level: "중급" },
  { date: "2026-06-23", category: "news", title: "Anthropic 엔지니어링 — 제품 전반의 Claude '컨테인먼트' 설계", summary: "claude.ai·Claude Code·Cowork의 샌드박스·VM·이그레스 통제로 에이전트의 영향 범위(blast radius)를 봉쇄한 실패·교훈을 공유한 심층 엔지니어링 블로그.", url: "https://www.anthropic.com/engineering/how-we-contain-claude", source: "Anthropic Engineering", level: "고급" },
  { date: "2026-06-23", category: "paper", title: "[논문] Agent Psychometrics — 에이전틱 코딩 벤치마크의 과제별 성능 예측", summary: "항목반응이론(IRT)에 과제 특성을 결합해 'LLM 능력'과 '스캐폴드(하네스) 능력'을 분리, 비싼 평가 없이 코딩 과제 난이도를 예측하는 2026년 신규 프레임워크.", url: "https://arxiv.org/abs/2604.00594", source: "arXiv", level: "고급" },
  { date: "2026-06-23", category: "news", title: "[국내] 황민호 카카오 수석 \"AI 에이전트, 하네스로 '믿고 쓸 구조' 만들어야\"", summary: "바이브 코딩·멀티에이전트를 실무 시스템에 안착시키려면 모델 바깥에 권한·검증·관측을 설계하는 '하네스 엔지니어링'이 핵심이라는 카카오 AX 리더의 진단.", url: "https://it.chosun.com/news/articleView.html?idxno=2023092164290", source: "IT조선", level: "중급" },
  { date: "2026-06-23", category: "news", title: "[국내] AI 동료가 보고서에 코드 짜고 검증까지 — 통신3사 AX 바람", summary: "SKT 'A.비즈 코워크' 등 통신3사가 바이브 코딩과 AI 에이전트를 전사 표준 업무 도구로 도입하며 비개발자까지 코딩 워크플로에 합류하는 국내 동향.", url: "https://n.news.naver.com/mnews/article/277/0005779600?sid=105", source: "아시아경제", level: "입문" },
  { date: "2026-06-22", category: "ops", title: "주간 리뷰 — 최근 7일 피드 정상(갭 없음) · GPT-4o 표기 갱신 권장", summary: "점검(읽기전용): ① 최근 7일(06-16~06-22) 일일 업데이트 정상 누적 — 6·15·5·12·15·28·13건, 빈 날 없음, lastUpdated 2026-06-22. ② 갱신 권장 후보 — start.html(L797)·prompting.html(L821)의 'GPT-4o' 헤드라인 표기가 구식(OpenAI 기본 모델이 GPT-5.5/5.5 Instant로 교체됨, WebSearch 확인). 참고로 advanced.html 코드 예시는 claude-opus-4-8로 최신, chatgpt.html 가격(Plus $20·Pro $200·Team $25/인)도 현행과 일치. ③ 죽은 링크 후보 — 읽기전용 스캔에서 명백한 후보 없음(최신 항목은 이전 ops에서 실링크 검증 완료). ④ 권장 조치 — 다음 세션에서 GPT-4o→GPT-5.5(또는 모델 무관 표현)로 본문 2곳 수동 갱신. (자동 수정 없음)", source: "리뷰봇", level: "입문" },
  { date: "2026-06-22", category: "ops", title: "일일 운영 — 소식 12건 · 신규 갭(노코드 자동화) · 보강(백로그: 안전↔검증 중복 해소)", summary: "A) 실전·심화 위주 소식 12건 추가 — 영상3(다이내믹 워크플로·Cowork 풀튜토리얼·Cowork 자동화) · GitHub2(awesome-agent-skills·awesome-harness-engineering) · 해외 1차3(Anthropic Opus 4.8·OpenAI 하네스 엔지니어링·MS VS Code 1.124) · 기술블로그1(Faros) · 논문1(arXiv 2606.05608) · 국내2(클로드코드 40만건 분석·한국앤컴퍼니 해커톤). 전 항목 web_fetch로 실링크 검증, 기존분(arXiv 2603.05344 등) 중복 제외. B) 백로그 pending-fix 처리 — start#caution↔#verify 중복을 ‘범위 분리’(caution=안전·금지, verify=팩트체크·저작권)+상호 링크로 해소(검토 PASS, 백로그 제거). 신규 갭 advanced#nocode(노코드 자동화 Zapier·Make·n8n, 점수 100). 채점 평균 59.0→60.3·중앙 50→57, caution 36→93. 검토 에이전트 3섹션 PASS(영상 설명 1건 경미 보정).", source: "운영봇", level: "입문" },
  { date: "2026-06-22", category: "news", title: "[국내] 클로드 코드 사용기록 40만건 분석 — 비개발 직군으로 빠르게 확산", summary: "앤트로픽이 23만5천 명·40만 세션을 분석. 경영·금융·법률 등 비개발 직군 사용이 늘고, 코드 수정 비중은 줄고 문서·데이터 분석이 증가. 숙련도가 높을수록 성공률도 높았다는 데이터.", url: "https://www.digitaltoday.co.kr/news/articleView.html?idxno=676097", source: "디지털투데이", level: "입문" },
  { date: "2026-06-22", category: "news", title: "[국내] 한국앤컴퍼니그룹 ‘AI 바이브코딩 해커톤 2026’ 개최", summary: "임직원 30개 팀이 생성형 AI로 실제 업무용 프로토타입을 직접 제작. 국내 대기업 현장에서 바이브코딩이 업무 도구로 자리잡는 흐름을 보여주는 사례.", url: "https://www.hankyung.com/article/202606168448P", source: "한국경제", level: "입문" },
  { date: "2026-06-22", category: "tool", title: "앤트로픽, Claude Opus 4.8 공개 — 효율(effort) 조절·다이내믹 워크플로 동시 출시", summary: "코딩·에이전트·장시간 작업 일관성을 높인 Opus 4.8. claude.ai·Cowork의 ‘노력 조절’, Claude Code의 ‘다이내믹 워크플로’(한 세션에서 수백 개 서브에이전트 병렬)도 함께 공개.", url: "https://www.anthropic.com/news/claude-opus-4-8", source: "Anthropic", level: "중급" },
  { date: "2026-06-22", category: "news", title: "OpenAI ‘Harness Engineering’ — 손코딩 0줄로 100만 줄을 출시한 5개월 실험", summary: "엔지니어 3~7명이 모든 코드를 Codex에 맡겨 100만 줄·약 1500 PR을 만든 1차 회고. ‘사람은 조종, 에이전트는 실행’을 위한 환경·문서·피드백 루프 설계법을 공개.", url: "https://openai.com/index/harness-engineering/", source: "OpenAI", level: "고급" },
  { date: "2026-06-22", category: "tool", title: "VS Code 1.124 — Advanced Autopilot 기본 활성화·Agent 세션 강화", summary: "에이전트가 완료 시점을 스스로 판단하는 Autopilot, 백그라운드 세션·세션 내비게이션, MCP 강화 등 멀티 에이전트 코딩 UX를 다듬은 공식 릴리스 노트.", url: "https://code.visualstudio.com/updates/v1_124", source: "Microsoft · VS Code", level: "중급" },
  { date: "2026-06-22", category: "news", title: "Faros AI — ‘하니스 엔지니어링’이 2026년 코딩 에이전트를 작동시키는 이유", summary: "‘Agent = Model + Harness’ 프레임으로 프로덕션 하니스의 레이어와 측정 지표(머지 PR당 비용·생존율 등)를 정리한 실무 기술블로그.", url: "https://www.faros.ai/blog/harness-engineering", source: "Faros AI", level: "고급" },
  { date: "2026-06-22", category: "paper", title: "[논문] The End of Software Engineering — AI 에이전트가 소프트웨어 패러다임을 재편한다", summary: "LLM을 핵심 추론 엔진으로 삼는 AI 에이전트가 소프트웨어 개발 방식을 근본적으로 재구성한다고 주장하는 1차 원리 분석 논문(2026-06).", url: "https://arxiv.org/abs/2606.05608", source: "arXiv", level: "고급" },
  { date: "2026-06-22", category: "github", title: "VoltAgent/awesome-agent-skills — 1000+ 에이전트 스킬 큐레이션", summary: "Anthropic·Vercel·Stripe 등 공식·커뮤니티 스킬 1000여 개를 Claude Code·Codex·Gemini CLI·Cursor 호환으로 모은 저장소. 스킬 생태계 진입점.", url: "https://github.com/VoltAgent/awesome-agent-skills", source: "GitHub · VoltAgent", level: "중급" },
  { date: "2026-06-22", category: "github", title: "awesome-harness-engineering — 에이전트 하니스 설계 자료 모음", summary: "도구·패턴·평가·메모리·MCP·권한·관측성·오케스트레이션 등 하니스 엔지니어링 자료를 한곳에 모은 큐레이션. 하니스 설계를 빠르게 학습하기 좋다.", url: "https://github.com/ai-boost/awesome-harness-engineering", source: "GitHub · ai-boost", level: "고급" },
  { date: "2026-06-22", category: "video", title: "[영상] Claude Code 다이내믹 워크플로 — 강력하지만 비싸다(최대 1000 에이전트)", summary: "Opus 4.8의 다이내믹 워크플로/ultracode를 실제 리서치로 돌려 서브에이전트·스킬과의 차이, 비용, 세션 한도까지 라이브로 보여주는 실전 데모.", url: "https://www.youtube.com/watch?v=iJHJaTOwggs", source: "YouTube · CloudYeti", level: "중급" },
  { date: "2026-06-22", category: "video", title: "[영상] Claude Cowork 풀 튜토리얼 2026 (Zero to PRO)", summary: "Cowork의 서브에이전트·라이브 아티팩트·커넥터(Gmail)·스킬·프로젝트·스케줄 작업까지 40분 풀코스. 데스크톱 에이전트 워크플로를 처음부터 잡아준다.", url: "https://www.youtube.com/watch?v=JdQ_FHgP5ms", source: "YouTube · AI Foundations", level: "입문" },
  { date: "2026-06-22", category: "video", title: "[영상] Claude Cowork 워크플로 자동화 가이드 2026", summary: "회의록→프로젝트 트래커·후속 메일, 리서치→Word 리포트, 커스텀 스킬, 매일 아침 스케줄 작업 등 실제 업무 자동화로 ‘AI 직원’ 세팅법을 보여준다.", url: "https://www.youtube.com/watch?v=SNo_recKZyY", source: "YouTube · AI Master", level: "중급" },
  { date: "2026-06-21", category: "ops", title: "일일 운영(자가개선 루프 테스트) — 소식 8건 · 신규 갭 1 · 보강 1", summary: "자가개선 루프 1회 테스트. A) 해외 1차·영상·GitHub·논문 8건을 검증해 추가(국내분과 별개). B) 점수 스크립트로 채점 후 갭 1개(이미지 생성 → usecases#imagegen 신규)와 점수 하위 1개(advanced#function 보강)를 골든 템플릿+공식문서 출처로 작성하고 재채점으로 회귀를 점검. 같은 날 국내 11건·수동 테스트분과 중복 제외. A 항목은 서브에이전트 web_fetch 검증 + 핵심 4건 WebSearch 교차확인.", source: "운영봇", level: "입문" },
  { date: "2026-06-21", category: "video", title: "[영상] Claude Code 서브에이전트, 99%보다 잘 만드는 법", summary: "메인 컨텍스트를 깨끗이 유지하면서 전문 서브에이전트에게 작업을 위임하는 설계법을 단계별로 보여주는 실전 영상.", url: "https://www.youtube.com/watch?v=e18sdZLwP7o", source: "YouTube · Nate Herk | AI Automation", level: "중급" },
  { date: "2026-06-21", category: "video", title: "[영상] Claude Code·Codex·Cursor로 멀티 에이전트 바이브 코딩", summary: "세 코딩 에이전트를 한 워크플로에서 함께 돌려 계획·편집·테스트·배포를 분담시키는 멀티 에이전트 데모.", url: "https://www.youtube.com/watch?v=8OX_ZjQTu34", source: "YouTube · Vibecademy", level: "중급" },
  { date: "2026-06-21", category: "video", title: "[영상] Codex vs Claude Code vs Cursor vs Antigravity 솔직 비교", summary: "주요 코딩 에이전트 네 종을 여러 기준으로 직접 비교해 작업별로 어떤 도구가 맞는지 가늠하게 해주는 리뷰.", url: "https://www.youtube.com/watch?v=3dj9m90tbY8", source: "YouTube · Build Great Products", level: "입문" },
  { date: "2026-06-21", category: "github", title: "best-of-mcp-servers — 매주 갱신되는 MCP 서버 랭킹", summary: "쏟아지는 MCP 서버 중 무엇을 쓸지 고를 때 출발점이 되는, 품질 점수로 순위를 매겨 주간 갱신되는 큐레이션.", url: "https://github.com/tolkonepiu/best-of-mcp-servers", source: "GitHub · tolkonepiu", level: "입문" },
  { date: "2026-06-21", category: "github", title: "awesome-ai-agents-2026 — AI 에이전트·프레임워크·도구 종합 목록", summary: "AI 에이전트·프레임워크·도구 300여 개를 20여 카테고리로 정리한, 2026년 생태계를 한눈에 훑기 좋은 목록.", url: "https://github.com/caramaschiHG/awesome-ai-agents-2026", source: "GitHub · caramaschiHG", level: "입문" },
  { date: "2026-06-21", category: "paper", title: "신규 GitHub 프로젝트의 코딩 에이전트 도입 실태 연구", summary: "새로 만들어진 GitHub 프로젝트를 분석해 코딩 에이전트 도입과 AI 작성 커밋 비중이 빠르게 늘고 있음을 보고한 논문.", url: "https://arxiv.org/abs/2606.07448", source: "arXiv", level: "고급" },
  { date: "2026-06-21", category: "news", title: "GitHub Copilot, 작업에 맞는 도구를 스스로 찾는 ‘에이전트 파인더’ 출시", summary: "MCP·스킬·도구를 일일이 연결하는 대신, 자연어로 작업을 설명하면 Copilot이 알맞은 리소스를 검색·추천(개방형 ARD 규격).", url: "https://github.blog/changelog/2026-06-17-agent-finder-for-github-copilot-now-available/", source: "GitHub", level: "중급" },
  { date: "2026-06-21", category: "tool", title: "GitHub Copilot SDK 정식 출시 — 내 앱에 에이전트 엔진 내장", summary: "Copilot의 에이전트 런타임(계획·도구 호출·파일 편집·스트리밍)을 6개 언어 SDK로 직접 임베드. 자체 오케스트레이션 불필요.", url: "https://github.blog/changelog/2026-06-02-copilot-sdk-is-now-generally-available/", source: "GitHub", level: "중급" },
  { date: "2026-06-21", category: "ops", title: "일일 운영 — 소식 11건(국내·검증) + 개발자가이드 0건(도구 제약 보류)", summary: "이번 회차는 WebSearch 전면 불가·web_fetch 도메인 제약으로 해외 1차·유튜브·GitHub·논문 링크를 실재 검증할 수 없어, 추정·날조 금지 원칙에 따라 NaverSearch 인덱스로 실재 확인된 국내 기술·실전 소식 11건만 추가했다. 주제: Claude Code 아티팩트, Codex 목표 모드·하네스 설계, MCP 게이트웨이·에이전트 보안, 카카오 MCP 공모전, 중국 코딩모델 경쟁, 금융 바이브코딩 보안, 토큰=생산성 지표, 크래프톤·넥슨 AX 등. 같은 날 수동 테스트분(Codex 시작 영상·awesome-ai-agent-papers·루프 설계·네이버 도입·머스크 Cursor·비바테크)과 중복 제외. 개발자가이드 보강(B)은 유튜브·1차 출처 검증 불가로 이번 회차 보류.", source: "운영봇", level: "입문" },
  { date: "2026-06-21", category: "tool", title: "[국내] 앤트로픽, 클로드 코드에 ‘아티팩트’ 도입 — 작업 산출물 실시간 공유", summary: "Claude Code가 생성하는 코드·다이어그램·문서를 실시간으로 시각화하고 팀원과 공유하는 ‘아티팩트’ 기능이 추가됐다. 개발 과정을 함께 보며 리뷰·협업 속도를 높이는 용도.", url: "https://www.aitimes.com/news/articleView.html?idxno=211911", source: "AI타임스", level: "중급" },
  { date: "2026-06-21", category: "news", title: "[국내] 오픈AI “에이전틱 시대, 목표·하네스 설계가 관건” — Codex 목표 모드", summary: "오픈AI 스타트업 총괄이 ‘에이전틱 대리(Agentic Delegation)’ 단계를 강조하며 목표·제약·완료 기준을 짜는 하네스 설계의 중요성을 설명. Codex 목표 모드(Goal Mode)로 장시간 자율 작업을 위임하는 흐름.", url: "https://n.news.naver.com/mnews/article/138/0002231340?sid=105", source: "디지털데일리", level: "중급" },
  { date: "2026-06-21", category: "news", title: "[국내] 업비트·빗썸, AI 에이전트 거래 지원 — ‘스킬’로 시세조회·주문", summary: "클로드 코드·커서·코덱스 같은 에이전트가 ‘스킬’로 시세 조회·잔고·주문·입출금을 수행하는 실거래 연동 사례. 코딩 없이 자동매매 환경을 구성하는 MCP·스킬 실전 활용을 보여준다.", url: "https://it.donga.com/109058/", source: "IT동아", level: "중급" },
  { date: "2026-06-21", category: "news", title: "[국내] 모니터랩 “AI 에이전트–MCP 서버 사이 ‘MCP 게이트웨이’ 둬야”", summary: "에이전트와 MCP 서버 사이에 게이트웨이를 배치해 권한·인증·접속을 통제하라는 제언. MCP를 실서비스에 붙일 때 필요한 보안·거버넌스 패턴의 구체적 사례.", url: "https://byline.network/?p=9004111222608198", source: "바이라인네트워크", level: "고급" },
  { date: "2026-06-21", category: "news", title: "[국내] MS “기존 보안 프레임은 에이전트에 안 통한다” — 프롬프트 인젝션·MCP 위험", summary: "에이전트 계층의 위협으로 프롬프트 인젝션·의도 위반·안전하지 않은 MCP 서버 연동·데이터 과다 공유를 지목하고, 에이전트/앱·플랫폼·모델 3계층 방어 모델을 제시.", url: "https://byline.network/?p=9004111222608163", source: "바이라인네트워크", level: "고급" },
  { date: "2026-06-21", category: "news", title: "[국내] 카카오 ‘AGENTIC PLAYER 10’ — 직접 만든 MCP 서버를 카카오툴즈에 연동", summary: "참가자가 직접 개발한 MCP 서버를 등록하고, 본선 진출 시 카카오톡 이용자에게 ‘Kakao Tools’ 연동 서비스로 선보이는 공모전. 내가 만든 MCP 서버를 실사용자에게 배포해볼 기회.", url: "https://n.news.naver.com/mnews/article/029/0003032316?sid=105", source: "디지털타임스", level: "입문" },
  { date: "2026-06-21", category: "news", title: "[국내] 중국 코딩모델 경쟁 가속 — 문샷 ‘Kimi K2.7 Code’ 등 조 단위 파라미터", summary: "문샷이 MoE 기반 1조1000억 파라미터 코딩 모델 ‘Kimi K2.7 Code’를 공개하는 등 중국발 코딩 특화 모델 경쟁이 격화. 클로드 코드·오픈클로 등 에이전트와 맞물려 모델 대형화가 진행.", url: "https://www.digitaltoday.co.kr/news/articleView.html?idxno=676846", source: "디지털투데이", level: "중급" },
  { date: "2026-06-21", category: "news", title: "[국내] 금융권, ‘바이브코딩’ 확산이 새 보안 부담 — 업무정보 입력 주의", summary: "자연어로 코드를 만드는 바이브코딩과 AI 에이전트 도입이 새로운 보안 리스크로 부상. 민감 업무정보 입력·에이전트 권한 관리 등 현장 주의점을 정리.", url: "https://weekly.hankooki.com/news/articleView.html?idxno=7170524", source: "주간한국", level: "입문" },
  { date: "2026-06-21", category: "news", title: "[국내] “토큰이 곧 생산성” — 실리콘밸리, 직원 토큰 사용량을 지표로", summary: "에이전틱 AI 확산으로 토큰 사용량이 급증하면서 일부 기업이 직원 토큰 사용량을 생산성 지표로 보는 문화까지 등장. 에이전트 운영의 비용·성과 관점을 보여준다.", url: "https://www.pointdaily.co.kr/news/articleView.html?idxno=308939", source: "포인트데일리", level: "중급" },
  { date: "2026-06-21", category: "news", title: "[국내] 크래프톤·넥슨 AX 가속 — 비개발 직원도 Codex·Claude Code 활용", summary: "크래프톤이 사내 ‘플레이그라운드’를 구축해 코딩 경험 없는 직원도 Codex·Claude Code로 일정·이메일 업무를 자동화. 게임업계의 전사적 AI 전환(AX) 실전 사례.", url: "http://www.thebigdata.co.kr/view.php?ud=2026061816021496630a47484cf8_23", source: "빅데이터뉴스", level: "입문" },
  { date: "2026-06-21", category: "tool", title: "[국내] MS ‘코파일럿 코워크’ 전 세계 정식 출시 — 에이전틱 시스템 제품화", summary: "복잡하고 장시간 걸리는 업무를 자율 수행하는 에이전틱 시스템 ‘코파일럿 코워크’가 정식 출시. 에이전트가 위임받아 다단계 작업을 끝까지 처리하는 흐름이 제품화됐다.", url: "https://www.ebn.co.kr/news/articleView.html?idxno=1713081", source: "EBN", level: "입문" },
  { date: "2026-06-21", category: "ops", title: "일일 운영 — 소식 6건 + 개발자가이드 1건(서브에이전트)", summary: "수동 테스트 실행. 유튜브·국내매체·GitHub에서 검증된 6건 추가, 개발자 가이드(dev.html)에 '서브에이전트' 섹션 신규(출처: Thetips4you 영상 + Claude Code 공식 docs). 6/20에 이미 있던 항목(서브에이전트 입문 영상·터미널 코딩 에이전트 논문)은 중복 제외.", source: "운영봇", level: "입문" },
  { date: "2026-06-21", category: "video", title: "[영상] OpenAI Codex 시작하기 — 설치·Agents.md·MCP·헤드리스+SDK (OpenAI 공식)", summary: "OpenAI 공식 채널의 Codex 온보딩 워크스루. CLI·VS Code 설치부터 Agents.md 작성 패턴, MCP 설정, 헤드리스 모드·SDK까지 챕터별 정리. 코딩 에이전트 처음이라면 출발점.", url: "https://www.youtube.com/watch?v=px7XlbYgk7I", source: "YouTube · OpenAI", level: "중급" },
  { date: "2026-06-21", category: "github", title: "GitHub: awesome-ai-agent-papers — 2026 AI 에이전트 논문 큐레이션(주간 갱신)", summary: "에이전트 엔지니어링·메모리·평가·워크플로·자율시스템 등 2026년 이후 발표된 AI 에이전트 논문을 카테고리별로 모은 큐레이션. arXiv에서 주간 업데이트되어 연구 흐름을 따라잡기 좋다.", url: "https://github.com/VoltAgent/awesome-ai-agent-papers", source: "GitHub · VoltAgent", level: "고급" },
  { date: "2026-06-21", category: "news", title: "[국내] AI 코딩 실무 변화 — '직접 지시'보다 '루프 설계'가 뜬다", summary: "코딩 에이전트에 매번 프롬프트를 직접 쓰기보다, 에이전트가 스스로 도는 '루프'를 설계하는 방식으로 실무가 이동 중. 기획·검증 기준을 사람이 잡고 실행을 위임하는 흐름.", url: "https://www.digitaltoday.co.kr/news/articleView.html?idxno=676903", source: "디지털투데이", level: "중급" },
  { date: "2026-06-21", category: "news", title: "[국내] 네이버, 전 엔지니어링 조직에 '클로드 코드' 도입 — 아시아 최대급 사례", summary: "네이버가 엔지니어링 조직 전반에 Claude Code를 도입(아시아 최대 규모 엔터프라이즈 도입 중 하나). 넥슨도 라이브 게임 코드 작성·검토·배포에 활용. 도구별 포지셔닝 비교 기사.", url: "https://n.news.naver.com/mnews/article/018/0006310680?sid=105", source: "이데일리", level: "입문" },
  { date: "2026-06-21", category: "news", title: "[국내] 비바테크 2026 — 'AI 경쟁 승부처는 모델 아닌 운영', Codex 사용량 1년새 9배", summary: "모델 성능 경쟁을 넘어 '운영·도입'이 승부처라는 진단. 코딩 에이전트 Codex 사용량이 1년 새 9배 증가했고 비개발 직군에서 가장 빠르게 확산 중이라는 현장 리포트.", url: "https://www.venturesquare.net/1092497/", source: "벤처스퀘어", level: "입문" },
  { date: "2026-06-21", category: "news", title: "[국내] 머스크 xAI, '커서' 모회사 애니스피어 92조 원에 인수 추진", summary: "자율 코딩 에이전트 '커서(Cursor)'의 모회사 애니스피어를 약 600억 달러(92조 원) 규모로 인수한다는 발표. 코딩 에이전트가 AI 경쟁의 핵심 자산으로 부상했음을 보여주는 빅딜.", url: "https://n.news.naver.com/mnews/article/011/0004633187?sid=105", source: "서울경제", level: "입문" },
  {
    date: "2026-06-20",
    category: "ops",
    title: "일일 운영 — 소식 14건·영상 3건 추가",
    summary: "오늘 14건 추가(해외 1차 4·엔지니어링블로그 1·논문 1·GitHub 2·영상 3·커뮤니티 1·국내 2). 주제 분포: Claude Code 지시체계(Anthropic), Codex Goal/플러그인, Gemini→Antigravity CLI 통합, 대형 코드베이스 에이전틱 코딩(Sourcegraph), 터미널 코딩에이전트 논문, Packt 실습리포·awesome-ai-agents, 한국어 입문 23팁·서브에이전트·첫 워크플로 영상, HN 온디바이스 에이전트, 국내 하네스 엔지니어링 컨퍼런스·실전 바이브코딩 교육. 해외·영상·GitHub·논문 링크는 web_fetch 실재 확인, 국내는 Naver 뉴스 인덱스로 확인. 죽은 링크 없어 제외 항목 없음.",
    source: "운영봇",
    level: "입문"
  },
  {
    date: "2026-06-20",
    category: "tool",
    title: "앤트로픽, Claude Code '지시 7가지 방법' 총정리 — CLAUDE.md·스킬·서브에이전트·훅 비교",
    summary: "Claude Code 동작을 제어하는 7가지 수단(CLAUDE.md·rules·skills·subagents·hooks·output style·system prompt append)을 '언제 로드되는지·compaction 동작·컨텍스트 비용·용도' 표로 정리. 절차는 스킬, 강제 규칙은 훅/permissions, 격리 작업은 서브에이전트로 분리하라는 실전 컨텍스트 엔지니어링 가이드.",
    url: "https://claude.com/blog/steering-claude-code-skills-hooks-rules-subagents-and-more",
    source: "Anthropic (Claude Blog)",
    level: "중급"
  },
  {
    date: "2026-06-20",
    category: "tool",
    title: "OpenAI Codex 체인지로그 — Goal 모드 기본 탑재·플러그인 마켓플레이스 강화",
    summary: "Codex CLI v0.133에서 Goal 모드가 기본 활성화되어 수 시간~수일짜리 목표를 자율 추적·수행. 플러그인 마켓플레이스가 --json·버전 인식 공유·기본 프롬프트/원격 MCP 노출로 강화되고 모바일에서도 /goal 생성·관리 지원. '바이브코딩으로 장기 작업 자동화'에 직접 쓰이는 신기능.",
    url: "https://developers.openai.com/codex/changelog",
    source: "OpenAI Developers",
    level: "중급"
  },
  {
    date: "2026-06-20",
    category: "news",
    title: "구글, Gemini CLI를 'Antigravity CLI'로 통합 — 6/18 개인용 종료",
    summary: "멀티에이전트 시대에 맞춰 Gemini CLI를 Go 기반 Antigravity CLI로 흡수. Agent Skills·Hooks·Subagents·확장(플러그인)은 유지하고 백그라운드 비동기 멀티에이전트와 통합 하네스를 제공. 개인(AI Pro/Ultra·무료) Gemini CLI는 6/18 요청 처리 종료, 엔터프라이즈는 유지.",
    url: "https://developers.googleblog.com/an-important-update-transitioning-gemini-cli-to-antigravity-cli",
    source: "Google Developers Blog",
    level: "중급"
  },
  {
    date: "2026-06-20",
    category: "news",
    title: "Sourcegraph — '대형 코드베이스' 에이전틱 코딩 실전 가이드",
    summary: "바이브코딩(태도)과 에이전틱 코딩(아키텍처)을 구분하고 에이전트 루프(프롬프트→컨텍스트 수집→계획→실행→테스트→리파인)를 설명. 대규모 코드에서 에이전트가 '보이는 80%'만 처리하고 크로스리포·미들웨어 등 '숨은 20%'를 놓치는 문제와, 결정론적 코드검색·MCP로 컨텍스트를 채우는 처방을 제시.",
    url: "https://sourcegraph.com/blog/agentic-coding",
    source: "Sourcegraph",
    level: "중급"
  },
  {
    date: "2026-06-20",
    category: "news",
    title: "구글·캐글, 5일 'AI 에이전트 바이브코딩' 무료 집중과정 (6/15~19)",
    summary: "자연어를 주 프로그래밍 인터페이스로 삼는 바이브코딩 워크플로로 도구·API를 연결해 '10x 에이전트'를 만드는 실습 중심 무료 과정. 개념 심화+핸즈온+캡스톤으로 프로덕션급 에이전트 설계·배포까지 다룸(1차 과정 150만+ 수강).",
    url: "https://blog.google/innovation-and-ai/technology/developers-tools/kaggle-genai-intensive-course-vibe-coding-june-2026/",
    source: "Google (The Keyword)",
    level: "입문"
  },
  {
    date: "2026-06-20",
    category: "github",
    title: "GitHub: 'Agentic Coding with Claude Code' 실습 리포 (Eden Marco)",
    summary: "컨텍스트 엔지니어링→슬래시 명령·메모리 파일·훅→MCP 서버/플러그인→서브에이전트 다중에이전트 오케스트레이션→출력 스타일·스킬까지 장별 예제 코드. Next.js 프로젝트에 에이전틱 워크플로를 붙이는 '따라 하는' 책 부속 코드.",
    url: "https://github.com/PacktPublishing/Agentic-Coding-with-Claude-Code",
    source: "GitHub (PacktPublishing)",
    level: "중급"
  },
  {
    date: "2026-06-20",
    category: "github",
    title: "GitHub: awesome-ai-agents-2026 — 300+ 에이전트·프레임워크·MCP 큐레이션",
    summary: "코딩·리서치·음성·엔터프라이즈 등 20+ 카테고리로 2026년 AI 에이전트/프레임워크/MCP 도구를 매월 갱신해 모은 목록. 에이전트 스택을 빠르게 훑고 비교·선정할 때 유용한 레퍼런스.",
    url: "https://github.com/caramaschiHG/awesome-ai-agents-2026",
    source: "GitHub (caramaschiHG)",
    level: "입문"
  },
  {
    date: "2026-06-20",
    category: "paper",
    title: "논문: '터미널용 AI 코딩 에이전트 만들기 — 스캐폴딩·하네스·컨텍스트 엔지니어링'",
    summary: "CLI 코딩 에이전트의 하네스 설계, 컨텍스트 엔지니어링, 도구 사용 루프와 실전 교훈을 정리. Claude Code·Codex류 터미널 에이전트가 왜 그렇게 동작하는지 원리를 파고들고 싶은 독자에게 적합.",
    url: "https://arxiv.org/abs/2603.05344",
    source: "arXiv",
    level: "고급"
  },
  {
    date: "2026-06-20",
    category: "video",
    title: "[영상] Claude Code 왕초보 입문 23가지 팁 (설치~Plan모드~Worktree, 48분·한국어)",
    summary: "설치·/init·CLAUDE.md부터 Plan 모드, /context 토큰 관리, HANDOFF.md, 커스텀 명령어, Git Worktrees 병렬 작업까지 레벨별 23개 팁을 한 번에. 비개발자도 따라 할 수 있는 한국어 종합 강의.",
    url: "https://www.youtube.com/watch?v=1_bRmkUvjHA",
    source: "YouTube (AI싱크클럽)",
    level: "입문"
  },
  {
    date: "2026-06-20",
    category: "video",
    title: "[영상] Claude Code 서브에이전트 입문 — 코드리뷰어+디버거+테스트작성 팀 구성",
    summary: "/agents 명령과 .md 파일로 서브에이전트를 만들고 도구 접근·모델·메모리를 제어하는 법을 단계별로. 파이썬 프로젝트에서 코드리뷰어·디버거·테스트작성 에이전트를 한 팀으로 돌리는 라이브 데모 포함(26분).",
    url: "https://www.youtube.com/watch?v=MbKUeufUZIY",
    source: "YouTube (Thetips4you)",
    level: "중급"
  },
  {
    date: "2026-06-20",
    category: "video",
    title: "[영상] 0에서 첫 에이전틱 AI 워크플로까지 26분 (Claude Code)",
    summary: "에이전틱 워크플로의 개념부터 실제 구축, 10배 빠르게 만드는 법까지 압축한 핸즈온 튜토리얼. 처음 에이전트 워크플로를 짜보는 사람에게 좋은 출발점.",
    url: "https://www.youtube.com/watch?v=tDGiWn0flK8",
    source: "YouTube (Nate Herk)",
    level: "입문"
  },
  {
    date: "2026-06-20",
    category: "community",
    title: "[커뮤니티] HN: '2026은 온디바이스 에이전트의 해' — 에이전트 메모리를 OS처럼",
    summary: "에이전트의 약점은 모델 품질이 아니라 상태(메모리) 관리라는 주장. 저장/압축/승격/소멸/삭제를 OS처럼 다루고, 요약·태깅 등 반복 작업은 소형 로컬 모델로, 무거운 추론만 대형 모델로 분리하자는 엣지 우선 아키텍처 제안.",
    url: "https://news.ycombinator.com/item?id=46471524",
    source: "Hacker News",
    level: "중급"
  },
  {
    date: "2026-06-20",
    category: "news",
    title: "[국내] '클로드 코드·하네스 엔지니어링·AI 거버넌스' — 7월 AI 네이티브 실무 컨퍼런스",
    summary: "Claude Code 바이브코딩, 엔터프라이즈 AI 토큰 거버넌스, 하네스 엔지니어링 실습, 업무 자동화·AI UX 설계 등 현업 즉시 적용형 세션 구성. 국내에서도 '하네스 엔지니어링'이 실무 키워드로 떠올랐음을 보여줌.",
    url: "https://n.news.naver.com/mnews/article/030/0003438913?sid=105",
    source: "전자신문",
    level: "중급"
  },
  {
    date: "2026-06-20",
    category: "news",
    title: "[국내] 알파코, '클로드 활용 실전 바이브코딩' 업무자동화 실무 과정 개설",
    summary: "생성형 AI 도구 클로드로 업무 자동화와 코드 작성을 익히는 실무 중심 교육. 개발 경험이 없는 재직자도 바이브코딩으로 자동화 결과물을 만들도록 설계해, 비개발 직군의 에이전틱 도구 도입 흐름을 보여줌.",
    url: "https://n.news.naver.com/mnews/article/008/0005374568?sid=101",
    source: "머니투데이",
    level: "입문"
  },
  {
    date: "2026-06-19",
    category: "ops",
    title: "일일 운영 — 소식 11건·영상 2건 추가",
    summary: "오늘 11건 추가(해외 1차 4·논문 1·GitHub 2·국내 2·영상 2). 출처 분포: Anthropic(서울 오피스 개소·Claude Corps), OpenAI(배포 시뮬레이션 연구·파트너 네트워크), Hugging Face(ARIS #1 논문), OSSInsight·VoltAgent(GitHub), 국내 KAIST RAG·통신 에이전틱AI, YouTube 2. 해외·논문·GitHub·영상 링크는 web_fetch로 실재 확인, 국내는 Naver 뉴스 인덱스로 확인. 명백한 죽은 링크 없어 제외 항목 없음.",
    source: "운영봇",
    level: "입문"
  },
  {
    date: "2026-06-19",
    category: "news",
    title: "앤트로픽, 서울 오피스 개소…네이버·넥슨·삼성SDS 등 한국 생태계 파트너십 발표",
    summary: "앤트로픽이 서울에 사무소를 열고 한국 기업·연구 파트너십을 공개. 네이버는 엔지니어링 조직 전반에 Claude Code를 배포, 넥슨은 라이브 게임 코드 작성·리뷰에 활용, 삼성SDS는 Claude Cowork·Code를 임직원에 도입. KAIST·고려대·연세대·POSTECH 컨소시엄(NAIRL) 연구 지원도 포함.",
    url: "https://www.anthropic.com/news/seoul-office-partnerships-korean-ai-ecosystem",
    source: "Anthropic",
    level: "중급"
  },
  {
    date: "2026-06-19",
    category: "news",
    title: "OpenAI, '배포 시뮬레이션'으로 출시 전 모델 행동 예측",
    summary: "과거 대화를 프라이버시 보존 방식으로 재샘플링해 신규 모델의 응답을 미리 평가하는 기법. GPT-5 계열 약 130만 대화 분석으로 미정렬 행동 빈도를 예측(중앙값 오차 1.5배), 출시 전 'calculator hacking'을 사전 포착하고 모델의 '평가 인지'도 크게 낮춤. 에이전트(도구 사용) 환경까지 확장.",
    url: "https://openai.com/index/deployment-simulation/",
    source: "OpenAI",
    level: "고급"
  },
  {
    date: "2026-06-19",
    category: "news",
    title: "OpenAI 파트너 네트워크 출범…$1.5억 투자·인증 컨설턴트 30만 명 목표",
    summary: "엔터프라이즈 AI 도입을 가속하기 위한 글로벌 파트너 프로그램. Select·Advanced·Elite 3단계 티어와 Codex·사이버보안·에이전트 전문화(specialization)를 제공하고, 복잡한 배포를 위한 Forward Deployed Experts 파일럿도 운영. 2026년 말까지 인증 컨설턴트 30만 명 양성 목표.",
    url: "https://openai.com/index/introducing-openai-partner-network/",
    source: "OpenAI",
    level: "중급"
  },
  {
    date: "2026-06-19",
    category: "news",
    title: "앤트로픽 'Claude Corps' — $1.5억 규모 비영리 AI 펠로우십",
    summary: "초기 경력자 1,000명을 선발·교육해 미국 전역 400여 비영리에 1년간 상주 배치하고 Claude 활용을 지원하는 프로그램. 펠로우는 연봉 8.5만 달러와 토큰 예산을 받고, 앤트로픽은 핵심 인프라 일부를 오픈소스로 공개해 타국 확산까지 염두에 둔다고 밝힘.",
    url: "https://www.anthropic.com/news/claude-corps",
    source: "Anthropic",
    level: "입문"
  },
  {
    date: "2026-06-19",
    category: "paper",
    title: "ARIS: 적대적 멀티에이전트 협업 기반 자율 연구 하네스 (HF 오늘의 논문 1위)",
    summary: "실행자(executor) 모델이 연구를 진행하고 다른 모델 패밀리의 리뷰어가 중간 산출물을 비판·수정 요구하는 '교차모델 적대적 협업'으로 장기 연구의 '근거 없는 그럴듯한 성공'을 잡아내는 오픈소스 하네스. 65종+ 마크다운 스킬, MCP 연동, 증거→주장 매핑·감사 3단계 파이프라인을 제공(Claude Code·Codex·Cursor 호환).",
    url: "https://huggingface.co/papers/2605.03042",
    source: "Hugging Face / arXiv",
    level: "고급"
  },
  {
    date: "2026-06-19",
    category: "github",
    title: "OSSInsight AI 트렌딩 — opencode·Codex·Claude Code 급등",
    summary: "10B+ GitHub 이벤트로 시간당 갱신되는 AI 리포 실시간 랭킹. 최근 28일 'Top Movers'는 코딩 에이전트가 휩쓸어 anomalyco/opencode +514, openai/codex +376, anthropics/claude-code +323 스타. 에이전트·MCP 서버·추론·RAG 등 카테고리별로도 흐름을 볼 수 있다.",
    url: "https://ossinsight.io/trending/ai",
    source: "OSSInsight",
    level: "중급"
  },
  {
    date: "2026-06-19",
    category: "github",
    title: "VoltAgent/awesome-ai-agent-papers — 2026 에이전트 논문 큐레이션",
    summary: "에이전트 엔지니어링·메모리·평가·워크플로·자율 시스템을 주제로 2026년 발표 논문을 모은 큐레이션 리포지토리. 에이전트 연구 흐름을 한곳에서 따라가기 좋은 출발점으로, 분야별 분류와 지속 업데이트가 특징.",
    url: "https://github.com/VoltAgent/awesome-ai-agent-papers",
    source: "GitHub",
    level: "중급"
  },
  {
    date: "2026-06-19",
    category: "news",
    title: "KAIST, '아카식DB'로 기업용 RAG 처리속도 20배 개선",
    summary: "RAG(검색증강생성)가 기업 내부 문서를 검색해 답변을 만드는 과정의 정확도·속도가 상용화 걸림돌로 지목돼 온 가운데, KAIST 연구진이 처리속도를 20배 높인 '아카식DB' 기술을 공개. 금융·제조·국방 대상 AI 에이전트 서비스 적용을 노린다.",
    url: "https://www.kukinews.com/article/view/kuk202606190010",
    source: "쿠키뉴스",
    level: "중급"
  },
  {
    date: "2026-06-19",
    category: "news",
    title: "'미토스' 빗장에…통신업계, '에이전틱 AI'로 AI 주권 확보 총력",
    summary: "미 정부의 Mythos/Fable 수출통제로 외산 LLM 의존 리스크가 커지자, 국내 통신사들이 자체 에이전틱 AI로 대응을 가속. KT는 환각을 줄이는 구조를 바탕으로 하반기 자율형 에이전트 관리 시스템 '임플로이 에이전트' 출시를 예고하는 등 'AI 주권' 확보 경쟁이 본격화됐다.",
    url: "https://n.news.naver.com/mnews/article/417/0001148166?sid=105",
    source: "시대일보",
    level: "입문"
  },
  {
    date: "2026-06-19",
    category: "video",
    title: "[영상] 클로드 코워크 사용법 총정리 — 이 영상 하나로 끝내기",
    summary: "Claude Cowork의 전반적인 활용법을 한 번에 정리한 한국어 입문 영상. 파일·문서 작업을 자연어로 위임하는 흐름을 처음 접하는 사용자가 따라 하기 좋게 구성.",
    url: "https://www.youtube.com/watch?v=q8FAW2kZH-Q",
    source: "YouTube · 감자나라ai",
    level: "입문"
  },
  {
    date: "2026-06-19",
    category: "video",
    title: "[영상] 연구자를 위한 AI Agent 입문 강의",
    summary: "Claude Code·MCP·Agent.md·Skills 같은 실제 도구를 중심으로 연구자가 에이전트를 설계·관리하는 방법을 다루는 한국어 강의. 도구 사용·파일 조작·멀티에이전트뿐 아니라 에이전트의 실패 패턴과 사람의 판단·검토 역할까지 짚는다.",
    url: "https://www.youtube.com/watch?v=tZ9KFQOA6NM",
    source: "YouTube · MahlerLab",
    level: "중급"
  },
  {
    date: "2026-06-18",
    category: "ops",
    title: "일일 운영 — 소식 3건·영상 1건 추가",
    summary: "오늘 신규 소식 3건(국내 매체 2건 포함)과 활용사례 영상 1건 추가. 국내: ZDNet Korea 2건(IITP AX 2.0·공공 에이전틱AI), 해외: OpenAI 파트너 네트워크. 영상은 watch 페이지 메타데이터로 실재 확인(oembed는 fetch 제한으로 대체). 기존 최근 링크는 fetch 제약으로 재검증이 제한돼 명백한 죽은 링크가 확인되지 않아 제거 항목 없음. GitHub Pages 자동 배포 진행.",
    source: "운영봇",
    level: "입문"
  },
  {
    date: "2026-06-18",
    category: "news",
    title: "배경훈 과기정통부 장관 '전국민 위한 공공 에이전틱AI 3년 내 개발'",
    summary: "정보문화의 달 기념식에서 국민 모두가 AI 혜택을 누리도록 3년 안에 국가 차원의 공공형 에이전틱 AI를 개발하겠다고 발표. 통계상 국민 70%가 AI를 쓰지만 실질 수혜는 30%에 그친다는 문제의식에서 'AI 기본 사회'를 목표로 제시.",
    url: "https://zdnet.co.kr/view/?no=20260617165502",
    source: "ZDNet Korea",
    level: "입문"
  },
  {
    date: "2026-06-18",
    category: "news",
    title: "IITP, AX 2.0 시대 7대 주권기술 공개…올해 1조 9000억 투입",
    summary: "정보통신기획평가원이 '2026 성과 미디어데이'에서 AI 반도체·AI모델·피지컬AI·차세대 네트워크·사이버보안·AX확산·인재 등 7대 핵심 주권기술을 소개. 에이전틱AI와 피지컬AI를 'AX 2.0'의 핵심 키워드로 제시하며 한국의 AI 풀스택 경쟁력 강화를 강조.",
    url: "https://zdnet.co.kr/view/?no=20260617171323",
    source: "ZDNet Korea",
    level: "중급"
  },
  {
    date: "2026-06-18",
    category: "news",
    title: "OpenAI, 첫 글로벌 파트너 네트워크 출범…1억 5천만 달러 투자",
    summary: "기업의 AI 도입을 돕는 첫 공식 파트너 프로그램을 발표. 1억 5천만 달러를 투자해 2026년까지 30만 명의 인증 컨설턴트를 양성하고, Select·Advanced·Elite 3단계와 Codex·보안·에이전트 전문분야를 운영. 7월 정식 가동 예정.",
    url: "https://openai.com/index/introducing-openai-partner-network/",
    source: "OpenAI",
    level: "중급"
  },
  {
    date: "2026-06-18",
    category: "video",
    title: "2026, 생성형 AI를 통한 업무 생산성 높이기 전략과 트렌드 [반병현 작가]",
    summary: "AI 도입에도 생산성 효과가 없다면 무엇을 바꿔야 하는지, 개발자이자 AI 작가 반병현이 2026년 업무 활용 트렌드와 전략을 정리한 국내 강연 영상.",
    url: "https://www.youtube.com/watch?v=3v2ojLd5udk",
    source: "온토리 - 기업교육 파트너",
    level: "입문"
  },
  {
    date: "2026-06-17",
    category: "video",
    title: "업무에 ChatGPT 어디까지 활용해 봤니? — AI 업무 활용 사례",
    summary: "직장인 실무에서 ChatGPT를 활용하는 다양한 사례를 보여주는 국내 영상.",
    url: "https://www.youtube.com/watch?v=zRn9a-4depo",
    source: "휴넷TV",
    level: "입문"
  },
  {
    date: "2026-06-17",
    category: "video",
    title: "Claude Cowork 실전 가이드 — 비개발자의 업무 자동화",
    summary: "비개발자가 Cowork로 업무를 자동화하는 실전 활용을 다룬 국내 영상.",
    url: "https://www.youtube.com/watch?v=4ZRocGrd5U4",
    source: "조코딩AX파트너스",
    level: "중급"
  },
  {
    date: "2026-06-17",
    category: "ops",
    title: "일일 운영 — 소식 5건 추가·점검 완료",
    summary: "오늘 신규 소식 5건(국내 매체 2건 포함) 추가. 카테고리는 news·tool·github·community·paper로 구성. 기존 최근 링크 점검 결과 명백한 죽은 링크가 없어 제거 항목 없음. GitHub Pages 자동 배포 진행.",
    source: "운영봇",
    level: "입문"
  },
  {
    date: "2026-06-17",
    category: "news",
    title: "KT·고려대, 한국형 멀티모달 AI 안전성 벤치마크 'KSAFE-MM' 공개",
    summary: "전세사기·독도 분쟁 등 한국 사회 맥락을 반영한 멀티모달 AI 안전성 평가셋(1만4135문항). Gemma·HyperCLOVA X 등 글로벌 12종을 검증했고 arXiv·Hugging Face에 공개돼 누구나 활용 가능.",
    url: "https://www.ddaily.co.kr/page/view/2026061610153440648",
    source: "디지털데일리",
    level: "중급"
  },
  {
    date: "2026-06-17",
    category: "tool",
    title: "Claude Code 업데이트 — 중첩 서브에이전트·세이프 모드 추가",
    summary: "서브에이전트가 또 다른 서브에이전트를 호출하는 중첩 실행(최대 5단계)과, 모든 커스터마이즈를 끄고 깨끗한 상태로 점검하는 세이프 모드(--safe-mode)를 도입. 에이전트 자동화의 안정성과 디버깅이 쉬워짐.",
    url: "https://code.claude.com/docs/en/changelog",
    source: "Anthropic",
    level: "중급"
  },
  {
    date: "2026-06-17",
    category: "github",
    title: "re_gent — AI 코딩 에이전트 전용 버전 관리(깃)",
    summary: "AI 에이전트가 무엇을 바꿨고 어떤 프롬프트가 각 줄을 작성했는지 추적·블레임하고 되돌릴 수 있는 오픈소스 도구. Claude Code와 연동되며 Apache 2.0 라이선스.",
    url: "https://github.com/regent-vcs/re_gent",
    source: "GitHub",
    level: "중급"
  },
  {
    date: "2026-06-17",
    category: "community",
    title: "에이전트 코딩에 로컬 LLM 활용하기 (GeekNews)",
    summary: "클라우드 모델 가격 급등 속에서 Gemma 4 등 로컬 모델을 LM Studio·VS Code와 연결해 비용 없이 코딩하는 실전 가이드. 결정론적 하니스로 약한 모델 품질을 끌어올리는 팁 포함.",
    url: "https://news.hada.io/topic?id=30488",
    source: "GeekNews",
    level: "중급"
  },
  {
    date: "2026-06-17",
    category: "paper",
    title: "LLM 에이전트의 외부화(Externalization) — 메모리·스킬·프로토콜·하니스 통합 리뷰",
    summary: "에이전트 성능이 모델 가중치보다 메모리·스킬·프로토콜·하니스 같은 외부 인프라 설계에 좌우된다는 관점을 정리한 리뷰 논문. AI 비서를 잘 쓰려면 왜 도구·메모리 설계가 중요한지 이해하는 데 유용.",
    url: "https://huggingface.co/papers/2604.08224",
    source: "Hugging Face",
    level: "고급"
  },
  {
    date: "2026-06-17",
    category: "ops",
    title: "운영 자동화 시작 — 매일 점검·배포 가동",
    summary: "매일 AI 소식 수집, 링크·무결성 점검, GitHub Pages 자동 배포를 가동했습니다. 한글 소스도 탐색 범위에 추가했습니다.",
    source: "운영봇",
    level: "입문"
  },
  {
    date: "2026-06-17",
    category: "news",
    title: "GeekNews — 개발자가 고르는 IT·AI 소식 (한글)",
    summary: "국내 개발자 커뮤니티가 추천·토론하는 기술/AI 뉴스 모음. 한글로 최신 흐름을 빠르게 파악하기 좋습니다.",
    url: "https://news.hada.io/",
    source: "GeekNews",
    level: "입문"
  },
  {
    date: "2026-06-17",
    category: "news",
    title: "AI타임스 — 국내 AI 산업·정책 뉴스 (한글)",
    summary: "한국 AI 산업·정책·기업 동향을 한글로 전하는 전문 매체. 국내 관점의 AI 소식에 유용합니다.",
    url: "https://www.aitimes.com/",
    source: "AI타임스",
    level: "입문"
  },
  {
    date: "2026-06-17",
    category: "tool",
    title: "DiffusionGemma 공개 — 확산 방식으로 텍스트를 4배 빠르게 만드는 26B 오픈모델",
    summary: "구글 딥마인드가 토큰을 한 번에 병렬 생성하는 확산형 오픈모델을 Apache 2.0으로 공개. H100에서 초당 1,100토큰 이상, RTX 5090/4090급 로컬 PC에서도 구동 가능.",
    url: "https://huggingface.co/google/diffusiongemma-26B-A4B-it",
    source: "Google DeepMind",
    level: "중급"
  },
  {
    date: "2026-06-17",
    category: "github",
    title: "OpenClaw — 어떤 OS에서도 돌아가는 개인용 AI 비서",
    summary: "내 PC에서 화면을 읽고 캘린더·메일과 연동해 알아서 일을 처리하는 오픈소스 AI 에이전트. 별 수십만 개로 GitHub 역사상 가장 빠르게 성장한 프로젝트.",
    url: "https://github.com/openclaw/openclaw",
    source: "GitHub",
    level: "중급"
  },
  {
    date: "2026-06-17",
    category: "paper",
    title: "Less Context, Better Agents — 컨텍스트를 줄여 더 똑똑해지는 에이전트",
    summary: "도구를 많이 쓰는 장기 작업 에이전트에서 최근 도구 호출만 남기고 요약을 더했더니 토큰을 약 64% 줄이면서 작업 완수율은 오히려 상승. 비용·성능을 동시에 잡는 기법.",
    url: "https://arxiv.org/abs/2606.10209",
    source: "arXiv",
    level: "고급"
  },
  {
    date: "2026-06-17",
    category: "news",
    title: "멀티 에이전트 AI 안전 연구에 최대 1,000만 달러 공모",
    summary: "구글 딥마인드·슈미트 사이언스 등이 수백만 개의 AI 에이전트가 서로 거래·협상하는 시대의 안전성 연구를 공모. 마감 8월 8일, 에이전트 생태계의 새 화두.",
    url: "https://deepmind.google/blog/investing-in-multi-agent-ai-safety-research/",
    source: "Google DeepMind",
    level: "고급"
  },
  {
    date: "2026-06-16",
    category: "tool",
    title: "Claude Cowork — 데스크톱 에이전트 모드 (연구 프리뷰)",
    summary: "Claude가 내 PC의 폴더를 직접 읽고 파일 정리·문서/엑셀/PPT 생성·예약 작업까지 수행. Pro 이상 데스크톱 앱에서 사용.",
    url: "https://claude.com/product/cowork",
    source: "Anthropic",
    level: "입문"
  },
  {
    date: "2026-06-16",
    category: "github",
    title: "awesome-llm-apps — 바로 실행 가능한 AI 에이전트·RAG 앱 100+ 모음",
    summary: "LLM 앱을 코드와 함께 따라 만들 수 있는 인기 모음집. 입문자가 실전 예제를 학습하기 좋음.",
    url: "https://github.com/Shubhamsaboo/awesome-llm-apps",
    source: "GitHub",
    level: "중급"
  },
  {
    date: "2026-06-16",
    category: "github",
    title: "modelcontextprotocol/servers — MCP 공식 레퍼런스 서버 모음",
    summary: "Filesystem·Git·Fetch·Memory 등 AI를 외부 도구와 연결하는 MCP 서버 예제. 자동화의 출발점.",
    url: "https://github.com/modelcontextprotocol/servers",
    source: "GitHub",
    level: "고급"
  },
  {
    date: "2026-06-16",
    category: "paper",
    title: "Hugging Face Daily Papers — 매일 화제의 AI 논문",
    summary: "커뮤니티가 매일 선정하는 주목할 논문 모음. 코드·데모 링크가 함께 제공돼 트렌드 파악에 유용.",
    url: "https://huggingface.co/papers",
    source: "Hugging Face",
    level: "고급"
  },
  {
    date: "2026-06-16",
    category: "news",
    title: "OpenAI News — ChatGPT·GPT 모델 공식 발표 채널",
    summary: "신모델·신기능 발표는 항상 공식 채널을 1차 출처로 확인하세요. RSS로 자동 구독 가능.",
    url: "https://openai.com/news/",
    source: "OpenAI",
    level: "입문"
  },
  {
    date: "2026-06-16",
    category: "community",
    title: "r/LocalLLaMA — 오픈모델·로컬 LLM 실전 커뮤니티",
    summary: "최신 오픈소스 모델, 실행 팁, 벤치마크가 빠르게 공유되는 핵심 커뮤니티.",
    url: "https://www.reddit.com/r/LocalLLaMA/",
    source: "Reddit",
    level: "중급"
  }
];
