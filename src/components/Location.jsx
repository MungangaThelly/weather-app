// useGeolocation.jsx (För att hantera användarens plats (auto location))
import { useState, useEffect } from 'react';
//import './Location.css';

const GeolocationComponent = () => {
  const { location, error } = useGeolocation();

  return (
    <div className="geolocation-container">
      {error ? (
        <div className="error-message">{error}</div>
      ) : (
        <div className="location-info">
          <p>
            Latitude: <span>{location.lat}</span>
          </p>
          <p>
            Longitude: <span>{location.lon}</span>
          </p>
        </div>
      )}
      {/* Lägg till en knapp för att uppdatera platsen om du vill */}
      <button className="update-button" onClick={() => window.location.reload()}>
        Uppdatera plats
      </button>
    </div>
  );
};

export default GeolocationComponent;