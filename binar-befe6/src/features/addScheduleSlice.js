import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

const initialState = {
  schedule: {},
  loading: false,
};

export const addSchedule = createAsyncThunk(
  "schedule/addSchedule",
  async (values) => {
    try {
      const res = await axios.post(
        "https://binar-academy-terbangin.herokuapp.com/api/add/schedule",
        values,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      );

      Swal.fire({
        icon: "success",
        title: "Add Schedule Success",
        text: `Add Schedule Destination Ready !`,
      });

      return res.data.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const addScheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {},
  extraReducers: {
    [addSchedule.pending]: (state) => {
      state.loading = true;
    },
    [addSchedule.fulfilled]: (state, action) => {
      state.loading = false;
      state.schedule = action.payload;
    },
    [addSchedule.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const addScheduleReducer = addScheduleSlice.reducer;
