import { useState } from 'react';
import { Context } from './Context';

interface Props {
  children: React.ReactNode;
}

export const ContextProvider: React.FC<Props> = ({ children }) => {
  const [currentCity, setCurrentCity] = useState<string>('');
  const [isMetric, setIsMetric] = useState(true);

  const changeCity = (cityName: string) => {
    setCurrentCity(cityName);
  };

  const toggleUnitSystem = () => {
    setIsMetric(!isMetric);
  };

  return (
    <Context.Provider
      value={{ currentCity, isMetric, changeCity, toggleUnitSystem }}
    >
      {children}
    </Context.Provider>
  );
};
