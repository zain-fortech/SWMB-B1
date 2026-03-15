import React from "react";

function Input(props) {
  return (
    <input
      className="input"
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
    />
  );
}

export default Input;
