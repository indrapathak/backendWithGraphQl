//const { gql } = require("apollo-server");
const { ApolloServer } = require("@apollo/server");
module.exports = `#graphql
  type Product {
    name: String
    description: String
    price: Int
  }

  input ProductInput {
    name: String
    description: String
    price: Int
  }

  type Query {
    productsById(ID: ID!): Product!

    products(count: Int!): [Product]
  }

  type Mutation {
    createProduct(ProductInput: ProductInput): Product!

    deleteProduct(ID: ID!): Boolean

    updateProduct(ID: ID!, ProductInput: ProductInput): Boolean
  }
`;
