const { Schema, model, Types } = require("mongoose");

const orderLineSubSchehama = new Schema(
  {
    productId: { type: Types.ObjectId, ref: "Product" },

    quantity: Number,
  },
  { _id: false },
);

module.exports = orderLineSubSchehama;
