import React from "react";
import { useNavigate } from "react-router-dom";

function Task({ title, id }) {
  const navigate = useNavigate();

  return (
    <li className="note" onClick={() => navigate(`tasks/${id}`)}>
      <h4>{title}</h4>
    </li>
  );
}

export default Task;
