let apiKey = "ca3de197620a1521a455c4239b865368";
let city = "Sydney";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

function showTemp(response) {
  let temperature = Math.round(response.data.main.temp);
  let h1 = document.querySelector("h1");
  h1.innerHTML = `It is ${temperature}°С degrees in ${city}`;
  console.log(response);
  console.log(temperature);
}
axios.get(apiUrl).then(showTemp);
