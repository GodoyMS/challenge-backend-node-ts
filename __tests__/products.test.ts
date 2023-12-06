import { ApolloServer } from "apollo-server-express";
import { resolvers, typeDefs } from "../server/graphql/root";

export const testServer = new ApolloServer({
  typeDefs,
  resolvers,
});

it("Return data property and all values in Products Query", async () => {
  const result = await testServer.executeOperation({
    query: `query GetProducts($page:Int,$pageSize:Int,$search:String){
        Products(params:{page:$page,pageSize:$pageSize,search:$search})
            {_id
            name
            sku 
            createdAt
            }
        }`,
    variables: { page: 1, pageSize: 10, search: "" },
  });
  expect(result.data).toBeTruthy();
  expect(result.errors).toBeUndefined();
  expect(result).toHaveProperty("data");
});

it("Return products array in products mutation", async () => {
  const result = await testServer.executeOperation({
    query: `mutation CreateProductsByIDAccount($accountId:ID!,$products:[ProductInputMutation!]!){
        AddProducts(accountId:$accountId,products:$products){

            products  {
                _id
                name 
                sku 
                createdAt
            }
        }
      
    }`,
    variables: {
      accountId: "656f62e292c92272e7071d02",
      products: [
        { name: "Product 20", sku: "SKU20" },
        { name: "Product 21", sku: "SKU21" },
      ],
    },
  });
  expect(result.data).toBeTruthy();
  expect(result.errors).toBeUndefined();
  expect(result).toHaveProperty("data");
});
