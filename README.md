# PetCare - Pet Shop & Care Management System

A modern, full-stack web application designed for pet shops to streamline daily care operations, manage internal workflows, and deliver a seamless digital experience for pet owners.

---

## 🐾 Overview

**PetCare** bridges the gap between pet owners and pet care professionals. The platform serves dual purposes:
1. **Customer-Facing Portal:** Enables pet owners to discover services, schedule appointments (grooming, veterinary checkups, boarding), and track their pets' care history.
2. **Staff & Operations Management:** Provides pet shop employees and managers with a centralized dashboard to track daily tasks, manage care queues, maintain pet profiles, and streamline operations.

---

## 🚀 Key Features

### For Pet Owners (Consumers)
- **Service Catalog & Transparent Pricing:** Explore grooming packages, health checks, day-care, and boarding services with clear descriptions and rates.
- **Online Booking & Scheduling:** Select preferred services, staff specialists, and appointment time slots with instant confirmation.
- **Pet Digital Profiles:** Register pets with dietary notes, allergy alerts, breed information, and vaccination records.
- **Care History & Updates:** Access past appointments, care notes, and real-time status updates while pets are checked in.

### For Pet Shop Staff (Internal Operations)
- **Daily Operations Board:** Real-time kanban/list view of appointments, walk-ins, and scheduled care sessions.
- **Care & Process Tracking:** Check-in/check-out workflow with checklist verification (feeding, grooming stages, medication logs).
- **Customer & Pet Management:** Rapid lookup of pet records, owner contact details, and special care instructions.
- **Resource & Staff Allocation:** Assign specialists to appointments and track station capacity.

---

## 🛠️ Architecture & Tech Stack

This greenfield project follows a **Full-Stack TypeScript** architecture designed for developer productivity, end-to-end type safety, and maintainability.

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | React / Next.js (App Router) | Modern, responsive UI with server-side rendering and client interactivity |
| **Backend** | Node.js / Next.js API Routes | RESTful endpoints and server actions handling business logic |
| **Language** | TypeScript | Strong typing across frontend and backend shared contracts |
| **Styling** | Tailwind CSS / Component UI | Accessible, clean, and mobile-friendly interface |
| **Database & ORM** | PostgreSQL / Prisma (or Drizzle) | Structured relational schema for owners, pets, appointments, and staff |
| **Testing** | Vitest / Jest & Playwright | Test-Driven Development (TDD) unit, integration, and E2E coverage |

---

## 📁 Suggested Project Layout

```text
petcare/
├── .gemini/               # Tooling & command configurations
├── .specify/              # Specification-driven development constitution & templates
├── apps/ (or src/)
│   ├── app/               # Next.js App Router (Pages, Layouts, API routes)
│   │   ├── (auth)/        # Authentication routes (login, register)
│   │   ├── (customer)/    # Pet owner portal & booking flows
│   │   └── (staff)/       # Staff dashboard & operational workflows
│   ├── components/        # Reusable UI components (buttons, modals, forms)
│   ├── lib/               # Utility functions, database client, and configurations
│   ├── modules/           # Domain-driven modules
│   │   ├── appointments/  # Scheduling and booking logic
│   │   ├── pets/          # Pet profile management
│   │   └── services/      # Service catalog and pricing
│   └── types/             # Shared TypeScript interfaces and schemas
├── tests/                 # Unit, integration, and end-to-end test suites
├── public/                # Static assets (images, icons)
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🏁 Getting Started

### Prerequisites
- **Node.js**: v24.x LTS or higher
- **Package Manager**: `npm` 
- **Database**: PostgreSQL (local or containerized via Podman)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd teste
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env.local` file based on `.env.example`:
   ```bash
   cp .env.example .env.local
   ```
   Provide database connection strings, auth secrets, and runtime settings.

4. **Initialize the Database:**
   ```bash
   npx prisma migrate dev  # or equivalent database migration command
   ```

5. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Testing & Quality Gates

In accordance with project standards:
- **Run Unit & Integration Tests:**
  ```bash
  npm run test
  ```
- **Type Checking & Linting:**
  ```bash
  npm run type-check
  npm run lint
  ```

---

## 📋 Roadmap (MVP Milestones)

- [ ] **Phase 1: Foundation & Modeling**
  - Setup Next.js + TypeScript baseline with Tailwind CSS.
  - Define relational schema (Owners, Pets, Staff, Services, Bookings).
- [ ] **Phase 2: Customer Experience**
  - Public service showcase & pricing page.
  - Pet profile creation and self-service appointment booking.
- [ ] **Phase 3: Staff Operations Dashboard**
  - Daily schedule board & appointment state transitions (Scheduled → In Progress → Completed).
  - Pet care notes and procedure logging.
- [ ] **Phase 4: Notifications & Analytics**
  - Email/SMS confirmation & reminders.
  - Daily summary reports for shop managers.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
