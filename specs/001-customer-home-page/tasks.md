---
description: "Task list for Customer Home Page feature implementation"
---

# Tasks: Customer Home Page

**Input**: Design documents from `/specs/001-customer-home-page/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: TDD approach enforced: Write tests first and ensure they fail before implementing functionality.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Initialize Next.js project structure per implementation plan in src/app/
- [x] T002 [P] Configure Tailwind CSS and design tokens in tailwind.config.js
- [x] T003 [P] Configure Vitest and Playwright test environments in vitest.config.ts and playwright.config.ts

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure and shared utilities that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T004 Implement HTML sanitization utility using DOMPurify in src/lib/sanitize.ts
- [x] T005 [P] Create shared Navbar component in src/components/Navbar.tsx
- [x] T006 [P] Create shared Footer component in src/components/Footer.tsx
- [x] T007 Setup root layout with Navbar and Footer in src/app/layout.tsx

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Explore PetCare Services & Value Proposition (Priority: P1) 🎯 MVP

**Goal**: Implement the welcoming hero banner and service overview grid (Grooming, Veterinary Checkups, Boarding, Day-Care) with pricing indicators.

**Independent Test**: Load the home page root URL, verify hero banner, service categories overview, pricing highlights, and navigation links.

### Tests for User Story 1 (TDD - Write FIRST, ensure FAIL) ⚠️

- [x] T008 [P] [US1] Write unit test for Hero banner rendering and CTA presence in tests/unit/Hero.test.tsx
- [x] T009 [P] [US1] Write unit test for Service overview cards and pricing display in tests/unit/ServiceOverview.test.tsx

### Implementation for User Story 1

- [x] T010 [P] [US1] Create ServiceSummary data model / types in src/modules/services/types.ts
- [x] T011 [P] [US1] Create ServiceCard component in src/components/ServiceCard.tsx with sanitized descriptions
- [x] T012 [US1] Implement HeroSection component in src/components/HeroSection.tsx
- [x] T013 [US1] Implement ServiceOverview section in src/components/ServiceOverview.tsx (depends on T011)
- [x] T014 [US1] Integrate Hero and ServiceOverview into home page route in src/app/page.tsx

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Quick Access to Online Booking & Authentication (Priority: P2)

**Goal**: Add interactive booking CTAs and authentication navigation linking to booking and auth portal flows.

**Independent Test**: Click "Book Now" or "Sign In" CTA buttons on the home page and verify correct redirection.

### Tests for User Story 2 (TDD - Write FIRST, ensure FAIL) ⚠️

- [x] T015 [P] [US2] Write unit test for CTA button interactions and navigation links in tests/unit/HomeCTAs.test.tsx

### Implementation for User Story 2

- [x] T016 [US2] Update Navbar component in src/components/Navbar.tsx to include Sign In / Register links
- [x] T017 [US2] Update HeroSection component in src/components/HeroSection.tsx with working "Book Now" CTA link to booking flow
- [x] T018 [US2] Implement Playwright E2E test verifying home page navigation flows in tests/e2e/home.spec.ts

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Customer Testimonials & Trust Indicators (Priority: P3)

**Goal**: Implement customer testimonials and social proof section displaying authentic reviews and ratings.

**Independent Test**: Scroll to the social proof section and verify customer reviews, ratings, and pet success stories.

### Tests for User Story 3 (TDD - Write FIRST, ensure FAIL) ⚠️

- [x] T019 [P] [US3] Write unit test for Testimonial section rendering in tests/unit/TestimonialSection.test.tsx

### Implementation for User Story 3

- [x] T020 [P] [US3] Create Testimonial data types in src/modules/services/types.ts
- [x] T021 [P] [US3] Create TestimonialCard component in src/components/TestimonialCard.tsx with sanitized review comments
- [x] T022 [US3] Implement TestimonialSection component in src/components/TestimonialSection.tsx (depends on T021)
- [x] T023 [US3] Add TestimonialSection to home page route in src/app/page.tsx

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Accessibility audit, responsiveness verification across viewports, and quickstart validation.

- [x] T024 [P] Perform accessibility (a11y) audit and aria-label checks across home page components
- [x] T025 [P] Verify responsive layout across mobile (375px), tablet (768px), and desktop (1280px) viewports
- [x] T026 Run quickstart.md validation guide and verify all test suites pass
