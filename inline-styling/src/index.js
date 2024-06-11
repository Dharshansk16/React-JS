import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const textColor = "green";

const customStyle = {
  color: "orange",
  fontSize: "20px",
  backgroundColor: "lightgreen",
};

root.render(
  <StrictMode>
    <div>
      <App />
      <h1 className="heading">Hello World</h1> //External Styling using
      classname.
      <p style={{ color: textColor }}>Inline styling</p> //Inline Styling using
      2 flower brackets.
      <h2 style={customStyle}>Custom Styles</h2>
    </div>
  </StrictMode>
);
