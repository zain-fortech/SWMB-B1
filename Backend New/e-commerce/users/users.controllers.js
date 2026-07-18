const { randomBytes } = require("node:crypto");
const User = require("./entities/users.entity");
const jwt = require("jsonwebtoken");

const controllers = {
  signup: async (req, res) => {
    const {
      name,
      email,
      phone,
      countryCode,
      password,
      DOB,
      address,
      CNIC,
      role,
    } = req.body;

    const user = new User({
      name,
      email,
      phone,
      countryCode,
      password,
      DOB,
      address,
      role,
      CNIC,
    });

    await User.create(user);

    res.status(201).json({
      message: "User created successfully",
    });
  },

  signin: async (req, res) => {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email, password });

    if (!existingUser) {
      return res.status(401).json({
        message: "Incorrect email or password.",
      });
    }

    const token_identifier = randomBytes(16).toString("hex");

    const token = jwt.sign(
      {
        id: existingUser._id,
        token_identifier,
        role: existingUser.role,
      },
      process.env.JWT_PRIVATE_KEY,
      { expiresIn: "14d" },
    );

    await User.updateOne({ _id: existingUser._id }, { token_identifier });

    res.status(200).json({
      message: "Welcome! you're logged in.",
      token,
    });
  },

  signout: async (req, res) => {
    const { _id } = req.loggedInUser;

    await User.updateOne({ _id }, { $unset: { token_identifier: "" } });

    res.status(200).json({
      message: "Logged out!",
    });
  },
};

module.exports = controllers;
