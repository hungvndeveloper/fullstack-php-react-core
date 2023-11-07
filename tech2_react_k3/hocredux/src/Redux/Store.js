import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { todoReducer } from "./Reducers/todoReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  todoReducer,
});

const middleware = [thunk];

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middleware)
    // other store enhancers if any
  )
);
