import { Route, Routes, Navigate } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { About } from './pages/About';
import { City } from './pages/City';
import { Contact } from './pages/Contact';
import { FAQ } from './pages/FAQ';
import { Home } from './pages/Home';

export const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/search/:city" element={<City />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />{' '}
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
      <Footer />
    </>
  );
};
