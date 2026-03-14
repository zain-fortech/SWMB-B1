import React from "react";

function Note({ title, detail, date }) {
  return (
    <li className="note">
      <h4>{title}</h4>
      <p>{detail}</p>
      <span>Time: {date}</span>
    </li>
  );
}

export default Note;
