import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';

function App() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<h1>{t('greeting')}</h1>} />
          <Route path="/passengers" element={<h1>{t('passengers')}</h1>} />
          <Route path="/drivers" element={<h1>{t('drivers')}</h1>} />
          <Route path="/about" element={<h1>{t('about')}</h1>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
