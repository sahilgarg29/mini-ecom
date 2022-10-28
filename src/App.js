import { Route, Routes } from "react-router";
import "./App.css";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Orders from "./Pages/Orders";
import ProductDetails from "./Pages/ProductDetails";
import { useEffect } from "react";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
}

export default App;
