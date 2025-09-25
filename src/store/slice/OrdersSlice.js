// src/store/slice/ordersSlice.js
import { createSlice } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";

// const recentOrders = useSelector((state) => state.orders.recentOrders);

const initialState = {
    currentOrders: [
        {
            id: 2,
            date: "21 sep",
            category: "Uncategorized",
            status: "processed",
            deliveryOtp: 1254,
            items: [
                { id: "p1", price: 5500, title: "Headphones", image: "https://storage.googleapis.com/shy-pub/305289/SKU-1621_0-1730978221394.webp" },
                { id: "p2", price: 1200, title: "Charger", image: "https://5.imimg.com/data5/XQ/AI/MY-35383065/esu210-5v-3a1a-charger-28standard-usb-port-29-500x500.jpg" }

            ],
            address: [
                {
                    fullName: "vichu",
                    mobile: "6304330991",
                    house: "6-72",
                    street: "padmavathi Puram",
                    landmark: "oppo rama temple",
                    city: "Tirupati",
                    state: "Andra Pradesh",
                    country: "India",
                    pincode: "517501",
                    type: "none",
                }
            ],
            shipmentNo: 491,
            paymentMethod: "cash on delivery",
        }

    ],
    recentOrders: [
        {
            id: 2,
            date: "21 sep",
            category: "Uncategorized",
            status: "processed",
            deliveryOtp: 1254,
            items: [
                { id: "p1", price: 40, title: "milk", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwFYKIqHw7HhpG9_2oEBaCtIoOhKYxZdKA4Q&s" },
                { id: "p2", price: 60, title: "bread", image: "https://prod.image.theorganicworld.com/storage/app/public/product/thumbnail/2025-03-13-67d267e075ec3.png" },
                { id: "p3", price: 120, title: "Jam", image: "https://m.media-amazon.com/images/I/61X2Ov+z7XL._UF894,1000_QL80_.jpg" }

            ],
            address: [
                {
                    fullName: "vichu",
                    mobile: "6304330991",
                    house: "6-72",
                    street: "padmavathi Puram",
                    landmark: "oppo rama temple",
                    city: "Tirupati",
                    state: "Andra Pradesh",
                    country: "India",
                    pincode: "517501",
                    type: "none",
                }
            ],
            shipmentNo: 491,
            paymentMethod: "cash on delivery",
        }

    ],
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
        //this is from the RecentOrderSlice
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
        //
        clearRecentOrders: (state) => {
            state.recentOrders = [];
        },
    },
});

export const {
    addOrder,
    markOrderDelivered,
    cancelOrder,
    clearOrders,
    addRecentOrder,
    clearRecentOrders,
} = ordersSlice.actions;

export default ordersSlice.reducer;
