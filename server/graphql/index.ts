import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

import { typeDefs, resolvers } from "./root";

async function startApolloServer(app: any) {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,

    csrfPrevention: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: "/graphql" });
}

export { startApolloServer };
