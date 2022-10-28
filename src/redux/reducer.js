import { ADD_TO_CART, GET_PRODUCTS } from "./actionTypes";

const productState = [];

export const productReducer = (state = productState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};

const cartState = [];

export const cartReducer = (state = cartState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    default:
      return state;
  }
};
