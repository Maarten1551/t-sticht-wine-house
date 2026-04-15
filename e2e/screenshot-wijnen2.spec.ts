import { test } from '@playwright/test';
import path from 'path';

test('wijnen sectie correct', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1000);
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.38));
  await page.waitForTimeout(600);
  await page.screenshot({ path: path.resolve('screenshots') + '/wijnen2.png' });
});
