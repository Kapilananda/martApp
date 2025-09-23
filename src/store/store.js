import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/CartSlice";
import favoriteReducer from "./slice/FavoritesSlice";
import authSlice from "./slice/AuthSlice";
import recentOrdersReducer from './slice/RecentOrderSlice';
import ordersReducer from './slice/OrdersSlice';

export const store = configureStore({
  reducer: {
    auth:authSlice,
    cart: cartReducer,
    favorite: favoriteReducer,
    recentOrders: recentOrdersReducer,
    orders : ordersReducer, 
  },
});
