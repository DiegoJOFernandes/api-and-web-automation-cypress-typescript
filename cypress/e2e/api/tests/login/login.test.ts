import { postLogin } from "../../services/login";

describe("POST /login - Autenticação", () => {
  it("Deve realizar login com sucesso e retornar o token de autorização", () => {
    postLogin(Cypress.env("API_EMAIL"), Cypress.env("API_PASSWORD")).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("message", "Login realizado com sucesso");
      expect(response.body).to.have.property("authorization").and.to.contain("Bearer");
    });
  });

  it("Deve retornar 401 para e-mail ou senha inválidos", () => {
    postLogin(Cypress.env("API_EMAIL"), "senhaerrada").then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body).to.have.property("message", "Email e/ou senha inválidos");
    });
  });
});
