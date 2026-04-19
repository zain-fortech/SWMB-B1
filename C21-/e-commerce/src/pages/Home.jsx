import { useEffect, useState } from "react";
import { Product } from "../components/Product";

export function Home() {
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
        console.log("Data from API:", json);

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
    <div className="flex flex-col justify-center bg-mint-500 min-h-screen gap-y-5">
      <span className="">
        <h1 className="text-4xl text-center font-bolder">Products List</h1>
      </span>

      <div className="flex flex-wrap border-1-black h-24 flex-1 gap-x-4 gap-y-4 overflow-auto align-start p-20 justify-between">
        {products.map((product) => {
          return <Product product={product} />;
        })}
      </div>
    </div>
  );
}
