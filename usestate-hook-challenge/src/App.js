import "./styles.css";
import React from "react";

export default function App() {
  let currentTime = new Date().toLocaleTimeString();
  const [time, setCurrentTime] = React.useState(currentTime);

  function updateTime() {
    const newtime = new Date().toLocaleTimeString();
    setCurrentTime(newtime);
  }
  return (
    <div className="App">
      <h2>{time}</h2>
      <button onClick={updateTime}>Time</button>
    </div>
  );
}
