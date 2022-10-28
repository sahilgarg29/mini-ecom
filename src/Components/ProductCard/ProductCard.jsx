import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div>
      <img src={product.image} alt="" srcset="" />
      <Link to={`product/${product.id}`}>
        <h3>{product.title}</h3>
      </Link>
      <p>Price - {product.price}</p>
    </div>
  );
};

export default ProductCard;
