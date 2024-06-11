import "./styles.css";
import React from "react";

export default function App() {
  const [count, setCount] = React.useState(0); //useState is an array
  console.log(count);

  function Increase() {
    setCount(count + 1);
  }
  function Decrease() {
    setCount(count - 1);
  }
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={Increase}>+</button>
      <button onClick={Decrease}>-</button>
    </div>
  );
}
