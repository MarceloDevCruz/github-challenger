import React from 'react';
import { BsStar } from 'react-icons/bs';

import { Container, Star } from './styled';
import { ShortRepo } from '../../types/user';

interface Props {
  id: number;
  name: string;
  full_name: string;
  login: owner;
  description: string;
  stargazers_count: number;
}

type owner = {
  login: string;
};

const addFavorite = (
  id: number,
  name: string,
  full_name: string,
  login: owner,
  description: string,
  stargazers_count: number
) => {
  const repository = JSON.parse(localStorage.getItem('repository') || '[]');

  repository.push({
    id,
    name,
    full_name,
    login,
    description,
    stargazers_count,
  });

  localStorage.setItem('repository', JSON.stringify(repository));
};

function Repository({
  id,
  name,
  full_name,
  login,
  description,
  stargazers_count,
}: Props) {
  return (
    <Container>
      <Star>
        <BsStar
          onClick={() =>
            addFavorite(
              id,
              name,
              full_name,
              login,
              description,
              stargazers_count
            )
          }
        />
      </Star>
      <h3>{name}</h3>
      <p>{description}</p>
      <div>
        <BsStar />
        <span>{stargazers_count}</span>
      </div>
    </Container>
  );
}

export default Repository;
