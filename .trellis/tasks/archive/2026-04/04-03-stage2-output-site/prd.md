# Stage 2 migrate Eleventy output to _site

## Goal
Migrate the Eleventy output directory from `docs` to `_site` now that GitHub Pages deployment via GitHub Actions is working.

## Requirements
- Change Eleventy output from `docs` to `_site`
- Update deployment workflow to upload `_site`
- Update local preview assumptions and related docs/config that still point at `docs`
- Add ignore rules so generated `_site` is not committed
- Check site templates and shared assets for project-pages subpath compatibility (`https://<user>.github.io/<repo>/`)
- Preserve existing flat output URLs and page structure

## Acceptance Criteria
- [ ] Eleventy build writes to `_site`
- [ ] GitHub Pages workflow deploys `_site`
- [ ] Local preview and related config/docs point to `_site`
- [ ] Generated output directory is gitignored
- [ ] No manual `docs/` publishing flow remains
- [ ] Existing page links and asset references still work for project-pages deployment

## Technical Notes
- Stage 1 already switched GitHub Pages source to GitHub Actions successfully
- This repo is deployed as project pages under `/<repo>/`, so root-relative URLs need review
- Keep final page names flat (for example `lesson-01.html`, `student-guide.html`)
- Avoid changing actual public page paths in this stage
