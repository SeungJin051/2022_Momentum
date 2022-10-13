const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

function printToDo(createToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);
  span.innerHTML = createToDo;
  toDoList.appendChild(li);
}

function handleToDoSubmit() {
  const createToDo = toDoInput.value; // input의 현재 value를 새로운 변수에 복사
  toDoInput.value = ""; // 초기화
  printToDo(createToDo); // newTodo(파라미터)값을 printToDo 함수로 보냄
}

toDoForm.addEventListener("submit", handleToDoSubmit);
