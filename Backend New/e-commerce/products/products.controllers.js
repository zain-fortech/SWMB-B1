const Product = require("./entity/product.entity");

const controllers = {
  addProduct: async (req, res) => {
    const user = req.loggedInUser;

    const {
      name,
      sellingUom,
      price,
      category,
      genere,
      expDate,
      mfgDate,
      manufacturer,
    } = req.body;

    const product = new Product({
      name,
      sellingUom,
      price,
      category,
      genere,
      expDate,
      mfgDate,
      manufacturer,
      addedBy: user?._id,
    });

    await Product.create(product);

    res.status(201).json({
      message: "Product added successfully!",
    });
  },
};

module.exports = controllers;
