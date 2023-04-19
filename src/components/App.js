import React, { useReducer } from "react";
import { counterReducer } from "../reducers/counterReducer";
import "../styles/App.css";

const App = () => {
  const [state, dispatch] = useReducer(counterReducer, {
    counter: 0,
  });

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  return (
    <div id="main">
      <div>
        <span id="counter">{state.counter}</span>
      </div>
      <button id="increment-btn" onClick={incrementHandler}>
        Increment
      </button>
      <button id="decrement-btn" onClick={decrementHandler}>
        Decrement
      </button>
    </div>
  );
};

export default App;
