import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { Container } from './styled';

const NotFoundPage = () => {
  return (
    <Container>
      <BsGithub />
      <h3>Desculpe!</h3>
      <h4>404</h4>
      <h5>Página não encontrada!</h5>
    </Container>
  );
};

export default NotFoundPage;
