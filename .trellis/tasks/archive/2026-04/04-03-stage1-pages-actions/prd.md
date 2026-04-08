# Stage 1 GitHub Pages Actions deployment

## Goal
Switch GitHub Pages publishing from branch-based `main/docs` deployment to GitHub Actions while keeping the current Eleventy output directory as `docs`.

## Requirements
- Add a GitHub Actions workflow that builds the site on pushes to `main`
- Keep Eleventy output directory as `docs` for this stage
- Upload the generated `docs` directory as the GitHub Pages artifact
- Avoid changing public URLs or output page structure in this stage
- Document the repository setting change required in GitHub Pages

## Acceptance Criteria
- [ ] Repository contains a GitHub Actions workflow for Pages deployment
- [ ] Workflow installs dependencies, runs `npm ci`, and runs `npm run build`
- [ ] Workflow deploys the generated `docs` artifact with `actions/deploy-pages`
- [ ] README explains the new deployment flow and required Pages setting
- [ ] No manual editing or committing of generated `docs` is required after switching Pages source to GitHub Actions

## Technical Notes
- This repository is an Eleventy site with output configured to `docs`
- This is a project pages deployment at `https://<user>.github.io/<repo>/`
- Stage 1 should minimize risk by preserving current output layout and URLs
- Stage 2 will later move output from `docs` to `_site` after Actions deployment is proven stable
