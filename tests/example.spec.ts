import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to http://localhost:3000/
  await page.goto('http://localhost:3000/');

  // Click text=SIGN UP
  await page.locator('text=SIGN UP').click();

  // Click [placeholder="First Name"]
  await page.locator('[placeholder="First Name"]').click();

  // Fill [placeholder="First Name"]
  await page.locator('[placeholder="First Name"]').fill('Han');

  // Press Tab
  await page.locator('[placeholder="First Name"]').press('Tab');

  // Fill [placeholder="Last Name"]
  await page.locator('[placeholder="Last Name"]').fill('Solo');

  // Press Tab
  await page.locator('[placeholder="Last Name"]').press('Tab');

  // Fill [placeholder="Email Address"]
  await page.locator('[placeholder="Email Address"]').fill('han.solo@gmail.com');

  // Press Tab
  await page.locator('[placeholder="Email Address"]').press('Tab');

  // Fill [placeholder="Display Name"]
  await page.locator('[placeholder="Display Name"]').fill('HanSolo');

  // Press Tab
  await page.locator('[placeholder="Display Name"]').press('Tab');

  // Fill [placeholder="Password"]
  await page.locator('[placeholder="Password"]').fill('HS1234');

  // Click text=Create Account
  await page.locator('text=Create Account').click();

  // Click svg:has-text("Close")
  await page.locator('svg:has-text("Close")').click();

  // Click text=LOG IN
  await page.locator('text=LOG IN').click();

  // Click [placeholder="Username or Email Address"]
  await page.locator('[placeholder="Username or Email Address"]').click();

  // Fill [placeholder="Username or Email Address"]
  await page.locator('[placeholder="Username or Email Address"]').fill('HanSolo');

  // Press Tab
  await page.locator('[placeholder="Username or Email Address"]').press('Tab');

  // Fill [placeholder="Password"]
  await page.locator('[placeholder="Password"]').fill('HS1234');

  // Click [aria-label="Sign in"]
  await page.locator('[aria-label="Sign in"]').click();

  // Click li:has-text("STARSHIPS")
  await page.locator('li:has-text("STARSHIPS")').click();
  await expect(page).toHaveURL('http://localhost:3000/starships');

  // Click [data-testid="element-2"]
  await page.locator('[data-testid="element-2"]').click();
  await expect(page).toHaveURL('http://localhost:3000/starships/5');

  // Click main img
  await page.locator('main img').click();

  // Click text=ACTORS
  await page.locator('text=ACTORS').click();
  await expect(page).toHaveURL('http://localhost:3000/actors');

  // Click li:has-text("R2-D2")
  await page.locator('li:has-text("R2-D2")').click();
  await expect(page).toHaveURL('http://localhost:3000/actors/3');

  // Click text=LOG OUT
  await page.locator('text=LOG OUT').click();
  await expect(page).toHaveURL('http://localhost:3000/');

});