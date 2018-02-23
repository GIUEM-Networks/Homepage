cd ./dist
git init
git config user.name "${GITHUB_USER}"
git config user.email "${GITHUB_EMAIL}"
git add .
git commit -m "Travis CI: Auto build and deploy."
git push --force --quiet https://${GITHUB_TOKEN}@github.com/${GITHUB_REPO}.git master:pages