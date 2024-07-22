const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
//const { ApolloServer } = require("apollo-server");
const bodyParser = require("body-parser");
const { expressMiddleware } = require("@apollo/server/express4");
const mongoose = require("mongoose");

const MONGO_URL =
  "mongodb+srv://indra:pathak@cluster0.istxu4j.mongodb.net/Learning_Datatbase";
const typeDefs = require("./graphQl/typedefs");
const resolvers = require("./graphQl/resolver");

const server = new ApolloServer({ typeDefs, resolvers });

mongoose
  .connect(MONGO_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((e) => {
    console.log("Error in connecting to mongodb", e);
  });

startStandaloneServer(server)
  .then((res) => {
    console.log(`🚀 Server ready at ${res.url}`);
  })
  .catch((e) => {
    console.log("error is", e);
  });

// async function startServer() {
//   const app = express();
//   // const apolloServer = ApolloServer({});
//   app.use(cors());
//   app.use(bodyParser.json());

//   //   await apolloServer.start();

//   //   app.use("/graphQl", expressMiddleware(apolloServer));

//   app.listen(8000, console.log("Listening on PORT 8000"));
// }

// startServer();
