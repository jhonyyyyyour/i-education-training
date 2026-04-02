# Directory Structure

> How frontend code is organized in this project.

---

## Overview

This project does not use a `src/` directory or a frontend framework.
The frontend is a static site built from plain HTML, CSS, and inline JavaScript.

During the Eleventy migration:

- `public/` remains the shared asset source and optional legacy reference area.
- `site/` is the Eleventy template source for deployable pages, layouts, includes, and shared data.
- `docs/` is the generated deployment output for GitHub Pages.

Do not treat `docs/` as a hand-edited source directory once a page is generated through Eleventy.

---

## Directory Layout

```text
public/
├── index.html
├── lesson-01.html ... lesson-07.html
├── rtk-install-guide.html
├── student-guide.html
├── codex-first-lesson.html
├── styles.css
├── brand-logo.svg
└── screenshots/
    └── *

site/
├── _data/
│   └── *
├── _includes/
│   └── layouts/
│       └── *
└── *.njk / *.md / *.html

docs/
├── index.html
├── lesson-01.html ... lesson-07.html
├── rtk-install-guide.html
├── student-guide.html
├── codex-first-lesson.html
├── styles.css
├── brand-logo.svg
└── screenshots/
    └── *
```

---

## Module Organization

There are two frontend page families:

1. Course-style pages that share the main layout pattern
   - Sidebar navigation
   - Main content area
   - Shared styling from `styles.css`
   - Inline page scripts for search, progress, and page-specific interactions

2. Standalone guide pages that use their own full-page styling
   - Still plain HTML
   - Usually include large embedded `<style>` blocks instead of relying only on `styles.css`

When adding a new lesson or course page, follow the shared course-page structure first.
When adding a one-off landing page or guide, keep it self-contained and explicit.
When migrating repeated page structures, move shared layout/data concerns into `site/` rather than creating another hand-maintained copy in `public/` and `docs/`.

---

## Naming Conventions

- Top-level pages use kebab-case file names: `student-guide.html`, `codex-first-lesson.html`
- Sequential lessons use zero-padded names: `lesson-01.html` through `lesson-07.html`
- Shared stylesheet is `styles.css`
- Assets live under `screenshots/` and keep descriptive file names such as `codex-app-mac.png` or `vscode-download.png`
- Eleventy templates should preserve the existing final flat page names in `docs/`

Avoid creating framework-style folders such as `components/`, `hooks/`, or `pages/` unless the project architecture actually changes.

---

## Examples

- Shared course-page structure: `site/lesson-01.html`, `site/lesson-03.html`, `site/lesson-06.html`
- Home page using the same overall layout with more custom sections: `site/index.html`
- Standalone longform pages: `site/student-guide.html`, `site/codex-first-lesson.html`
- Shared assets and global styling: `public/styles.css`, `public/screenshots/codex-app-mac.png`
- Eleventy migration scaffolding: `site/_includes/layouts/base.njk`, `site/_data/site.js`
