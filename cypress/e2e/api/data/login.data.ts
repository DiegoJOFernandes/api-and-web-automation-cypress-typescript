import { LoginData } from "interfaces/login.interface";

export const userCadastrado: LoginData = {  
  email: Cypress.env("API_EMAIL"),
  password: Cypress.env("API_PASSWORD"),
};
