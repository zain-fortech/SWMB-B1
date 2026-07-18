const logRequest = (req, res, next) => {
  const path = req.path;

  const method = req.method;

  const now = new Date();

  const message = `${now.toJSON()} -> ${method} : ${path}`;

  console.log(message);

  next();
};

module.exports = logRequest;
