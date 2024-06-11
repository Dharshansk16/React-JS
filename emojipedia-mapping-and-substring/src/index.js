import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import emoji from "./components/Emojidetails";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

var emojireduced = emoji.map(function (e) {
  return e.content.substring(0, 4);
});

console.log(emojireduced); //returns an array with only first 4 characters from content

root.render(
  <StrictMode>
    <div>
      <App />
    </div>
  </StrictMode>
);
