import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/CartSlice";
import favoriteReducer from "./slice/FavoritesSlice";
import authSlice from "./slice/AuthSlice";
export const store = configureStore({
  reducer: {
    auth:authSlice,
    cart: cartReducer,
    favorite: favoriteReducer,
  },
});
