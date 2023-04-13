import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import foods from "./modules/index.food.js";
import orders from "./modules/index.order.js";
import users from "./modules/index.users.js";
const server = new ApolloServer({
  typeDefs: [foods.foodSchema, orders.orderSchema, users.userSchema],
  resolvers: [foods.resolvers, orders.resolvers, users.resolvers],
})


const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
