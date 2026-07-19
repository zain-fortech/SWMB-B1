const express = require("express");
const controllers = require("./users.controllers");
const authN = require("../middlewares/auth-n");
const authZ = require("../middlewares/auth-z");
const validator = require("../middlewares/validator");
const signUpDto = require("./dtos/signup.dto");

const usersRouter = express.Router();

usersRouter.post("/signup", validator(signUpDto, "body"), controllers.signup);

usersRouter.post("/signin", controllers.signin);

usersRouter.post("/signout", authN, authZ("ALL"), controllers.signout);

module.exports = usersRouter;
