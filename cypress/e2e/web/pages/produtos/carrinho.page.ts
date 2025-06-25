export class CarrinhoPage {
  verificarUrl() {
    cy.url().should("include", "/minhaListaDeProdutos");
  }

  verificarProdutoAdicionado() {
    cy.get(".card-body")
      .should("contain.text", "Produto");
  }

  clicarLimparLista() {
    cy.get("[data-testid='limparLista']").click();
  }

  verificarCarrinhoVazio() {
    cy.contains("Seu carrinho está vazio").should("be.visible");
  }
}
