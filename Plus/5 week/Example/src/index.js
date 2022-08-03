// Input-Search city
function searchCity(event) {
  event.preventDefault();
  let inputCity = document.querySelector("#inputCity");
  let currentCity = document.querySelector("#currentCity");
  currentCity.innerHTML = `${inputCity.value}`;
}
let searchBtn = document.querySelector("#searchBtn");
searchBtn.addEventListener("click", searchCity);

// Display current Day&Time
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();

let currentDayTime = document.querySelector("#currentDateTime");
currentDayTime.innerHTML = `${day} ${hours}:${minutes}`;

// Switch between Celcius and Fahrenheit
function switchUnitsF(event) {
  let fahrenheit = document.querySelector("#fahrenheit");
  let currentTemperature = document.querySelector("#currentTemperature");
  currentTemperature.innerHTML = `66°`;
  //fahrenheit.innerHTML = null;
}
fahrenheit.addEventListener("click", switchUnitsF);

function switchUnitsC(event) {
  let celcius = document.querySelector("#celcius");
  let currentTemperature = document.querySelector("#currentTemperature");
  currentTemperature.innerHTML = `23°`;
  //celcius.innerHTML = null;
}
celcius.addEventListener("click", switchUnitsC);
