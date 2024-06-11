import "./styles.css";
import Heading from "./components/Heading";
import ListItem from "./components/ListItem";
import Button from "./components/Button";
import Input from "./components/Input";

import React from "react";

export default function App() {
  const [inputValue, setInputValue] = React.useState("");
  const [item, setItem] = React.useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputValue(newValue);
  }
  function addItem() {
    setItem((prevItem) => {
      return [...prevItem, inputValue];
    });
    setInputValue(""); //once the text is added value will be removed
  }

  function deleteItem(id) {
    setItem((prevItems) => {
      return prevItems.filter((litem, index) => {
        return index !== id; //returns all items whose index is not equal to id
      });
    });
  }

  function listItem(i, index) {
    return (
      <ListItem onCheck={deleteItem} key={index} id={index} itemName={i} />
    );
  }

  return (
    <div className="App">
      <div className="card">
        <Heading />
        <Input inputFunction={handleChange} inputText={inputValue} />
        <Button buttonFunction={addItem} buttonText="Add" />
        <hr />
        <ul>{item.map(listItem)}</ul>
      </div>
    </div>
  );
}
