import React from "react";

function Input({ onChange, value, placeholder, type, id }) {
  return (
    <input
      className="input"
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default Input;
