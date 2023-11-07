export const increment = (number) => {
  return {
    type: "counter/increment",
    payload: number,
  };
};

export const decrement = (number) => {
  return {
    type: "counter/decrement",
    payload: number,
  };
};
