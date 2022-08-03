function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "ca3de197620a1521a455c4239b865368";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
  console.log(lat);
  console.log(lon);
}

function showTemp(response) {
   let temperature = Math.round(response.data.main.temp);
   let h1 = document.querySelector("h1");
   h1.innerHTML = `The outside temperature is ${temperature}`;
   console.log(temperature);
}

navigator.geolocation.getCurrentPosition(showPosition);