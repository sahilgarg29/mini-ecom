import React from "react";
import { useSelector } from "react-redux";

const Orders = () => {
  const orders = useSelector((store) => store.orders);

  return (
    <div>
      {orders.map((order) => {
        return <div>{order.total}</div>;
      })}
    </div>
  );
};

export default Orders;
