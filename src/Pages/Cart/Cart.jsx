import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart);

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
      {/* <button onClick={}>Place Order</button> */}
    </div>
  );
};

export default Cart;
