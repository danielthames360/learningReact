import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    setCounter(counter - 1);
  2};

  const reset = () => {
    setCounter(value);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h1>{counter}</h1>
      <button onClick={increment}>+1</button>
      <button onClick={decrease}>-1</button>
      <button onClick={reset}>reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
