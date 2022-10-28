import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { cartReducer, productReducer } from "./reducer";

export default legacy_createStore(
  combineReducers({
    products: productReducer,
    cart: cartReducer,
  }),
  applyMiddleware(thunk)
);
