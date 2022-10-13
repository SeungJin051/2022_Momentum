const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

// click(event)
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function printToDo(createToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  span.innerHTML = createToDo;
  button.innerHTML = "X";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);
}

function handleToDoSubmit() {
  const createToDo = toDoInput.value; // input의 현재 value를 새로운 변수에 복사
  toDoInput.value = ""; // 초기화
  printToDo(createToDo); // newTodo(파라미터)값을 printToDo 함수로 보냄
}

toDoForm.addEventListener("submit", handleToDoSubmit);
