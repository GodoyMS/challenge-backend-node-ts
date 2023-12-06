import { ObjectId } from "mongoose";
import { IProduct, IProductInputMutation } from "../../interfaces/product";
import Accounts from "../../models/accounts";
import Products from "../../models/products";
import { IAccount } from "../../interfaces/account";

class ProductsService {
  public async createProduct(accountId: string, productsArray: IProductInputMutation[]): Promise<IProduct[]> {
    // Finding the Acc by ID
    const account = await Accounts.findById(accountId);
    if (!account) {
      throw new Error("Invalid id account");
    }

    const productDocs = productsArray.map(product => ({
      name: product.name,
      sku: product.sku,
      account: account._id as unknown as ObjectId,
    }));

    const insertedProductsDocs = await Products.insertMany(productDocs);
    const insertedProducts = insertedProductsDocs.map(doc => doc.toObject() as IProduct);
    return insertedProducts;
  }

  public async getProducts(page: number, pageSize: number, search?: string): Promise<IProduct[]> {
    const skip = (page - 1) * pageSize;
    const pipeline = [
      {
        $match: {
          $or: [{ name: { $regex: search, $options: "i" } }, { sku: { $regex: search, $options: "i" } }],
        },
      },
      { $skip: skip },
      { $limit: pageSize },
    ];
    const products = await Products.aggregate<Document & IProduct & { account: IAccount }>(pipeline);
    await Products.populate(products, { path: "account", model: Accounts });
    return products;
  }
}

export const productService: ProductsService = new ProductsService();
