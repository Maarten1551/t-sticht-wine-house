import { test } from '@playwright/test';

test('samenwerking sectie screenshot', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  await page.locator('h2:has-text("Voorbeelden van samenwerking")').scrollIntoViewIfNeeded();
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'screenshots/samenwerking-check.png' });
});
