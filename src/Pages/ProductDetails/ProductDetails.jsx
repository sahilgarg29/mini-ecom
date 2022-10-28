import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  const products = useSelector((store) => store.products);

  useEffect(() => {
    setProduct(products.find((e) => e.id == id));
  }, [products]);

  return (
    <div>
      <img src={product.image} alt="" srcset="" />
      <h2>{product.title}</h2>
      <p>Price - {product.price}</p>
      <p>Brand - {product.brand}</p>
      <p>Category - {product.category}</p>
    </div>
  );
};

export default ProductDetails;
