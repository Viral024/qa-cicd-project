// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  webServer: {
    command: 'npx http-server pages -p 8080',
    port: 8080,
    reuseExistingServer: !process.env.CI,
  },
});