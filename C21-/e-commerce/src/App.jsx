import React, { useState } from "react";
import "./App.css";
import { Router } from "./components/Router";
import { CartContext } from "./context/cart-context";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <CartContext value={{ cart, setCart }}>
      <Router />
    </CartContext>
  );
}

export default App;
