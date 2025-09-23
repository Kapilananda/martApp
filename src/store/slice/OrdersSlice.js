// src/store/slice/ordersSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentOrders: [
        {
            id: 1,
            category: "Electronics",
            status: "enroute",
            deliveryOtp: "1234",
            items: [
                { id: "p1", price: 5500, name: "Headphones", image: "https://storage.googleapis.com/shy-pub/305289/SKU-1621_0-1730978221394.webp" },
                { id: "p2", price: 1200, name: "Charger", image: "https://5.imimg.com/data5/XQ/AI/MY-35383065/esu210-5v-3a1a-charger-28standard-usb-port-29-500x500.jpg" }
            ]
        },
        
    ],
    recentOrders: [],
};

const ordersSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        // 🔹 Add a new order → goes into currentOrders
        addOrder: (state, action) => {
            state.currentOrders.push(action.payload);
        },

        // 🔹 When an order is delivered → move it from currentOrders → recentOrders
        markOrderDelivered: (state, action) => {
            const orderId = action.payload;
            const index = state.currentOrders.findIndex((o) => o.id === orderId);

            if (index !== -1) {
                const deliveredOrder = {
                    ...state.currentOrders[index],
                    status: "Delivered",
                };

                // remove from currentOrders
                state.currentOrders.splice(index, 1);

                // prevent duplicates in recentOrders
                const existingIndex = state.recentOrders.findIndex(
                    (item) => item.id === deliveredOrder.id
                );
                if (existingIndex !== -1) {
                    state.recentOrders.splice(existingIndex, 1);
                }

                // add to recentOrders (on top)
                state.recentOrders.unshift(deliveredOrder);

                // keep only last 10 recent orders
                if (state.recentOrders.length > 10) {
                    state.recentOrders.pop();
                }
            }
        },

        // 🔹 Cancel an order (removes only from currentOrders)
        cancelOrder: (state, action) => {
            state.currentOrders = state.currentOrders.filter(
                (order) => order.id !== action.payload
            );
        },

        // 🔹 Clear everything (useful for logout/reset)
        clearOrders: (state) => {
            state.currentOrders = [];
            state.recentOrders = [];
        },
    },
});

export const {
    addOrder,
    markOrderDelivered,
    cancelOrder,
    clearOrders,
} = ordersSlice.actions;

export default ordersSlice.reducer;
