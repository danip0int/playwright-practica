import { test, expect } from '@playwright/test';

test('agregar tareas a la lista', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');

  // Tarea 1
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Hola a todos');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');

  // Tarea 2 (la nueva: mismas dos líneas, otro texto)
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('Estudiar Playwright');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');

  // Verificaciones
  await expect(page.getByText('Hola a todos')).toBeVisible();
  await expect(page.getByText('Estudiar Playwright')).toBeVisible();
  await expect(page.getByTestId('todo-title')).toHaveCount(2);
});