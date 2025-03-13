import { useState, useEffect } from 'react';

const useGeolocation = () => {
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [error, setError] = useState(null);

  useEffect(() => {
    // Kontrollera om geolocation stöds
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by this browser.");
      return;
    }

    // Hämta användarens plats
    const successCallback = (position) => {
      setLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    };

    const errorCallback = (err) => {
      setError(`Error: ${err.message}`);
    };

    // Använd geolocation API
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []); // Tom array innebär att hooken bara körs när komponenten laddas

  return { location, error };
};

export default useGeolocation;
