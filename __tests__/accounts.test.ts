import { ApolloServer } from "apollo-server-express";
import { resolvers, typeDefs } from "../server/graphql/root";

export const testServer = new ApolloServer({
  typeDefs,
  resolvers,
});

it("Return data property and all values in Accounts Query", async () => {
  const result = await testServer.executeOperation({
    query: `query GetAccounts($page:Int,$pageSize:Int,$search:String){
      Accounts(params:{page:$page,pageSize:$pageSize,search:$search})
       {
        _id 
        name
        email
        createdAt
      }
    }`,
    variables: { page: 1, pageSize: 10, search: "" },
  });
  expect(result.data).toBeTruthy();
  expect(result.errors).toBeUndefined();
  expect(result).toHaveProperty("data");
});

it("Return an account user after it was created", async () => {
  const result = await testServer.executeOperation({
    query:
      "mutation CreateAccount($name:String,$email:String){AddAccount(user:{name:$name,email:$email}){_id name email createdAt}}",
    variables: { name: "Godoy", email: "godoyliam.dev@gmail.com" },
  });
  expect(result.data).toBeTruthy();
  expect(result.errors).toBeUndefined();
  expect(result).toHaveProperty("data");
});
