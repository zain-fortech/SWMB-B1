import { useState, useEffect } from "react";

function useProducts() {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const [pagination, setPagination] = useState({
    total: 0,
    skip: 0,
    limit: 30,
  });

  const fetchProducts = async () => {
    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=${pagination.limit}&skip=${pagination.skip}`
      );

      const data = await res.json();

      setProducts(data.products);

      setPagination({
        limit: data.limit,
        skip: data.skip,
        total: data.total,
      });
    } catch (error) {
      console.log(error);

      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    /**
     * Fetch products list
     */

    fetchProducts();
  }, []);

  return { products, pagination, loading, error };
}

export default useProducts;
