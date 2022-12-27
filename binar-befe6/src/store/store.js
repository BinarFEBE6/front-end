import { configureStore } from "@reduxjs/toolkit";
import { addScheduleReducer } from "../features/addScheduleSlice";
import { detailsSlice } from "../features/details";

import { guestDetailsReducer } from "../features/guestDetailsSlice";
import { loginGoogleReducer } from "../features/LoginRegister/loginGoogle";

import { loginReducer } from "../features/LoginRegister/loginSlice";
import { registReducer } from "../features/LoginRegister/registerSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    regist: registReducer,
    guestDetails: guestDetailsReducer,
    details: detailsSlice.reducer,
    addSchedule: addScheduleReducer,
    loginGoogle: loginGoogleReducer,
  },
});
