# Backend Development Guidelines

> Best practices for backend development in this project.

---

## Overview

The backend in this repository is intentionally minimal: a single CommonJS Node.js server (`server.js`) that serves static files from `public/`.

There are no API routes, controllers/services, databases, or background jobs. The guides in this folder document the **current reality** so future changes do not drift into an imagined framework architecture.

---

## Guidelines Index

| Guide | Description | Status |
|-------|-------------|--------|
| [Directory Structure](./directory-structure.md) | Module organization and file layout | Filled |
| [Database Guidelines](./database-guidelines.md) | ORM patterns, queries, migrations | Filled (N/A: no DB) |
| [Error Handling](./error-handling.md) | Error types, handling strategies | Filled |
| [Quality Guidelines](./quality-guidelines.md) | Code standards, forbidden patterns | Filled |
| [Logging Guidelines](./logging-guidelines.md) | Structured logging, log levels | Filled |

---

## How to Use These Guidelines

- Keep changes to `server.js` conservative and easy to trace top-to-bottom.
- Prefer explicit guards (path normalization, prefix checks) over abstractions.
- If the project later introduces APIs or persistence, update these docs to reflect the real toolchain and contracts.

---

**Language**: All documentation should be written in **English**.
