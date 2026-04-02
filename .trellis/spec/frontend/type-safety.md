# Type Safety

> Type safety patterns in this project.

---

## Overview

This repository does not use TypeScript.
Frontend code is plain HTML, CSS, and inline JavaScript. The backend is plain CommonJS JavaScript.

Type safety in practice currently means keeping data shapes simple, hardcoded, and easy to inspect.

---

## Type Organization

There are no separate type definition files.
Data structures are usually inline arrays or objects inside page scripts.

Examples:
- centralized content data in `site/_data/contentIndex.js`
- progress data stored as a JSON array in `localStorage`

When adding data structures, keep them small and obvious enough that a reader can infer the shape immediately from the code.

---

## Validation

There is no runtime validation library such as Zod or Yup.
Current validation is lightweight and manual:

- read from `localStorage`
- fall back to a known default such as `[]`
- guard simple branches with explicit checks

Examples:
- `JSON.parse(localStorage.getItem(key) || '[]')` in lesson pages
- backend path guard in `server.js` before serving a file

---

## Common Patterns

- Prefer explicit object fields over deeply nested dynamic data
- Keep browser-side data arrays literal and colocated with the page that uses them
- Use defensive defaults for browser storage and file serving
- Prefer small helper functions over generic utilities for one-off logic

---

## Forbidden Patterns

- Writing docs that assume TypeScript is already part of the stack
- Introducing pseudo-types in comments that drift from the actual code
- Adding complex schema layers for simple static content
- Using unchecked dynamic values from `localStorage` or request paths without a safe default or normalization step
