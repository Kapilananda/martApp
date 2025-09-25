import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [
    { id: "p1", price: 40, title: "milk", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwFYKIqHw7HhpG9_2oEBaCtIoOhKYxZdKA4Q&s" },
    { id: "p2", price: 60, title: "bread", image: "https://prod.image.theorganicworld.com/storage/app/public/product/thumbnail/2025-03-13-67d267e075ec3.png" },
    { id: "p3", price: 120, title: "Jam", image: "https://m.media-amazon.com/images/I/61X2Ov+z7XL._UF894,1000_QL80_.jpg" }

  ],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.cartItems.find((i) => i.id === item.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
      state.totalQuantity += 1;
      state.totalPrice += item.price;
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const existing = state.cartItems.find((i) => i.id === itemId);

      if (existing) {
        state.totalQuantity -= existing.quantity;
        state.totalPrice -= existing.price * existing.quantity;
        state.cartItems = state.cartItems.filter((i) => i.id !== itemId);
      }
    },
    increaseQty: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += item.price;
      }
    },
    decreaseQty: (state, action) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          state.totalQuantity -= 1;
          state.totalPrice -= item.price;
        } else {
          // ✅ remove if qty goes to 0
          state.cartItems = state.cartItems.filter((i) => i.id !== item.id);
          state.totalQuantity -= 1;
          state.totalPrice -= item.price;
        }
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, increaseQty, decreaseQty, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
