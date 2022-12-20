import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],

  loading: false,
};

export const getData = createAsyncThunk("data/getData", async (guestId) => {
  try {
    const res = await axios.get(
      `https://febe6.up.railway.app/api/ticket/get/${guestId}`,
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      }
    );
    console.log(res);
    return res.data.data;
  } catch (error) {
    console.log("error");
  }
});

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: {
    [getData.pending]: (state) => {
      state.loading = true;
    },
    [getData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    },
    [getData.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const dataReducer = dataSlice.reducer;
