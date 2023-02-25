// TLDR: Handles updating Data
// Handle creatng/removing/updating todos
// handle saving and loading todos from storage
// define the structure of the data for todos




// Data store
const currTodos = [];




export function getCurrentTodos() {
  return JSON.parse(JSON.stringify(currTodos));
}

export function loadSaved() {

  if (localStorage.getItem('savedTodos')) {
    const existingTodos = JSON.parse(localStorage.getItem('savedTodos'));
    for (let i = 0; i < existingTodos.length; i++) {
      currTodos.push(existingTodos[i]);
    }
  }
}


export function add(currentInput) {
  currTodos.push(currentInput);
  localStorage.setItem('savedTodos', JSON.stringify(currTodos));
}


export function remove(todoTitle) {
  const indexToRemove = currTodos.indexOf(todoTitle);

  if (indexToRemove > -1) {
    currTodos.splice(indexToRemove, 1);
  }
  localStorage.setItem('savedTodos', JSON.stringify(currTodos));
}

