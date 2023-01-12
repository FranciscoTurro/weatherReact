import { Route, Routes, Navigate } from 'react-router-dom';
import { CityPage } from './pages/CityPage';
import { HomePage } from './pages/HomePage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path=":country?/:city" element={<CityPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
