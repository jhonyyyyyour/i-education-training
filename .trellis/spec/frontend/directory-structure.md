# Directory Structure

> How frontend code is organized in this project.

---

## Overview

This project does not use a `src/` directory or a frontend framework.
The frontend is a static site built from plain HTML, CSS, and inline JavaScript.

The working source lives in `public/`. The `docs/` directory is a mirrored copy used for GitHub Pages deployment.

In practice, new content may be added to `public/` without immediately being copied into `docs/`, so treat `public/` as the source of truth and mirror to `docs/` when you need GitHub Pages to reflect the change.

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

---

## Naming Conventions

- Top-level pages use kebab-case file names: `student-guide.html`, `codex-first-lesson.html`
- Sequential lessons use zero-padded names: `lesson-01.html` through `lesson-07.html`
- Shared stylesheet is `styles.css`
- Assets live under `screenshots/` and keep descriptive file names such as `codex-app-mac.png` or `vscode-download.png`

Avoid creating framework-style folders such as `components/`, `hooks/`, or `pages/` unless the project architecture actually changes.

---

## Examples

- Shared course-page structure: `public/lesson-01.html`, `public/lesson-03.html`, `public/lesson-06.html`
- Home page using the same overall layout with more custom sections: `public/index.html`
- Standalone longform pages: `public/student-guide.html`, `public/codex-first-lesson.html`
- Shared assets and global styling: `public/styles.css`, `public/screenshots/codex-app-mac.png`
