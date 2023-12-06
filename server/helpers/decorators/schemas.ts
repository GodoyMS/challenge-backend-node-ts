import Joi, { ObjectSchema } from "joi";
import { IProductInputMutation } from "../../interfaces/product";
import { IAccountInputMutation, IAccountInputQuery } from "../../interfaces/account";

export const productInputSchema: ObjectSchema = Joi.object<IProductInputMutation>({
  name: Joi.string().required(),
  sku: Joi.string().required(),
});

export const accountInputSchema: ObjectSchema = Joi.object<IAccountInputMutation>({
  name: Joi.string().required(),
  email: Joi.string().required(),
});

export const accountInputQuerySchema: ObjectSchema = Joi.object<IAccountInputQuery>({
  page: Joi.number().required(),
  pageSize: Joi.number().required(),
  search: Joi.string().required().allow(""),
});

export const productInputQuerySchema: ObjectSchema = Joi.object<IAccountInputQuery>({
  page: Joi.number().required(),
  pageSize: Joi.number().required(),
  search: Joi.string().required().allow(""),
});
