import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recentOrders: [
    {
      id: "d1",
      date : "Sep 21",
      category : "Groceries",
      itemCount : 3,
      status: "Delivered",
      deliveryOtp: "1224",
      items: [
        { id: "p1", price: 40, name: "milk", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwFYKIqHw7HhpG9_2oEBaCtIoOhKYxZdKA4Q&s" },
        { id: "p2", price: 60, name: "bread", image: "https://prod.image.theorganicworld.com/storage/app/public/product/thumbnail/2025-03-13-67d267e075ec3.png" },
        { id: "p3", price: 120, name: "Jam", image: "https://m.media-amazon.com/images/I/61X2Ov+z7XL._UF894,1000_QL80_.jpg" }
      ]
    },
    {
      id: "d2",
      date : "Sep 21",
      category : "Groceries",
      itemCount : 3,
      status: "Delivered",
      deliveryOtp: "1224",
      items: [
        { id: "p2", price: 60, name: "bread", image: "https://prod.image.theorganicworld.com/storage/app/public/product/thumbnail/2025-03-13-67d267e075ec3.png" },
        { id: "p1", price: 40, name: "milk", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwFYKIqHw7HhpG9_2oEBaCtIoOhKYxZdKA4Q&s" },
        { id: "p3", price: 120, name: "Jam", image: "https://m.media-amazon.com/images/I/61X2Ov+z7XL._UF894,1000_QL80_.jpg" },
      ]
    },
    {
      id: "d3",
      date : "Sep 21",
      category : "Groceries",
      itemCount : 3,
      status: "Delivered",
      deliveryOtp: "1224",
      items: [
        { id: "p3", price: 120, name: "Jam", image: "https://m.media-amazon.com/images/I/61X2Ov+z7XL._UF894,1000_QL80_.jpg" },
        { id: "p2", price: 60, name: "bread", image: "https://prod.image.theorganicworld.com/storage/app/public/product/thumbnail/2025-03-13-67d267e075ec3.png" },
        { id: "p1", price: 40, name: "milk", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwFYKIqHw7HhpG9_2oEBaCtIoOhKYxZdKA4Q&s" },
      ]
    },
  ],
};

const recentOrdersSlice = createSlice({
  name: "recentOrders",
  initialState,
  reducers: {
    addRecentOrder: (state, action) => {
      const order = action.payload;
      // prevent duplicates → move existing order to top
      const existingIndex = state.recentOrders.findIndex(
        (item) => item.id === order.id
      );
      if (existingIndex !== -1) {
        state.recentOrders.splice(existingIndex, 1);
      }
      state.recentOrders.unshift(order);

      // keep only last 10 orders
      if (state.recentOrders.length > 10) {
        state.recentOrders.pop();
      }
    },
    clearRecentOrders: (state) => {
      state.recentOrders = [];
    },
  },
});

export const { addRecentOrder, clearRecentOrders } = recentOrdersSlice.actions;
export default recentOrdersSlice.reducer;
