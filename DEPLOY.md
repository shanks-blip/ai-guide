# 배포 가이드 (Deployment)

이 사이트는 **순수 정적 사이트**입니다. 빌드 과정이 없고 모든 경로가 상대경로라서, 어떤 정적 호스팅에도 폴더를 그대로 올리면 동작합니다. 서버·데이터베이스 필요 없습니다.

배포에 포함되는 파일은 이 폴더 전체입니다:

```
index.html  start.html  prompting.html  claude.html  chatgpt.html
usecases.html  advanced.html  updates.html  resources.html  glossary.html
404.html  favicon.svg  robots.txt  .nojekyll
assets/   (css, js)
data/     (updates.js — 매일 자동 업데이트되는 피드 데이터)
```

> `ai-guide-site.zip` 파일을 만들어 두었습니다. 드래그 업로드 방식(Netlify/Vercel)에는 이 zip을, Git 방식(GitHub Pages)에는 폴더를 쓰면 됩니다.

---

## 방법 1. Netlify Drop — 가장 빠름 (1분, 계정 가입만)

1. <https://app.netlify.com/drop> 접속
2. 이 폴더(또는 `ai-guide-site.zip`)를 브라우저 창에 **드래그&드롭**
3. 끝. `https://랜덤이름.netlify.app` 주소가 즉시 생성됩니다. (설정에서 이름 변경 가능)

업데이트하려면 같은 화면에 폴더를 다시 드롭하면 됩니다.

## 방법 2. Vercel

1. <https://vercel.com> 가입 후 **Add New → Project**
2. 이 폴더를 올리거나 GitHub 저장소를 연결
3. 프레임워크는 **Other(정적)** 선택, 빌드 명령은 비워둠, 출력 폴더는 루트(`./`)
4. Deploy 클릭

## 방법 3. GitHub Pages — 무료, 주소 고정에 좋음

1. GitHub에 새 저장소를 만들고 이 폴더의 **모든 파일**을 업로드(또는 push). `.nojekyll` 파일이 포함돼 있어야 `assets/` 폴더가 정상 적용됩니다(이미 들어 있음).
2. 저장소 **Settings → Pages**
3. **Source: Deploy from a branch**, 브랜치 `main` / 폴더 `/ (root)` 선택 후 저장
4. 1~2분 뒤 `https://<사용자명>.github.io/<저장소명>/` 에서 공개됩니다.

명령줄로 한다면:

```
git init
git add .
git commit -m "AI 비서 활용 가이드 배포"
git branch -M main
git remote add origin https://github.com/<사용자명>/<저장소명>.git
git push -u origin main
```

---

## 배포한 사이트의 "매일 업데이트" 유지하기 (중요)

매일 자동 업데이트(예약 작업)는 **내 컴퓨터의 이 폴더**에 있는 `data/updates.js`를 갱신합니다. 따라서 한 번 배포한 사이트는 그 시점의 내용으로 고정되고, 자동으로 새로고침되지 않습니다. 유지하는 방법 세 가지:

1. **수동 재배포** — 가끔 폴더(또는 `data/updates.js`)를 호스팅에 다시 올립니다. 가장 간단.
2. **GitHub + 자동 푸시 (추천)** — 이 폴더를 GitHub 저장소로 두고, 매일 업데이트 예약 작업이 갱신 후 `git commit && git push`까지 하도록 확장하면, GitHub Pages가 자동으로 다시 배포됩니다. (원하시면 예약 작업에 이 단계를 추가해 드릴 수 있습니다.)
3. **로컬은 항상 최신** — 배포본은 공개용 스냅샷으로 쓰고, 평소엔 내 컴퓨터에서 최신본을 보는 방식.

## 배포 전 점검(선택)

- 도메인을 연결했다면 `robots.txt`의 Sitemap 줄 주소를 실제 도메인으로 바꾸세요.
- 외부 링크와 유튜브 임베드는 인터넷 연결 시 정상 로드됩니다.
- 공개 배포 시 광고·분석(GA 등)을 넣고 싶다면 알려주세요. 추가해 드립니다.
