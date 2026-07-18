const express = require("express");
let { PRODUCTS } = require("./products");
const productsRouter = require("./products/products.routes");

const app = express();

app.use(express.json());

app.use("/products", productsRouter);

const PORT = 3001;

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
