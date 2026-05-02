import React, { useContext } from "react";
import { CartContext } from "../context/cart-context";

export const CartItem = ({ item }) => {
  const { setCart } = useContext(CartContext);

  const increaseQty = (itemId) => {
    setCart((prevValue) => {
      return prevValue.map((cartItem) => {
        if (cartItem.id == itemId) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          };
        } else {
          return cartItem;
        }
      });
    });
  };

  const decreaseQty = (itemId) => {
    setCart((prevValue) => {
      return prevValue.map((cartItem) => {
        if (cartItem.id == itemId) {
          return {
            ...cartItem,
            quantity: cartItem.quantity - 1,
          };
        } else {
          return cartItem;
        }
      });
    });
  };

  return (
    <div className="flex w-1/2 h-30 border-1 p-2 gap-2">
      <div className="flex-1 w-1/5">
        <img className="w-full h-full object-contain" src={item.images?.[0]} />
      </div>

      <div className="flex flex-col flex-auto px-2 gap-y-1">
        <span className="font-bold">{item.title}</span>
        <span className="text-xs">{item.shippingInformation}</span>
        <span className="flex gap-x-2">
          <span class="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10">
            {item.brand}
          </span>
          <span class="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10">
            {item.category}
          </span>
        </span>
        <span className="flex justify-between mt-auto">
          <p className="text-sm">${item.price}</p>

          <div className="flex gap-x-2">
            <span
              className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10 cursor-pointer"
              onClick={() => decreaseQty(item.id)}
            >
              -
            </span>
            <p className="text-sm">Qty: {item.quantity}</p>
            <span
              className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10 cursor-pointer"
              onClick={() => increaseQty(item.id)}
            >
              +
            </span>
          </div>
        </span>
        <span></span>
      </div>
    </div>
  );
};
