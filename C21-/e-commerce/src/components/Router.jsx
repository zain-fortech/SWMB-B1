import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductsList } from "../pages/ProductsList";
import { Login } from "../pages/Login";
import { MainLayout } from "../layout/MainLayout";
import { AuthLayout } from "../layout/AuthLayout";
import { ProtectedCart } from "../protected-pages/ProtectedCart";

export function Router() {
  return (
    <BrowserRouter>
      <div className="flex flex-col px-20 bg-secondary justify-center min-h-screen gap-y-5">
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<ProductsList />} />
            <Route path="/cart" element={<ProtectedCart />} />
          </Route>

          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
