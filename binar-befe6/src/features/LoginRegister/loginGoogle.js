import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loginGoogle: {},
  loading: false,
};

export const logInGoogle = createAsyncThunk(
  "loginGoogle/postLogGoogle",
  async () => {
    try {
      const res = await axios.get(
        "https://binar-academy-terbangin.herokuapp.com/oauth/token"
      );
      //   localStorage.setItem("roles", JSON.stringify(res.data.data.roles[0]));
      //   localStorage.setItem("token", JSON.stringify(res.data.data.token));
      //   localStorage.setItem("user", JSON.stringify(res.data.data.username));
      //   localStorage.setItem("userId", JSON.stringify(res.data.data.id));
      //   localStorage.setItem("userEmail", JSON.stringify(res.data.data.email));

      return res.data.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const loginGoogleSlice = createSlice({
  name: "loginGoogle",
  initialState,
  reducers: {},
  extraReducers: {
    [logInGoogle.pending]: (state) => {
      state.loading = true;
    },
    [logInGoogle.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.loading = false;
      state.logInGoogle = payload;
      console.log(state.logInGoogle, "afterupdatea");
    },
    [logInGoogle.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const loginGoogleReducer = loginGoogleSlice.reducer;
