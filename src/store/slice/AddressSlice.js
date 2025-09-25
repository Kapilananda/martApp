// store/slice/AddressSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addresses: [
     {
      fullName: "bunny",
      mobile: "6304330991",
      house: "6-72",
      street: "padmavathi Puram",
      landmark: "oppo rama temple",
      city: "Tirupati",
      state: "Andra Pradesh",
      country: "India",
      pincode: "517501",
      type: "none",
    },
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
    },
     {
      fullName: "Nandu",
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
  defaultAddress: [
    
  ],
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    addAddress: (state, action) => {
      // add newest at front so it shows up first
      state.addresses.unshift(action.payload);
      // if no default set, set this as default
      if (!state.defaultAddress) state.defaultAddress = action.payload;
    },
    setDefaultAddress: (state, action) => {
      state.defaultAddress = action.payload;
    },
    updateAddress: (state, action) => {
      const idx = state.addresses.findIndex((a) => a.id === action.payload.id);
      if (idx !== -1) state.addresses[idx] = action.payload;
      // if updated address was default, update default ref too
      if (state.defaultAddress && state.defaultAddress.id === action.payload.id) {
        state.defaultAddress = action.payload;
      }
    },
    removeAddress: (state, action) => {
      const id = action.payload;
      state.addresses = state.addresses.filter((a) => a.id !== id);
      // if removed address was the default, set a new default (first item) or null
      if (state.defaultAddress && state.defaultAddress.id === id) {
        state.defaultAddress = state.addresses.length ? state.addresses[0] : null;
      }
    },
    clearAddresses: (state) => {
      state.addresses = [];
      state.defaultAddress = null;
    },
  },
});

export const {
  addAddress,
  setDefaultAddress,
  updateAddress,
  removeAddress,
  clearAddresses,
} = addressSlice.actions;

export default addressSlice.reducer;