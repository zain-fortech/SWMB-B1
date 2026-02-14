const inputElem = document.querySelector("#task-detail");
const addTaskBtn = document.querySelector(".add-task-btn");
const taskListElem = document.querySelector(".tasks-list");

addTaskBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const taskDetail = inputElem.value;

  if (taskDetail == "") {
    return;
  }

  const li = document.createElement("li");
  li.className = "task-item";

  const h3 = document.createElement("h3");
  h3.textContent = taskDetail;

  const button = document.createElement("button");
  button.textContent = "Delete";
  button.className = "delete-btn";

  button.addEventListener("click", () => {
    li.remove();
  });

  li.append(h3, button);

  taskListElem.append(li);

  inputElem.value = "";
});
