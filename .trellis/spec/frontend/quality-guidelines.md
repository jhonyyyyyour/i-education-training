# Quality Guidelines

> Code quality standards for frontend development.

---

## Overview

Frontend quality in this repository is defined by consistency with the static-site architecture, not by framework tooling.

There is currently no lint setup, no automated formatter, and no test runner in `package.json`.

That makes manual consistency especially important.

---

## Forbidden Patterns

- Treating the repo as a React or TypeScript app when it is still plain HTML/CSS/JS
- Editing only `docs/` and forgetting that `public/` is the source publishing directory for local/server use
- Creating a new visual pattern when `styles.css` already contains a close existing one
- Copying large inline scripts between pages without checking all linked lesson data and navigation links
- Breaking the mirrored relationship between `public/` and `docs/` for deployable pages

---

## Required Patterns

- Start frontend edits from the existing static pages in `public/`
- Reuse existing CSS classes and content block structures where possible
- Keep interactive JavaScript small, explicit, and colocated with the page it controls
- Verify that navigation, search, and progress behavior still work after edits
- When search data contains non-lesson entries, verify the result labels and click-to-close behavior still work for both lesson and resource/tool pages
- If progress is tracked across multiple lesson/resource pages, keep the `ai-course-progress` total consistent wherever that value is rendered or written
- If a page is meant to ship in both environments, keep `docs/` aligned with the finalized `public/` page

---

## Testing Requirements

There is no automated frontend test suite today.
Minimum manual checks for page changes:

- open the edited page in the local server
- verify layout on desktop width and a narrow/mobile width
- click sidebar navigation and prev/next navigation where present
- test search overlay if the page includes search
- test progress tracking if the page includes completion buttons
- verify referenced screenshots and assets still load

---

## Code Review Checklist

- Does the change match the existing static-site structure?
- Were shared classes in `public/styles.css` reused before adding new ones?
- If a repeated page pattern changed, were sibling lesson pages checked too?
- If a deployable page changed, was the `docs/` mirror updated appropriately?
- Does the page still work without any framework runtime or build step?

Examples to compare against:
- `public/index.html`
- `public/lesson-01.html`
- `public/styles.css`
