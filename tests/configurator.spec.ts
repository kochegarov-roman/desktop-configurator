import { test, expect } from '@playwright/test'

test('should display the canvas', async ({ page }) => {
  await page.goto("/")
  const canvasElement = await page.locator('canvas')
  await expect(canvasElement).toBeVisible()
});

test('should display controls elements', async ({ page }) => {
  await page.goto("/");
  await page.locator('.w-14').first().click();
  await page.getByRole('button', { name: 'Размеры' }).click();
  await page.locator('#desk-width').fill('1595');
  await page.locator('#desk-width').fill('496');
  await page.locator('#desk-width').fill('497');
  await page.locator('#desk-width').fill('745');
  await page.getByRole('button', { name: 'Опоры' }).click();
  await page.getByLabel('Вариант 1').click();
  await page.getByLabel('Вариант 2').click();
  await page.getByRole('button', { name: 'Отверстие для кабеля' }).click();
  await page.locator('#square').click();
  await page.locator('#rectangle').click();
});