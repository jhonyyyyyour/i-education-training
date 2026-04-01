# Merge main styles into current branch

## Goal
Create a new branch from the current feature branch, integrate the latest changes from `main`, preserve existing Trellis-related work, and reconcile style updates so the result follows the newer `main` direction while keeping current-branch functionality intact.

## Requirements
- Create a new integration branch from the current branch instead of working directly on the current branch.
- Integrate the latest changes from `main`.
- Prevent any Trellis-related additions on the current branch from being lost during integration.
- Prefer the new styling direction from `main` as the baseline.
- If the `main` changes introduce regressions or visual/behavior bugs, fix them during integration.
- Update relevant spec/guideline files to reflect the final styling or workflow changes.

## Open Questions
- None.

## Confirmed Decisions
- Use `merge main into a new branch created from the current branch` as the integration strategy.
- Use branch name `merge/main-style-sync`.
- When style conflicts occur, use `main` as the primary reference, keeping only Trellis-essential content and clearly better local implementations.

## Final Requirement Summary
- Start from the current branch and create `merge/main-style-sync`.
- Merge the latest `main` into that new branch.
- Protect Trellis-related additions from being lost.
- Use the latest `main` style direction as the baseline.
- Fix any regressions or bugs found during reconciliation.
- Update relevant spec documents to reflect the final result.

## Acceptance Criteria
- [ ] A new branch is created from the current branch.
- [ ] Latest `main` changes are integrated without losing Trellis-related work.
- [ ] Style conflicts are reconciled with `main` as reference.
- [ ] Regressions/bugs introduced by the integrated style changes are fixed.
- [ ] Relevant spec docs are updated to match the final result.

## Technical Notes
- This task likely touches frontend files and Trellis/project docs.
- Need to inspect current branch vs `main` diff before implementing.
- Need to confirm the exact branch/integration policy before running git operations.
