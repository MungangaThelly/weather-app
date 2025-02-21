// WeatherDetail.jsx För att visa detaljerad väderinformation
import React, { useState, useEffect } from 'react';
import { fetchForecastData } from '../api';

const WeatherDetail = ({ location }) => {
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    const getForecast = async () => {
      try {
        const data = await fetchForecastData(location);
        setForecast(data.list.slice(0, 5)); // Hämta de första 5 dagarna
      } catch (error) {
        console.error('Error fetching forecast data:', error);
      }
    };
    getForecast();
  }, [location]);

  if (forecast.length === 0) return <div>Loading...</div>;

  return (
    <div>
      <h2>5-Day Forecast</h2>
      {forecast.map((day, index) => (
        <div key={index}>
          <p>{day.dt_txt}</p>
          <p>Min: {day.main.temp_min}°C / Max: {day.main.temp_max}°C</p>
          <p>{day.weather[0].description}</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherDetail;
