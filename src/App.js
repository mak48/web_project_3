import React, { useState } from "react";
import Header from "./components/Header";
import LocationInput from "./components/LocationInput";
import WeatherDetails from "./components/WeatherDetails";
import ErrorMessage from "./components/ErrorMessage";
import { ThemeProvider } from "./context/ThemeContext";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleWeatherUpdate = (data) => {
    setWeatherData(data);
    setError(null);
  };

  const handleError = () => {
    setWeatherData(null);
    setError("Failed to fetch weather data. Please try again.");
  };

  return (
    <ThemeProvider>
      <div className="weather-container">
        <Header />
        <LocationInput
          onWeatherUpdate={handleWeatherUpdate}
          onError={handleError}
        />
        {error && <ErrorMessage message={error} />}
        {weatherData && <WeatherDetails data={weatherData} />}
      </div>
    </ThemeProvider>
  );
}

export default App;
