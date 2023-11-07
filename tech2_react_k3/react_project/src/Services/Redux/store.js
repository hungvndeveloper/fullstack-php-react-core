import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../../Pages/Auth/authSlice";

const rootReducer = {
  reducer: {
    auth: authReducer,
  },
};

export const store = configureStore(rootReducer);
