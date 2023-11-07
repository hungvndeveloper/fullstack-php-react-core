//Action Creator

export const increment = (step) => ({
  type: "counter/increment",
  payload: step,
});

export const decrement = (step) => ({
  type: "counter/decrement",
  payload: step,
});
