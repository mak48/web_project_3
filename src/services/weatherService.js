const API_KEY = "719cf7d3e3934d1b89090733252903";
const CURRENT_WEATHER_API_URL = "https://api.weatherapi.com/v1/current.json";
const AUTOCOMPLETE_URL = "https://api.weatherapi.com/v1/search.json";

export const getWeather = async (city) => {
  try {
    const response = await fetch(
      `${CURRENT_WEATHER_API_URL}?key=${API_KEY}&q=${city}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

export const getAutocompleteSuggestions = async (query) => {
  try {
    const response = await fetch(
      `${AUTOCOMPLETE_URL}?key=${API_KEY}&q=${query}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching autocomplete suggestions:", error);
    return [];
  }
};
