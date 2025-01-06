import React from "react";
import "./Counter.css";

const Counter = ({ count, onCountChange }) => {
  return (
    <div className="counter-container">
      <button
        className="counter-button"
        onClick={() => onCountChange(Math.max(count - 1, 1))} 
      >
        -
      </button>
      <span className="counter-value">{count}</span>
      <button
        className="counter-button"
        onClick={() => onCountChange(count + 1)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;

/*import React, { useState } from "react";
import "./Counter.css"; 

const Counter =() => {
  const [count, setCount] = useState(1);

  return (
    <div className="counter-container">
      <button
        className="counter-button"
        onClick={() => setCount((prevCount) => Math.max(prevCount - 1, 1))}
      >
        -
      </button>
      <span className="counter-value">{count}</span>
      <button
        className="counter-button"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        +
      </button>
    </div>
  );
}

export default Counter;*/