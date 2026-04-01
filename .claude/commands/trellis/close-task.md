# Close Task - Archive, Cleanup, Commit, Record

Use this command when a development task is truly finished and you want to do the full Trellis closeout in one pass.

**Goal**: turn a completed task into a clean, recorded, committed state.

---

## What this command does

1. Check task status and archive completed task(s)
2. Inspect generated git worktrees and remove unused temporary worktrees
3. Check whether specs / command docs need updates
4. Create the code commit with a proper message
5. Record the session in Trellis journal

---

## Preconditions

Before running this command:

- The implementation is actually done
- You have already reviewed the work
- You are ready to commit code

If the work is not done yet, do **not** archive the task.

---

## Steps

### 1. Check context and task completion

```bash
python3 ./.trellis/scripts/get_context.py --mode record
python3 ./.trellis/scripts/task.py list
```

Judge completion by real work status, not only by `task.json` status:

- Work implemented?
- Acceptance criteria satisfied?
- Ready to ship or hand off?

If yes:

```bash
python3 ./.trellis/scripts/task.py finish
python3 ./.trellis/scripts/task.py archive <task-name> --no-commit
```

If not complete:
- stop here
- explain what is still missing
- do not archive

### 2. Check and clean worktrees

List worktrees:

```bash
git worktree list --porcelain
```

For each non-primary worktree:
- check whether it was only a temporary review / check / implement workspace
- check whether it has uncommitted work or unique commits
- only remove it if it is clearly disposable

Examples:

```bash
git -C <worktree-path> status --short
git -C <worktree-path> log --oneline --decorate -5
git worktree remove --force <worktree-path>
```

Rules:
- never remove the main worktree
- never remove a worktree with valuable uncommitted work unless explicitly confirmed safe
- if a worktree was only created for temporary checking and is clean, remove it

### 3. Check whether specs need updates

Review whether this task changed any reusable rules, page-generation logic, or workflow expectations.

At minimum check:
- `.trellis/spec/frontend/`
- `.trellis/spec/backend/`
- `.trellis/spec/guides/`
- related slash command docs in `.claude/commands/` and `.cursor/commands/`

Key question:

> Did this task reveal a reusable rule, a hidden pitfall, or a better workflow that future runs should follow?

If yes:
- update the relevant spec or command doc before commit

If no:
- explicitly state that no spec update is needed

### 4. Review git state and commit code

Inspect changes first:

```bash
git status
git diff --staged
git diff
git log --oneline -10
```

Then stage only the intended files.

Do **not** commit unrelated screenshots, temp files, or accidental artifacts.

Create a commit message that reflects:
- what changed
- why it changed
- the repo's existing commit style

Examples:
- `feat(site): add RTK install guide and refine generate-page rules`
- `fix(ui): correct sidebar search labels`
- `chore(workflow): update task closeout guidance`

### 5. Record the session

After the code commit is done, append the work to Trellis journal:

```bash
python3 ./.trellis/scripts/add_session.py \
  --title "Session Title" \
  --commit "<commit-hash>" \
  --summary "Brief summary" \
  --no-commit
```

Then commit the journal update separately if needed, following repo style.

Common journal commit style:

```bash
chore: record journal
```

---

## Output Format

When finished, report using this structure:

## Task Closeout Result

### Task
- Archived task: `<task-name>` / `none`
- Reason if not archived: `<reason or n/a>`

### Worktree Cleanup
- Removed worktrees:
  - `<path>`
- Kept worktrees:
  - `<path>: <reason>`

### Spec Review
- Spec updated: `<yes/no>`
- Files:
  - `<path>`

### Commits
- Code commit: `<hash> <message>`
- Journal commit: `<hash> <message>` / `not created`

### Notes
- Uncommitted leftovers:
  - `<path>`
- Follow-up actions:
  - `<item or none>`

---

## Core Principle

> Finish the task in the repo, not just in your head.
>
> A task is only truly closed when the task state, worktree state, specs, commits, and session record are all consistent.
