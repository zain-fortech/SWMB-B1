const { randomBytes } = require("node:crypto");
const Order = require("./entities/order.entity");

const controllers = {
  addorder: async (req, res) => {
    const user = req.loggedInUser;

    const { orderItems, address_id, payment_type, payment_method } = req.body;

    const tracking_id = randomBytes(12).toString("hex");

    const order = new Order({
      placedBy: user._id,
      orderItems,
      address_id,
      payment_type,
      payment_method,
      tracking_id,
    });

    await Order.create(order);

    res.status(201).json({
      message: "Order placed successfully",
    });
  },
};

module.exports = controllers;
