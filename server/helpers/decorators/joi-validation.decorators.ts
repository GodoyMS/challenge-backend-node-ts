import Joi from "joi";
import { IProductInputMutation, IProductInputQuery } from "../../interfaces/product";
import { IAccountInputMutation, IAccountInputQuery } from "../../interfaces/account";
import { accountInputQuerySchema, accountInputSchema, productInputQuerySchema, productInputSchema } from "./schemas";

export function validateProductInputArray(inputs: IProductInputMutation[]) {
  return Joi.array().items(productInputSchema).validate(inputs);
}

export function validateAccountInput(input: IAccountInputMutation) {
  return accountInputSchema.validate(input);
}

export function validateAccountInputQuery(input: IAccountInputQuery) {
  return accountInputQuerySchema.validate(input);
}

export function validateProductInputQuery(input: IProductInputQuery) {
  return productInputQuerySchema.validate(input);
}
