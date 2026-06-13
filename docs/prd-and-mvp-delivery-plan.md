# Toys & Collectibles PRD + MVP Delivery Plan

## Summary

Build an iPhone-first React Native/Expo portfolio app that lets collectors browse, view, and add treasured toys, art pieces, and collectibles through a polished "premium archive" experience. The first milestone uses local demo data and mocked AI metadata suggestions to prove the core product loop before backend integration.

The MVP should demonstrate product strategy, AI product judgment, UX craft, and engineering readiness for an AI/Product leadership audience.

## Locked Product Decisions

- Primary audience: AI/Product leaders
- First build goal: polished catalog demo loop
- Platform priority: iPhone first
- Demo data: 10 real-plus-curated items across toys, art pieces, and collectibles
- Metadata depth: balanced metadata
- AI behavior: mocked AI suggestions require explicit user review before save
- Auth target: Clerk email magic link in a later backend milestone
- Backend target: Vercel/Next.js API routes, Neon Postgres, Cloudflare R2, Clerk, and OpenAI
- Case study timing: outline now, build web case study after the app loop is visible

## MVP Requirements

- Replace visible Expo starter content with the Toys & Collectibles experience.
- Show a catalog grid/list of 10 demo items.
- Show item detail with image, category, maker/brand, era/year, condition, tags, storage location, notes/story, and AI summary.
- Support local search/filter across title, category, tags, maker/brand, and notes.
- Provide an add-item flow that simulates image selection/upload, mocked analysis, AI suggestion review, and save confirmation.
- Require explicit user action before AI suggestions become trusted item metadata.
- Keep the first milestone local-data driven and do not wire real auth, uploads, database persistence, or live AI calls.

## Implementation Blueprint

- Use the existing `toys-collectibles-app` Expo Router scaffold.
- Shape local TypeScript models around future backend entities: `Item`, `ItemImage`, `Collection`, `Category`, `Tag`, `AiAnalysis`, and `MetadataSuggestion`.
- Build reusable UI components for catalog cards, item detail sections, metadata chips, search/filter controls, AI suggestion rows, and add-item flow states.
- Prioritize iPhone layout quality while keeping web renderable for inspection.
- Use simple navigation for catalog/home, capture/add item, item detail, and supporting placeholder screens.
- Create a parallel case-study outline that captures the opportunity, user problem, AI strategy, human review model, architecture roadmap, and demo walkthrough.

## Future Backend Plan

- Clerk email magic-link authentication.
- Next.js API routes deployed on Vercel as backend and future web case-study surface.
- Neon Postgres for relational catalog data.
- Cloudflare R2 for item photos and optimized variants.
- OpenAI image analysis called only from server-side API routes.
- Future API boundaries: list/search items, create item, update item, upload image, analyze image, accept/reject AI suggestions.

## Test Plan

- Catalog renders 10 demo items with no Expo starter content.
- Item detail shows image, metadata, tags, notes/story, and AI summary.
- Add-item flow completes through mocked image selection, mocked analysis, AI review, and save confirmation.
- AI suggestions are not final metadata until accepted or edited.
- Search/filter returns expected items by title, category, tags, maker/brand, and notes.
- iPhone-sized layouts have no overlapping text, cramped controls, or broken navigation.
- Expo lint, TypeScript checks, and the test suite pass.

## Assumptions

- First implementation milestone optimizes for product polish and demo credibility, not backend completeness.
- The existing Expo v56 scaffold remains the app base.
- `toys-collectibles-app/AGENTS.md` requires checking Expo v56 docs before code changes.
- Live OpenAI model selection will be confirmed from official OpenAI docs during the backend/AI milestone.
- The web case study is outlined now but built after the app demo loop is visible.
