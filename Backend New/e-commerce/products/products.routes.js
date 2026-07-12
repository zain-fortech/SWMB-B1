const express = require("express");
const controllers = require("./products.controllers");
const authN = require("../middlewares/auth-n");
const authZ = require("../middlewares/auth-z");

const productsRouter = express.Router();

productsRouter.post("/", authN, authZ("ADMIN"), controllers.addProduct);

module.exports = productsRouter;
