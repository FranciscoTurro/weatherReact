import React, { useState, useEffect, useContext } from 'react';
import { useQuery } from 'react-query';
import { BarLoader } from 'react-spinners';
import { fetchCityName } from '../api/fetchCityName';
import { Weather } from '../components/Weather/Weather';

export const HomePage: React.FC = () => {
  const [coordinates, setCoordinates] = useState({ latitude: 0, longitude: 0 });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position: any) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setCoordinates({ latitude, longitude });
    });
  }, []);

  const { data, isLoading } = useQuery(['homepage', coordinates], () =>
    fetchCityName(coordinates)
  );

  if (coordinates.latitude === 0 && coordinates.longitude === 0)
    return (
      <div className="flex flex-col items-center pt-16">
        <div className="block max-w-sm p-6 bg-custom_gray-200 border-none rounded-lg shadow-md hover:bg-custom_gray-100 dark:bg-custom_gray-700 dark:hover:bg-custom_gray-600">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">
            We can't access your location
          </h5>
          <p className="font-normal">
            Allow the browser access to your location, or manually search for a
            city on the search bar.
          </p>
        </div>
      </div>
    );
  if (isLoading)
    return (
      <div className="flex flex-col items-center pt-16">
        <BarLoader color="red" />
      </div>
    );

  return <Weather city={data.results[0].components.city} />;
};
