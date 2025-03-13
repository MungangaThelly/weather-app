// App.jsx
import React, { useState, useEffect } from 'react';
import WeatherCard from './components/WeatherCard';
import WeatherForecast from './components/WeatherForecast';
import WeatherDetail from './components/WeatherDetail';
import WeatherSearch from './components/WeatherSearch';
//import FavoritePlaces from './components/FavoritePlaces';
import './styles.css';  // Importera CSS-stilar
//import './App.css';
import useGeolocation from './components/Location';

const App = () => {
  const savedLocation = localStorage.getItem('location') || 'Stockholm';
  const [location, setLocation] = useState(savedLocation);
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleSearch = (query) => {
    setLocation(query);
  };

  const handleAddFavorite = (newFavorite) => {
    if (!favorites.includes(newFavorite)) {
      const updatedFavorites = [...favorites, newFavorite];
      setFavorites(updatedFavorites);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Väder Applikation</h1>
      <div className="search-section">
        <WeatherSearch onSearch={handleSearch} />
      </div>
      <div className="weather-card-section">
        <WeatherCard location={location} />
      </div>
      <div className="forecast-section">
        <WeatherForecast location={location} />
      </div>
      <div className="detail-section">
        <WeatherDetail location={location} />
      </div>
      {/*<button className="add-favorite-button" onClick={() => handleAddFavorite(location)}>
        Add to Favorites
      </button>
      <div className="favorites-section">
        <FavoritePlaces favorites={favorites} />
      </div>*/}
    </div>
  );
};

export default App;
