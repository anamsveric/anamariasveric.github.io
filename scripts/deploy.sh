#!/bin/bash
set -e

echo "Building..."
npm run build

echo "Deploying to gh-pages..."
git worktree add ../gh-pages-deploy gh-pages
cp -r dist/. ../gh-pages-deploy/
cd ../gh-pages-deploy
git add -A
git commit -m "Deploy $(date '+%Y-%m-%d %H:%M')"
git push origin gh-pages
cd c:/web/anamsveric.github.io
git worktree prune

echo "Deploy done!"
