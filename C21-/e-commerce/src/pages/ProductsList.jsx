import React from "react";
import { Product } from "../components/Product";
import useProducts from "../hooks/useProducts";

export function ProductsList() {
  const { loading, pagination, products, error } = useProducts();

  if (loading) return "Loading products!";

  if (error) return "Error fetching products!";

  return (
    <div className="flex flex-wrap pb-5 border-1-black h-24 flex-1 gap-x-4 gap-y-4 overflow-auto align-start justify-center">
      {products.map((product) => {
        return <Product product={product} />;
      })}
    </div>
  );
}
