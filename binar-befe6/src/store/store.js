import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "../features/LoginRegister/loginSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
  },
});
