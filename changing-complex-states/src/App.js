import "./styles.css";
import React from "react";

export default function App() {
  const [fullName, setFullName] = React.useState({
    fName: "",
    lName: "",
  });

  function handleFullName(event) {
    const { value, name } = event.target; //from input

    if (name === "fName") {
      setFullName({
        fName: value,
        lName: fullName.lName,
      });
    } else if (name == "lName") {
      setFullName({
        fName: fullName.fName,
        lName: value,
      });
    }
  }

  /*  Method 2
    setFullName((prevValue)=>{
      if (name==="fname"){
        return {
          fName:value,
          lName:prevValue.lName,
        }
        else if(name==="lname"){
          return {
            fName:prevValue.fName,
            lName:value
          }
        }
      }
    })*/

  return (
    <div className="App">
      <div className="container">
        <h1>
          Hello {fullName.fName} {fullName.lName}
        </h1>
        <input
          type="text"
          name="fName"
          placeholder="First Name"
          value={fullName.fName}
          onChange={handleFullName}
        />{" "}
        <br />
        <input
          type="text"
          name="lName"
          placeholder="Last Name"
          value={fullName.lName}
          onChange={handleFullName}
        />
        <br />
        <button>Submit</button>
      </div>
    </div>
  );
}
