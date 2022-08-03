// Month + date
let currentDate = new Date();
function formatDate(date) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[date.getMonth()];
  let number = date.getDate();

  let result = `${month}, ${number}`;
  return result;
}

let date = document.querySelector("#date");
date.innerHTML = formatDate(currentDate);

// Day + time
function formatDay() {
  let currentDay = new Date();
  let week = [
    "Sunday",
    "Monday",
    "Thursday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = week[currentDay.getDay()];
  let hours = currentDay.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = currentDay.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let result = `${day}, ${hours}:${minutes}`;
  return result;
}

let day = document.querySelector("#day");
day.innerHTML = formatDay();

// Form + City

function changeCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  let city = document.querySelector("#city");
  city.innerHTML = `${cityInput.value}`;
}

let cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", changeCity);

// Celsius + Fahrenheit

let temp = 27;
let tempCelsius = Math.round(temp);
let tempFahrenheit = Math.round((temp * 9) / 5 + 32);
let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", clickCelsius);

function clickCelsius(event) {
  event.preventDefault();
  let temp = document.querySelector("#temp");
  temp.innerHTML = tempCelsius;
}
let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", clickFahrenheit);

function clickFahrenheit(event) {
  event.preventDefault();
  let temp = document.querySelector("#temp");
  temp.innerHTML = tempFahrenheit;
}

// Word length


function changeFont(event) {
  event.preventDefault();
    let cityLength = cityName.length; 
   if (cityLength > 10) {
      cityName.css("font-size", "20px");
   }
}

let cityName = document.querySelector("#city");
cityName.addEventListener("submit", changeFont);
