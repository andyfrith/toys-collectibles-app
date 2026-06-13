# Toys & Collectibles Initial Strategy Plan

## 1. Product Vision

Toys & Collectibles is a mobile-first personal catalog for treasured toys, art pieces, memorabilia, and collectibles. The experience should feel more like opening a beautifully curated private collection than managing an inventory spreadsheet.

The product helps users capture, organize, search, and rediscover their possessions with AI-assisted metadata, visual recognition, collection storytelling, and thoughtful navigation. For the portfolio, the project should demonstrate product strategy, AI product thinking, mobile engineering, design craft, data modeling, cloud integration, and delivery discipline.

## 2. Portfolio Objective

This project should become a polished case study that shows the full journey from inception to delivery:

- Product discovery and user-centered strategy
- Mobile app design and React Native implementation
- AI image analysis and metadata enrichment
- Backend architecture and data persistence
- Search, filtering, and collection navigation
- Security, privacy, and responsible AI considerations
- Metrics, roadmap, release planning, and delivery tradeoffs
- Presentation-ready storytelling for product management and engineering audiences

The final portfolio artifact should include both the working application and an associated web case study that explains decisions, tradeoffs, system design, and measurable outcomes.

Current strategic decisions:

- Primary portfolio audience: AI/Product leaders
- Demo approach: real personal collection items plus curated demo entries
- Design direction: premium archive
- Backend posture: real backend MVP
- Core backend stack: Neon Postgres, Clerk, Cloudflare R2, Vercel, and Next.js
- First AI scope: metadata assistance, not value or rarity estimation
- Portfolio artifact: web case study

## 3. Target Users

Primary user:

- A collector who owns meaningful physical items and wants a beautiful, reliable way to document and revisit them.

Secondary users:

- Hobbyists cataloging toys, figures, models, books, records, cards, props, or art pieces
- Insurance-minded owners documenting condition and provenance
- Resellers or traders who need structured item metadata
- Families preserving personal heirlooms and stories

## 4. Core User Promise

Users can photograph an item, quickly turn it into a rich catalog entry, and later find it through natural browsing, search, tags, collections, or AI-generated attributes.

The experience should make the user feel:

- Proud of their collection
- Confident their items are documented
- Delighted by useful AI insights
- In control of the metadata
- Motivated to keep adding items

## 5. MVP Experience

The first meaningful release should focus on a complete capture-to-catalog loop.

MVP capabilities:

- Create an account or use a local-first demo mode
- Add an item with camera or photo library upload
- Store one or more item images
- Add/edit core metadata:
  - Title
  - Category
  - Brand/maker/artist
  - Year or era
  - Condition
  - Estimated value
  - Acquisition date
  - Location/storage
  - Notes/story
  - Tags
- Run AI image analysis to suggest:
  - Category
  - Object description
  - Visible text or markings
  - Materials/colors
  - Possible brand/franchise/style
  - Confidence levels
  - Follow-up questions for missing details
- Browse collection by grid/list
- Search and filter by category, tags, title, condition, and AI-derived attributes
- View a rich item detail screen
- Edit and override AI suggestions

MVP success criterion:

- A user can catalog 10 items, enrich them with AI, search for them, and feel the app is worth continuing to use.

## 6. Differentiated Experience

The app should avoid feeling like a generic CRUD database. The memorable parts should come from the way it treats each item as something with visual identity and personal meaning.

Potential differentiators:

- "Collection shelf" visual browsing with tactile, gallery-like presentation
- AI-generated item summaries written in a collector-friendly voice
- Metadata confidence indicators that invite review rather than pretending certainty
- Timeline of acquisition and collection growth
- Curated collection views such as franchises, artists, eras, display locations, or emotional favorites
- Natural-language search such as "red robots from the 1980s" or "items I bought in Japan"
- Story prompts that help users capture why an object matters
- Exportable collection report for insurance, resale, or sharing

## 7. AI Product Strategy

AI should assist, not take ownership away from the collector.

Principles:

- Suggestions are editable and clearly labeled
- Confidence is visible where useful
- AI should ask clarifying questions when image evidence is insufficient
- Avoid overclaiming provenance, rarity, or value without sources
- The user remains the final authority on item identity and metadata

AI analysis pipeline:

1. User uploads image.
2. Backend stores original image and generates optimized variants.
3. Vision model analyzes the image.
4. Structured metadata suggestions are returned.
5. App presents suggestions for user approval.
6. Approved metadata is saved separately from raw AI suggestions.
7. User edits improve the final item record.

Possible AI outputs:

- Short description
- Suggested title
- Category and subcategory
- Visual attributes
- Text detected in image
- Condition observations
- Possible franchise/brand/artist
- Suggested tags
- Missing metadata questions

Advanced AI opportunities:

- Similar item grouping
- Duplicate detection
- Natural-language search
- Rarity/value research with sourced web lookups
- Collection summaries
- Presentation-ready item stories

## 8. Data Model Direction

Initial entities:

- User
- Item
- ItemImage
- Category
- Tag
- Collection
- AiAnalysis
- MetadataSuggestion
- AuditEvent

Item fields:

- id
- ownerId
- title
- description
- categoryId
- collectionId
- maker
- brand
- franchise
- year
- era
- condition
- estimatedValue
- acquisitionDate
- acquisitionSource
- storageLocation
- notes
- story
- favorite
- createdAt
- updatedAt

AI analysis fields:

- id
- itemId
- imageId
- model
- promptVersion
- status
- rawResponse
- structuredSuggestions
- confidence
- createdAt

This separation keeps AI suggestions auditable and lets the product demonstrate mature AI engineering practice.

## 9. Technical Architecture Direction

Recommended stack for a strong portfolio build:

- Mobile app: React Native with Expo
- Language: TypeScript
- Navigation: Expo Router
- UI: Custom design system with reusable components
- State/data: TanStack Query plus lightweight local state
- Backend/API: Next.js API routes deployed on Vercel
- Database: Neon Postgres
- Authentication: Clerk
- Storage: Cloudflare R2 for item photos and optimized variants
- AI: OpenAI vision-capable model for structured image analysis through server-side API routes
- Search: Postgres full-text search for MVP, vector/hybrid search later
- Testing: Jest, React Native Testing Library, Playwright or Detox where useful

Architecture posture:

- Build the MVP with real backend persistence
- Keep AI calls server-side
- Store prompt versions and structured outputs
- Keep the client responsive during uploads and analysis
- Design for offline tolerance later, but do not make offline-first a blocker for MVP
- Use Vercel + Next.js as both the web case study host and backend/API surface

## 10. Product Design Direction

Design personality:

- Warm, tactile, curated, modern
- More gallery and archive than admin panel
- Fast enough for repeated cataloging sessions
- Calm enough to make valuable items feel respected

Core screens:

- Home / collection overview
- Add item capture flow
- AI review and metadata confirmation
- Catalog grid
- Search and filters
- Item detail
- Edit item
- Collections/categories
- Settings/account

Signature interaction:

- The add-item flow should be the centerpiece: photo capture, analysis progress, review, and final item reveal should feel smooth and satisfying.

## 11. Delivery Roadmap

Phase 0: Strategy and Foundations

- Define product goals and audience
- Confirm MVP boundaries
- Choose technical stack
- Define data model
- Create presentation narrative outline

Phase 1: Prototype

- React Native app scaffold
- Navigation shell
- Mock catalog data
- Visual direction
- Item detail and grid views
- Add-item flow with mocked AI response

Phase 2: Backend and Uploads

- Clerk authentication
- Neon database schema
- Cloudflare R2 image upload/storage
- Vercel/Next.js API routes
- Item CRUD
- Real catalog persistence

Phase 3: AI Enrichment

- Server-side image analysis endpoint
- Structured metadata extraction
- AI suggestion review UI
- Prompt/version logging
- Error and fallback states

Phase 4: Search and Collection Experience

- Search and filters
- Category and tag browsing
- Favorites/collections
- Natural-language search exploration

Phase 5: Polish and Portfolio Packaging

- Visual refinement
- Accessibility pass
- Performance pass
- Tests
- Demo dataset
- Web case study
- Demo narrative

## 12. Presentation Storyline

Recommended web case study arc:

1. The opportunity: collectors have meaningful objects but fragmented documentation.
2. The product vision: a beautiful AI-assisted personal collection catalog.
3. Target users and jobs to be done.
4. MVP scope and success metrics.
5. Experience design: capture, enrich, browse, rediscover.
6. AI strategy: assistive metadata, confidence, human review.
7. System architecture.
8. Data model and prompt/version governance.
9. Delivery roadmap and execution plan.
10. Demo walkthrough.
11. Product metrics and future roadmap.
12. Reflection: what this demonstrates about AI product management and engineering.

## 13. Success Metrics

Product metrics:

- Items added per user
- Upload completion rate
- AI suggestion acceptance rate
- Time to create first item
- Search success rate
- Repeat cataloging sessions
- Items with complete metadata

Portfolio metrics:

- Clear product strategy
- Working end-to-end demo
- Strong visual design
- Real AI integration
- Responsible AI handling
- Solid architecture explanation
- Presentation tells a complete inception-to-delivery story

## 14. Key Risks

- AI misidentifies items or invents unsupported details
- Upload and analysis latency hurts the experience
- Metadata model becomes too complex too early
- App feels like inventory software rather than a personal collection experience
- Image storage costs grow without optimization
- Value/rarity claims create trust or liability issues
- Scope expands before the capture-to-catalog loop is excellent

Mitigation:

- Human-in-the-loop review
- Confidence labeling
- Async processing states
- Image compression and variants
- MVP metadata limits
- Avoid unsourced value claims in early releases
- Keep the first release focused on the core loop

## 15. Answered Discovery Decisions

These decisions have been made and should guide implementation:

1. Primary portfolio audience: AI/Product leaders
2. Demo data: real personal collection plus curated demo entries
3. Demo category mix: toys, art pieces, and collectibles
4. Backend posture: real backend MVP
5. Backend stack: Neon Postgres, Clerk, Cloudflare R2, Vercel, and Next.js
6. First AI scope: metadata assistance only
7. Visual direction: premium archive
8. Presentation format: web case study

## 16. Immediate Next Decisions

Remaining next decisions:

1. Confirm whether AI suggestions require explicit review before saving.
2. Confirm the MVP auth flow, likely Clerk email magic link.
3. Confirm monorepo structure for mobile app, web case study, API routes, and shared types.
4. Define the first 10 demo items and metadata completeness target.
5. Create the web case study outline in parallel with the app plan.

Recommended initial choice:

- React Native with Expo
- Neon Postgres for relational data
- Clerk for authentication
- Cloudflare R2 for image storage
- Vercel + Next.js for backend API and web case study
- OpenAI image analysis through a server-side API
- Mocked AI responses in the first prototype
- Real image uploads by Phase 2
- Web case study narrative developed alongside delivery milestones
