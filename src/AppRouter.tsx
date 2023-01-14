import { Route, Routes, Navigate } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { CityPage } from './pages/CityPage';
import { HomePage } from './pages/HomePage';

export const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path=":city" element={<CityPage />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};
