import { createSlice } from "@reduxjs/toolkit";

export const tokenStatus = createSlice({
  name: "token",
  initialState: {
    token: "",
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setToken } = tokenStatus.actions;
