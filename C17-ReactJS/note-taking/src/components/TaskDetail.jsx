import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function TaskDetail() {
  const [taskDetail, setTaskDeatil] = useState({});

  const params = useParams();

  const taskId = params.id;

  const fetchFromAPI = (taskId) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${taskId}`)
      .then((response) => response.json())
      .then((json) => {
        setTaskDeatil(json);
      });
  };

  useEffect(() => {
    /**
     * Fetch a single task details by id from API / DB.
     */
    fetchFromAPI(taskId);

    /**
     * Cleanup function
     */
    return () => {
      setTaskDeatil({});
    };
  }, [taskId]);

  return (
    <div className="task-detail">
      <h3>Task Detail:</h3>

      <table>
        <thead>
          <tr>
            <th>User Id</th>
            <th>Task Id</th>
            <th>Task Title</th>
            <th>Task Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{taskDetail.userId}</td>
            <td>{taskDetail.id}</td>
            <td>{taskDetail.title}</td>
            <td>{taskDetail.completed == true ? "Done" : "Pending"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default TaskDetail;
