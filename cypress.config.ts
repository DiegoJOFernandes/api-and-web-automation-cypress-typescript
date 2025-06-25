import { defineConfig } from "cypress";
import dotenv from "dotenv";    

dotenv.config();

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env = {
        ...config.env,
        API_URL: process.env.API_URL,
        API_EMAIL: process.env.API_EMAIL,
        API_PASSWORD: process.env.API_PASSWORD,
      };
      return config;
    },
    baseUrl: process.env.WEB_URL,
    specPattern: 'cypress/e2e/web/**/*.test.ts',
    retries: 2,
  },
});
