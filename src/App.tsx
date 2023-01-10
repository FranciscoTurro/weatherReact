import { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { MainWeather } from './components/MainWeather';

export const App: React.FC = () => {
  const [city, setCity] = useState<string | null>(null);
  const [system, setSystem] = useState<'metric' | 'imperial'>('metric');

  const changeCity = (city: string) => {
    setCity(city);
  };

  return (
    <>
      <SearchBar setParentState={changeCity} />
      {city ? <MainWeather city={city} system={system} /> : null}
    </>
  );
};
