# Update generate-page latest updates sync

## Goal
Ensure the page-generation workflow also updates the homepage latest-updates section when new pages are added or updated, and make the current homepage latest entry reflect the RTK install/configuration page.

## Requirements
- Update the homepage latest-updates section to make the RTK install/configuration page the latest highlighted item.
- Update the Trellis generate-page skill documentation so future page generation explicitly checks and updates the homepage latest-updates section when appropriate.
- Keep mirrored command docs aligned where applicable.
- Keep `public/` as the source of truth and sync `docs/` if the homepage changes.

## Acceptance Criteria
- [ ] Homepage latest-updates content mentions the RTK install/configuration page as the latest relevant update.
- [ ] `.claude/commands/trellis/generate-page.md` includes a rule to update homepage latest-updates when generating/updating pages.
- [ ] Mirrored command doc in `.cursor/commands/` is updated consistently if needed.
- [ ] `docs/index.html` matches the finalized `public/index.html` change.

## Technical Notes
- Likely frontend/docs workflow task.
- Must verify the current homepage update-banner structure before editing.
- Must prefer existing project rules and mirrored-doc conventions.
