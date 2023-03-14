import React, { useContext } from 'react';
import Repository from '../../components/repository/Repository';
import { ShortRepo } from '../../types/user';

import { Container } from './styled';
import { RepositoryContext } from '../../context/RepositoryContext';

const Repositories = () => {
  const contextRepository = useContext(RepositoryContext);
  return (
    <Container>
      {contextRepository.repo &&
        contextRepository.repo.map((repository: ShortRepo) => (
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

export default Repositories;
