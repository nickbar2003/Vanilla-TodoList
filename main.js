// TLDR: Handles updating HTML
import * as Todos from './todos';

window.onload = function() {
  const addButton = document.getElementById('add-todo-btn');
  const inputField = document.getElementById('new-todo-text');

  addButton.addEventListener('click', function() {
    Todos.add(inputField.value)
    inputField.value = 'Enter new Todo.'
    refreshToDoList();
  }
    , false);

  Todos.loadSaved();

  refreshToDoList();

  inputField.addEventListener('focus', function() {

    if (inputField.value === 'Enter new Todo.') {
      inputField.value = '';
    }
  })
}

function createElementFromToDoItem(todoTitle) {

  const item = document.createElement('li');
  item.className = 'todo-item';
  const title = document.createElement('h3');
  title.innerHTML = todoTitle;

  item.appendChild(title);

  // Create another button for removing
  const remove = document.createElement('button');
  remove.setAttribute('type', 'button');
  remove.innerHTML = 'X';
  remove.className = 'remove-btn';
  remove.addEventListener('click', function() {
    Todos.remove(todoTitle);

    refreshToDoList();
  }, false)


  item.appendChild(remove);

  return item;

}


function refreshToDoList() {
  const todoList = document.getElementsByClassName('todo-list')[0];

  todoList.innerHTML = [];

  for (const todo of Todos.getCurrentTodos()) {

    const item = createElementFromToDoItem(todo);

    todoList.appendChild(item);

  }
}



