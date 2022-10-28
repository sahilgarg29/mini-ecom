import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { cartReducer, orderReducer, productReducer } from "./reducer";

export default legacy_createStore(
  combineReducers({
    products: productReducer,
    cart: cartReducer,
    orders: orderReducer,
  }),
  applyMiddleware(thunk)
);
