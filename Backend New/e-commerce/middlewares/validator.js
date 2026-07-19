const jwt = require("jsonwebtoken");

const User = require("../users/entities/users.entity");

const resolveDataFromSource = (source, req) => {
  const data = req[source];

  return data;
};

const validator = (dto, source) => {
  return async (req, res, next) => {
    const data = resolveDataFromSource(source, req);

    const { error, value } = dto.validate(data, { abortEarly: false });

    const errors = {};

    if (error) {
      for (const errorObj of error.details) {
        const key = errorObj.path.join(".");

        errors[key] = errorObj.message;
      }

      return res.status(400).json({
        message: "Validation failed",
        errors,
      });
    }

    next();
  };
};

module.exports = validator;
