import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialState = {
  login: {},
  loading: false,
};

export const logIn = createAsyncThunk("login/postLog", async (values) => {
  try {
    const res = await axios.post(
      "https://febe6.up.railway.app/api/auth/signin",
      values
    );
    localStorage.setItem("roles", JSON.stringify(res.data.data.roles[0]));
    localStorage.setItem("token", JSON.stringify(res.data.data.token));
    localStorage.setItem("user", JSON.stringify(res.data.data.username));
    localStorage.setItem("userId", JSON.stringify(res.data.data.id));
    localStorage.setItem("userEmail", JSON.stringify(res.data.data.email));

    return res.data.data;
  } catch (error) {
    console.error(error);
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
      console.log(state.login, "afterupdatea");
    },
    [logIn.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const loginReducer = loginSlice.reducer;
