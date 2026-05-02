import React, { useState, useEffect } from "react";
import { Product } from "../components/Product";

export function ProductsList() {
  const [products, setProducts] = useState([]);

  const [pagination, setPagination] = useState({
    total: 0,
    skip: 0,
    limit: 30,
  });

  const fetchProducts = () => {
    fetch(
      `https://dummyjson.com/products?limit=${pagination.limit}&skip=${pagination.skip}`
    )
      .then((res) => res.json())
      .then((json) => {
        setPagination({
          limit: json.limit,
          skip: json.skip,
          total: json.total,
        });
        setProducts(json.products);
      });
  };

  useEffect(() => {
    /**
     * Fetch products list
     */

    fetchProducts();
  }, []);

  return (
    <div className="flex flex-wrap pb-5 border-1-black h-24 flex-1 gap-x-4 gap-y-4 overflow-auto align-start justify-center">
      {products.map((product) => {
        return <Product product={product} />;
      })}
    </div>
  );
}
