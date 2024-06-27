import React from "react";
import "./index.css";
import ProductCard from "../Atoms/ProductCard";
import { useGetProduct } from "./hooks/useGetProduct";

// const Product = () => {
//   const { products, error, loading } = useGetProduct();
//   //   console.log({ product });
//   return (
//     <div className="product-div">
//       {loading && <h2>loading product ...</h2>}
//       {error && <h2>{error}</h2>}
//       {products
//         ? products.map((product) => (
//             <ProductCard
//               key={product.id}
//               image={product.image}
//               title={`${product.title}`}
//               price={product.price}
//               category={product.category}
//               description={product.description}
//             />
//           ))
//         : !loading && <h2>No products found</h2>}
//     </div>
//   );
// };
// export default Product;

const Product = () => {
  const { products, error, loading } = useGetProduct();

  return (
    <div className="product-div">
      {loading && <h2 className="loading-message">Loading product...</h2>}
      {error && <h2 className="error-message">{error}</h2>}
      {products
        ? products.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.title} />
              </div>
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">Price: ${product.price}</p>
              <p className="product-category">Category: {product.category}</p>
              <p className="product-description">{product.description}</p>
            </div>
          ))
        : !loading && (
            <h2 className="no-products-message">No products found</h2>
          )}
    </div>
  );
};

export default Product;
