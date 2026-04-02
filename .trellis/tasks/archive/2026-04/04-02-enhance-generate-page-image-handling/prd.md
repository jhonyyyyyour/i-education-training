# brainstorm: enhance generate-page image handling

## Goal

Enhance `/trellis:generate-page` so it can distinguish between explanatory images (text-heavy screenshots/slides that should be mined for page content) and showcase images (visual examples that should be laid out in the page), then use the improved workflow to turn `draft/高质量skills分享/` into a new course page: `第七课 - Skills推荐与使用`.

## What I already know

* The command definition lives at `.claude/commands/trellis/generate-page.md` and a mirrored Cursor version exists at `.cursor/commands/trellis-generate-page.md`.
* Current command already supports mixed inputs including local files, folders, screenshots, articles, and links, but it does not yet define different handling rules for explanatory vs showcase images.
* The project's real course source is under `site/`, not `docs/`; generated output is mirrored to `docs/` after build.
* Existing course metadata is managed in `site/_data/contentIndex.js`, including sidebar, search, and progress entries.
* Current lesson pages exist through `lesson-06.html`; `lesson-05.html` is an introductory Skills lesson, while the requested new page is specifically `第七课 - Skills推荐与使用`, which suggests a follow-up/advanced lesson rather than replacing the intro.
* The input draft folder contains a markdown summary file `draft/高质量skills分享/高质量skills分享.md` plus a large batch of JPEG images under `draft/高质量skills分享/分享6个我觉得应该必装的Skills/`.

## Assumptions (temporary)

* The new image handling should be encoded in the command definition itself, not only applied manually for this one page.
* For explanatory images, the command should extract key text points and merge them with neighboring textual source material instead of embedding every screenshot verbatim.
* For showcase images, the command should keep the image as a visual asset and place it into suitable layouts such as galleries, cards, or figure blocks.
* `第七课 - Skills推荐与使用` is intended to be a new course page (`site/lesson-07.html`) with corresponding metadata updates, not a resource page.
* Default content strategy: extract and organize text-heavy image content into readable lesson sections, while keeping only a few representative screenshots as visual examples.

## Open Questions

* None currently blocking. Default execution choice: mostly text extraction with a few key visual examples.

## Requirements (evolving)

* Update `generate-page` command guidance to explicitly classify image inputs into at least two types: explanatory and showcase.
* Define how explanatory images contribute extracted text/content structure to the generated page.
* Define how showcase images should be retained and placed visually in the page.
* Apply the improved command logic to the `draft/高质量skills分享/` materials.
* Prefer a text-led lesson page with selective supporting screenshots rather than an image gallery page.
* Generate or update the appropriate course page as `第七课 - Skills推荐与使用` using existing course-page patterns.
* Keep navigation/search/progress/content index in sync if a new lesson page is created.

## Acceptance Criteria (evolving)

* [ ] Command definition documents image classification and downstream handling rules clearly enough for future runs.
* [ ] The command can treat mixed image folders differently based on image purpose, not as a single generic "image input" type.
* [ ] A course page for `第七课 - Skills推荐与使用` is created or updated in the correct source directory.
* [ ] Related metadata/navigation/search/progress entries are synchronized if lesson 07 is added.
* [ ] The resulting page uses text-heavy source images for content extraction and showcase images for visual presentation where appropriate.
* [ ] The final lesson remains primarily readable as text content even if most screenshots are removed.

## Definition of Done (team quality bar)

* Tests added/updated where appropriate
* Lint / typecheck / CI green
* Docs/notes updated if behavior changes
* Rollout/rollback considered if risky

## Out of Scope (explicit)

* Building a generic OCR pipeline outside the command workflow unless needed for this repo task
* Redesigning the whole course information architecture
* Rewriting unrelated lesson pages

## Technical Notes

* Command file: `.claude/commands/trellis/generate-page.md`
* Mirror command file: `.cursor/commands/trellis-generate-page.md`
* Course pattern examples: `site/lesson-03.html`, `site/lesson-04.html`, `site/lesson-05.html`, `site/lesson-06.html`
* Course metadata and search/sidebar/progress source: `site/_data/contentIndex.js`, `site/_data/progress.js`
* Relevant quality constraints: edit source files under `site/` / `public/`, then verify generated `docs/` output
* Initial draft source discovered: `draft/高质量skills分享/高质量skills分享.md` + image batch directory
* Deferred follow-up for later sessions:
  - OCR vs multimodal LLM analysis strategy for image understanding
  - Extensible handling model for additional image types beyond explanatory/showcase
