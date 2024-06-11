import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

//filter
var num = [10, 20, 30, 40];
const n1 = num.filter(function (n) {
  return n > 20; //condition
});

// Reduce
// var num2 = [20, 30, 40, 11];
// var sum = 0;
// num2.forEach(function (n) {
//   sum += n;
// }); // using forEach

//using Reduce

var num2 = [10, 20, 30, 33];
const n2 = num2.reduce(function (accumulator, currentNumber) {
  return accumulator + currentNumber;
});

console.log(n2);

console.log(n1);
root.render(
  <StrictMode>
    <div>
      <h1>{n1}</h1>
      <App />
    </div>
  </StrictMode>
);
