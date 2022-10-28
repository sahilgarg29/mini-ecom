import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addOrder, clearCart } from "../../redux/actions";

import "./cart.css";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      {cartItems.map((item) => {
        return (
          <div className="cartitem">
            <img src={item.image} alt="" srcset="" />
            <div>{item.title}</div>
            <div>Rs. - {item.price}</div>
          </div>
        );
      })}
      <div>
        <div>
          {" "}
          <strong>
            {" "}
            Total - {cartItems.reduce((acc, curr) => acc + curr.price, 0)}
          </strong>
        </div>
        <button
          onClick={() => {
            dispatch(
              addOrder({
                id: new Date(),
                items: cartItems,
                total: cartItems.reduce((acc, curr) => acc + curr.price, 0),
              })
            );
            dispatch(clearCart());
            navigate("/");
          }}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
