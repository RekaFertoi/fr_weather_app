function displayTemp(response) {
  let tempElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#weather-description");
  let humElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  tempElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "0338b821f57d8e8b5a5015ec385d4b83";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemp);
