function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const spqnCity = document.querySelector("#weather span:first-child");
      const spanWeather = document.querySelector("#weather span:last-child");
      spqnCity.innerHTML = `${data.name} / ${data.main.temp}`;
      spanWeather.innerHTML = data.weather[0].main;
    });
}

function onGeoNo() {
  alert("날씨 정보를 거부합니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoNo);
