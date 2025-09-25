// src/store/actions/orderActions.js
import { markOrderDelivered } from "../slice/ordersSlice";
import { addRecentOrder } from "../slice/recentOrdersSlice";

// Deliver order and sync to recentOrders
export const deliverOrder = (orderId) => (dispatch, getState) => {
  const { orders } = getState();
  const order = orders.currentOrders.find((o) => o.id === orderId);

  if (order) {
    // 1. Remove from currentOrders
    dispatch(markOrderDelivered(orderId));

    // 2. Add to recentOrders
    dispatch(
      addRecentOrder({
        ...order,
        status: "Delivered",
        date: new Date().toDateString().slice(4, 10), // e.g. "Sep 23"
        itemCount: order.items.length,
      })
    );
  }
};
