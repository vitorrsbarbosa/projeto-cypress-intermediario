const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost/',
    projectId: 'px62zt',
    specPattern: 'cypress/e2e/**',
    supportFile: 'cypress/support/e2e.js',
    experimentalSessionAndOrigin: true,
  }
});