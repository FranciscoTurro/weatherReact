import React from 'react';
import { useParams } from 'react-router-dom';
import { Weather } from '../components/Weather/Weather';

export const City: React.FC = () => {
  const { city } = useParams();

  return <Weather city={city!} />;
};
