const titleInput = document.querySelector("#title");
const detailInput = document.querySelector("#detail");
const addNoteBtn = document.querySelector("#add-note");
const notesList = document.querySelector(".notes-list");

const notes = [];

const addNote = (title, detail) => {
  const note = {
    title: title,
    detail: detail,
    createdAt: new Date(),
    isStarred: false,
  };

  notes.push(note);

  renderNotes();
};

const renderNotes = () => {
  notesList.innerHTML = "";

  for (const note of notes) {
    const li = document.createElement("li");
    li.className = "note";

    const h4 = document.createElement("h4");
    h4.textContent = note.title;
    const p = document.createElement("p");
    p.textContent = note.detail;

    li.append(h4, p);

    notesList.append(li);
  }
};

addNoteBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const title = titleInput.value;
  const detail = detailInput.value;

  if (title == "" || detail == "") {
    return;
  }

  addNote(title, detail);

  titleInput.value = "";
  detailInput.value = "";
});
