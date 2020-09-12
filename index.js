import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";
import cors from "cors";

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers,
  // cors: {
  //   origin: ["http://localhost:3000"],
  //   credentials: true,
  // },
});

// server.use(cors());

// const opts = {
//   port: 4000,
//   cors: {
//     credentials: true,
//     origin: ["http:://localhost:3000"],
//   },
// };

server.start(() => console.log("GraphQL Server Running"));
