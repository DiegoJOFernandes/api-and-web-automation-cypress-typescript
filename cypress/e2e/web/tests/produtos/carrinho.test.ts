import { CarrinhoPage } from "../../pages/produtos/carrinho.page";
import { LoginPage } from "../../pages/login/login.page";
import { usuarioComum } from "../../data/login.data";

describe("Carrinho de Compras - ServeRest Web | Adição e Limpeza de produto", () => {
  const carrinhoPage = new CarrinhoPage();
  const loginPage = new LoginPage();

  before(() => {
    loginPage.visit();
    loginPage.fillEmail(usuarioComum.email);
    loginPage.fillPassword(usuarioComum.password);
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
