const express = require("express");
const usersRouter = require("./users/users.routes");
const connectDB = require("./storage/mongodb");
const productsRouter = require("./products/products.routes");

require("dotenv").config();

const app = express();

connectDB();

app.use(express.json());

app.use("/users", usersRouter);
app.use("/products", productsRouter);

const PORT = 3010;

app.listen(PORT, () => console.log(`Server started listeing on port: ${PORT}`));
