import React from "react";
import "./index.css";
import ProductCard from "../Atoms/ProductCard";
import { useGetProduct } from "./hooks/useGetProduct";

const Product = () => {
  const { products, error, loading } = useGetProduct();
  //   console.log({ product });
  return (
    <div className="item">
      {loading && <h2>loading product ...</h2>}
      {error && <h2>{error}</h2>}
      {products
        ? products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={`${product.title}`}
              price={product.price}
              category={product.category}
              description={product.description}
            />
          ))
        : !loading && <h2>No products found</h2>}
    </div>
  );
};
export default Product;
