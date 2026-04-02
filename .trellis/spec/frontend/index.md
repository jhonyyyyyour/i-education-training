# Frontend Development Guidelines

> Best practices for frontend development in this project.

---

## Overview

The frontend in this repository is a static site built from plain HTML, CSS, and small inline JavaScript.

During the Eleventy migration:

- `public/` remains the shared static asset source (for example `styles.css`, `brand-logo.svg`, and `screenshots/`) and may keep temporary legacy references during migration cleanup
- `site/` is the source of truth for Eleventy-migrated pages, layouts, includes, and shared data
- `docs/` is the generated deployment output for GitHub Pages

The guides in this folder describe the conventions that already exist in this repo (no React/Vue, no TypeScript build, no component framework).

---

## Guidelines Index

| Guide | Description | Status |
|-------|-------------|--------|
| [Directory Structure](./directory-structure.md) | Module organization and file layout | Filled |
| [Component Guidelines](./component-guidelines.md) | Reusable markup + CSS class patterns | Filled |
| [Hook Guidelines](./hook-guidelines.md) | Inline scripts (no hook system) | Filled |
| [State Management](./state-management.md) | DOM state + `localStorage` | Filled |
| [Quality Guidelines](./quality-guidelines.md) | Code standards, forbidden patterns | Filled |
| [Type Safety](./type-safety.md) | Practical type-safety in plain JS | Filled |

---

## How to Use These Guidelines

- When editing pages, start from the true source for that page (`public/` for legacy pages, `site/` for Eleventy-migrated pages).
- If you add or migrate a page meant to be deployed, verify the generated `docs/` output rather than treating `docs/` as a hand-edited source directory.
- If you introduce a new recurring pattern (CSS class, inline script behavior, shared include, or data shape), update the relevant guide so future changes stay consistent.

---

**Language**: All documentation should be written in **English**.
