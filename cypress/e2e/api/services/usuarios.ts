export const postUsuario = (userData: any) => {
  return cy.api({
    method: "POST",
    url: "usuarios",
    body: userData,
    failOnStatusCode: false,
  });
};
