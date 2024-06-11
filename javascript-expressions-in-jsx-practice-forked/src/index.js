//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import React from "react";
import ReactDOM from "react-dom";

const Name = "Dharshan S Kotian";
let d = new Date();
const year = d.getFullYear();

ReactDOM.render(
  <div>
    <p className="heading">
      Created By : {Name}
      <br />
      Copyright:{year}
    </p>
  </div>,
  document.getElementById("root")
);
