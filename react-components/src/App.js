import "./styles.css";
import Heading from "./components/Heading";
import Unorderedlist from "./components/Unorderedlist";

export default function App() {
  return (
    <div className="App">
      <Heading /> //React Component For Heading h1.(Pascal Casing).
      <Unorderedlist /> //React Component For Unorderedlsit.
    </div>
  );
}
