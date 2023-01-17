import { Route, Routes, Navigate } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { About } from './pages/About';
import { CityPage } from './pages/CityPage';
import { Contact } from './pages/Contact';
import { FAQ } from './pages/FAQ';
import { HomePage } from './pages/HomePage';

export const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/search/:city" element={<CityPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />{' '}
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
      <Footer />
    </>
  );
};
