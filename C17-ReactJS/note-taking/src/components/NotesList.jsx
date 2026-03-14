import React from "react";
import Note from "./Note";

function NotesList() {
  return (
    <div class="notes-wrapper">
      <h3>Here are all of my notes:</h3>

      <ul class="notes-list">
        <Note
          title="Namaz"
          detail="Namaz e asar at 4:45 PM"
          date="2026-03-14"
        ></Note>
        <Note title="Play" detail="Play cricket at 5:45 PM"></Note>
        <Note title="Sleep" detail="Sleep at 9:45 PM"></Note>
        <Note title="Wake" detail="Wake at 4:45 AM"></Note>
      </ul>
    </div>
  );
}

export default NotesList;
