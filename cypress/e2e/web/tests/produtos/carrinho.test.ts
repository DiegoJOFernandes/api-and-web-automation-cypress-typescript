import { CarrinhoPage } from "../../pages/produtos/carrinho.page";
import { usuarioCadastrado } from "../../data/login.data";
import { LoginPage } from "../../pages/login/login.page";

describe("Carrinho de Compras - ServeRest Web", () => {
  const carrinhoPage = new CarrinhoPage();
  const loginPage = new LoginPage();

  before(() => {
    loginPage.visit();
    loginPage.fillEmail(usuarioCadastrado.email);
    loginPage.fillPassword(usuarioCadastrado.password);
    loginPage.clickLogin();
  });

  it("Deve adicionar produto à lista de compras e depois limpar", () => {
    cy.contains("Adicionar a lista").first().click();
    cy.contains("Lista de Compras").click();
    carrinhoPage.verificarUrl();
    carrinhoPage.verificarProdutoAdicionado();
    carrinhoPage.clicarLimparLista();
    carrinhoPage.verificarCarrinhoVazio();
  });
});
