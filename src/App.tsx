import { AppRouter } from './AppRouter';
import { ContextProvider } from './context/ContextProvider';

export const App: React.FC = () => {
  return (
    <ContextProvider>
      <AppRouter />
    </ContextProvider>
  );
};
