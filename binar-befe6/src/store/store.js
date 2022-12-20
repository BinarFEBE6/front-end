import { configureStore } from "@reduxjs/toolkit";
import { dataReducer } from "../features/details";
import { guestDetailsReducer } from "../features/guestDetailsSlice";

import { loginReducer } from "../features/LoginRegister/loginSlice";
import { registReducer } from "../features/LoginRegister/registerSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    regist: registReducer,
    guestDetails: guestDetailsReducer,
    data: dataReducer,
  },
});
