# Data Model: Customer Home Page

**Feature**: Customer Home Page (`001-customer-home-page`)

## Entities

### 1. ServiceSummary (DTO / View Model)
Represents service offerings displayed on the home page.
- `id`: string (Unique identifier)
- `title`: string (e.g., "Grooming", "Veterinary Checkup")
- `description`: string (Sanitized HTML/text description)
- `startingPrice`: number (Base price in USD)
- `category`: string (e.g., "grooming", "health", "boarding")
- `iconUrl`?: string (Optional icon asset path)

### 2. Testimonial (DTO / View Model)
Represents customer social proof displayed on the home page.
- `id`: string (Unique identifier)
- `authorName`: string (Pet owner name)
- `petName`: string (Pet's name and breed)
- `rating`: number (1 to 5 stars)
- `comment`: string (Sanitized review comment)
- `avatarUrl`?: string (Optional owner/pet photo)
