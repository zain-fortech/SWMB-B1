const addBtnElement = document.querySelector("#add-button");
const inputElement = document.querySelector("#todo-input");
const listElement = document.querySelector("#todo-list");

addBtnElement.addEventListener("click", (event) => {
  event.preventDefault();

  const text = inputElement.value.trim();
  if (text === "") {
    return;
  }

  const listItem = document.createElement("li");
  listItem.textContent = text;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    listElement.removeChild(listItem);
  });

  listItem.appendChild(deleteButton);
  listElement.appendChild(listItem);

  inputElement.value = "";
});
