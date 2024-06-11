import "./styles.css";

var isDone = false;

function Strike() {
  document.getElementById("root").style.textDecoration = "line-through";
}
function Unstrike() {
  document.getElementById("root").style.textDecoration = null;
}

export default function App() {
  return (
    <div className="App">
      <p style={isDone ? { textDecoration: "line-through" } : null}>
        Line through
      </p>
      <button onClick={Strike}>Change</button>
      <button onClick={Unstrike}>Normal</button>
    </div>
  );
}
