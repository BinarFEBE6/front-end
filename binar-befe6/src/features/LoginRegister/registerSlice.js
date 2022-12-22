import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  regist: [],
  loading: false,
};

export const postRegister = createAsyncThunk(
  "regist/postRegist",
  async (values) => {
    try {
      const res = await axios.post(
        "https://febe6.up.railway.app/api/auth/signup",
        values
      );

      return res.data.data;
    } catch (error) {
      console.error(error);
    }
  }
);
export const registSlice = createSlice({
  name: "regist",
  initialState,
  reducers: {},
  extraReducers: {
    [postRegister.pending]: (state) => {
      state.loading = true;
    },
    [postRegister.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.regist = payload;
    },
    [postRegister.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const registReducer = registSlice.reducer;
