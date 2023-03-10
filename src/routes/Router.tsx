import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home/Home';
import Header from '../components/header/Header';
import NotFoundPage from '../pages/notFoundPage/NotFoundPage';
import Favorites from '../pages/favorites/Favorites';
import Users from '../pages/users/Users';
import Repositories from '../pages/repositories/Repositories';
import IndividualUser from '../pages/individualUser/IndividualUser';

const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/users" element={<Users />} />
        <Route path="/repositorys" element={<Repositories />} />
        <Route path="/users/:login" element={<IndividualUser />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default Router;
