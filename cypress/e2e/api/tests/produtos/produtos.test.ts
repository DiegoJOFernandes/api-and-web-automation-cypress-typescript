import { postProduto } from "../../services/produtos";
import { produtoValido } from '../../data/produtos.data';

describe("POST /produtos - Cadastro de produto", () => {
  let token: string;

  before(() => {
    cy.api("POST", "/login", {
      email: Cypress.env("API_EMAIL"),
      password: Cypress.env("API_PASSWORD"),
    }).then((res) => {
      token = res.body.authorization;
    });
  });

  it("Deve cadastrar um produto com sucesso (201)", () => {
    postProduto(produtoValido, token).then((res) => {
      expect(res.status).to.eq(201);
      expect(res.body).to.have.property("message", "Cadastro realizado com sucesso");
      expect(res.body).to.have.property("_id");
    });
  });

  it("Não deve permitir cadastro de produto com nome duplicado (400)", () => {
    postProduto(produtoValido, token).then((res) => {
      expect(res.status).to.eq(400);
      expect(res.body).to.have.property("message", "Já existe produto com esse nome");
    });
  });

  it("Não deve permitir cadastro de produto sem autenticação ou com token inválido (401)", () => {
    postProduto(produtoValido, "token_invalido").then((res) => {
      expect(res.status).to.eq(401);
      expect(res.body).to.have.property(
        "message",
        "Token de acesso ausente, inválido, expirado ou usuário do token não existe mais"
      );
    });
  });
});
