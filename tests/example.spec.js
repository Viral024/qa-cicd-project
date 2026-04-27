const { test, expect } = require('@playwright/test');

test('homepage loads', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080');
  await expect(page).toHaveTitle(/Home/);
});

test('contact form works', async ({ page }) => {
  await page.goto('http://127.0.0.1:8080/contact.html');

  await page.fill('#name', 'QA User');
  await page.fill('#email', 'qa@test.com');
  await page.click('#submit');

  await expect(page.locator('#success')).toBeVisible();
});