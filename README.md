# AI 활용 가이드 — 자동 업데이트 웹 서비스

입문부터 고급까지, AI 비서(Claude·Cowork, ChatGPT·Codex)를 제대로 쓰는 법을 담은 다중 페이지 정적 웹사이트입니다. 매일 자동으로 새로운 AI 기술·코드·논문 소식이 채워집니다.

## 빠른 시작

`index.html`을 브라우저로 더블클릭해서 열면 됩니다. 별도 설치·서버 불필요. (인터넷 연결 시 폰트·영상이 함께 로드됩니다.)

## 폴더 구조

```
ClaudeProject_AIguide/
├── index.html        홈 / 개요 + 최신 업데이트 미리보기
├── start.html        시작하기 (입문)
├── prompting.html    프롬프트 작성법 7원칙 + 템플릿
├── claude.html       Claude · Cowork 가이드
├── chatgpt.html      ChatGPT · Codex 가이드
├── advanced.html     심화 활용 (API·자동화·에이전트·MCP)
├── updates.html      오늘의 AI (매일 자동 업데이트 피드)
├── resources.html    자료실 (정보 소스 모음)
├── assets/
│   ├── css/style.css 디자인 시스템 (라이트/다크, 반응형)
│   └── js/main.js    공통 헤더·푸터·테마·피드 렌더링
├── data/
│   └── updates.js    피드 데이터 (매일 자동 갱신되는 파일)
└── README.md         이 문서
```

## 매일 업데이트는 어떻게 동작하나요?

`data/updates.js` 파일 하나가 모든 피드 데이터의 원천입니다. 매일 실행되는 예약 작업이:

1. 검증된 소스(OpenAI/Anthropic/Google 공식 블로그, GitHub, arXiv, Hugging Face, Hacker News 등)를 훑고
2. 가장 중요한 3~5개를 선별해 한 줄 요약 + 난이도(입문/중급/고급)를 붙인 뒤
3. 모든 링크가 실제로 열리는지 확인하고
4. `window.AI_UPDATES` 배열의 **맨 앞**에 새 항목을 추가합니다.

> 예약 작업은 Claude 데스크톱 앱이 켜져 있을 때 실행됩니다. 앱이 꺼져 있었다면 다음 실행 시 따라잡습니다.

수동으로 항목을 추가하려면 `data/updates.js`의 배열 맨 앞에 같은 형식의 객체를 넣으면 됩니다.

## 단계별 로드맵 (최종 목표까지)

**1단계 — 기본 틀 (완료)**
다중 페이지 사이트, 디자인 시스템, 8개 페이지, 업데이트 피드 구조, 매일 자동 예약 작업.

**2단계 — 콘텐츠 심화 (진행 중·자동)**
매일 피드 누적. 각 도구 페이지에 사용 사례·스크린샷·영상 추가. Gemini 등 다른 도구 페이지 확장.

**3단계 — 상호작용 강화**
검색 기능, 태그·난이도 필터, "이번 주 베스트", 북마크(localStorage).

**4단계 — 외부 공개 (선택)**
GitHub Pages·Netlify 등으로 실제 배포. 도메인 연결, 방문자 분석.

**5단계 — 개인화·자동 큐레이션**
관심 키워드 기반 맞춤 피드, 주간 요약 자동 생성, 이메일/메신저 발송 연동.

## 커스터마이즈

- 색상·폰트: `assets/css/style.css` 상단 `:root` 변수 수정
- 메뉴 구성: `assets/js/main.js` 의 `NAV` 배열 수정
- 피드 카테고리: `assets/js/main.js` 의 `CAT_META` 수정
