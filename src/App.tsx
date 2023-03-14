import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyled } from './GlobalStyled';

import { RepositoryContext } from './context/RepositoryContext';
import { UserContext } from './context/UserContext';
import { ShortRepo, ShortUser } from './types/user';

import Router from './routes/Router';

function App() {
  const [user, setUser] = useState<ShortUser[] | null>(null);
  const [repo, setRepo] = useState<ShortRepo[] | null>(null);

  return (
    <>
      <BrowserRouter>
        <RepositoryContext.Provider value={{ repo, setRepo }}>
          <UserContext.Provider value={{ user, setUser }}>
            <GlobalStyled />
            <Router />
          </UserContext.Provider>
        </RepositoryContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
