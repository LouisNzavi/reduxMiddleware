export const counterReducer = (state = 0, action) => {
  console.log("our reducer runs!");
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
