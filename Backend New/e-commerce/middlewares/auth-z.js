const jwt = require("jsonwebtoken");

const User = require("../users/entities/users.entity");

const authZ = (...roles) => {
  return async (req, res, next) => {
    if (roles[0] == "ALL") {
      return next();
    }

    const user = req.loggedInUser;

    const roleAllowed = roles.includes(user.role);

    if (!roleAllowed) {
      return res.status(401).json({
        message: "You're unauthorized to perform this action.",
      });
    }

    next();
  };
};

module.exports = authZ;
