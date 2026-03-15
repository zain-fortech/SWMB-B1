import { useState } from "react";
import "./App.css";
import Form from "./components/From";
import NotesList from "./components/NotesList";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (title, detail) => {
    setNotes((prevNotes) => [...prevNotes, { title, detail }]);
  };

  return (
    <div className="container">
      <Form onSubmit={addNote}></Form>

      <NotesList notesList={notes}></NotesList>
    </div>
  );
}

export default App;
