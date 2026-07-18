const { Schema, model, Types } = require("mongoose");
const orderLineSubSchehama = require("./order-line.subschema");

const addressSchehama = new Schema(
  {
    country: String,

    state: String,

    city: String,

    street: String,

    notes: String,
  },
  { timestamps: true },
);

const Adress = model("Adress", addressSchehama);

module.exports = Adress;
