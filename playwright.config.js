// @ts-check
import { defineConfig, devices } from '@playwright/test';
import testsConfig from "./config/config.js";
import dotenv from 'dotenv';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
require('dotenv').config();
// dotenv.config();

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = defineConfig({
  timeout: 5 * 60 * 1000,
  // testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 1,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? undefined : 3,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
      [
        'html', {open: process.env.CI ? 'never' : 'on-failure'}
      ],
      [
        process.env.CI ? 'github' : 'list'
      ]
  ],

  use: {
    headless: true,

    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: testsConfig.baseUrl,

    httpCredentials: {
      username: testsConfig.httpCredentials.username,
      password: testsConfig.httpCredentials.password
    },

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    screenshot: 'on',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'setup',
      use: { ...devices['Desktop Chrome'] },
      testMatch: /tests\/setup\/.*\/*.setup.js/
    },

    {
      name: 'chromium UI tests',
      use: { ...devices['Desktop Chrome'] },
      testMatch: /tests\/e2e\/.*\/*.spec.js/,
      storageState: 'playwright/.auth/user.json',
      dependencies: ['setup']
    },

    {
      name: 'API tests',
      testMatch: /tests\/api\/.*\/*.spec.js/,
      use: { ...devices['Desktop Chrome'] },
      storageState: 'playwright/.auth/user.json',
      dependencies: ['setup']
    },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },

});

export default config;

