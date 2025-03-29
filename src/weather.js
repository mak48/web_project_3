import { updateWeatherDetails, displayError } from "./main.js";

const API_KEY = "719cf7d3e3934d1b89090733252903";
const API_URL = "http://api.weatherapi.com/v1/current.json";

async function getWeather(city) {
  try {
    const response = await fetch(`${API_URL}?key=${API_KEY}&q=${city}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    updateWeatherDetails(data);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    displayError();
  }
}

export { getWeather };
