const counterReducer = (state, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1 };
  } else {
    return { counter: state.counter - 1 };
  }
};

export { counterReducer };
