import React, { useState } from "react";

const Counter = () => {

  const [count, setCounter] = useState(0)

  return (
    <div>
      <button onClick={() => setCounter(count+1)}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default Counter;
