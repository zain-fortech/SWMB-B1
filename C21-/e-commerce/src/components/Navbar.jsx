import React from "react";
import { CartCuont } from "./CartCount";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();

  return (
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
  );
}
