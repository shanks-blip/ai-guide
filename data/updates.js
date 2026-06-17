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
  lastUpdated: "2026-06-18",
  note: "시드 데이터입니다. 매일 자동 업데이트로 최신 항목이 맨 위에 쌓입니다."
};

window.AI_UPDATES = [
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
