import { useState, useCallback } from "react";
import {
  getWeather as fetchWeather,
  getAutocompleteSuggestions as fetchAutocompleteSuggestions,
} from "../services/weatherService";

export const useWeather = (onWeatherUpdate, onError) => {
  const [suggestions, setSuggestions] = useState([]);

  const getWeather = useCallback(
    async (city) => {
      try {
        const data = await fetchWeather(city);
        onWeatherUpdate(data);
      } catch (error) {
        console.error("Error in useWeather hook (getWeather):", error);
        onError();
      }
    },
    [onWeatherUpdate, onError]
  );

  const getAutocompleteSuggestions = useCallback(async (query) => {
    try {
      const data = await fetchAutocompleteSuggestions(query);
      setSuggestions(data);
    } catch (error) {
      console.error(
        "Error in useWeather hook (getAutocompleteSuggestions):",
        error
      );
      setSuggestions([]);
    }
  }, []);

  return { getWeather, getAutocompleteSuggestions, suggestions };
};
