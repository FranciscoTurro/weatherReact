import { createContext } from 'react';

interface ContextValueInterface {
  isMetric: boolean;
  toggleUnitSystem: () => void;
  isLightMode: boolean;
  toggleTheme: () => void;
}

export const Context = createContext<ContextValueInterface | null>(null);
