import React from 'react';

import { Container } from './styled';

interface Props {
  name: string;
  full_name: string;
  login: owner;
  description: string;
}

type owner = {
  login: string;
};

function Repository({ name, full_name, login, description }: Props) {
  return (
    <Container>
      <h2>{name}</h2>
      <h3>{full_name}</h3>
      <p>{description}</p>
    </Container>
  );
}

export default Repository;
