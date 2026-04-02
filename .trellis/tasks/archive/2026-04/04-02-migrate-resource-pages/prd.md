# Migrate resource and standalone pages

## Goal

Migrate remaining resource/tool/standalone pages into the Eleventy structure so they share the new site layout and centralized metadata where appropriate, while keeping each page simple and content-first.

## Scope

This subtask covers pages called out in the parent brainstorm work:

- `lesson-07`
- `rtk-install-guide`
- `student-guide`
- `codex-first-lesson`

Additional standalone/resource pages may be included if they fit the same migration pattern discovered during implementation.

## Requirements

- Move the source of migrated pages into `site/`, not `docs/`.
- Preserve existing flat output URLs unless a URL change is explicitly required.
- Reuse the shared Eleventy base layout/includes/data where that improves consistency.
- Do not force pages with unique structure into unnecessary abstraction.
- Keep existing assets, screenshots, and relative links working.
- Keep search/navigation/resource metadata aligned with the centralized Eleventy data model.
- Avoid maintaining migrated pages manually in both `public/` and `docs/`.

## Acceptance Criteria

- [ ] Each target page has a clear Eleventy source in `site/`.
- [ ] Generated output keeps the expected deployable page paths.
- [ ] Shared layout/navigation/search behavior still works on migrated pages.
- [ ] Page-specific content and styling still match the existing intent.
- [ ] Any centralized data needed by these pages is updated in one place.
- [ ] The Eleventy build succeeds after migration.

## Technical Notes

- Follow frontend guidelines for component reuse, inline script simplicity, and preserving the static-site architecture.
- Prefer existing migrated page patterns over inventing new layout structures.
- Verify whether any of these pages still live only in `public/` and whether equivalent Eleventy templates already exist.
- Check for search labels or metadata that distinguish lessons from resource/tool pages.
