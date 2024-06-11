import "./styles.css";
import Heading from "./components/Heading";

import React from "react";

export default function App() {
  const [inputValue, setInputValue] = React.useState("");
  const [item, setItem] = React.useState([]);
  function handleChange(event) {
    const newValue = event.target.value;
    setInputValue(newValue);
  }
  function addItem() {
    setItem((prevItem) => {
      return [...prevItem, inputValue];
    });
    setInputValue(""); //once the text is added value will be removed
  }
  function listItem(i) {
    return <li className="list">{i}</li>;
  }

  return (
    <div className="App">
      <div className="card">
        <Heading />
        <input onChange={handleChange} type="text" value={inputValue} />
        <button onClick={addItem}>Add</button>
        <hr />
        <ul>{item.map(listItem)}</ul>
      </div>
    </div>
  );
}
