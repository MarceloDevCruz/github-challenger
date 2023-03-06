import React, { useState } from 'react';
import { BsGithub, BsSearch } from 'react-icons/bs';
import { Container, SearchContainer, BtnSelected } from './styled';

const Home = () => {
  const [userSelected, userSetSelected] = useState(true);
  const [repoSelected, repoSetSelected] = useState(true);

  return (
    <Container>
      <BsGithub />
      <div>
        {userSelected && (
          <BtnSelected selected={userSelected}>Repositório</BtnSelected>
        )}
        <BtnSelected>Usuário</BtnSelected>
      </div>
      <form>
        <SearchContainer>
          <input type="search" placeholder="Buscar..." />
          <BsSearch />
        </SearchContainer>
      </form>
    </Container>
  );
};

export default Home;
