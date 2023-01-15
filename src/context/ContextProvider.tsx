import { useEffect, useState } from 'react';
import { Context } from './Context';

interface Props {
  children: React.ReactNode;
}

export const ContextProvider: React.FC<Props> = ({ children }) => {
  const [isMetric, setIsMetric] = useState(true);
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleUnitSystem = () => {
    setIsMetric(!isMetric);
  };

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }, [isLightMode]);

  return (
    <Context.Provider
      value={{ isMetric, toggleUnitSystem, isLightMode, toggleTheme }}
    >
      {children}
    </Context.Provider>
  );
};
