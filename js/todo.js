const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");
const TODOS_KEY = "todos";

let toDos = []; // save toDos // todos는 항상 빈 array로 시작하여서 이전의 todos가 사라짐, let array를 parse해준다.

function saveToDos() {
  localStorage.setItem("TODOS_KEY", JSON.stringify(toDos)); // JSON.stringify = string으로 변환 ex)JSON.stringify([1, 2, 3, 4])
}

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
  button.innerHTML = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);
}

function handleToDoSubmit() {
  const createToDo = toDoInput.value; // input의 현재 value를 새로운 변수에 복사
  toDoInput.value = ""; // 초기화
  toDos.push(createToDo);
  printToDo(createToDo); // newTodo(파라미터)값을 printToDo 함수로 보냄
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

/* function sayHello(item) {
   console.log("hello", item);
} */

const savedToDos = localStorage.getItem("TODOS_KEY");
if (saveToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos; // todos는 항상 빈 array로 시작하여서 이전의 todos가 사라짐, let array를 parse해준다. (복원, 예전값을 저장과 새로운 값을 저장)
  parsedToDos.forEach(printToDo); // forEach
}
