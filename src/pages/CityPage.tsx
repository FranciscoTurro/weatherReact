import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { SearchBar } from '../components/SearchBar';
import { Weather } from '../components/Weather';
import { Context } from '../context/Context';

export const CityPage: React.FC = () => {
  const { country, city } = useParams();

  const contextValue = useContext(Context);

  return (
    <>
      <SearchBar />
      <Weather city={city!} system={contextValue!.unitSystem} />
    </>
  );
};

export default CityPage;
