import { LoginData } from "interfaces/login.interface";

export const userCadastrado: LoginData = {  
  email: process.env.API_EMAIL,
  password: process.env.API_PASSWORD,
};
