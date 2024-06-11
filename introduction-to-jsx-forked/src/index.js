import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>Hello World</h1>
    <br />
    <p>This is a paragraph</p>
  </div>,
  document.getElementById("root")
);

// var  h1= document.createElement("h1");
// h1.innerHTML = "Hello World";
// document.getElementById("root").appendChild(h1);

// var I = document.createElement("I");
// I.innerHTML  = "Bold";
// document.getElementById("root").appendChild(I)

// challenge 1
ReactDOM.render(
  <div>
    <h1>Challenge 1</h1>
    <ul>
      <li>React</li>
      <li>Course 1</li>
    </ul>
  </div>,
  document.getElementById("root")
);
