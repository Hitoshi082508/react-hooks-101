import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(5);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count -1);
  };
  const reset = () => {
    setCount(0);
  };
  const divide3 = () => {
    setCount(previousCount => {
      if (previousCount % 3 === 0) {
        return previousCount / 3;
      } else {
        return previousCount;
      }
    })
  }
  return (
    <>
      <div>count: {count}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={reset}>Reset</button>
      <button onClick={divide3}>3の倍数の時だけ3で割る</button>
    </>
  );
}

export default App;
