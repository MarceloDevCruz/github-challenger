import React from 'react';

import { HeaderContainer } from './styled';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderContainer>
      <h1>
        GitHub <em>Search</em>
      </h1>
      <ul>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/favorites">Favoritos</Link>
        </li>
      </ul>
    </HeaderContainer>
  );
};

export default Header;
