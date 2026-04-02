# brainstorm: refactor static site architecture

## Goal

Refactor the current static HTML site so new pages can be added without manually updating navigation, search data, progress totals, and deployment mirrors in many places. The result should stay simple, easy to maintain, and deployable to GitHub Pages as prebuilt static files.

## What I already know

- The current frontend is a plain static site with `public/` as source and `docs/` as GitHub Pages mirror.
- The backend is only a minimal static file server in `server.js`.
- Shared UI structure currently exists as repeated HTML blocks instead of reusable templates.
- The current repo pain is real duplication across many pages, especially when adding a new lesson/resource page.
- The current project guidelines explicitly warn about repeated search/progress/navigation logic and keeping `public/` and `docs/` aligned.

## Assumptions (temporary)

- The user prefers the smallest architecture change that meaningfully removes repeated manual edits.
- Static hosting on GitHub Pages is a hard requirement for the final output.
- Keeping final output as plain static HTML/CSS/JS is more important than preserving the current authoring format exactly.
- A lightweight build step is acceptable if it reduces long-term maintenance.

## Open Questions

- The user wants all pages migrated to the unified Eleventy template system, but split into multiple subtasks and sessions.

## Requirements (evolving)

- Keep the architecture simple and easy to maintain.
- Avoid introducing a heavy SPA/framework stack.
- Final build output must be deployable directly to GitHub Pages.
- Adding a new page should not require editing all existing pages.
- Repeated navigation/search/progress metadata should have a single source of truth.
- The solution should fit the current repo shape: mostly content pages, shared sidebar/search, and static assets.

## Acceptance Criteria (evolving)

- [ ] A new page can be added by editing a single metadata/content source plus the page file/template, not many sibling pages.
- [ ] Sidebar navigation is generated or shared from one source.
- [ ] Search index data is generated or shared from one source.
- [ ] Lesson/resource counts used by progress or homepage listings are not hardcoded in multiple files.
- [ ] Build output can be published to GitHub Pages as static files.
- [ ] `docs/` no longer needs manual hand-maintained mirroring for every content change.

## Definition of Done (team quality bar)

- Tests or verifiable manual checks cover the changed behavior where practical.
- Build/deploy flow is documented and reproducible.
- Navigation, search, and progress still work after the refactor.
- Output remains static and GitHub Pages compatible.

## Out of Scope (explicit)

- Converting the project into a SPA or app framework.
- Adding a database, CMS, or server-rendered runtime.
- Rewriting all page designs from scratch.
- Introducing complex client-side state management.

## Research Notes

### Repo constraints and observed duplication

- `public/` is the source of truth and `docs/` is a deploy mirror. [repo: `.trellis/spec/frontend/index.md`]
- `server.js` only serves static files from `public/`; there is no real backend contract to preserve. [repo: `server.js`]
- Sidebar markup is duplicated across lesson pages. [repo: `public/lesson-01.html`]
- Search overlay and `lessons` data array are duplicated across the homepage and lesson pages. [repo: `public/index.html`, `public/lesson-01.html`]
- Progress total is hardcoded (`const TOTAL = 7`) and completion writes are repeated across lesson pages. [repo: `public/index.html`, `public/lesson-01.html`, `public/lesson-02.html`, etc.]
- Homepage latest updates and catalog entries also need manual maintenance when content changes. [repo: `public/index.html`]

### External constraints and conventions

- GitHub Pages expects static output; Astro officially recommends deploying prebuilt output and requires `base` configuration for project pages. [Astro docs, GitHub Pages deployment]
- Astro `output: 'static'` prerenders pages by default, and `public/` assets are copied directly to the build output. [Astro docs, configuration reference]
- Astro supports shared layouts/components and static route generation from collections. [Astro docs, content collections]
- Eleventy supports layouts plus global/directory data files, which is a natural fit for centralized navigation/search metadata. [11ty docs, Layouts; Global Data Files; Template and Directory Data Files]
- Eleventy supports GitHub Pages deployment and `pathPrefix` for project subdirectory hosting. [11ty docs, Configuration / deployment]

### Feasible approaches here

**Approach A: Eleventy-based static refactor** (Recommended)

- How it works:
  - Introduce Eleventy as a lightweight static site generator.
  - Move shared sidebar/search/progress/catalog metadata into `_data/`.
  - Use one base layout and a few includes/partials for shared blocks.
  - Keep final output as static files in `docs/` or another build dir published to GitHub Pages.
- Pros:
  - Very close to the current static-site mental model.
  - Strong support for layouts, global data, directory data, and generated pages.
  - Good fit for content-heavy sites without forcing SPA patterns.
  - Easier than Astro if most pages remain HTML-first.
- Cons:
  - Adds a build step and template syntax.
  - Requires migrating repeated HTML into layouts/includes.

**Approach B: Astro static site refactor**

- How it works:
  - Use Astro with `output: 'static'`.
  - Create shared layouts/components for sidebar/search/catalog.
  - Put page metadata into collections or data files and generate pages/routes from that data.
- Pros:
  - Excellent static output and GitHub Pages support.
  - Modern DX and clean component/layout model.
  - Easy future extension if the site grows.
- Cons:
  - Heavier conceptual jump from today's plain HTML repo.
  - May be more framework than this repo needs right now.

**Approach C: Minimal in-repo custom generator**

- How it works:
  - Keep plain HTML/CSS/JS, but add a small Node build script.
  - Centralize site metadata in JSON/JS.
  - Generate repeated sidebar/search/catalog/progress snippets into `public/` and `docs/` during build.
- Pros:
  - Lowest dependency footprint.
  - Very small conceptual change.
  - Keeps authoring close to current HTML files.
- Cons:
  - We would effectively maintain our own mini static-site system.
  - Template ergonomics, escaping, and long-term evolution are weaker than mature SSGs.
  - Risk of inventing custom conventions that become their own maintenance burden.

## Decision (ADR-lite)

**Context**: The current repo suffers from repeated HTML and repeated metadata across many static pages, making page additions expensive and error-prone.

**Decision**: Use Eleventy as the refactor foundation for the MVP. This balances maintainability, static deployment compatibility, and minimal architectural weight better than Astro or a custom generator for this repo.

**Consequences**:
- We will introduce a build step.
- We can eliminate most repeated cross-page edits.
- We should centralize navigation/search/progress metadata early to maximize payoff.
- Authoring will move toward layouts/includes/data files instead of fully standalone repeated HTML pages.

## Technical Approach

Planned phased MVP across multiple sessions:

1. Set up Eleventy build, output to `docs/`, and define base site configuration.
2. Centralize site/page metadata in one data source.
3. Extract shared layout blocks: sidebar, search overlay, bottom navigation, homepage catalogs/updates where appropriate.
4. Migrate all existing pages into the unified Eleventy template system, but do so in several subtasks/sessions to keep risk controlled.
5. Preserve page-specific content mostly HTML-first during migration to avoid over-abstracting content authoring.
6. Remove the old hand-maintained `public/` -> `docs/` mirror workflow once the Eleventy output is validated.

## Technical Notes

- Repo references:
  - `.trellis/spec/frontend/index.md`
  - `.trellis/spec/frontend/component-guidelines.md`
  - `.trellis/spec/frontend/hook-guidelines.md`
  - `.trellis/spec/frontend/quality-guidelines.md`
  - `.trellis/spec/guides/code-reuse-thinking-guide.md`
  - `public/index.html`
  - `public/lesson-01.html`
  - `public/styles.css`
  - `server.js`
- External references consulted:
  - Astro docs: GitHub Pages deployment, static output, content collections
  - Eleventy docs: Layouts, Global Data Files, Template/Directory Data Files, Configuration/pathPrefix
