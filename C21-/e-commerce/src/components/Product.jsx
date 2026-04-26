import React, { useContext, useState } from "react";
import { CartContext } from "../context/cart-context";

export function Product({ product }) {
  const { setCart } = useContext(CartContext);

  const [btnText, setBtnText] = useState("Add to cart");

  const resetBtnText = () => {
    setTimeout(() => {
      setBtnText("Add to cart");
    }, 3000);
  };

  const addToCart = (product) => {
    setCart((prevValue) => [...prevValue, product]);

    setBtnText("Successfully added!");

    resetBtnText();
  };

  return (
    <div className="flex flex-col gap-4 min-w-30 border min-h-30 p-3">
      <p>Title: {product.title}</p>
      <p>Price: {product.price}</p>
      <p>Brand: {product.brand}</p>
      <p>Category: {product.category}</p>

      <button
        className="border p-2 cursor-pointer hover:bg-sky-700 text-xs"
        onClick={() => addToCart(product)}
      >
        {btnText}
      </button>
    </div>
  );
}
