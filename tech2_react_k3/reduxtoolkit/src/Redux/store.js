import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "../Components/Todos/todosSlice";

const rootReducer = {
  todos: todosReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});
