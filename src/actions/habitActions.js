export const setHabits = (habits) => {
  return {
    type: SET_HABITS,
    payload: habits,
  };
};

export const SET_HABITS = "SET_HABITS";
