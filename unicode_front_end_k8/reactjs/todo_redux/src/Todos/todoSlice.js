import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import config from "../config.json";

const { SERVER_API } = config;

const initialState = {
  todos: [],
};
export const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        if (action.payload) {
          state.todos.unshift(action.payload);
        }
      })
      .addCase(removeTodo.fulfilled, (state, action) => {
        if (action.payload) {
          state.todos = state.todos.filter((todo) => todo.id != action.payload);
        }
      })
      .addCase(completedTodo.fulfilled, (state, action) => {
        if (action.payload) {
          const { id, status } = action.payload;

          const index = state.todos.findIndex((todo) => todo.id == id);

          state.todos[index].isCompleted = status;
        }
      });
  },
});

export const todoSelector = (state) => state.todos;

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodosStatus",
  async () => {
    const res = await fetch(`${SERVER_API}/todos?_order=desc&_sort=id`);
    const todos = await res.json();
    return todos;
  }
);

export const addTodo = createAsyncThunk("todos/addTodoStatus", async (todo) => {
  const res = await fetch(`${SERVER_API}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });

  if (res.ok) {
    const data = await res.json();
    return data;
  }

  return false;
});

export const removeTodo = createAsyncThunk(
  "todos/removeTodoStatus",
  async (id) => {
    const res = await fetch(`${SERVER_API}/todos/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      return id;
    }

    return false;
  }
);

export const completedTodo = createAsyncThunk(
  "todos/completedTodoStatus",
  async ({ id, status }) => {
    const res = await fetch(`${SERVER_API}/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isCompleted: status,
      }),
    });
    if (res.ok) {
      return { id, status };
    }
    return false;
  }
);
