import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/CartSlice";
import favoriteReducer from "./slice/FavoritesSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorite: favoriteReducer,
  },
});
