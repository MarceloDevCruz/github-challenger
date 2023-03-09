import React from 'react';
import { Container } from './styled';
import { ShortUser } from '../../types/user';

interface Props {
  avatar_url: string;
  login: string;
}

const Profile = ({ avatar_url, login }: Props) => {
  return (
    <Container>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
    </Container>
  );
};

export default Profile;
