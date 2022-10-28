import axios from "axios";
import { ADD_ORDER, ADD_TO_CART, GET_PRODUCTS } from "./actionTypes";

export const fetchProducts = (page) => (dispatch) => {
  axios
    .get(
      `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=12`
    )
    .then((res) => {
      console.log(res.data.data);
      dispatch(getProducts(res.data.data));
    });
};

export const getProducts = (payload) => {
  return {
    type: GET_PRODUCTS,
    payload: payload,
  };
};

export const addToCart = (payload) => {
  return {
    type: ADD_TO_CART,
    payload: payload,
  };
};

export const addOrder = (payload) => {
  return {
    type: ADD_ORDER,
    payload: payload,
  };
};
