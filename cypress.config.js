const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // setupNodeEvents(on, config) {
      baseUrl: 'https://agilean.com.br/antigo-quizquality/',
      
    // },
  },

  viewportWidth: 1200,
  viewportHeight: 750
});
