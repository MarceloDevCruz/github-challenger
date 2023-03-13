import React from 'react';
import { Container } from './styled';

import { useNavigate } from 'react-router-dom';

interface Props {
  id: number;
  avatar_url: string;
  login: string;
}

const Profile = ({ id, avatar_url, login }: Props) => {
  const navigate = useNavigate();

  const navigateToUser = () => {
    return navigate(login);
  };

  return (
    <Container>
      <img onClick={navigateToUser} src={avatar_url} alt={login} />
      <h2>{login}</h2>
    </Container>
  );
};

export default Profile;
