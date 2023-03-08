import { test, expect } from '@playwright/test';

test('has option to login', async ({ page }) => {
  await page.goto('https://www.runtastic.com');

  // Expect a title "to contain" a substring.
  await expect(page.innerText(".bttn-header--login"));
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});