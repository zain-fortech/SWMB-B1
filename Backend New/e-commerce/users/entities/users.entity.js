const { Schema, model } = require("mongoose");

const usersSceham = new Schema({
  name: String,

  email: String,

  phone: Number,

  countryCode: String,

  password: String,

  DOB: String,

  adress: String,

  CNIC: Number,

  token_identifier: String,

  role: String, // Admin, Buyer, Driver
});

const User = model("User", usersSceham);

module.exports = User;
