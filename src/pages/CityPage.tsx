import React from 'react';
import { useParams } from 'react-router-dom';
import { Weather } from '../components/Weather/Weather';

export const CityPage: React.FC = () => {
  const { city } = useParams();

  return <Weather city={city!} />;
};

export default CityPage;
