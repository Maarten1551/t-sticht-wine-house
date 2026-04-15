import { test, expect } from '@playwright/test';
import path from 'path';

const screenshotDir = path.resolve('screenshots');

test('screenshot volledige pagina', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');

  await page.screenshot({
    path: `${screenshotDir}/full-page.png`,
    fullPage: true,
  });

  expect(true).toBe(true);
});

test('screenshot hero sectie', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');

  await page.screenshot({
    path: `${screenshotDir}/hero.png`,
    clip: { x: 0, y: 0, width: 1280, height: 800 },
  });

  expect(true).toBe(true);
});

test('screenshot over ons sectie', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');

  const section = page.locator('#over-ons, section:has-text("Over"), [id*="over"]').first();
  if (await section.count() > 0) {
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    await page.screenshot({ path: `${screenshotDir}/over-ons.png` });
  } else {
    await page.screenshot({ path: `${screenshotDir}/over-ons.png`, fullPage: true });
  }

  expect(true).toBe(true);
});

test('screenshot wijnen sectie', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');

  const section = page.locator('#wijnen, section:has-text("Wijn"), [id*="wijn"]').first();
  if (await section.count() > 0) {
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    await page.screenshot({ path: `${screenshotDir}/wijnen.png` });
  } else {
    await page.screenshot({ path: `${screenshotDir}/wijnen.png`, fullPage: true });
  }

  expect(true).toBe(true);
});

test('screenshot contact sectie', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('networkidle');

  const section = page.locator('#contact, section:has-text("Contact"), [id*="contact"]').first();
  if (await section.count() > 0) {
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    await page.screenshot({ path: `${screenshotDir}/contact.png` });
  } else {
    await page.screenshot({ path: `${screenshotDir}/contact.png`, fullPage: true });
  }

  expect(true).toBe(true);
});
