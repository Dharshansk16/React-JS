import React from "react";

function ListItem(props) {
  const [isDone, setIsDone] = React.useState(false);
  function handleClick() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <li
      onClick={handleClick}
      style={{ textDecoration: isDone ? "line-through" : "none" }}
    >
      {props.itemName}
    </li>
  );
}

export default ListItem;
