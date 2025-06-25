import { faker } from "@faker-js/faker";
import { Produto } from "../interfaces/produtos.interface";

export const produtoValido: Produto = {
  nome: `Produto ${faker.number.int({ min: 1000, max: 9999 })}`,
  preco: faker.number.int({ min: 100, max: 1000 }),
  descricao: faker.lorem.sentence(),
  quantidade: faker.number.int({ min: 1, max: 10 }),
};
