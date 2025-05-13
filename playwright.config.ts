import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./test", // Directory where tests are located
  timeout: 30000, // Timeout for each test
  retries: 1, // Retry failed tests once
  use: {
    headless: true, // Run tests in headless mode
    baseURL: "http://localhost:3000", // Base URL for your app
    viewport: { width: 1280, height: 720 }, // Default viewport size
  },
});
