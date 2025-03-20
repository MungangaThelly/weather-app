import React, { useState, useEffect } from 'react';
import WeatherCard from './components/WeatherCard';
import WeatherForecast from './components/WeatherForecast';
import WeatherDetail from './components/WeatherDetail';
import WeatherSearch from './components/WeatherSearch';
import FavoritePlaces from './components/FavoritePlaces';
import Loader from './components/Loader'; // Ny komponent för laddningsindikator
import ErrorMessage from './components/ErrorMessage'; // Ny komponent för felmeddelanden
import useGeolocation from './components/useGeolocation';
import './styles.css';

const App = () => {
  const savedLocation = localStorage.getItem('location') || 'Stockholm';
  const [location, setLocation] = useState(savedLocation);
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location: geoLocation, error: geoError } = useGeolocation();

  // Spara senaste sökningen i localStorage
  useEffect(() => {
    localStorage.setItem('location', location);
  }, [location]);

  // Använd geolocation om tillgängligt
  useEffect(() => {
    if (geoLocation && !geoError) {
      setLocation(`${geoLocation.lat},${geoLocation.lon}`);
    }
  }, [geoLocation, geoError]);

  const handleSearch = (query) => {
    setLocation(query);
    setError(null); // Rensa tidigare fel vid ny sökning
  };

  const handleAddFavorite = (newFavorite) => {
    if (!favorites.includes(newFavorite)) {
      const updatedFavorites = [...favorites, newFavorite];
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };

  const handleRemoveFavorite = (placeToRemove) => {
    const updatedFavorites = favorites.filter((place) => place !== placeToRemove);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Väder-App</h1>

      {/* Söksektion */}
      <div className="search-section">
        <WeatherSearch onSearch={handleSearch} />
      </div>

      {/* Visa felmeddelande om det finns */}
      {error && <ErrorMessage message={error} />}

      {/* Visa laddningsindikator om data hämtas */}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {/* Väderkort för aktuell plats */}
          <div className="weather-card-section">
            <WeatherCard
              location={location}
              onError={(err) => setError(err)}
              onLoading={(loading) => setIsLoading(loading)}
            />
          </div>

          {/* 5-dagars prognos */}
          <div className="forecast-section" > 
            <WeatherForecast
              location={location}
              onError={(err) => setError(err)}
              onLoading={(loading) => setIsLoading(loading)}
            />
          </div>

          {/* Detaljerad väderinfo */}
          <div className="detail-section">
            <WeatherDetail
              location={location}
              onError={(err) => setError(err)}
              onLoading={(loading) => setIsLoading(loading)} />
          </div>

          {/* Knapp för att lägga till favoritplats */}
          <button
            className="add-favorite-button"
            onClick={() => handleAddFavorite(location)}>
            Lägg till favoritplats
          </button>

          {/* Visa favoritplatser */}
          <div className="favorites-section">
            <FavoritePlaces
              favorites={favorites}
              onRemoveFavorite={handleRemoveFavorite}
              onSelectLocation={setLocation}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default App;