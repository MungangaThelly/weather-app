import React, { useState, useEffect } from 'react';
import { fetchForecastData } from '../services/api';
import './WeatherDetail.css';

const WeatherDetail = ({ location }) => {
  const [forecast, setForecast] = useState([]);
  const [isForecastVisible, setIsForecastVisible] = useState(false); // State to toggle forecast visibility

  useEffect(() => {
    const getForecast = async () => {
      try {
        const data = await fetchForecastData(location);
        setForecast(data.list.slice(0, 5)); // Fetch the first 5 days
      } catch (error) {
        console.error('Error fetching forecast data:', error);
      }
    };
    getForecast();
  }, [location]);

  if (forecast.length === 0) return <div className="loading">Loading...</div>;

  const toggleForecastVisibility = () => {
    setIsForecastVisible(!isForecastVisible); // Toggle forecast visibility
  };

  return (
    <div>
      {/* Button to toggle forecast visibility */}
      <button onClick={toggleForecastVisibility} className="toggle-button">
        {isForecastVisible ? 'Hide 5-Day Forecast' : 'Show 5-Day Forecast'}
      </button>

      {/* Forecast section, only visible when isForecastVisible is true */}
      {isForecastVisible && (
        <div className="weather-detail">
          <h2>5-Day Forecast</h2>
          {forecast.map((day, index) => (
            <div className="forecast-day" key={index}>
              <p>{day.dt_txt}</p>
              <p className="temp">
                Min: {day.main.temp_min}°C / Max: {day.main.temp_max}°C
              </p>
              <p className="weather-description">{day.weather[0].description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeatherDetail;
