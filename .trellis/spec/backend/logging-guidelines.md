# Logging Guidelines

> How logging is done in this project.

---

## Overview

Logging is currently minimal.
The server logs a single startup message with `console.log(...)` when it begins listening.
There is no structured logging library and no request-level logging in the codebase today.

---

## Log Levels

Only informal info-style logging exists right now:

- startup confirmation in `server.js:53`

There are no project-specific `debug`, `warn`, or `error` logging conventions yet.
If additional logging is added, keep it sparse and directly useful.

---

## Structured Logging

There is no structured logging format at the moment.
Do not pretend a JSON logger or tracing system already exists.

For current-style changes, plain readable log messages are acceptable if they stay minimal and do not spam the console.

---

## What to Log

In the current architecture, only important lifecycle or operational events should be logged, such as:

- server startup
- fatal server initialization problems
- exceptional cases that would otherwise be invisible during local debugging

Because the app is a static-site server, routine successful file reads do not need logs.

---

## What NOT to Log

- every static file request
- large response payloads or file contents
- secrets from environment variables
- browser `localStorage` content or user-specific progress data
- noisy debug output that obscures actual server issues
