import { LoginData } from "interfaces/login.interface";

export const postLogin = (loginData: LoginData) => {
  return cy.api({
    method: "POST",
    url: "login",
    failOnStatusCode: false,
    body: {
      email: loginData.email,
      password: loginData.password,
    },
  });
};
