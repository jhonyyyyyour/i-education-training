---
name: close-task
description: Perform the Trellis task closeout flow for this repo: check task completion, archive the task if appropriate, review worktrees, inspect whether specs or command docs need updates, commit the code, and record the session. Use only when the work is actually finished and ready for closeout.
---

# Close task

Use this skill when a Trellis task is truly finished and ready to be archived, committed, and recorded.

## Invocation

In Codex, invoke this skill with:

```text
$close-task
```

## Preconditions

Only use this skill when:

- the implementation is done
- the work has been reviewed
- tests or checks have been run as needed
- you are ready to archive/commit the result

If the work is not actually done, stop and explain what is still missing.

## Required workflow

### 1. Check context and task completion

Run the Trellis context and task commands, then judge completion from real work status rather than only task metadata.

At minimum:

- `python3 ./.trellis/scripts/get_context.py --mode record`
- `python3 ./.trellis/scripts/task.py list`

If the task is truly complete, finish and archive it without committing yet.

### 2. Review worktrees

Inspect git worktrees and remove only clearly disposable temporary worktrees.

Rules:

- never remove the main worktree
- never remove a worktree with valuable uncommitted work unless explicitly confirmed safe
- if a temporary worktree is clean and disposable, it can be removed

### 3. Review specs and command docs

Check whether the completed work changed reusable rules or workflow expectations.

At minimum inspect:

- `.trellis/spec/frontend/`
- `.trellis/spec/backend/`
- `.trellis/spec/guides/`
- related Trellis command docs in `.claude/commands/` and `.cursor/commands/`
- related shared Codex skills in `.agents/skills/` if this task changed command behavior

If a reusable rule changed, update the relevant docs before commit.

### 4. Commit carefully

Inspect git state first, then stage only intended files.

Do not commit unrelated screenshots, temp files, or accidental artifacts.

Follow repo commit style and describe what changed and why.

### 5. Record the session

After the code commit, record the session in Trellis journal.

Prefer passing a content file instead of relying on implicit stdin in non-interactive flows.

## Output format

Report:

- archived task name or `none`
- removed/kept worktrees
- whether specs were updated and which files changed
- code commit and journal commit if created
- leftovers or follow-up items
