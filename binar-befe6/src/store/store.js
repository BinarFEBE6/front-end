import { configureStore } from "@reduxjs/toolkit";
import { addScheduleReducer } from "../features/addScheduleSlice";
import { guestDetailsReducer } from "../features/guestDetailsSlice";
import { loginReducer } from "../features/LoginRegister/loginSlice";
import { registReducer } from "../features/LoginRegister/registerSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    regist: registReducer,
    guestDetails: guestDetailsReducer,
    addSchedule: addScheduleReducer,
  },
});
