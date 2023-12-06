import { gql } from "apollo-server-express";
import { schema as accountsSchema, queries as accountsQueries, mutations as accountsMutations } from "../accounts";
import { schema as productsSchema, queries as productsQueries, mutations as productsMutations } from "../products";

const rootTypeDefs = gql`
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }

  type AccountQuery {
    _id: ID!
    name: String
    email: String
    createdAt: String
    updatedAt: String
  }
  type ProductQuery {
    _id: ID!
    name: String
    account: AccountQuery
    sku: String
    createdAt: String
    updatedAt: String
  }

  type ProductMutation {
    _id: ID!
    name: String
    account: ID!
    sku: String
    createdAt: String
    updatedAt: String
  }
  type ProductsMutation {
    products: [ProductMutation]
  }

  input ProductInputMutation {
    name: String
    sku: String
  }

  input ProductInputQuery {
    page: Int
    pageSize: Int
    search: String
  }

  input AccountInputMutation {
    name: String
    email: String
  }

  input AccountInputQuery {
    page: Int
    pageSize: Int
    search: String
  }
`;

export const typeDefs = [rootTypeDefs, accountsSchema, productsSchema];

export const resolvers: any = {
  Query: {
    ...accountsQueries,
    ...productsQueries,
  },
  Mutation: {
    ...accountsMutations,
    ...productsMutations,
  },
};
