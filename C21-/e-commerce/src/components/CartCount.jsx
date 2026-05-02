import { useContext } from "react";
import { CartContext } from "../context/cart-context";

export function CartCuont() {
  const { cart } = useContext(CartContext);

  const cartCount = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  return (
    <span>
      <strong>Cart count: {cartCount}</strong>
    </span>
  );
}
