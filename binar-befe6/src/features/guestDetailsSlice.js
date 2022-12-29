import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

const initialState = {
  guest: {},
  loading: false,
};

const userId = [];

export const guestDetails = createAsyncThunk(
  "guest/guestDetails",
  async (values) => {
    try {
      const res = await axios.post(
        "https://binar-academy-terbangin.herokuapp.com/api/booking/guest",
        values,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      );
      userId.push(res.data.data.id);
      localStorage.setItem("guestId", JSON.stringify(userId));
      Swal.fire({
        icon: "success",
        title: "Success Submit Guest",
        text: "Add some Guest Confirm !",
      });
      return res.data.data;
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Failed Submit Guest",
        text: "Something Wrong..!",
      });
    }
  }
);

export const guestDetailsSlice = createSlice({
  name: "guest",
  initialState,
  reducers: {},
  extraReducers: {
    [guestDetails.pending]: (state) => {
      state.loading = true;
    },
    [guestDetails.fulfilled]: (state, action) => {
      state.loading = false;
      state.guest = action.payload;
    },
    [guestDetails.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const guestDetailsReducer = guestDetailsSlice.reducer;
