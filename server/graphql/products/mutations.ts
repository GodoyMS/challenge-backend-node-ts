import { IProductInputMutation } from "../../interfaces/product";
import { productService } from "../../services/db/products.service";
import { validateProductInputArray } from "../../helpers/decorators/joi-validation.decorators";

export const mutations = {
  testProdM: async () => {
    return true;
  },
  AddProducts: async (_: any, { accountId, products }: { accountId: string; products: IProductInputMutation[] }) => {
    try {
      const { error } = validateProductInputArray(products);

      if (error) {
        throw new Error(error.details[0].message);
      }

      const insertedProducts = await productService.createProduct(accountId, products);
      return { products: insertedProducts };
    } catch (error: any) {
      throw new Error("Failed to aggregate products: " + error.message);
    }
  },
};
