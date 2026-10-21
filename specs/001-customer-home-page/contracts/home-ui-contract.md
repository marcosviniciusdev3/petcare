# Interface Contracts: Customer Home Page

**Feature**: Customer Home Page (`001-customer-home-page`)

## UI & Component Contracts

### 1. Home Page Route (`/`)
- **Method**: `GET /`
- **Response**: HTML document containing the customer home page.
- **Component Hierarchy**:
  - `Navbar`: Displays logo, navigation links ("Services", "Pricing", "Testimonials"), and CTA ("Sign In", "Book Now").
  - `HeroSection`: Prominent banner with headline, subheadline, and primary booking CTA.
  - `ServiceOverview`: Grid of `ServiceCard` components showing grooming, veterinary, boarding, and day-care options with starting prices.
  - `TestimonialSection`: Grid of `TestimonialCard` components displaying customer reviews.
  - `Footer`: Links, copyright, and policy information.

### 2. Sanitization Utility Contract (`src/lib/sanitize.ts`)
- **Function**: `sanitizeHtml(rawHtml: string): string`
- **Input**: Raw string containing potentially unsafe HTML or text.
- **Output**: Sanitized, safe HTML string filtered against XSS vectors using DOMPurify.
