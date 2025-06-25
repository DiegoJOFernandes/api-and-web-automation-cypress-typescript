import { RegisterPage } from "../pages/cadastro/cadastro.page";
import { usuarioValido } from "../data/cadastro.data";

describe("Cadastro - ServeRest Web", () => {
  const registerPage = new RegisterPage();

  it("Deve realizar o cadastro de usuário com sucesso e direcionar para a home", () => {
    cy.intercept("POST", "/usuarios").as("postUsuarios");
    
    registerPage.visit();
    registerPage.fillName(usuarioValido.nome);
    registerPage.fillEmail(usuarioValido.email);
    registerPage.fillPassword(usuarioValido.password);
    registerPage.clickRegister();
    cy.contains("Cadastro realizado com sucesso").should("be.visible");
    
    cy.wait("@postUsuarios").should(({ response }) => {
      expect(response?.statusCode).to.eq(201);
    });
    
    cy.url().should("include", "/home");
    cy.contains("Produtos").should("be.visible");
    cy.contains("Adicionar a lista").should("be.visible");
  });
});
