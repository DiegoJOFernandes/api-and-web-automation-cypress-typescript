export const postLogin = (email: string, password: string) => {
  return cy.api({
    method: "POST",
    url: "login",
    failOnStatusCode: false,
    body: {
      email,
      password,
    },
  });
};
