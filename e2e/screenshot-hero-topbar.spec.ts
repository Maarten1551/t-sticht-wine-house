import { test } from '@playwright/test';
import path from 'path';

test('hero topbar', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(500);
  await page.screenshot({
    path: path.resolve('screenshots') + '/hero-topbar.png',
    clip: { x: 0, y: 0, width: 1280, height: 100 },
  });
});
