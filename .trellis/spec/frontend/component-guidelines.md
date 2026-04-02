# Component Guidelines

> How components are built in this project.

---

## Overview

This project does not use a component framework such as React or Vue.
The reusable UI units are HTML sections and CSS class patterns inside static pages.

Treat repeated HTML blocks as the project's current "components". Reuse the existing markup and class names before inventing new structures.

---

## Component Structure

Most course pages are built from the same major blocks:

- `.layout`
- `aside.sidebar`
- `main.main`
- content blocks such as `.card`, `.step-box`, `.scenario-card`, `.resource-card`
- navigation helpers such as `.bottom-nav`
- search UI such as `.search-trigger`, `.search-overlay`, `.search-input`
- sidebar home-link/menu controls such as `.sidebar-logo-link` and `.sidebar-toggle`
- homepage-only hero and dashboard blocks such as `.hero-shell`, `.brand-mark`, `.update-banner`, and `.site-progress`
- mixed catalog entries such as `.course-item.non-lesson` for resource/tool pages surfaced alongside lessons

When extending a lesson page, prefer copying an existing section pattern and changing only the content.

---

## Props Conventions

There are no JavaScript props or typed component interfaces in this repository.
Instead, consistency comes from:

- keeping the same HTML structure for repeated blocks
- reusing the same CSS class names for similar content
- using inline JavaScript only when a page needs interactive behavior

If a visual block appears on multiple pages, keep the markup shape aligned so `styles.css` continues to apply predictably.

---

## Styling Patterns

- Global layout and shared UI styles live in `public/styles.css`
- Pages can add local overrides with inline `<style>` blocks when the shared stylesheet is not enough
- In Eleventy layouts, render page-local inline styles after the shared stylesheet link when those styles are meant to override shared rules
- The visual language is consistent: warm neutral background, orange brand accent, rounded cards, subtle borders, light shadows

Prefer existing shared classes first.
Only add page-local styles when the page has unique presentation needs.

Examples:
- Shared card patterns in `public/styles.css`
- Page-specific hero styling in `site/index.html`
- Fully self-contained styling in `site/student-guide.html`

---

## Accessibility

Current accessibility is mostly semantic HTML rather than a formal accessibility system.
Use these baseline rules when editing pages:

- Keep headings ordered logically (`h1` → `h2` → `h3`)
- Use real links for navigation and real buttons for actions such as search triggers
- Provide meaningful `alt` text for instructional screenshots when images carry content
- Do not rely on color alone to communicate completion or emphasis
- Preserve readable text size and contrast used by the current design

---

## Common Mistakes

- Adding a new layout pattern when an existing lesson page already has the needed structure
- Renaming shared class names casually and breaking `styles.css`
- Mixing deployment concerns into page markup instead of editing the true source (`site/` for deployable pages, `public/` for shared assets)
- Treating this repo like a framework app and introducing fake component abstractions that do not exist in the current codebase

Examples to follow:
- `site/lesson-01.html`
- `site/lesson-05.html`
- `site/index.html`
