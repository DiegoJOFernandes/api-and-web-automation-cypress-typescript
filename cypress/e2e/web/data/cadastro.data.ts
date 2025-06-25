import { faker } from "@faker-js/faker";

export const usuarioValido = {
  nome: faker.person.fullName(),
  email: faker.internet.email().toLowerCase(),
  password: "Teste@123456",
};