const { Schema, model, Types } = require("mongoose");

const productsSceham = new Schema({
  name: String,

  sellingUom: String,

  price: Number,

  category: String,

  genere: String,

  expDate: String,

  mfgDate: String,

  manufacturer: String,

  addedBy: { type: Types.ObjectId, ref: "User" },
});

const Product = model("Product", productsSceham);

module.exports = Product;
