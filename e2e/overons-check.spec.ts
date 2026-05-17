import { test } from '@playwright/test';

test('passie en import sectie screenshot', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  await page.locator('h2:has-text("Passie")').scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshots/overons-passie.png' });
});
