# Hook Guidelines

> How hooks are used in this project.

---

## Overview

This project does not use React, Vue composition hooks, or any custom hook system.
There are no `use*` frontend hooks in the codebase today.

Interactive logic is implemented with small inline `<script>` blocks inside HTML pages.
When documenting or changing behavior, think in terms of page scripts, DOM queries, event listeners, and helper functions.

---

## Custom Hook Patterns

There are currently no custom hooks.
If behavior needs to be shared, the existing project style is to duplicate a small inline script pattern across related pages rather than introduce a framework abstraction.

That means the safest default is:
- copy an existing inline script pattern from a similar page
- keep the logic short and page-local
- only extract to a shared `.js` file if duplication becomes clearly unmanageable across many pages

---

## Data Fetching

There is no frontend data fetching layer.
Pages are static and render hardcoded content.
Interactive features such as search and progress operate entirely in the browser using in-page data and `localStorage`.

Examples:
- Search uses a hardcoded `lessons` array in `public/index.html`
- Search follows the same pattern in lesson pages such as `public/lesson-01.html` and `public/lesson-07.html`
- Search data may include non-lesson entries such as resource pages and tool pages, and the result tag rendering must handle both numbered lessons and string labels
- Progress reads and writes `localStorage` in lesson pages such as `public/lesson-02.html`
- Sidebar interactions on the refreshed layout use a dedicated `.sidebar-toggle` button instead of binding directly to the whole logo block

---

## Naming Conventions

Because there are no hooks, there is no `use*` naming convention to follow.
For page scripts, prefer clear DOM-oriented names such as:

- `openSearch`
- `closeSearch`
- `renderResults`
- `searchBtn`
- `searchInput`

Keep function names literal and tied to the page behavior.

---

## Common Mistakes

- Writing docs or code as if React hooks already exist here
- Introducing a shared state abstraction for behavior that only appears on one or two static pages
- Moving simple inline interactions into a complicated architecture before the repo actually needs it
- Forgetting that repeated search/progress logic currently exists in multiple pages and must be updated consistently
