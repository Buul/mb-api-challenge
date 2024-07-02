import { body } from "express-validator";
import { validCpf } from "./cpf";
import { validCNPJ } from "./cnpj";

export const createValidator = [
  body("email", "Invalid does not Empty").not().isEmpty(),
  body("email", "Invalid email").isEmail(),
  body("person", "Invalid does not Empty").not().isEmpty(),
  body("password", "Invalid does not Empty").not().isEmpty(),
  body("birthDate", "Invalid birthday").isDate(),
  body("originDate", "Invalid originDate").isDate(),
  body("cpf", "Invalid cpf").custom(validCpf),
  body("cnpj", "Invalid cnpj").custom(validCNPJ),
];
