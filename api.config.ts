import { defineConfig } from "cypress";
import dotenv from "dotenv";    

dotenv.config();

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: process.env.API_URL,
    specPattern: 'cypress/e2e/api/**/*.test.ts',
  },
  env: {
    API_URL: process.env.API_URL,
    API_EMAIL: process.env.API_EMAIL,
    API_PASSWORD: process.env.API_PASSWORD,
  },
});
