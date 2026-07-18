const http = require("node:http");
let { PRODUCTS } = require("./products");

const server = http.createServer((req, res) => {
  const path = req.url.split("/");
  const resource = path[1];

  console.log("Request received with url: ", resource);

  if (resource == "products") {
    switch (req.method) {
      case "GET":
        const products = [...PRODUCTS];

        res.setHeader("content-type", "application/json");

        res.end(
          JSON.stringify({
            message: "Products fetched",
            data: products,
          }),
        );
        break;

      case "POST":
        let toCreate = "";

        req.on("data", (chunk) => {
          toCreate += chunk.toString();
        });

        req.on("end", () => {
          const product = JSON.parse(toCreate);

          PRODUCTS.push(product);

          res.setHeader("content-type", "application/json");

          res.end(
            JSON.stringify({
              message: "Product created",
              data: product,
            }),
          );
        });

        break;

      case "PATCH":
        let toUpdate = "";

        req.on("data", (chunk) => {
          toUpdate += chunk.toString();
        });

        req.on("end", () => {
          const updateData = JSON.parse(toUpdate);

          const updateKeys = Object.keys(updateData);

          const productName = path[2];

          const product = PRODUCTS.find(
            (product) => product.name == productName,
          );

          updateKeys.forEach((key) => {
            product[key] = updateData[key];
          });

          res.setHeader("content-type", "application/json");

          res.end(
            JSON.stringify({
              message: "Product updated",
              data: product,
            }),
          );
        });

        break;

      case "DELETE":
        const productName = path[2];

        PRODUCTS = PRODUCTS.filter((product) => product.name !== productName);

        res.setHeader("content-type", "application/json");

        res.end(
          JSON.stringify({
            message: "Product deleted",
            data: productName,
          }),
        );
        break;

      default:
        break;
    }
  } else {
    res.write("Incorrect url");
    res.end();
  }
});

const PORT = 3000;

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
