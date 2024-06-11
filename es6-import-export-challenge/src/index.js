import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import { add, sub, multiply, divide } from "./calculator";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div>
      <App />
      <p>{add(3, 4)}</p>
      <p>{sub(5, 2)}</p>
      <p>{multiply(2, 4)}</p>
      <p>{divide(6, 6)}</p>
    </div>
  </StrictMode>
);
