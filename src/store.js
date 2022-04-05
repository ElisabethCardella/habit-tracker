import { combineReducers, createStore } from "redux";
import { dateReducer } from "./reducers/dateReducer";
import { habitsReducer } from "./reducers/habitsReducer";

const reducers = combineReducers({
  date: dateReducer,
  habits: habitsReducer,
});

const store = createStore(reducers);

export default store;
