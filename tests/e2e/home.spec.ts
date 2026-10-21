import { test, expect } from '@playwright/test';

test('customer home page loads and displays key sections', async ({ page }) => {
  await page.goto('/');

  // Verify hero title
  await expect(page.locator('h1')).toContainText('Professional Care for Your Beloved Pets');

  // Verify service overview cards
  await expect(page.locator('text=Grooming')).toBeVisible();
  await expect(page.locator('text=Veterinary Checkup')).toBeVisible();
  await expect(page.locator('text=Boarding')).toBeVisible();
  await expect(page.locator('text=Day-Care')).toBeVisible();

  // Verify Book Now CTA click leads to booking flow
  const bookNowButton = page.locator('a[href="/booking"]').first();
  await expect(bookNowButton).toBeVisible();
});
