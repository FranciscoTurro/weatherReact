import { useState } from 'react';
import { Context } from './Context';

interface Props {
  children: React.ReactNode;
}

export const ContextProvider: React.FC<Props> = ({ children }) => {
  const [isMetric, setIsMetric] = useState(true);

  const toggleUnitSystem = () => {
    setIsMetric(!isMetric);
  };

  return (
    <Context.Provider value={{ isMetric, toggleUnitSystem }}>
      {children}
    </Context.Provider>
  );
};
