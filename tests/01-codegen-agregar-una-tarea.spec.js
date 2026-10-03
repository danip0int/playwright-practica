import { test, expect } from '@playwright/test';

test('agregar una tarea a la lista', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');

  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Hola a todos');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');

  await expect(page.getByText('Hola a todos')).toBeVisible();
});
