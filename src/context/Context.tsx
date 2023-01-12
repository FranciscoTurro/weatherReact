import { createContext } from 'react';

interface ContextValueInterface {
  currentCity: string;
  isMetric: boolean;
  changeCity: (cityName: string) => void;
  toggleUnitSystem: () => void;
}

export const Context = createContext<ContextValueInterface | null>(null);
