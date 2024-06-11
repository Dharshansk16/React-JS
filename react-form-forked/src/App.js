import "./styles.css";
import React from "react";

export default function App() {
  const [inputValue, setInputValue] = React.useState({
    fName: "",
    lName: "",
    emailId: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "fname") {
      setInputValue({
        fName: value,
        lName: inputValue.lName,
        emailId: inputValue.emailId,
      });
    } else if (name === "lname") {
      setInputValue({
        fName: inputValue.fName,
        lName: value,
        emailId: inputValue.emailId,
      });
    } else if (name === "email") {
      setInputValue({
        fName: inputValue.fName,
        lName: inputValue.lName,
        emailId: value,
      });
    }
  }
  return (
    <div className="App">
      <div className="container">
        <h1>
          Hello {inputValue.fName} {inputValue.lName}
        </h1>
        <p>{inputValue.emailId}</p>
        <input
          onChange={handleChange} //onChange triggers whenever input changes
          type="text"
          placeholder="First Name"
          name="fname"
          value={inputValue.fName}
        />
        <br />
        <input
          onChange={handleChange} //onChange triggers whenever input changes
          type="text"
          placeholder="LastName"
          name="lname"
          value={inputValue.lName}
        />
        <br />
        <input
          onChange={handleChange} //onChange triggers whenever input changes
          type="email"
          placeholder="Email Id"
          name="email"
          value={inputValue.emailId}
        />
        <br />
        <button>Submit</button>
      </div>
    </div>
  );
}
