import { getWeather, getAutocompleteSuggestions } from "./weather.js";

const themeToggle = document.querySelector("#theme-toggle");
const locationInput = document.querySelector("#location-input");
const cityInput = document.querySelector("#city-input");
const getWeatherButton = document.querySelector("#get-weather-button");
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

function displayAutocompleteSuggestions(suggestions) {
  const suggestionsList = document.querySelector("#autocomplete-suggestions");
  suggestionsList.innerHTML = "";

  suggestions.forEach((suggestion) => {
    const li = document.createElement("li");
    li.textContent = `${suggestion.name}, ${suggestion.region}, ${suggestion.country}`;
    li.addEventListener("click", () => {
      cityInput.value = suggestion.name;
      suggestionsList.innerHTML = "";
      getWeather(suggestion.name);
    });
    suggestionsList.appendChild(li);
  });
}

cityInput.addEventListener("input", async () => {
  const query = cityInput.value;
  if (query.length > 2) {
    const suggestions = await getAutocompleteSuggestions(query);
    displayAutocompleteSuggestions(suggestions);
  } else {
    const suggestionsList = document.querySelector("#autocomplete-suggestions");
    suggestionsList.innerHTML = "";
  }
});

getWeatherButton.addEventListener("click", () => {
  const city = cityInput.value;
  getWeather(city);
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
