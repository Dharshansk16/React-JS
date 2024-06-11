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

    setInputValue((prevValue) => {
      //Arrow function goes through all the values of useState and then add their previous value.
      return {
        ...prevValue,
        [name]: value, //Note:name should be same as the one use in useState.
      };
    });
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
          name="fName"
          value={inputValue.fName}
        />
        <br />
        <input
          onChange={handleChange} //onChange triggers whenever input changes
          type="text"
          placeholder="LastName"
          name="lName"
          value={inputValue.lName}
        />
        <br />
        <input
          onChange={handleChange} //onChange triggers whenever input changes
          type="email"
          placeholder="Email Id"
          name="emailId"
          value={inputValue.emailId}
        />
        <br />
        <button>Submit</button>
      </div>
    </div>
  );
}
