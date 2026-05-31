import React, { useReducer } from "react";
import "./App.css";
import { Router } from "./components/Router";
import { CartContext } from "./context/cart-context";
import { cartRedcuer } from "./reducers/cart-reducer";
import useLocalStorage from "./hooks/useLocalStorage";

const initialCart = JSON.parse(localStorage.getItem("cart"));

function App() {
  const [cart, dispatch] = useReducer(cartRedcuer, initialCart);

  useLocalStorage(cart);

  return (
    <CartContext value={{ cart, dispatch }}>
      <Router />
    </CartContext>
  );
}

export default App;
