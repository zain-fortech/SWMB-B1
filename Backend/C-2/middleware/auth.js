const USERS = require("../constants/users");

const auth = (req, res, next) => {
  const userId = req.headers["authorization"];

  const userFound = USERS.find((user) => user.id == userId);

  if (userFound) {
    return next();
  }

  res.status(400).send("You need to login first.");
};

module.exports = auth;
