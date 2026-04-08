# Quality Guidelines

> Code quality standards for backend development.

---

## Overview

Backend quality in this repository means preserving the simplicity and safety of the static file server.
There is no test runner, no linter configuration, and no backend framework.
Changes should therefore be conservative, explicit, and easy to inspect in one file.

---

## Forbidden Patterns

- Turning the static server into a pseudo-framework without a real product need
- Removing the path normalization and static-root prefix check from `server.js`
- Adding heavy abstractions for one or two lines of filesystem logic
- Introducing imaginary backend layers in the docs that do not exist in the codebase
- Logging every request by default in a small content-serving app

---

## Required Patterns

- Keep file-serving logic easy to trace from request to response
- Preserve explicit MIME type mapping for served assets
- Preserve safe path handling before reading from disk
- Return clear HTTP status codes for forbidden, missing, and unexpected file errors
- Keep backend behavior aligned with the generated frontend output it previews locally

---

## Testing Requirements

There is no automated backend test suite today.
Minimum manual checks for backend-related changes:

- run `npm start`
- open `/` and at least one lesson page from the generated site in the browser
- verify CSS and image assets still load
- verify missing paths return a non-200 response
- verify path traversal attempts are still blocked

---

## Code Review Checklist

- Does the change keep the backend scoped to its actual job?
- Is `server.js` still easy to understand top to bottom?
- Are generated `_site/` files still being served correctly in local preview?
- Are MIME types still correct for any new asset type that was introduced?
- Are 403, 404, and 500 cases still handled explicitly?

Examples to compare against:
- `server.js`
- `package.json`
- `netlify.toml`
