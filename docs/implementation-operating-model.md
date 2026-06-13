# Implementation Operating Model

## Summary

Implementation should proceed through phase-based delivery with visible status tracking, explicit validation gates, and a lightweight Git branching strategy. Progress is tracked in chat and in `docs/implementation-tracker.md`.

## Branching Strategy

- Use one feature branch per major milestone.
- Current implementation branch: `feature/mvp-demo-loop`.
- Keep each phase as a logical commit or small set of commits when possible.
- Do not commit broken intermediate states unless explicitly marked as WIP.
- Inspect current Git status before starting each phase.
- Treat `toys-collectibles-app` as the active app repo unless a top-level monorepo is created later.
- Never overwrite or revert user changes without explicit permission.
- Before merge, summarize completed phases, test results, and known limitations.

## Phase Tracking

Use these statuses:

- `Not Started`
- `In Progress`
- `Blocked`
- `Needs Validation`
- `Complete`

Each phase should record:

- Objective
- Deliverables
- Status
- Required validation
- Validation result
- Notes or risks

## Agent Expectations

- Before editing, inspect relevant files and current branch/status.
- Explain the phase being started before file edits.
- Keep changes scoped to the current phase.
- Preserve existing user-created work and avoid unrelated refactors.
- Prefer existing Expo Router and local component patterns where reasonable.
- Check Expo v56 docs before implementation because `toys-collectibles-app/AGENTS.md` requires it.
- Use local mock data and mocked AI for the first milestone.
- Do not wire Clerk, Neon, R2, Vercel, or OpenAI in the first demo milestone.
- Keep UI iPhone-first, polished, and free of starter Expo content.
- Keep future backend shape in typed interfaces, but avoid overbuilding infrastructure.

## Validation Gates

- Add an automated test harness appropriate for the milestone.
- Include coverage for catalog rendering, item detail, search/filter, add-item flow, and AI review-before-save behavior.
- Run TypeScript checks.
- Run Expo lint.
- Run the test suite.
- Launch the app and perform visual QA on an iPhone-sized viewport.
- Confirm no visible Expo starter content remains.
- Confirm the add-item flow completes end to end using mocked AI.

## Completion Standard

A phase is `Complete` only when its deliverables exist, relevant checks pass, and expected visual/user-flow behavior has been inspected. If checks cannot run because tooling is missing or blocked, mark the phase `Blocked` or `Needs Validation` with the exact reason.
