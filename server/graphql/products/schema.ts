import { gql } from "apollo-server-express";

export const schema = gql`
  extend type Query {
    testProdQ: Int
    Products(params: ProductInputQuery): [ProductQuery]
  }
  extend type Mutation {
    testProdM: Boolean
    AddProducts(accountId: ID!, products: [ProductInputMutation!]!): ProductsMutation
  }
`;
