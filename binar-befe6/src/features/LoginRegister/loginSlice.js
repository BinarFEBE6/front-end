import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";
const initialState = {
  login: {},
  loading: false,
};

export const logIn = createAsyncThunk("login/postLog", async (values) => {
  try {
    const res = await axios.post(
      "https://binar-academy-terbangin.herokuapp.com/api/auth/signin",
      values
    );
    localStorage.setItem("roles", JSON.stringify(res.data.data.roles[0]));
    localStorage.setItem("token", JSON.stringify(res.data.data.token));
    localStorage.setItem("user", JSON.stringify(res.data.data.username));
    localStorage.setItem("userId", JSON.stringify(res.data.data.id));
    localStorage.setItem("userEmail", JSON.stringify(res.data.data.email));

    return res.data.data;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Sorry Username Or Password Is Wrong ",
    });
  }
});

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: {
    [logIn.pending]: (state) => {
      state.loading = true;
    },
    [logIn.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.loading = false;
      state.login = payload;
    },
    [logIn.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const loginReducer = loginSlice.reducer;
