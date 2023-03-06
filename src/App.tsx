import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyled } from './GlobalStyled';

import Router from './routes/Router';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyled />
      <Router />
    </BrowserRouter>
  );
}

export default App;
