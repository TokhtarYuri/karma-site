import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Passengers from './pages/Passengers/Passengers';
import Drivers from './pages/Drivers/Drivers';
import About from './pages/About/About';
import Privacy from './pages/Privacy/Privacy';

function App() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <main className="app-wrapper">
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/passengers" element={<Passengers />} />
            <Route path="/drivers" element={<Drivers />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
