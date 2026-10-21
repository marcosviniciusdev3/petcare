# Research: Customer Home Page

**Feature**: Customer Home Page (`001-customer-home-page`)

## Research Topics & Decisions

### 1. Next.js App Router Home Page Architecture
- **Decision**: Implement the home page as a Server Component (`app/page.tsx`) that fetches initial service summaries and testimonials, with interactive client components for navigation toggles and responsive menus.
- **Rationale**: Optimal performance (Server-Side Rendering) combined with smooth client-side interactivity where needed.

### 2. HTML Sanitization Strategy
- **Decision**: Use `DOMPurify` (or server-safe equivalent) wrapped in a utility function (`src/lib/sanitize.ts`) to sanitize any dynamic or user-submitted textual/HTML descriptions before rendering.
- **Rationale**: Prevents XSS vulnerabilities when displaying rich content or testimonials.

### 3. Testing Stack (TDD)
- **Decision**: Use Vitest + React Testing Library for component unit tests (testing hero rendering, service cards, CTA clicks) and Playwright for E2E navigation testing (home → booking flow).
- **Rationale**: Aligns with project quality gates and TDD mandate (tests must fail before implementation).

### 4. Styling & Responsiveness
- **Decision**: Tailwind CSS utility classes with mobile-first breakpoints (`sm:`, `md:`, `lg:`).
- **Rationale**: Ensures fast styling, consistent design tokens, and perfect responsiveness across mobile, tablet, and desktop viewports.
