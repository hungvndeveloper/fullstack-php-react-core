import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  status: "idle",
};
export const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    // addTodo: (state, action) => {
    //   state.todos.push(action.payload);
    // },
    // fetchTodos: (state, action) => {
    //   state.todos = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.status = "succeeded";
      });
  },
});

export const todoSelector = (state) => state.todos;

//Redux Middleware
// export const fetchTodos = () => {
//   return async (dispatch, getState) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
//     const data = await res.json();
//     dispatch({
//       type: "todos/fetchTodos",
//       payload: data,
//     });
//   };
// };

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodosStatus",
  async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const data = await res.json();
    return data;
  }
);

//Có 3 trạng thái: (Giống trạng thái của promise)
//pending
//fulfilled
//reject

//trong 1 module => call rất nhiều api => phân biệt trạng thái giữa các api

//console.log(fetchTodos.fulfilled.type);
