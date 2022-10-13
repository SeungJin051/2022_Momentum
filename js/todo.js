const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");
const TODOS_KEY = "todos";

let toDos = []; // save toDos

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
  li.id = createToDo.id; // li에 객체의 속성값을 전달
  const span = document.createElement("span");
  const button = document.createElement("button");

  span.innerHTML = createToDo.text; // span에 객체의 속성값을 전달
  button.innerHTML = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const createToDo = toDoInput.value; // input의 현재 value를 새로운 변수에 복사
  toDoInput.value = ""; // 초기화
  const newToDosObj = {
    // toDos에 문자가 아닌 객체를 저장
    text: createToDo,
    id: Date.now(),
  };
  toDos.push(newToDosObj);
  printToDo(newToDosObj); // newTodo(파라미터)값을 printToDo 함수로 보냄
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

/* function sayHello(item) {
   console.log("hello", item);
} */

const savedToDos = localStorage.getItem("TODOS_KEY");

if (saveToDos !== null) {
  const parseToDos = JSON.parse(savedToDos);
  parseToDos.forEach(printToDo); // todos는 항상 빈 array로 시작하여서 이전의 todo가 사라짐, let array를 parse해준다. // ex) printToDo({text: 'a', id: 1235346})
}
