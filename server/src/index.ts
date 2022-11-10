import { ApolloServer } from "apollo-server";
import { schema } from "./schema";
import { context } from "./context";

export const server = new ApolloServer({
  schema,
  context,
});

const port = process.env.PORT_NUM;

server.listen({ port }).then(({ url }) => {
  console.log(`Server is ready at ${url}`);
});
