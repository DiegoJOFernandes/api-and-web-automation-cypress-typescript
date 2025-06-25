import { postUsuario } from "../../services/usuarios";
import { usuarioValido } from "../../data/usuarios.data";

describe("POST /usuarios - Cadastro de usuário", () => {
  it("Deve cadastrar um usuário com sucesso (201)", () => {
    postUsuario(usuarioValido).then((res) => {
      expect(res.status).to.eq(201);
      expect(res.body).to.have.property("message", "Cadastro realizado com sucesso");
      expect(res.body).to.have.property("_id");
    });
  });

  it("Não deve permitir cadastrar usuário com e-mail duplicado (400)", () => {
    postUsuario(usuarioValido).then((res) => {
      expect(res.status).to.eq(400);
      expect(res.body).to.have.property("message", "Este email já está sendo usado");
    });
  });
});
