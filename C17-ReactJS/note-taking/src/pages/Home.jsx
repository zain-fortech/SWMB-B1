import { useState, useEffect } from "react";
import "../App.css";
import TasksList from "../components/TasksList";
import Form from "../components/Form";

function Home() {
  const [tasks, setTasks] = useState([]);

  const addNote = (title, detail) => {
    setTasks((prevTasks) => [...prevTasks, { title, detail }]);
  };

  const fetchFromAPI = () => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        console.log("Data from API:", json);

        setTasks(json);
      });
  };

  useEffect(() => {
    /**
     * Fetch tasks from API / DB.
     */

    console.log("Hi from useEffect!");

    fetchFromAPI();
  }, []);

  return (
    <div className="container">
      <Form onSubmit={addNote}></Form>

      <TasksList tasksList={tasks}></TasksList>
    </div>
  );
}

export default Home;
