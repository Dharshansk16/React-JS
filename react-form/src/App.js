import "./styles.css";
import React from "react";

var heading = "Hello World";
var colorc = "green";

export default function App() {
  const [text, setText] = React.useState("");
  const [color, setColor] = React.useState(false);

  const [inputValue, setInputValue] = React.useState("");

  function handleClick() {
    setText(inputValue);
  }
  function changeColor() {
    setColor(true);
  }
  function reverseColor() {
    setColor(false);
  }

  function handleChange(event) {
    console.log(event.target.value);
    setInputValue(event.target.value);
    setText(event.target.value);
    // console.log(event.target.placeholder);
    // console.log(event.target.type);
  }

  return (
    <div className="App">
      <div className="container">
        <h1> Hello {text}</h1>
        <input
          onChange={handleChange} //onChange triggers whenever input changes
          type="text"
          placeholder="What's Your Name? "
          value={inputValue}
        />
        <br />
        <button
          style={{ backgroundColor: color ? "black" : "white" }}
          onClick={handleClick}
          onMouseOver={changeColor}
          onMouseOut={reverseColor}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
