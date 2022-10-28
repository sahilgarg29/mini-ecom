import React from "react";
import { useSelector } from "react-redux";

import "./orders.css";

const Orders = () => {
  const orders = useSelector((store) => store.orders);

  return (
    <div>
      {orders.map((order) => {
        return (
          <div key={order.id} className="orders">
            <p>Order id - {order.id}</p>

            {order.items.map((item) => {
              return (
                <div key={item.id} className="item">
                  <img src={item.image} alt="" />
                  <p>{item.title}</p>
                  <p>Rs. - {item.price}</p>
                </div>
              );
            })}
            <p>Total - Rs. {order.total}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Orders;
