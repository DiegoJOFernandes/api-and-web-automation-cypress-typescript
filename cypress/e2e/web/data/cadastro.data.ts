import { faker } from "@faker-js/faker";

export const usuarioValido = {
  nome: faker.person.fullName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
};