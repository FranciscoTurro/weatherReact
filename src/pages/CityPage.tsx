import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Weather } from '../components/Weather/Weather';
import { Context } from '../context/Context';

export const CityPage: React.FC = () => {
  const { country, city } = useParams();

  const contextValue = useContext(Context);

  return <Weather city={city!} />;
};

export default CityPage;
