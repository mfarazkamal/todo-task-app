/* ----  FIRST PART OF TODO PROJECT  ----
const input = document.querySelector(".todo-input");

const taskList = [];

function addTask() {
  const name = input.value;

  taskList.push(name);
  console.log(taskList);

  input.value = "";
}
*/

const input = document.querySelector(".todo-input");

const taskList = [
  {
    name: "wash basin",
    dueDate: "12-06-2023",
  },
];

renderTaskList();

function renderTaskList() {
  let todoListHTML = "";

  for (let i = 0; i < taskList.length; i++) {
    const todoObject = taskList[i];
    // const name = todoObject.name;
    // const dueDate = Object.dueDate;
    const { name, dueDate } = todoObject;
    const html = `
      <div class="todo-head">${name}</div>
      <div>${dueDate}</div>
      <button class="css-delete-button" onclick="
        taskList.splice(${i},1);
        renderTaskList();
      ">Delete</button>
      `;
    todoListHTML += html;
  }

  const todoDiv = document.querySelector(".js-todo-list");

  todoDiv.innerHTML = todoListHTML;
}

function addTask() {
  const dateInput = document.querySelector(".js-due-date");
  const dueDate = dateInput.value;
  const name = input.value;

  taskList.push({
    name,
    dueDate,
  });

  renderTaskList();
  input.value = "";
}
