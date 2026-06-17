#!/usr/bin/env bash
# 변경된 사이트를 GitHub로 푸시 → GitHub Pages 자동 재배포.
# 동기화 폴더에서는 git이 직접 동작하지 않으므로 저장소를 /tmp로 clone → 동기화 → push.
# 1회 설정: 이 폴더에 .deploy_repo (github.com/사용자명/저장소) 와 .deploy_token (PAT) 필요. (SETUP_DEPLOY.md)
set -euo pipefail

SITE_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_FILE="$SITE_DIR/.deploy_repo"
TOKEN_FILE="$SITE_DIR/.deploy_token"

[ -f "$REPO_FILE" ]  || { echo "[배포] .deploy_repo 없음 — SETUP_DEPLOY.md 1회 설정 필요. (로컬 업데이트는 정상)"; exit 3; }
[ -f "$TOKEN_FILE" ] || { echo "[배포] .deploy_token 없음 — SETUP_DEPLOY.md 1회 설정 필요. (로컬 업데이트는 정상)"; exit 3; }

REPO="$(tr -d ' \t\r\n' < "$REPO_FILE" | sed -E 's#^https?://##; s#\.git$##; s#/$##')"
TOKEN="$(tr -d ' \t\r\n' < "$TOKEN_FILE")"

WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT

echo "[배포] 저장소 clone..."
git clone -q "https://x-access-token:${TOKEN}@${REPO}.git" "$WORK/repo" 2>/dev/null || { echo "[배포] clone 실패 — 저장소/토큰/권한 확인."; exit 1; }

echo "[배포] 사이트 파일 동기화..."
rsync -a --delete \
  --exclude '.git/' \
  --exclude '.github/' \
  --exclude '.deploy_token' \
  --exclude '.deploy_repo' \
  --exclude 'ai-guide-site.zip' \
  "$SITE_DIR"/ "$WORK/repo"/

cd "$WORK/repo"

# --- 무결성 검사: 깨진 파일은 배포하지 않음 ---
if grep -rlP '\x00' --include='*.js' --include='*.css' --include='*.html' . >/dev/null 2>&1; then
  echo "[배포] ❌ 손상(널바이트) 파일 감지 — 배포 중단(라이브는 직전 상태 유지)."; exit 2
fi
for f in assets/js/main.js data/updates.js; do
  if [ -f "$f" ]; then
    node --check "$f" 2>/dev/null || { echo "[배포] ❌ $f 문법 오류 — 배포 중단."; exit 2; }
  fi
done

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
