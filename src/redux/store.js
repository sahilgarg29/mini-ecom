import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./reducer";

export default legacy_createStore(productReducer, applyMiddleware(thunk));
