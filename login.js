const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

loginForm.addEventListener("submit", function onLoiginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  greeting.innerHTML = `안녕하세요 ${username}님`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
});

const localStorageItem = localStorage.getItem(USERNAME_KEY);

if (localStorageItem === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoiginSubmit());
} else {
  greeting.innerHTML = `안녕하세요 ${localStorageItem}님`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  loginForm.classList.add(HIDDEN_CLASSNAME);
}
