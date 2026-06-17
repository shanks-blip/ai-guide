# 매일 자동 배포 — 1회 설정 가이드 (GitHub Pages)

이 문서의 **5단계**만 한 번 해두면, 이후로는 매일 자동으로:
**예약 작업이 `data/updates.js`를 갱신 → GitHub에 푸시 → GitHub Pages가 사이트를 자동 재배포**
하는 흐름이 완성됩니다.

> **왜 직접 해야 하나요?** 계정 로그인과 접근 토큰(비밀번호에 해당)은 보안상 제가 대신 입력·보관할 수 없습니다. 그래서 토큰 생성·등록만 직접 하시면 나머지 기술 구성(자동 배포 워크플로·배포 스크립트·예약 작업)은 제가 이미 다 해두었습니다.

---

## 작동 구조 (참고)

```
[매일 오전 8시 예약 작업]
   → 최신 AI 소식 수집 → data/updates.js 갱신 (내 폴더)
   → deploy.sh 실행
        → GitHub 저장소를 임시폴더로 clone
        → 바뀐 파일 동기화 → commit → push
   → GitHub Actions가 사이트를 GitHub Pages에 배포
   → https://<사용자명>.github.io/<저장소명>/ 자동 갱신
```

이미 만들어 둔 파일: `.github/workflows/deploy.yml`(자동 배포), `deploy.sh`(푸시 스크립트), `.gitignore`(토큰 보호).

---

## 1단계 — GitHub 저장소 만들기

1. <https://github.com/new> 접속 (계정이 없으면 가입)
2. **Repository name**: 예) `ai-guide`
3. 공개 범위: **Public** (Pages 무료 사용)
4. README/.gitignore 등은 **추가하지 않음**(빈 저장소로 생성)
5. **Create repository** 클릭

생성 후 주소를 확인해 두세요: `github.com/<사용자명>/ai-guide`

## 2단계 — 접근 토큰(Fine-grained PAT) 만들기

1. <https://github.com/settings/personal-access-tokens/new> 접속
2. **Token name**: 예) `ai-guide-deploy`
3. **Expiration**: 원하는 만료일 (예: 90일)
4. **Repository access** → *Only select repositories* → 방금 만든 `ai-guide` 선택
5. **Permissions** → *Repository permissions* → **Contents: Read and write** 로 설정 (이 권한만 있으면 됩니다)
6. **Generate token** → 토큰 문자열(예: `github_pat_...`)을 복사 (한 번만 보입니다)

> 보안 팁: 저장소 1개로 제한된 fine-grained 토큰 + 만료일 설정을 권장합니다. 토큰이 노출돼도 이 저장소 외에는 영향이 없습니다.

## 3단계 — 폴더에 설정 2개 저장 (토큰은 직접 입력)

연결된 폴더(`E:\Temp\ClaudeProject_AIguide`)에 작은 설정 파일 2개를 만듭니다. **PowerShell**을 열고 아래를 실행하세요(값만 본인 것으로 교체):

```powershell
# 저장소 주소 (비밀 아님)
Set-Content -NoNewline "E:\Temp\ClaudeProject_AIguide\.deploy_repo" "github.com/<사용자명>/ai-guide"

# 토큰 (비밀 — 본인이 직접 붙여넣기)
Set-Content -NoNewline "E:\Temp\ClaudeProject_AIguide\.deploy_token" "여기에_복사한_토큰_붙여넣기"
```

- 이 두 파일은 `.gitignore`에 등록돼 있어 **저장소에 절대 올라가지 않습니다.** 배포 스크립트도 업로드 대상에서 제외합니다(이중 안전장치).
- `.deploy_repo`는 비밀이 아니므로, 원하시면 제가 대신 만들어 드릴 수 있습니다(저장소 이름만 알려주세요). **토큰(`.deploy_token`)은 반드시 직접** 만들어 주세요.

## 4단계 — GitHub Pages 켜기

1. 저장소 페이지 → **Settings** → 왼쪽 **Pages**
2. **Build and deployment → Source**: **GitHub Actions** 선택
3. 저장. (별도 설정 불필요 — 워크플로가 이미 저장소에 들어갑니다)

## 5단계 — 첫 배포 실행

설정이 끝나면 둘 중 하나로 첫 배포를 실행하세요:

- **저에게** "배포 실행해줘"라고 말하기 (제가 `deploy.sh`를 한 번 돌려 저장소를 채우고 결과를 확인합니다), 또는
- 사이드바 **Scheduled → ai-guide-daily-update → Run now** 클릭

1~2분 뒤 `https://<사용자명>.github.io/ai-guide/` 에서 사이트가 공개됩니다. (Actions 탭에서 배포 진행 상황 확인 가능)

---

## 이후 — 완전 자동

- 매일 오전 8시 예약 작업이 새 소식으로 `data/updates.js`를 갱신하고 자동으로 푸시 → 사이트가 스스로 최신 상태를 유지합니다.
- 데스크톱 앱이 켜져 있을 때 실행됩니다(꺼져 있었다면 다음 실행 때 따라잡음).

## 문제 해결

- **clone 실패** → `.deploy_repo` 주소나 `.deploy_token` 권한(Contents: Read and write), 토큰 만료를 확인하세요.
- **Pages가 안 보임** → 저장소 **Actions** 탭에서 워크플로가 성공했는지, **Settings → Pages** Source가 *GitHub Actions*인지 확인.
- **토큰 만료** → 새 토큰을 만들어 3단계의 `.deploy_token`만 다시 저장하면 됩니다.
- (선택) 폴더에 설정 과정에서 생긴 빈 `.git` 폴더가 보이면 삭제해도 됩니다 — 자동 배포는 이 폴더를 쓰지 않습니다.
