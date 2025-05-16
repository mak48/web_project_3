import React, { useState, useEffect } from "react";
import { useWeather } from "../hooks/useWeather";
import AutocompleteSuggestions from "./AutocompleteSuggestions";

function LocationInput({ onWeatherUpdate, onError }) {
  const [city, setCity] = useState("");
  const [query, setQuery] = useState("");
  const { getWeather, getAutocompleteSuggestions, suggestions } = useWeather(
    onWeatherUpdate,
    onError
  );

  useEffect(() => {
    const fetchData = async () => {
      if (query.length > 2) {
        await getAutocompleteSuggestions(query);
      }
    };

    fetchData();
  }, [query, getAutocompleteSuggestions]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setCity(value);
    setQuery(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather(city);
  };

  const handleSuggestionClick = (suggestion) => {
    setCity(suggestion.name);
    getWeather(suggestion.name);
  };

  return (
    <div id="location-input">
      <form onSubmit={handleSubmit}>
        <label htmlFor="city-input">Enter City:</label>
        <input
          type="text"
          id="city-input"
          value={city}
          onChange={handleInputChange}
        />
        <button type="submit" className="get-weather-button">
          Get Weather
        </button>
      </form>
      <AutocompleteSuggestions
        suggestions={suggestions}
        onSuggestionClick={handleSuggestionClick}
      />
    </div>
  );
}

export default LocationInput;
