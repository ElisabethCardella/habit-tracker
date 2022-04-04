import { add, sub } from "date-fns";
import * as actions from "../actions/dateActions";

export const initialState = { date: new Date() };

export const dateReducer = (state = initialState, action) => {
  // Check to see if the reducer cares about this action
  if (action.type === actions.NEXT_DAY) {
    // If so, make a copy of `state`
    return {
      ...state,
      // and update the copy with the new value
      date: add(state.date, { days: 1 }),
    };
  }
  if (action.type === actions.PREVIOUS_DAY) {
    // If so, make a copy of `state`
    return {
      ...state,
      // and update the copy with the new value
      date: sub(state.date, { days: 1 }),
    };

    // otherwise return the existing state unchanged
  }
  return state;
};
