import "./styles.css";

import Form from "./components/Form";

var isLoggedIn = true;

export default function App() {
  return (
    <div className="App">
      {isLoggedIn === true ? <header>Hello</header> : <Form />}
    </div>
  );
}
