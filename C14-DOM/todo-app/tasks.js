const inputElem = document.querySelector("#task-detail");
const addTaskBtn = document.querySelector(".add-task-btn");
const taskListElem = document.querySelector(".tasks-list");

const allTasksBtn = document.querySelector("#all-task-btn");
const completedTasksBtn = document.querySelector("#completed-task-btn");
const incompleteTasksBtn = document.querySelector("#incomplete-task-btn");
const recentTasksBtn = document.querySelector("#recent-task-btn");

let tasks = [];

let filteredTaks = [];

const addTask = (taskDetail) => {
  if (taskDetail == "") {
    return;
  }

  const task = {
    text: taskDetail,
    createdAt: new Date(),
    isCompleted: false,
  };

  tasks.push(task);

  filteredTaks = tasks;

  renderTasks();

  inputElem.value = "";
};

const renderTasks = () => {
  const tasksToRender = getFilteredTasks();

  taskListElem.innerHTML = "";

  for (const task of tasksToRender) {
    const li = document.createElement("li");
    li.className = "task-item";

    const h3 = document.createElement("h3");
    h3.textContent = task.text;
    h3.className = task.isCompleted ? "completed-task" : "";

    const button = document.createElement("button");
    button.textContent = task.isCompleted
      ? "Mark Incompleted"
      : "Mark Completed";
    button.className = "btn";

    button.addEventListener("click", () => {
      completeTask(li);
    });

    li.append(h3, button);

    taskListElem.append(li);
  }
};

const completeTask = (li) => {
  const h3Elem = li.childNodes[0];

  const taskDetail = h3Elem.textContent;

  //   tasks = tasks.filter((task) => {
  //     return task.text !== taskDetail;
  //   });

  tasks = tasks.map((task) => {
    if (task.text == taskDetail) {
      task.isCompleted = !task.isCompleted;
    }

    return task;
  });

  renderTasks();
};

addTaskBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const taskDetail = inputElem.value;

  addTask(taskDetail);
});

completedTasksBtn.addEventListener("click", (e) => {
  e.preventDefault();

  filteredTaks = tasks.filter((task) => {
    return task.isCompleted == true;
  });

  renderTasks();
});

const getFilteredTasks = () => {
  return filteredTaks;
};

allTasksBtn.addEventListener("click", (e) => {
  e.preventDefault();

  filteredTaks = tasks;
});
