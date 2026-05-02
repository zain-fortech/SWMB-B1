import React, { useContext } from "react";
import { CartItem } from "../components/CartItem";
import { CartContext } from "../context/cart-context";

export function Cart() {
  const { cart } = useContext(CartContext);

  console.log("Inside Cart:", cart);

  return (
    <div className="flex flex-col bg-secondary min-h-screen gap-y-5">
      {cart?.map((item) => (
        <CartItem item={item} />
      ))}
    </div>
  );
}
