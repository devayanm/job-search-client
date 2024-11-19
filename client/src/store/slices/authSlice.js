import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: null,
    registerSuccess: false,
    error: null,
  },
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },
    register(state, action) {
      state.registerSuccess = true;
      state.user = action.payload;
      state.error = null;
    },
    setAuthError(state, action) {
      state.error = action.payload;
    },
    resetRegisterSuccess(state) {
      state.registerSuccess = false;
    },
  },
});

export const { login, logout, register, setAuthError, resetRegisterSuccess } =
  authSlice.actions;

export default authSlice.reducer;
