import { LoginData } from "../interfaces/login.data";
import { faker } from "@faker-js/faker";

export const usuarioAdmin: LoginData = {
  email: Cypress.env("API_EMAIL"),
  password: Cypress.env("API_PASSWORD"),
};

export const usuarioComum: LoginData = {
  email: "testeqa@diego.test.com",
  password: "Teste@123456",
};
