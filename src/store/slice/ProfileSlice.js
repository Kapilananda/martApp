import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Fun",
  email: "Fun@test.in",
  phone: "+91 987 654 3210",
  profileImage: null,
  notificationsEnabled: true,
  darkModeEnabled: false,
  isEditing: false, // ✅ important
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setName: (state, action) => { state.name = action.payload; },
    setEmail: (state, action) => { state.email = action.payload; },
    setPhone: (state, action) => { state.phone = action.payload; },
    setProfileImage: (state, action) => { state.profileImage = action.payload; },
    setNotificationsEnabled: (state, action) => { state.notificationsEnabled = action.payload; },
    setDarkModeEnabled: (state, action) => { state.darkModeEnabled = action.payload; },
    toggleEditing: (state) => { state.isEditing = !state.isEditing; },
    resetProfile: () => initialState,
  },
});

export const {
  setName,
  setEmail,
  setPhone,
  setProfileImage,
  setNotificationsEnabled,
  setDarkModeEnabled,
  toggleEditing,
  resetProfile,
} = profileSlice.actions;

export default profileSlice.reducer;
