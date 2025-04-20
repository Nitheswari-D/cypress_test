const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // baseUrl: 'http://localhost:5000',  // Adjust as necessary
    video: true,  // Enable video recording
    screenshotOnRunFailure: true,  // Enable screenshots on failure
    videosFolder: 'cypress/videos',  // Location of videos
    screenshotsFolder: 'cypress/screenshots',  // Location of screenshots
  },
});
