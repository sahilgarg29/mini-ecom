import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addToCart } from "../../redux/actions";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
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
      <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
    </div>
  );
};

export default ProductDetails;
