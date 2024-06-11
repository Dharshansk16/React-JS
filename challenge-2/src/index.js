import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const date = new Date();
const currentTime = date.getHours();

let greeting;

const customColor = {
  color: "",
};

if (currentTime < 12) {
  greeting = "Good Morning";
  customColor.color = "red";
} else if (currentTime > 12 && currentTime < 16) {
  greeting = "Good Afternoon";
  customColor.color = "orange";
} else {
  greeting = "Good Evening";
  customColor.color = "green";
}

root.render(
  <StrictMode>
    <div>
      <App />
      <h1 style={customColor}>{greeting}</h1>
    </div>
  </StrictMode>
);
