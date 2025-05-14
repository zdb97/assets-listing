import { test, expect } from "@playwright/test";

test.describe("ContentList Component", () => {
  test("should display loading state initially", async ({ page }) => {
    await page.goto("/series"); // Navigate to the series page
    const loadingText = await page.locator("text=Loading...");
    await expect(loadingText).toBeVisible();
  });

  test("should display error message if fetch fails", async ({ page }) => {
    // Mock fetch failure
    await page.route("/feed/sample.json", (route) => route.abort());
    await page.goto("/series");
    const errorText = await page.locator("text=Oops, something went wrong.");
    await expect(errorText).toBeVisible();
  });

  test("should display content items after successful fetch", async ({
    page,
  }) => {
    await page.goto("/series");
    const contentItems = await page.locator(".card__wrapper");
    await expect(contentItems).toHaveCount(21); // Assuming 21 entries are fetched
  });
});
