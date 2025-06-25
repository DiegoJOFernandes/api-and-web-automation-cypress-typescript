export const postProduto = (produtoData: any, token?: string) => {
  return cy.api({
    method: "POST",
    url: "produtos",
    body: produtoData,
    headers: token ? { authorization: token } : {},
    failOnStatusCode: false,
  });
};
