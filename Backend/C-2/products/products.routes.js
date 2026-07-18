const { Router } = require("express");
const { PRODUCTS } = require("../products");
const auth = require("../middleware/auth");
const logRequest = require("../middleware/logging");

const productsRouter = Router();

productsRouter.use(logRequest);

productsRouter.get("/", (req, res) => {
  const { category } = req.query;

  if (!category) {
    const products = [...PRODUCTS];

    return res.send(products);
  }

  const filteredProducts = PRODUCTS.filter(
    (product) => product.category == category,
  );

  res.send(filteredProducts);
});

productsRouter.post("/", auth, (req, res) => {
  const product = req.body;

  PRODUCTS.push(product);

  res.send("Product added successfully.");
});

productsRouter.patch("/:productId", (req, res) => {
  const updateData = req.body;

  const { productId } = req.params;

  const updateKeys = Object.keys(updateData);

  const product = PRODUCTS.find((product) => product.id == productId);

  updateKeys.forEach((key) => {
    product[key] = updateData[key];
  });

  res.send("Product updated successfully.");
});

productsRouter.delete("/:productId", (req, res) => {
  const { productId } = req.params;

  PRODUCTS = PRODUCTS.filter((product) => product.id != productId);

  res.send("Product deleted successfully.");
});

module.exports = productsRouter;
