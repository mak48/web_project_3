import React from "react";

function WeatherDetails({ data }) {
  return (
    <div id="weather-details">
      <h2>{data.location.name}</h2>
      <p>Temperature: {data.current.temp_c}°C</p>
      <p>Condition: {data.current.condition.text}</p>
      <a href={data.location.url} target="_blank" rel="noopener noreferrer">
        WeatherAPI.com
      </a>
    </div>
  );
}

export default WeatherDetails;
