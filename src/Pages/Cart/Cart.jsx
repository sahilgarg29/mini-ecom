import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addOrder, clearCart } from "../../redux/actions";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      {cartItems.map((item) => {
        return (
          <div>
            <div>{item.title}</div>
            <div>{item.price}</div>
          </div>
        );
      })}

      <div> Total - {cartItems.reduce((acc, curr) => acc + curr.price, 0)}</div>
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
  );
};

export default Cart;
