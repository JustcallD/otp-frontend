// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   isAuthentication: false,
// };

// export const authSlice = createSlice({
//   name: "authSlice",
//   initialState,
//   reducers: {
//     login: (state) => {
//       state.isAuthentication = true;
//     },
//     Logout: (state) => {
//       state.isAuthentication = false;
//     },
//   },
// });

// export const { login, Logout } = authSlice.actions;

// export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthentication: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthentication = true;
    },
    logout: (state) => {
      // Use consistent lowercase for actions
      state.isAuthentication = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

// No need for this:
export default authSlice.reducer;
