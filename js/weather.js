const city = document.querySelector('#weather span:first-child');
const weather = document.querySelector('#weather span:nth-child(2)');
const temperature = document.querySelector('#weather span:last-child');
const API_KEY = '8bc359cbf7b3e1b3bc231a59835706c0';

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = data.weather[0].main;
      temperature.innerText = `${data.main.temp}°C`;
    });
}
function onGeoError() {
  alert('위치를 찾을 수 없습니다.');
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
