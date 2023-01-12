import { useState } from 'react';
import { Context } from './Context';

interface Props {
  children: React.ReactNode;
}

export const ContextProvider: React.FC<Props> = ({ children }) => {
  const [currentCity, setCurrentCity] = useState<string>('');
  const [unitSystem, setUnitSystem] = useState<'metric' | 'imperial'>('metric');

  const changeCity = (cityName: string) => {
    setCurrentCity(cityName);
  };

  const changeUnitSystem = (unitSystem: 'metric' | 'imperial') => {
    setUnitSystem(unitSystem);
  };

  return (
    <Context.Provider
      value={{ currentCity, unitSystem, changeCity, changeUnitSystem }}
    >
      {children}
    </Context.Provider>
  );
};
