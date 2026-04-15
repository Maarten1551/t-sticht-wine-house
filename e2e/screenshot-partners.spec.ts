import { test } from '@playwright/test';
import path from 'path';

test('partners sectie', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1500);
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.48));
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.resolve('screenshots') + '/partners.png' });
});
