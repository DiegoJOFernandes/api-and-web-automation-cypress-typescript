import { postLogin } from "../../services/login";
import { userCadastrado } from "../../data/login.data";

describe("POST /login - Autenticação", () => {
  it("Deve realizar login com sucesso e retornar o token de autorização", () => {
    postLogin(userCadastrado).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("message", "Login realizado com sucesso");
      expect(response.body).to.have.property("authorization").and.to.contain("Bearer");
    });
  });

  it("Deve retornar 401 para e-mail ou senha inválidos", () => {
    postLogin({email: "emailerrado", password: "senhaerrada"}).then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body).to.have.property("message", "Email e/ou senha inválidos");
    });
  });
});
