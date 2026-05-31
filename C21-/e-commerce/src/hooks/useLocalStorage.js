import { useEffect } from "react";

function useLocalStorage(cart) {
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
}

export default useLocalStorage;
