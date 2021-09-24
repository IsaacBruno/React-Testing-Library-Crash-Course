import React, { useState } from 'react';

function Counter() {
  const [counterValue, setCounterValue] = useState(0)

  return (
    <div>
      <h3 data-testid="header">My Counter</h3>
      <h2 data-testid="counter">{counterValue}</h2>
      <button data-testid="subtract-btn">-</button>
    </div>
  );
}

export default Counter;
