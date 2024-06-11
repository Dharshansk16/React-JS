import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./App";
import App from "./App";

// import "./Heading";
// import Heading from "./Heading";

// import Unorderedlist from "./Unorderedlist";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <div>
//       <Heading />
//       //React Component for h1.Pascal Casing
//       <Unorderedlist /> //Component for Unorderedlist.
//       <App />
//     </div>
//   </StrictMode>
// );

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
