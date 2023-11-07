import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../Todos/todoSlice";

export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});
