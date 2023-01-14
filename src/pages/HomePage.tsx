import React, { useState, useEffect, useContext } from 'react';
import { useQuery } from 'react-query';
import { BarLoader } from 'react-spinners';
import { fetchCityName } from '../api/fetchCityName';
import { Weather } from '../components/Weather/Weather';
import { Context } from '../context/Context';

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
      <div className="text-xl flex flex-col items-center pt-16">
        Please allow your browser to access your location, or manually search
        for your city
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
