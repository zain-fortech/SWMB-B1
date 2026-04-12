import React from "react";
import Task from "./Task";

function TasksList({ tasksList }) {
  return (
    <div className="notes-wrapper">
      <h3>Here are all of my tasks:</h3>

      <ul className="notes-list">
        {tasksList?.map((task) => (
          <Task title={task.title} id={task.id}></Task>
        ))}
      </ul>
    </div>
  );
}

export default TasksList;
