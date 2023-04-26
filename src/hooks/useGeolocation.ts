import { useState, useEffect } from 'react';

const useGeolocation = () => {
  const [position, setPosition] = useState<GeolocationCoordinates | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const onSuccess = (pos: GeolocationPosition) => {
      if (pos != null) {
        setPosition(pos.coords);
      }
    };

    const onError = (err: GeolocationPositionError) => {
      setError(err.message);
    };

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  return { position, error };
};

export default useGeolocation;
