import express from "express";
import { ApolloServer } from "apollo-server-express";
import "dotenv/config";

import "./config/db";

import { typeDefs, resolvers } from "./schema";

const app = express();

app.disable("x-powered-by");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: process.env.NODE_ENV === "production" ? false : true
});

server.applyMiddleware({ app });

export { app, server };
