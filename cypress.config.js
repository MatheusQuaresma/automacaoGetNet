const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://site.getnet.com.br/",
    defaultCommandTimeout: 45000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: false,
    videoCompression: 10,
    scrollBehavior: false,
    //chromeWebSecurity: false,
    requestTimeout : 45000,
    numTestsKeptInMemory: 0,
    experimentalMemoryManagement: true,
    responseTimeout : 45000,
    pageLoadTimeout: 45000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    
    },
  },
});
