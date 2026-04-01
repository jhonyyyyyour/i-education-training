# State Management

> How state is managed in this project.

---

## Overview

This project has no frontend state library.
State is managed with a combination of:

- static HTML content
- page-local JavaScript variables
- DOM class toggles
- browser `localStorage`

There is no global application store and no server-synced client state.

---

## State Categories

### Static content state

Most content is written directly into the HTML files.
Examples: lesson text, sidebar links, update lists, resource cards.

### Page-local UI state

Short-lived UI state is handled through DOM operations and class toggles.

Concrete examples from this repo:

- Sidebar expansion on lesson pages toggles `.sidebar.expanded` when clicking the logo.
  - e.g. `public/lesson-01.html` contains:
    - `sidebar.querySelector('.sidebar-logo').onclick = () => sidebar.classList.toggle('expanded');`
- The homepage uses a different class name for the same interaction (`.sidebar.collapsed`).
  - e.g. `public/index.html` contains:
    - `sidebar.querySelector(".sidebar-logo").onclick = () => sidebar.classList.toggle("collapsed");`

When changing sidebar behavior, search and update both variants.

### Persistent browser state

Learning progress is persisted in `localStorage` using the `ai-course-progress` key.
Examples:
- lesson completion writes in `public/lesson-01.html` through `public/lesson-07.html`
- homepage progress rendering in `public/index.html`

When progress is shown in multiple places, keep the total lesson/resource count consistent across every page that reads or writes the same key.
If a resource page is counted as part of the learning path, update both the homepage summary and the per-page completion scripts together.

---

## When to Use Global State

There is no global state layer today.
Do not introduce one for routine page work.

Use existing patterns first:
- if state is only needed on one page, keep it in that page script
- if state should survive refreshes, use `localStorage`
- if state only affects styling, prefer class toggles on existing elements

Only consider a shared JavaScript module if the same logic is duplicated heavily across many pages and manual sync becomes error-prone.

---

## Server State

There is no client-side server state cache.
The site does not fetch JSON or remote content at runtime.
The backend only serves static files.

Any content updates are made by editing the HTML files directly.

---

## Common Mistakes

- Adding a state management library for a static site that does not need one
- Forgetting the sidebar toggle uses **two different class names** today (`expanded` in lessons, `collapsed` in index)
- Forgetting to update all pages that duplicate the search or progress script
- Storing more data in `localStorage` than needed for simple progress tracking
- Mixing content state and interaction state when a plain HTML update would be simpler
