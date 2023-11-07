import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  abc: "Unicode Academy",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state, action) => {
      state.count = state.count + action.payload;
    },
    decrement: (state, action) => {
      state.count = state.count - action.payload;
    },
  },
});

export const counterActions = counterSlice.actions;

export const counterSelector = (state) => state.counter;
