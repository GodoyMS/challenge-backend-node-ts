import { gql } from "apollo-server-express";
export const schema = gql`
  extend type Query {
    testAccQ: Int
    Accounts(params: AccountInputQuery): [AccountQuery]
    hello(name: String): String!
  }

  extend type Mutation {
    testAccM: Boolean
    AddAccount(user: AccountInputMutation): AccountQuery
  }
`;
