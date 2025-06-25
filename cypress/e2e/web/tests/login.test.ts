import { LoginPage } from "../pages/login/login.page";
import { usuarioComum } from "../data/login.data";

describe("Login - ServeRest Web", () => {
  const loginPage = new LoginPage();

it('Deve realizar o login do "usuário comum" com sucesso e redirecionar para a home', () => {
    cy.intercept("POST", "/login").as("postLogin");
    
    loginPage.visit();
    loginPage.fillEmail(usuarioComum.email);
    loginPage.fillPassword(usuarioComum.password);
    loginPage.clickLogin();

    cy.wait("@postLogin").should(({ response }) => {
      expect(response?.statusCode).to.eq(200);
    });
    
    cy.url().should("include", "/home");

    cy.contains("Serverest Store");
    cy.contains("Produtos");
    cy.contains("Adicionar a lista");
  });
});
