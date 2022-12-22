import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  details: [],
};

export const getDetails = createAsyncThunk("details/getDetails", async () => {
  try {
    const res = await axios.get(
      `https://binar-academy-terbangin.herokuapp.com/api/ticket/get/${localStorage.getItem(
        "guestId"
      )}`,
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      }
    );
    console.log(res);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
});

export const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {},
  extraReducers: {
    [getDetails.pending]: (state) => {
      state.loading = true;
    },
    [getDetails.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.details = payload;
    },
    [getDetails.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default detailsSlice.reducer;
