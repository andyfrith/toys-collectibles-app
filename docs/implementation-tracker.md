# Implementation Tracker

## Current Branch

- App repo: `toys-collectibles-app`
- Branch: `feature/mvp-demo-loop`
- Reconciled from prior uncommitted implementation work started on `master`

## Phase Status

| Phase | Status | Deliverables | Validation | Notes |
|---|---|---|---|---|
| Branch setup | Complete | Created `feature/mvp-demo-loop` preserving existing uncommitted changes | `git branch --show-current` | Work had originally started on `master` |
| Planning docs | Complete | Added PRD, operating model, and tracker docs | Files exist in `docs/` | Strategy doc already existed |
| Phase 1: App shell + visual foundation | Needs Validation | Starter screens mostly replaced; premium archive direction started | Run lint/type/app preview | Existing work appears partial |
| Phase 2: Local data + 10 demo items | Complete | Local catalog model expanded with images, AI analysis, metadata suggestions, and 10 balanced demo items | `npx tsc --noEmit`; `npm run lint`; `npx expo export --platform web --output-dir dist` | Export generated 10 concrete item routes |
| Phase 3: Catalog/detail/search | In Progress | Catalog and item detail exist | Search/filter not yet present | UI currently says search lands later |
| Phase 4: Add-item mocked AI flow | In Progress | Capture screen and mocked suggestions exist | Needs interactive flow | Buttons appear static |
| Phase 5: Review-before-save | In Progress | Review-before-save copy exists | Needs functional acceptance/edit/save behavior | Behavior not yet proven |
| Phase 6: Tests + validation + visual QA | Not Started | Test harness and checks | Lint, type, tests, visual QA | No test harness found |
| Phase 7: Case-study outline | Not Started | Web case-study outline doc | Document review | Not created yet |

## Reconciliation Notes

- The implementation began before the PRD and operating model were written to repo files.
- Current app work is preserved; no code was reverted.
- Next work should continue from this tracker and update statuses as phases are completed.

## Known Gaps Against PRD

- Search and filter must be implemented locally.
- Add-item flow must become interactive rather than static.
- AI suggestions must require explicit accept/edit action before save.
- A full test harness must be added.
- Visual QA must be performed on an iPhone-sized viewport.
- Case-study outline must be created.

## Phase 2 Completion Notes

- Local model now includes item images, AI analysis records, metadata suggestions, acquisition/storage fields, notes, favorites, collections, tags, and timestamps.
- Demo dataset now contains 10 items across vintage toys, designer toys, art objects, paper collectibles, memorabilia, miniatures, and scale models.
- Item detail now reads from the richer local model and displays core metadata, collection story, notes, AI confidence, and AI observations.
