import { combineReducers, createStore } from "@reduxjs/toolkit";
import { dateReducer } from "./reducers/dateReducer";

const reducers = combineReducers({
  date: dateReducer,
});

const store = createStore(reducers);

export default store;
