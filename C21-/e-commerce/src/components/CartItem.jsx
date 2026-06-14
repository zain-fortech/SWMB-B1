import React, { useContext } from "react";
import { CartContext } from "../context/cart-context";

export const CartItem = ({ item }) => {
  const { dispatch } = useContext(CartContext);

  const increaseQty = (itemId) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: itemId });
  };

  const decreaseQty = (itemId) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: itemId });
  };

  const removeFromCart = (itemId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: itemId });
  };

  return (
    <div className="flex w-1/2 h-30 border-1 p-2 gap-2">
      <div className="flex-1 w-1/5">
        <img className="w-full h-full object-contain" src={item.images?.[0]} />
      </div>

      <div className="flex flex-col flex-auto px-2 gap-y-1">
        <span className="font-bold flex justify-between">
          <span>{item.title}</span>
          <span
            className="cursor-pointer hover:bg-red-500 px-1"
            onClick={() => removeFromCart(item.id)}
          >
            X
          </span>
        </span>
        <span className="text-xs">{item.shippingInformation}</span>
        <span className="flex gap-x-2">
          <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10">
            {item.brand}
          </span>
          <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-gray-600 inset-ring inset-ring-gray-500/10">
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
