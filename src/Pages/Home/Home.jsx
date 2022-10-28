import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts, getProducts } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts(1));
  });

  return <div>Home</div>;
};

export default Home;
