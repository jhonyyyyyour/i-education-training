---
name: generate-page
description: Analyze mixed page materials in this repo, choose the right existing page type or update target, and generate or update page content following current Trellis/frontend specs. Use when the task is about adding a new page, updating an existing page, or merging content into the site.
---

# Generate or update page

Use this skill when the user wants to create a page, revise a page, merge new materials into an existing page, or classify mixed inputs such as text, links, folders, and images.

## Invocation

In Codex, invoke this skill with:

```text
$generate-page
```

You can also mention it explicitly in a natural-language request, but for this project the preferred explicit trigger is `$generate-page`.

## Core rules

1. Read current project rules before modifying anything.
2. Do not hardcode page categories; infer them from the current repo structure.
3. Prefer existing page structure, navigation, and search patterns.
4. Use `grok-search` first for web search and web fetch.
5. If the input is a WeChat article, Xiaohongshu page, or similar content-platform URL and `grok-search` only returns a shell page, search page, login page, or obviously incomplete body, fall back to `mineru`.
6. When using `mineru` for remote content, pass the URL directly to `parse_documents`.
7. For local image files, prefer native multimodal image reading instead of writing OCR scripts.
8. For local images, process one image at a time by default; do not batch many local images in one step.
9. Never expose internal retrieval, generation, or source-processing details in the final reader-facing page body.

## Required workflow

### 1. Read current specs

At minimum, read:

- `.trellis/spec/frontend/index.md`
- `.trellis/spec/frontend/component-guidelines.md`
- `.trellis/spec/frontend/hook-guidelines.md`
- `.trellis/spec/frontend/quality-guidelines.md`
- `.trellis/spec/guides/index.md`

Then inspect current page structure in `site/`, `public/`, and `_site/`.

### 2. Classify input type

Determine whether the input is:

- text
- local file/folder
- local image
- web URL
- mixed materials

### 3. Handle links and images correctly

#### Web links

- Prefer `grok-search`
- For content-platform links with incomplete extraction, fall back to `mineru`
- Do not write custom scraping scripts just to work around this

#### Local images

- Use native multimodal reading first
- Analyze one image at a time
- If reliable direct image reading is not available, do not replace it with a custom OCR pipeline; report the limitation instead

### 4. Map to the right page type

Infer the best target from the current repo:

- course page
- resource page
- recommendation collection
- topic page
- tool page
- landing page
- article page

If classification is ambiguous, present the best recommendation and 1-2 alternatives before editing.

### 5. Sync the usual integration points

If relevant, update:

- sidebar navigation
- homepage entry sections
- homepage latest updates
- search data
- previous/next navigation
- progress logic
- generated `_site/` output correspondence

## Output expectations

After finishing, report:

- detected page types relevant to this task
- chosen page type and reason
- modified files
- whether navigation/search/build output were checked
- whether the command definition still matches current project structure
