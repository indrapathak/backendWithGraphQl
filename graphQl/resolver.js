const { query } = require("express");
const products = require("../models/product.model");
const { Query } = require("mongoose");

module.exports = {
  Query: {
    //Here we are passing first argument as underscore/empty as of now as it  reporesent the parent
    async productsById(_, { ID }) {
      return products.findById(ID);
    },

    async products(_, { count }) {
      return products.find({}).limit(count);
    },
  },

  Mutation: {
    async createProduct(_, { ProductInput: { name, description, price } }) {
      const product = new products({
        name: name,
        description: description,
        price: price,
      });
      const createData = await product.save();
      return createData;
    },

    async deleteProduct(_, { ID }) {
      const deleteData = await products.deleteOne({ _id: ID });

      return deleteData.deletedCount;
    },

    async updateProduct(_, { ID, ProductInput: { name, description, price } }) {
      const updateData = await products.updateOne(
        { _id: ID },
        { name: name, description: description, price: price }
      );

      return updateData.modifiedCount;
    },
  },
};
