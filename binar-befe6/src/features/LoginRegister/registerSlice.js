import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";
const initialState = {
  regist: [],
  loading: false,
};

export const postRegister = createAsyncThunk(
  "regist/postRegist",
  async (values) => {
    try {
      const res = await axios.post(
        "https://binar-academy-terbangin.herokuapp.com/api/auth/signup",
        values
      );
      Swal.fire({
        icon: "success",
        text: "Register Succes",
        confirmButtonText: "Okee",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      });
      return res.data.data;
    } catch (error) {
      if (error.response.status === 400) {
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Username Or Email Already Used ",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please Fill In The Correct Data",
        });
      }
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
