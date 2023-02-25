// Data store
const currTodos = localStorage.getItem("savedTodos") || [];


window.onload = function() {
  if (localStorage.getItem("savedTodos")) {
    const existingTodos = JSON.parse(localStorage.getItem("savedTodos"));
    for (let i = 0; i < existingTodos.length; i++) {
      currTodos.push(existingTodos[i]);
    }
  }
  refreshToDoList();
  let inputField = document.getElementById("new-todo-text");


  inputField.onfocus = function() {
    if (inputField.value === "Enter new Todo.") {
      inputField.value = "";
    }
  }
  // inputField.onblur = function() {
  //   inputField.value = "Enter new Todo."
  // }
}

function refreshToDoList() {
  const todoList = document.getElementsByClassName("todo-list")[0];

  todoList.innerHTML = [];

  for (let i = 0; i < currTodos.length; i++) {
    const todo = currTodos[i];

    const item = document.createElement("li");
    item.className = "todo-item";
    item.innerHTML = todo;

    todoList.appendChild(item);
  }

}


window.addTodo = function() {
  const inputField = document.getElementById("new-todo-text");
  const currentInput = document.getElementById("new-todo-text").value;
  console.log("adding new item!");

  currTodos.push(currentInput);
  localStorage.setItem("savedTodos", JSON.stringify(currTodos));
  refreshToDoList();

  inputField.value = "Enter new Todo."
}

