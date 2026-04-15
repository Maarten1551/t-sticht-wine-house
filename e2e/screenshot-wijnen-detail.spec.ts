import { test } from '@playwright/test';
import path from 'path';

const screenshotDir = path.resolve('screenshots');

test('wijnen detail', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1000);

  // Scroll to roughly where wijnen section is
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.55));
  await page.waitForTimeout(500);

  await page.screenshot({ path: `${screenshotDir}/wijnen-detail.png` });
});
