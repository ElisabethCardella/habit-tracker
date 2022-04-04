import { combineReducers, createStore } from "redux";
import { dateReducer } from "./reducers/dateReducer";

const reducers = combineReducers({
  date: dateReducer,
});

const store = createStore(reducers);

export default store;
