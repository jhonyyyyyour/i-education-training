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

Most content is authored in Eleventy page templates and shared data files.
Examples: lesson text, sidebar links, update lists, resource cards, and shared page metadata.

### Page-local UI state

Short-lived UI state is handled through DOM operations and class toggles.

Concrete examples from this repo:

- Sidebar open/close state is controlled by the dedicated `.sidebar-toggle` button in shared course/resource layouts
- Search overlay visibility is toggled by adding or removing the `.active` class from `#searchOverlay`
- Search results are rendered from centralized Eleventy data injected into the page script

When changing shared sidebar or search behavior, update the shared partial scripts rather than patching pages one by one.

### Persistent browser state

Learning progress is persisted in `localStorage` using the `ai-course-progress` key.
Examples:
- lesson/resource completion writes in the shared progress script used by Eleventy pages
- homepage progress rendering reads from the same key and total defined by shared data

When progress is shown in multiple places, keep the total lesson/resource count consistent across the shared data and every page that reads or writes the same key.
If a resource page is counted as part of the learning path, update the centralized progress entries and homepage summary together.

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

Any content updates are made by editing Eleventy source templates/data or shared assets directly.

---

## Common Mistakes

- Adding a state management library for a static site that does not need one
- Forgetting the sidebar toggle uses **two different class names** today (`expanded` in lessons, `collapsed` in index)
- Forgetting to update all pages that duplicate the search or progress script
- Storing more data in `localStorage` than needed for simple progress tracking
- Mixing content state and interaction state when a plain HTML update would be simpler
