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
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            We can't access your location
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
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
