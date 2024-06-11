import "./styles.css";
import React from "react";

var heading = "Hello World";
var colorc = "green";

export default function App() {
  const [text, setText] = React.useState("Hello");
  const [color, setColor] = React.useState(false);
  function handleClick() {
    setText(heading);
  }
  function changeColor() {
    setColor(true);
  }
  function reverseColor() {
    setColor(false);
  }
  return (
    <div className="App">
      <div className="container">
        <h1>{text}</h1>
        <input type="text" placeholder="What's Your Name? " />
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
