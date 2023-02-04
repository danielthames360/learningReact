import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "checking", // 'not-authenticated', 'authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = "authenticated";
      state.ok = payload.ok;
      state.displayName = payload.displayName;
      state.email = payload.email;
      state.photoURL = payload.photoURL;
      state.uid = payload.uid;
      state.errorMessage = null;
    },
    logout: (state, { payload }) => {
      state.status = "not-authenticated";
      state.ok = null;
      state.displayName = null;
      state.email = null;
      state.photoURL = null;
      state.uid = null;
      state.errorMessage = payload?.errorMessage; 
    },
    checkingCredentials: (state) => {
      state.status = "checking";
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials } = authSlice.actions;
