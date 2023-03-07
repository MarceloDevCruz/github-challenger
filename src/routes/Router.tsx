import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home/Home';
import Header from '../components/header/Header';
import NotFoundPage from '../pages/notFoundPage/NotFoundPage';
import Favorites from '../pages/favorites/Favorites';

const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default Router;
