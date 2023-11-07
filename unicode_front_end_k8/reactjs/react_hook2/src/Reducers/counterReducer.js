export const counterReducer = (state, action) => {
  switch (action.type) {
    case "counter/increment": //feature/type
      return { ...state, count: state.count + action.payload };

    case "counter/decrement":
      return { ...state, count: state.count - action.payload };

    default:
      return state;
  }
};
