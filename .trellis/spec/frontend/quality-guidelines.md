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
- Editing only generated `_site/` output and forgetting where the real source now lives (`site/` for Eleventy templates and deployable pages, `public/` for shared assets)
- Creating a new visual pattern when `styles.css` already contains a close existing one
- Copying large inline scripts between pages without checking all linked lesson data and navigation links
- Maintaining a page manually in both `site/` and `_site/`
- Changing output URLs or introducing nested output paths that break existing relative links

---

## Required Patterns

- Start frontend edits from the true source for that page:
  - `site/` for Eleventy-migrated templates, layouts, data, and deployable pages
  - `public/` for shared assets or any remaining temporary legacy references
- Reuse existing CSS classes and content block structures where possible
- Keep interactive JavaScript small, explicit, and colocated with the page it controls
- Verify that navigation, search, and progress behavior still work after edits
- When search data contains non-lesson entries, verify the result labels and click-to-close behavior still work for both lesson and resource/tool pages
- If progress is tracked across multiple lesson/resource pages, keep the `ai-course-progress` total consistent wherever that value is rendered or written
- Keep `_site/` aligned with the finalized build output
- When introducing Eleventy templates, preserve the existing flat final page paths unless the migration explicitly includes URL changes
- Do not expose internal generation notes, sourcing caveats, retrieval failures, or workflow/process disclaimers inside end-user page content; resolve the issue internally or mention limitations only in the final developer report to the user
- Resource/tool pages must not occupy numbered lesson slots just because their file name once used a `lesson-*` pattern; use non-lesson metadata (`trackProgress: false`, non-numeric badge, `catalogVariant: "non-lesson"`) and prefer non-lesson URLs when restructuring them

---

## Testing Requirements

There is no automated frontend test suite today.
Minimum manual checks for page changes:

- run the Eleventy build when touching `site/`, shared assets, or deployment output structure
- open the edited page in the local server
- verify layout on desktop width and a narrow/mobile width
- click sidebar navigation and prev/next navigation where present
- test search overlay if the page includes search
- test progress tracking if the page includes completion buttons
- verify referenced screenshots and assets still load

---

## Code Review Checklist

- Does the change match the existing static-site structure?
- Was the correct source directory edited (`site/` or `public/`) instead of patching generated output in `_site/`?
- Were shared classes in `public/styles.css` reused before adding new ones?
- If a repeated page pattern changed, were the shared layouts, partials, or sibling pages checked too?
- If a deployable page changed, was the `_site/` build output updated appropriately?
- Does the page still work without any framework runtime or build step in the browser?
- If Eleventy was involved, does the generated output keep existing flat URLs and asset references intact?

Examples to compare against:
- `site/index.html`
- `site/lesson-01.html`
- `public/styles.css`
- `site/_includes/layouts/base.njk`
