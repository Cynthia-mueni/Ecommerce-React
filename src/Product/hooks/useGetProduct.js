import { getProduct } from "../utilis";
import { useEffect, useState } from "react";

export const useGetProduct = () => {
  const [products, setProducts] = useState([]);
  const [error, setErrors] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const result = await getProduct();
        // console.log({ result });
        setProducts(result);
        setLoading(false);
      } catch (error) {
        setErrors(`Error:${error.message}`);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  return { products, error, loading };
};
