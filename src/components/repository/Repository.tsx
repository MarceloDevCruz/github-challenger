import React from 'react';
import { BsStar } from 'react-icons/bs';

import { Container, Star } from './styled';

interface Props {
  name: string;
  full_name: string;
  login: owner;
  description: string;
  stargazers_count: number;
}

type owner = {
  login: string;
};

function Repository({ name, description, stargazers_count }: Props) {
  return (
    <Container>
      <Star>
        <BsStar />
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
