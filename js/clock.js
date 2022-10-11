const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minustes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerHTML = `${hours}:${minustes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

// padStart() = string이 가져야 하는 길이를 2로 설정하고 그러지 않으면 string의 앞쪽에 0을 추가
