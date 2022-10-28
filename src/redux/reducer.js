import { GET_PRODUCTS } from "./actionTypes";

const productState = [];

export const productReducer = (state = productState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};
