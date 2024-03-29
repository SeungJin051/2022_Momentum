const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");
const todoSubmit = document.querySelector("#todo-form");
const printQuote = document.querySelector("#quote");
const greetingText = document.querySelector(".todo-mate");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

loginForm.addEventListener("submit", function onLoiginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  greeting.innerHTML = `안녕하세요 ${username}.`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  document.querySelector("#log-out").classList.remove(HIDDEN_CLASSNAME);
  todoSubmit.classList.remove(HIDDEN_CLASSNAME);
  printQuote.classList.remove(HIDDEN_CLASSNAME);
  greetingText.classList.remove(HIDDEN_CLASSNAME);
});

const getLocalStorageItem = localStorage.getItem(USERNAME_KEY);

if (getLocalStorageItem === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoiginSubmit());
} else {
  greeting.innerHTML = `안녕하세요 ${getLocalStorageItem}.`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  document.querySelector("#log-out").classList.remove(HIDDEN_CLASSNAME);
  todoSubmit.classList.remove(HIDDEN_CLASSNAME);
  printQuote.classList.remove(HIDDEN_CLASSNAME);
  greetingText.classList.remove(HIDDEN_CLASSNAME);
}

document.querySelector("#log-out").addEventListener("click", function () {
  localStorage.clear();
  window.location.reload();
});
