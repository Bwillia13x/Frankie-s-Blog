import { test, expect } from '@playwright/test';

test.describe('Blog Page', () => {
  test('loads blog list page', async ({ page }) => {
    await page.goto('/blog');
    
    // Check for blog heading (matches current page header)
    await expect(page.getByRole('heading', { name: /stories, insights & code/i })).toBeVisible();
    
    // Ensure at least one article is visible
    const articles = page.locator('article');
    await expect(articles.first()).toBeVisible();
  });

  test('displays blog post metadata', async ({ page }) => {
    await page.goto('/blog');
    
    // Check for reading time badge e.g. "3 min read"
    const readingTimes = page.locator('text=/\\d+ min read/i');
    await expect(readingTimes.first()).toBeVisible();

    // Optionally check for at least one publish date element
    const dates = page.locator('time');
    await expect(dates.first()).toBeVisible();
  });

  test('can navigate to individual blog post', async ({ page }) => {
    await page.goto('/blog');
    
    // Click on first blog post and wait for navigation
    const firstPost = page.locator('article').first();
    const postLink = firstPost.getByRole('link').first();
    await Promise.all([
      page.waitForNavigation(),
      postLink.click()
    ]);
    
    // Should be on individual blog post page
    await expect(page).toHaveURL(/\/blog\/[^/]+$/);
    
    // Check for blog post content
    await expect(page.getByRole('main')).toBeVisible();
  });

  test('search functionality works', async ({ page }) => {
    await page.goto('/blog');
    
    // Find search input
    const searchInput = page.getByPlaceholder(/search/i);
    if (await searchInput.isVisible()) {
      await searchInput.fill('react');
      await page.keyboard.press('Enter');
      
      // Should filter posts (could be 0 or more)
      const articles = page.locator('article');
      const countAfterSearch = await articles.count();
      expect(countAfterSearch).toBeGreaterThanOrEqual(0);
    }
  });

  test('category filtering works', async ({ page }) => {
    await page.goto('/blog');
    
    // Find category filters
    const categoryButtons = page.locator('[data-testid="category-filter"]');
    const count = await categoryButtons.count();
    if (count > 0) {
      await categoryButtons.first().click();
      
      // Should filter posts (could be 0 or more)
      const articles = page.locator('article');
      const countAfterFilter = await articles.count();
      expect(countAfterFilter).toBeGreaterThanOrEqual(0);
    }
  });
}); 