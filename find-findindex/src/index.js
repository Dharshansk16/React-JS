import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

var num = [10, 30, 44, 11];
const n1 = num.find(function (n) {
  return n > 10; //returns the first value in the array based on the condition.
});

const n2 = num.findIndex(function (n) {
  return n > 10; //returns the index
});

console.log(n1);
console.log(n2);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
