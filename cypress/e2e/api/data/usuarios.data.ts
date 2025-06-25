import { Usuario } from "../interfaces/usuarios.interface";
import { faker } from "@faker-js/faker";

export const usuarioValido: Usuario = {
  nome: faker.person.fullName(),
  email: faker.internet.email().toLowerCase(), 
  password: "Teste@123456",
  administrador: "true",
};
