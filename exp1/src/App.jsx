import React, { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>QUESTION 1</h1>
      <h2>{count}</h2>

      <button onClick={increment}>+</button>
      <button onClick={decrement} style={{ margin: "0 10px" }}>
        -
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterApp;