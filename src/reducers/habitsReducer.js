import * as actions from "../actions/habitActions";

export const initialState = { habitsList: [] };

export const habitsReducer = (state = initialState, action) => {
  // Check to see if the reducer cares about this action
  if (action.type === actions.SET_HABITS) {
    // If so, make a copy of `state`
    return {
      ...state,
      // and update the copy with the new value
      habitsList: action.payload,
    };
  }
  // otherwise return the existing state unchanged
  return state;
};
