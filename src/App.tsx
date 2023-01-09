import { useState } from 'react';
import { SearchBar } from './components/SearchBar';
import { Weather } from './components/Weather';

export const App: React.FC = () => {
  const [city, setCity] = useState<string | null>(null);

  const changeCity = (city: string) => {
    setCity(city);
  };

  return (
    <>
      <SearchBar setParentState={changeCity} />
      {city ? <Weather city={city} /> : null}
    </>
  );
};
