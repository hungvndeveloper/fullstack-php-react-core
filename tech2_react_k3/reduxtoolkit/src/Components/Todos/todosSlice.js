import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  loading: "idle",
  loadingAdd: "idle",
};

export const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      //todos/addTodo
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.loading = "succeeded";
      })
      .addCase(fetchTodos.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = "failed";
      })
      .addCase(addTodoFetch.pending, (state, action) => {
        state.loadingAdd = "pending";
      })
      .addCase(addTodoFetch.fulfilled, (state, action) => {
        state.loadingAdd = "succeeded";
        state.todos.push(action.payload);
      });
  },
});

console.log(todosSlice);

export const todosActions = todosSlice.actions;

export const todosReducer = todosSlice.reducer;

export const todosSelector = (state) => state.todos;

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodosStatus",
  async () => {
    //await
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    return data;
  }
);

export const addTodoFetch = createAsyncThunk(
  "todos/addTodoFetchStatus",
  async (todo) => {
    console.log(todo);

    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    const data = await response.json();
    return data;
  }
);

//pending
//fulfilled
//reject

//tenModule/tenHamStatus

// export const demoThunkFunc = () => {
//   //console.log("demoThunkFunc");
//   return (dispatch, getState) => {
//     //console.log(dispatch);
//     dispatch(todosActions.addTodo("a"));
//   };
// };
