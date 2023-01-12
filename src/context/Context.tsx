import { createContext } from 'react';

interface ContextValueInterface {
  currentCity: string;
  unitSystem: 'metric' | 'imperial';
  changeCity: (cityName: string) => void;
  changeUnitSystem: (unitSystem: 'metric' | 'imperial') => void;
}

export const Context = createContext<ContextValueInterface | null>(null);
