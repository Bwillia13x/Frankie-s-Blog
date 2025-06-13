import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('loads and displays main elements', async ({ page }) => {
    await page.goto('/');
    
    // Check for main heading
    await expect(page.getByRole('heading', { name: /hi, i'm francisco/i })).toBeVisible();
    
    // Check for navigation elements
    await expect(page.getByRole('navigation')).toBeVisible();
    
    // Check for footer
    await expect(page.locator('footer')).toBeVisible();
  });

  test('has working navigation links', async ({ page }) => {
    await page.goto('/');
    
    // Test blog navigation
    await page.getByRole('link', { name: /blog/i }).click();
    await expect(page).toHaveURL('/blog');
    
    // Go back to home
    await page.goto('/');
    
    // Test projects navigation
    await page.getByRole('link', { name: /projects/i }).click();
    await expect(page).toHaveURL('/projects');
  });

  test('is responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Check that main content is visible on mobile
    await expect(page.getByRole('main')).toBeVisible();
    
    // Check that navigation works on mobile
    await expect(page.getByRole('navigation')).toBeVisible();
  });

  test('has proper SEO elements', async ({ page }) => {
    await page.goto('/');
    
    // Check for title
    await expect(page).toHaveTitle(/Frankie/i);
    
    // Check for meta description
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute('content', /.+/);
  });
}); 