import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "@reduxjs/toolkit";
import pizzasReducer from "./reducers/pizzasReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import filterReducer from "./reducers/filtersReducer";

const rootReducer = combineReducers({
  pizzasStore: pizzasReducer,
  filters: filterReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type StoreType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;

export default store;
