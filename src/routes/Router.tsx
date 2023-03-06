import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home/Home';
import NotFoundPage from '../pages/notFoundPage/NotFoundPage';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default Router;
