const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

function printToDo(newTodo) {
  console.log("i will print ToDo", newTodo);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const createTodo = toDoInput.value; // input의 현 value를 변수에 복사.
  toDoInput.value = ""; // 초기화
  printToDo(newTodo);
}

toDoForm.addEventListener("submit", printToDo);
