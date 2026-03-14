import "./App.css";
import Form from "./components/From";
import NotesList from "./components/NotesList";

function App() {
  return (
    <div className="container">
      <Form></Form>

      <NotesList></NotesList>
    </div>
  );
}

export default App;
