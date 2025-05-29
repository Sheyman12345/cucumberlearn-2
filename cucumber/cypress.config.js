const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    specPattern:"cypress/e2e/*.feature",
  },
});
