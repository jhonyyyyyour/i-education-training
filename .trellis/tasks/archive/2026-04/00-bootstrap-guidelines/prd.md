# Bootstrap: Fill Project Development Guidelines

## Goal

Fill the Trellis guideline documents based on the actual patterns in this repository so future AI sessions follow the current project style instead of generic conventions.

## Requirements

- Document the real frontend structure used by the static site in `public/` and mirrored `docs/`
- Document the real backend structure used by the minimal static file server in `server.js`
- Include concrete examples from the current codebase in every major guideline
- Describe current limitations honestly, including missing tooling such as TypeScript, tests, and database layers
- Call out anti-patterns that would create drift from the existing repository style

## Acceptance Criteria

- [ ] Frontend guideline files in `.trellis/spec/frontend/` are filled with repository-specific conventions
- [ ] Backend guideline files in `.trellis/spec/backend/` are filled with repository-specific conventions
- [ ] Each major guideline includes 2-3 concrete examples from the current codebase
- [ ] The docs describe reality, not aspirational architecture

## Technical Notes

- Project type is effectively fullstack, but the backend is only a minimal Node static file server
- Frontend is plain HTML, CSS, and inline JavaScript, not React or TypeScript
- `public/` is the source publishing directory and `docs/` is a deployment mirror for GitHub Pages
- `netlify.toml` publishes from `public/`
