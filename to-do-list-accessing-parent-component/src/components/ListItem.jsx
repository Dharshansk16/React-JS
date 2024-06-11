import React from "react";

function ListItem(props) {
  return (
    <li
      onClick={() => {
        props.onCheck(props.id);
      }}
    >
      {props.itemName}
    </li>
  );
}

export default ListItem;
