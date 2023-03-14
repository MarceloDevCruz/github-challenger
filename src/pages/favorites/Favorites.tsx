import React, { useContext } from 'react';
import { BsGithub } from 'react-icons/bs';

import { Container } from './styled';
import { RepositoryContext } from '../../context/RepositoryContext';
import Repository from '../../components/repository/Repository';
import { ShortRepo } from '../../types/user';

const Favorites = () => {
  const repository = JSON.parse(localStorage.getItem('repository') || '[]');

  return (
    <Container>
      <h2>
        <BsGithub /> Repositórios Favoritos
      </h2>
      {repository &&
        repository.map((repository: ShortRepo) => (
          <li key={repository.id}>
            <Repository
              id={repository.id}
              name={repository.name}
              full_name={repository.full_name}
              login={repository.login}
              description={repository.description}
              stargazers_count={repository.stargazers_count}
            />
          </li>
        ))}
    </Container>
  );
};

export default Favorites;
