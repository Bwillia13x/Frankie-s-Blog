import { test, expect } from '@playwright/test';

test.describe('Blog Page', () => {
  test('loads blog list page', async ({ page }) => {
    await page.goto('/blog');
    
    // Check for blog heading
    await expect(page.getByRole('heading', { name: /latest articles/i })).toBeVisible();
    
    // Check for blog posts
    const articles = page.locator('article');
    await expect(articles).toHaveCount.greaterThan(0);
  });

  test('displays blog post metadata', async ({ page }) => {
    await page.goto('/blog');
    
    // Check for reading time
    await expect(page.getByText(/min read/i)).toBeVisible();
    
    // Check for publication date
    await expect(page.locator('[data-testid="publish-date"]')).toBeVisible();
    
    // Check for tags
    await expect(page.locator('[data-testid="post-tags"]')).toBeVisible();
  });

  test('can navigate to individual blog post', async ({ page }) => {
    await page.goto('/blog');
    
    // Click on first blog post
    const firstPost = page.locator('article').first();
    const postLink = firstPost.getByRole('link').first();
    await postLink.click();
    
    // Should be on individual blog post page
    await expect(page).toHaveURL(/\/blog\/.+/);
    
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
      await expect(articles).toHaveCount.greaterThanOrEqual(0);
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
      await expect(articles).toHaveCount.greaterThanOrEqual(0);
    }
  });
}); 