import React, { useReducer } from "react";
import "./App.css";
import { Router } from "./components/Router";
import { CartContext } from "./context/cart-context";
import { cartRedcuer } from "./reducers/cart-reducer";

const initialCart = [];

function App() {
  const [cart, dispatch] = useReducer(cartRedcuer, initialCart);

  return (
    <CartContext value={{ cart, dispatch }}>
      <Router />
    </CartContext>
  );
}

export default App;
