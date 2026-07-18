const express = require("express");
const authN = require("../middlewares/auth-n");
const authZ = require("../middlewares/auth-z");
const controllers = require("./order.controllers");

const ordersRouter = express.Router();

ordersRouter.post("/", authN, authZ("BUYER"), controllers.addorder);

module.exports = ordersRouter;
