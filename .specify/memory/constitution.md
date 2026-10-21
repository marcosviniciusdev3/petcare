<!--
Sync Impact Report:
- Version change: 1.0.0 → 1.1.0
- Modified principles: Adapted general Spec Kit principles to PetCare domain requirements (Full-Stack TypeScript safety, Domain-Driven Modules, TDD with Vitest/Playwright, Customer & Staff operational integrity)
- Added sections: PetCare Architectural Standards, Quality & Testing Gates
- Removed sections: None
- Follow-up TODOs: None
-->

# PetCare Project Constitution

## Core Principles

### I. Full-Stack TypeScript & Type Safety
The platform MUST maintain end-to-end type safety using TypeScript across the Next.js frontend, API routes, and database models (Prisma/Drizzle). Shared interfaces and schemas prevent runtime contract drift between client and server layers.

### II. Domain-Driven Modular Architecture
Code must be organized into clear domain modules (`appointments`, `pets`, `services`, `auth`) rather than flat monolithic structures. Each module encapsulates its business logic, UI components, and data access, ensuring maintainability and clear boundaries between customer portal and staff operations.

### III. Test-Driven Development (TDD) & Comprehensive Testing
All features, API endpoints, and UI workflows MUST follow strict TDD principles using Vitest/Jest for unit/integration tests and Playwright for end-to-end user journeys. Tests must be written and approved to fail before implementation.

### IV. Data Privacy & Pet Record Integrity
Patient health notes, vaccination records, owner contact details, and sensitive operational data must be handled securely with strict validation, role-based access control, and adherence to privacy best practices.

### V. Simplicity, Performance & Accessibility
Interfaces must be clean, responsive, and mobile-friendly using Tailwind CSS and accessible component design. Prioritize simplicity, avoid premature optimization, and adhere to YAGNI principles in all feature developments.

## Architectural & Technical Standards
- **Framework**: React / Next.js (App Router) with server-side rendering and client interactivity.
- **Database**: Relational data modeling via PostgreSQL and Prisma ORM with strict migration discipline.
- **Quality Gates**: Automated test suites (`npm run test`), type-checking (`npm run type-check`), and linting (`npm run lint`) must pass successfully before any change is merged.

## Development Workflow & Governance
All development activities must follow the structured Research -> Strategy -> Execution lifecycle, with iterative Plan -> Act -> Validate cycles. Code reviews and quality gates must verify adherence to project standards and constitution principles before merging.

## Governance
This constitution supersedes all other conflicting practices, guidelines, or ad-hoc conventions. Amendments require explicit documentation, version incrementing, and review. Compliance with these principles is mandatory for all pull requests and code reviews.

**Version**: 1.1.0 | **Ratified**: 2026-10-21 | **Last Amended**: 2026-10-21
