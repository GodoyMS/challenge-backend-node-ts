import config from "../../config/app";
import { validateProductInputQuery } from "../../helpers/decorators/joi-validation.decorators";
import { IProduct, IProductInputQuery } from "../../interfaces/product";
import Products from "../../models/products";
import { productService } from "../../services/db/products.service";

export const queries = {
  testProdQ: async () => {
    const products = await Products.find({});

    return products.length;
  },
  Products: async (
    _: any,
    {
      params: { page = config.pagination.page, pageSize = config.pagination.perPage, search },
    }: { params: IProductInputQuery },
  ): Promise<IProduct[]> => {
    try {
      const { error } = validateProductInputQuery({ page, pageSize, search });

      if (error) {
        throw new Error(error.details[0].message);
      }
      const products = await productService.getProducts(page, pageSize, search);
      return products;
    } catch (error: any) {
      throw new Error("Failed to get products: " + (error as Error).message);
    }
  },
};
