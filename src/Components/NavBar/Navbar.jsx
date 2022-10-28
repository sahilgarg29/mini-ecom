import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <h1>Mini Ecommerce</h1>
      <Link to="/cart">Cart</Link>
      <Link to="/orders">Orders</Link>
    </div>
  );
};

export default Navbar;
