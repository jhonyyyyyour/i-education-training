# Frontend Development Guidelines

> Best practices for frontend development in this project.

---

## Overview

The frontend in this repository is a static site (plain HTML, CSS, and small inline JavaScript).

- Source of truth: `public/`
- GitHub Pages deployment mirror: `docs/`

The guides in this folder describe the conventions that **already exist** in this repo (no React/Vue, no TypeScript build, no component framework).

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

- When editing pages, start from the existing patterns in `public/`.
- If you add a new page meant to be deployed, keep `docs/` aligned with the finalized `public/` output.
- If you introduce a new recurring pattern (CSS class, inline script behavior), update the relevant guide so future changes stay consistent.

---

**Language**: All documentation should be written in **English**.
