import { useContext, useEffect, useState } from "react";
import { Product } from "../components/Product";
import { CartContext } from "../context/cart-context";
import { CartCuont } from "../components/CartCount";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center bg-mint-500 min-h-screen gap-y-5">
      <div className="flex p-4">
        <div className="flex-1 flex gap-4">
          <span className="">
            <h4
              className="text-xl text-center font-bolder underline cursor-pointer"
              onClick={() => navigate("/")}
            >
              Products List
            </h4>
          </span>
          <span className="">
            <h4
              className="text-xl text-center font-bolder underline cursor-pointer"
              onClick={() => navigate("/cart")}
            >
              Go to Cart
            </h4>
          </span>
        </div>
        <CartCuont />
      </div>

      <div className="flex flex-wrap border-1-black h-24 flex-1 gap-x-4 gap-y-4 overflow-auto align-start p-20 justify-between">
        {products.map((product) => {
          return <Product product={product} />;
        })}
      </div>
    </div>
  );
}
