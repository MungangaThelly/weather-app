// WeatherCard.jsx
import React, { useState, useEffect } from 'react';
import { fetchWeatherData } from '../api';
//import './WeatherCard.css';
import moment from 'moment';

const WeatherCard = ({ location }) => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const data = await fetchWeatherData(location);
        setWeather(data);
        setError(null);
      } catch (error) {
        setError('Could not fetch weather data. Please try again later.');
      }
    };
    getWeather();
  }, [location]);

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!weather) {
    return <div>Loading...</div>;
  }

  const iconUrl = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;

  return (
    <div className="weather-card">
      <h1>{weather.name}</h1>
      <p>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
      <p className="temp">Temperature: {weather.main.temp}°C</p>
      <p className="weather-description">Weather: {weather.weather[0].description}</p>
      <div className="weather-icon">
        <img src={iconUrl} alt={weather.weather[0].description} />
      </div>
    </div>
  );
};

export default WeatherCard;