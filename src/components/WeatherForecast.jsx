// ForecastCard.jsx
import React, { useState, useEffect } from 'react';
import { fetchForecastData } from '../api';
import moment from 'moment';
import './WeatherForecast.css';

const ForecastCard = ({ location }) => {
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getForecast = async () => {
      try {
        const data = await fetchForecastData(location);
        setForecast(data.list);  // Store the list of forecast data
        setError(null);
      } catch (error) {
        setError('Det gick inte att hämta prognosdata. Vänligen försök igen senare.');
      }
    };
    getForecast();
  }, [location]);

  if (error) {
    return <div className="error">{error}</div>;
  }

  const groupedForecast = forecast.reduce((acc, curr) => {
    const date = moment(curr.dt_txt).format('YYYY-MM-DD');
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(curr);
    return acc;
  }, {});

  const fiveDayForecast = Object.entries(groupedForecast).slice(0, 5);

  return (
    <div className="forecast">
      {fiveDayForecast.map(([date, dayData]) => {
        const minTemp = Math.min(...dayData.map(item => item.main.temp_min));
        const maxTemp = Math.max(...dayData.map(item => item.main.temp_max));
        
        const dayIcon = dayData[0].weather[0].icon;
        const weatherDescription = dayData[0].weather[0].description;
        
        const dateFormatted = moment(date).format('dddd, MMMM Do');
        const iconUrl = `http://openweathermap.org/img/wn/${dayIcon}@2x.png`;

        return (
          <div key={date} className="forecast-day">
            <h3>{dateFormatted}</h3>
            <div className="forecast-temp">
              <span className="min-temp">Min: {minTemp.toFixed(1)}°C</span>
              <span className="max-temp">Max: {maxTemp.toFixed(1)}°C</span>
            </div>
            <div className="forecast-description">{weatherDescription}</div>
            <div className="forecast-icon">
              <img src={iconUrl} alt={weatherDescription} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ForecastCard;