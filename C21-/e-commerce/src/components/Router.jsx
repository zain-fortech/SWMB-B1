import { Route, Routes } from "react-router-dom";
import { Cart } from "../pages/Cart";
import { Navbar } from "./Navbar";
import { ProductsList } from "../pages/ProductsList";

export function Router() {
  return (
    <div className="flex flex-col px-20 bg-secondary justify-center min-h-screen gap-y-5">
      <Navbar />

      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
