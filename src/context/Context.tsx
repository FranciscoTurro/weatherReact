import { createContext } from 'react';

interface ContextValueInterface {
  isMetric: boolean;
  toggleUnitSystem: () => void;
}

export const Context = createContext<ContextValueInterface | null>(null);
