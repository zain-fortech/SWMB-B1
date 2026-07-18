const { Schema, model, Types } = require("mongoose");
const orderLineSubSchehama = require("./order-line.subschema");

const ordersSchehama = new Schema(
  {
    placedBy: { type: Types.ObjectId, ref: "User" },

    // orderItems: [orderLineSubSchehama],
    orderItems: { type: [orderLineSubSchehama] },

    // address_id: { type: Types.ObjectId, ref: "Address" },
    address_id: String,

    payment_type: String, // POD, Pre-Paid

    payment_method: String, // QR, Bank Transfer, wire, Paypal, Apple pay

    status: { type: String, default: "CONFIRMED" },

    tracking_id: String,

    driverId: { type: Types.ObjectId, ref: "User" },
  },
  { timestamps: true },
);

const Order = model("Order", ordersSchehama);

module.exports = Order;
