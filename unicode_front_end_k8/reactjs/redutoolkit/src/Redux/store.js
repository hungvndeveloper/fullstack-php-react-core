import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./Slices/counterSlice";
import { todoSlice } from "./Slices/todoSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    todos: todoSlice.reducer,
  },
});
