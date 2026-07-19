const Joi = require("joi");
const passwordRegex = require("../constants/password-regex");
const USER_ROLES = require("../constants/user-roles");

const signUpDto = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  phone: Joi.number().integer().min(10).max(10),
  countryCode: Joi.string().required(),
  password: Joi.string().pattern(new RegExp(passwordRegex)).required(),
  DOB: Joi.string().required(),
  address: Joi.string().required(),
  CNIC: Joi.number().min(14).max(14).required(),
  role: Joi.valid(...USER_ROLES)
    .default("BUYER")
    .required(),
});

module.exports = signUpDto;
