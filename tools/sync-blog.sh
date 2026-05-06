#!/usr/bin/env bash
# Fetch latest Substack posts and push the updated JSON to main.
# Run this after publishing a new post on Substack — GitHub Actions
# will redeploy the site once this push lands on main.

set -euo pipefail

cd "$(dirname "$0")/.."

if ! git diff --cached --quiet; then
  echo "[sync-blog] You have staged changes. Commit or unstage them first."
  exit 1
fi

npm run fetch-substack

if git diff --quiet -- src/posts.generated.json; then
  echo "[sync-blog] No changes — nothing to sync."
  exit 0
fi

git add src/posts.generated.json
git commit -m "sync blog from Substack"
git push

echo "[sync-blog] Pushed. Watch the deploy: gh run list --branch main --limit 1"
