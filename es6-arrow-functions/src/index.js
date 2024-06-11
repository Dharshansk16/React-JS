import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

num = [10, 20, 30, 40];

const n1 = num.map((n) => {
  //Arrow function
  return n * n;
});

console.log(n1);

//further reduction of using arrow function

num2 = [10, 30, 11, 22];
const n2 = num2.map((n) => n * n);

console.log(n2);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
