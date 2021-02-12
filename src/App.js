import React, { useEffect, useState } from 'react';

const App = props => {
  const [state, setState] = useState(props);

  const reset = () => {
    setState(props);
  }

  useEffect(() => {
    console.log("useEffect is invoked every time")
  })

  useEffect(() => {
    console.log("useEffect is invoked.")
  },[])

  return (
    <>
      <p>現在の{state.name}は、{state.price}円です。</p>
      <button onClick={() => setState({...state, price: state.price + 1})}>+1</button>
      <button onClick={() => setState({...state, price: state.price - 1})}>-1</button>
      <button onClick={reset}>リセット</button>
      <input value={state.name} onChange={(e) => setState({...state, name: e.target.value})}/>
    </>
  );
}

App.defaultProps = {
  name: "初期値",
  price: 1000
}

export default App;
