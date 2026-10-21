# Quickstart Validation Guide: Customer Home Page

**Feature**: Customer Home Page (`001-customer-home-page`)

## Prerequisites
- Node.js v24+ installed
- Dependencies installed (`npm install`)

## Running Validation Scenarios

### 1. Run Unit Tests (TDD Verification)
Execute unit tests for home page components:
```bash
npm run test -- tests/unit/home.test.tsx
```
*Expected Outcome*: Tests run and fail initially (Red phase of TDD), then pass once implementation is complete.

### 2. Run E2E Tests (Playwright)
Execute end-to-end verification of the home page:
```bash
npx playwright test tests/e2e/home.spec.ts
```
*Expected Outcome*: Browser navigates to home page, verifies hero banner, service cards, and navigation CTAs.

### 3. Type Checking & Linting
Verify TypeScript types and code lint:
```bash
npm run type-check
npm run lint
```
*Expected Outcome*: Zero type errors or lint warnings.
