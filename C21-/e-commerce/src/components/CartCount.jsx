import { useContext } from "react";
import { CartContext } from "../context/cart-context";

export function CartCuont() {
  const { cart } = useContext(CartContext);

  const cartCount = cart.length;

  return (
    <span>
      <strong>Cart count: {cartCount}</strong>
    </span>
  );
}
