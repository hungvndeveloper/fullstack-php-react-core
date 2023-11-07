import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { counterReducer } from "./Reducers/counterReducer";
import { todoReducer } from "./Reducers/todoReducer";

//Nối các Reducer thành rootReducer
const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todoReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
