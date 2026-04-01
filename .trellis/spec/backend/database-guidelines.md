# Database Guidelines

> Database patterns and conventions for this project.

---

## Overview

This project does not use a database.
There is no ORM, migration tool, query builder, or persistence layer in the repository.

All site content is stored directly in static HTML files, and learner progress is stored in the browser with `localStorage`, not on the server.

---

## Query Patterns

There are no backend queries.
If content needs to change, edit the source files in `public/` instead of looking for a data-access layer.

Current data patterns are:
- static page content embedded in HTML
- small client-side arrays embedded in page scripts
- browser-side progress state in `localStorage`

---

## Migrations

There are no database migrations in this repository.
Schema evolution does not apply to the current architecture.

If the project later introduces a database, this guideline must be rewritten with the actual toolchain and migration workflow.

---

## Naming Conventions

No database naming conventions exist yet because there are no tables, columns, indexes, or migration files.

Do not document hypothetical conventions here.
Document them only after a real persistence layer is added.

---

## Common Mistakes

- Assuming there is a backend data store because the project has a Node server
- Trying to add server persistence for content that is still managed as static files
- Documenting imagined ORM or migration rules that do not exist in the codebase
- Confusing browser `localStorage` with backend persistence
