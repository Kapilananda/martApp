// store/slice/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSignIn: false,   // 🔹 Tracks if user is signed in
  user: null,        // 🔹 Optional: store user info
  token: null,       // 🔹 Optional: store auth token
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.isSignIn = true;
    //   state.user = action.payload?.user || null;
    //   state.token = action.payload?.token || null;
    },
    signOut: (state) => {
      state.isSignIn = false;
      state.user = null;
      state.token = null;
    },
    toggleAuth: (state) => {
      state.isSignIn = !state.isSignIn;
    },
  },
});

export const { signIn, signOut, toggleAuth } = authSlice.actions;
export default authSlice.reducer;