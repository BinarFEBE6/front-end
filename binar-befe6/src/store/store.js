import { configureStore } from "@reduxjs/toolkit";
import { loginGoogleReducer } from "../features/LoginRegister/loginGoogle";
import { loginReducer } from "../features/LoginRegister/loginSlice";
import { registReducer } from "../features/LoginRegister/registerSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    regist: registReducer,
    loginGoogle: loginGoogleReducer,
  },
});
