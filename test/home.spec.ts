import { test, expect } from "@playwright/test";

test.describe("Home Page", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the home page
    await page.goto("/");
  });

  test('should display title "Popular Titles"', async ({ page }) => {
    const title = await page.locator("h2");
    await expect(title).toHaveText("Popular Titles");
  });

  test('should display "Popular Series" and "Popular Movies"', async ({
    page,
  }) => {
    const seriesCard = await page.locator("text=Popular Series");
    const moviesCard = await page.locator("text=Popular Movies");

    await expect(seriesCard).toBeVisible();
    await expect(moviesCard).toBeVisible();
  });

  test('should navigate to the series page when "SERIES" is clicked', async ({
    page,
  }) => {
    await page.click("text=SERIES");
    await expect(page).toHaveURL("/series");
  });
});
