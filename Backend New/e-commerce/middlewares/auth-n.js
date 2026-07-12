const jwt = require("jsonwebtoken");
const User = require("../users/entities/users.entity");

const authN = async (req, res, next) => {
  const bearerToken =
    req.headers["Authorization"] || req.headers["authorization"];

  if (!bearerToken) {
    return res.status(401).json({
      message: "Token missing!",
    });
  }

  const [, token] = bearerToken.split(" ");

  let decoded;

  try {
    decoded = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token!",
    });
  }

  const { id, token_identifier } = decoded;

  const userFound = await User.findOne({
    _id: id,
    token_identifier,
  }).lean();

  if (!userFound) {
    return res.status(401).json({
      message: "Invalid token!",
    });
  }

  req.loggedInUser = userFound;

  next();
};

module.exports = authN;
