#!/usr/bin/env bash
# 변경된 사이트를 GitHub로 푸시 → GitHub Pages 자동 재배포.
#
# 동기화 폴더(Windows 마운트)에서는 git이 직접 동작하지 않으므로,
# 저장소를 임시 폴더(/tmp)로 clone → 사이트 파일 동기화 → commit/push 한다.
#
# 1회 설정 필요 (SETUP_DEPLOY.md):
#   이 폴더에 .deploy_repo  : "github.com/사용자명/저장소명" 한 줄 (비밀 아님)
#   이 폴더에 .deploy_token : GitHub Personal Access Token 한 줄 (.gitignore로 제외됨)
set -euo pipefail

SITE_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_FILE="$SITE_DIR/.deploy_repo"
TOKEN_FILE="$SITE_DIR/.deploy_token"

[ -f "$REPO_FILE" ]  || { echo "[배포] .deploy_repo 없음 — SETUP_DEPLOY.md의 1회 설정을 완료하세요. (로컬 업데이트는 정상 반영됨)"; exit 3; }
[ -f "$TOKEN_FILE" ] || { echo "[배포] .deploy_token 없음 — SETUP_DEPLOY.md의 1회 설정을 완료하세요. (로컬 업데이트는 정상 반영됨)"; exit 3; }

REPO="$(tr -d ' \t\r\n' < "$REPO_FILE" | sed -E 's#^https?://##; s#\.git$##; s#/$##')"
TOKEN="$(tr -d ' \t\r\n' < "$TOKEN_FILE")"

WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

echo "[배포] 저장소 clone..."
git clone -q "https://x-access-token:${TOKEN}@${REPO}.git" "$WORK/repo" 2>/dev/null || {
  echo "[배포] clone 실패 — 저장소 주소/토큰/권한을 확인하세요."; exit 1; }

echo "[배포] 사이트 파일 동기화..."
rsync -a --delete \
  --exclude '.git/' \
  --exclude '.github/' \
  --exclude '.deploy_token' \
  --exclude '.deploy_repo' \
  --exclude 'ai-guide-site.zip' \
  "$SITE_DIR"/ "$WORK/repo"/

cd "$WORK/repo"
git config user.email "ai-guide@local"
git config user.name  "AI Guide Bot"
git add -A
if git diff --cached --quiet; then
  echo "[배포] 변경 사항 없음 — 생략."
  exit 0
fi
git commit -qm "데일리 업데이트: $(date +%Y-%m-%d)"
git push -q origin HEAD:main
echo "[배포] ✅ 완료 — GitHub Pages가 자동으로 재배포됩니다."
