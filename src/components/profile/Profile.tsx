import React from 'react';
import { Container } from './styled';
import { ShortUser } from '../../types/user';

interface Props {
  id: number;
  avatar_url: string;
  login: string;
  location: string;
  followers: number;
  following: number;
}

const Profile = ({
  id,
  avatar_url,
  login,
  location,
  followers,
  following,
}: Props) => {
  return (
    <Container>
      <img src={avatar_url} alt={login} />
      <h2>{login}</h2>
    </Container>
  );
};

export default Profile;
