const ProductCard = ({ image, title, price, category, description }) => {
  return (
    <>
      <div>
        <img src={image} alt={`${title}`} />
        <h2>{price}</h2>
        <p>{category}</p>
        <p>{description}</p>
      </div>
    </>
  );
};
export default ProductCard;
