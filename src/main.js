import { getWeather } from "./weather.js";

const themeToggle = document.querySelector("#theme-toggle");

const cityInput = document.querySelector("#city-input");
const getWeatherButton = document.querySelector("#get-weather");
const weatherDetails = document.querySelector("#weather-details");
const errorMessage = document.querySelector("#error-message");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});
getWeatherButton.addEventListener("click", () => {
  const city = cityInput.value;
  if (city) {
    getWeather(city);
  }
});

async function updateWeatherDetails(data) {
  const cityName = document.querySelector("#city-name");
  const temperature = document.querySelector("#temperature");
  const condition = document.querySelector("#condition");
  const weatherLink = document.querySelector("#weather-link");

  cityName.textContent = data.location.name;
  temperature.textContent = data.current.temp_c;
  condition.textContent = data.current.condition.text;
  weatherLink.href = data.location.url;
  weatherLink.textContent = "WeatherAPI.com";

  weatherDetails.classList.remove("hidden");
  errorMessage.classList.add("hidden");
}

function displayError() {
  weatherDetails.classList.add("hidden");
  errorMessage.classList.remove("hidden");
}

export { updateWeatherDetails, displayError };
