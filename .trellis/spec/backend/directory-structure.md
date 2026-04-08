# Directory Structure

> How backend code is organized in this project.

---

## Overview

This repository does not have a layered backend such as routes, controllers, services, or models.
The backend is a single Node.js static file server whose only job is to preview generated static files locally.

Because the backend is intentionally minimal, keep backend changes simple and colocated unless the architecture changes for real.

---

## Directory Layout

```text
server.js          # Static file server entry point
package.json       # Runtime metadata and npm scripts
site/              # Eleventy source for migrated pages, layouts, includes, and data
_site/             # Generated static output served for local preview and deployment
public/            # Legacy page reference files and shared asset source for passthrough copy
netlify.toml       # Alternative deployment target for static publishing
```

There is no `src/`, `api/`, `routes/`, or `db/` directory in the current backend.

---

## Module Organization

Current backend responsibilities in `server.js`:

- define host, port, and preview root
- map file extensions to MIME types
- normalize the request path
- block path traversal with a prefix check
- read and return the target file
- return simple plain-text error responses for 403, 404, and 500 cases

If backend behavior remains static-file preview, keep new logic small and close to the existing flow.
Do not invent a service layer or API module structure unless the project actually starts exposing backend features.

---

## Naming Conventions

- Entry file is `server.js`
- Variables use straightforward names such as `siteRoot`, `mimeTypes`, `requestPath`, `safePath`, and `filePath`
- Helper functions should stay short and literal, similar to `sendFile`

Prefer clarity over abstraction.

---

## Examples

- Static file serving flow: `server.js`
- Generated frontend directory served in local preview: `_site/index.html`, `_site/styles.css`
- Deployment config aligned with generated output: `netlify.toml`
