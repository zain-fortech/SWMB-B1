import React, { useReducer } from "react";
import "./App.css";
import { Router } from "./components/Router";
import { CartContext } from "./context/cart-context";
import { cartRedcuer } from "./reducers/cart-reducer";
import useLocalStorage from "./hooks/useLocalStorage";
import { AuthProvider } from "./Providers/AuthProvider";

const initialCart = JSON.parse(localStorage.getItem("cart"));

function App() {
  const [cart, dispatch] = useReducer(cartRedcuer, initialCart);

  useLocalStorage(cart);

  return (
    <AuthProvider>
      <CartContext value={{ cart, dispatch }}>
        <Router />
      </CartContext>
    </AuthProvider>
  );
}

export default App;
