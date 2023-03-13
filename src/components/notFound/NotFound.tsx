import React, { useState } from 'react';

import { Container, GreyBackground } from './styled';
import { MdError } from 'react-icons/md';

const NotFound = () => {
  const [hide, setHide] = useState(false);
  return (
    <>
      <GreyBackground hide={hide} />
      <Container hide={hide}>
        <MdError />
        <h2>Desculpe</h2>
        <p>Não foi possível encontrar o repositório ou usuário desejado!</p>
        <button onClick={() => setHide(true)}>Certo</button>
      </Container>
    </>
  );
};

export default NotFound;
