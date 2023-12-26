// import { configureStore } from "@reduxjs/toolkit";
// import { authSlice } from "./slices/isAuthenticationSlice";

// export const store = configureStore({
//   reducer: {
//     auth: authSlice,
//   },
// });

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/isAuthenticationSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});
