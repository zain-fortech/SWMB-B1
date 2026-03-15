import React from "react";
import Note from "./Note";

function NotesList({ notesList }) {
  return (
    <div class="notes-wrapper">
      <h3>Here are all of my notes:</h3>

      <ul class="notes-list">
        {notesList?.map((note) => (
          <Note title={note.title} detail={note.detail}></Note>
        ))}
      </ul>
    </div>
  );
}

export default NotesList;
