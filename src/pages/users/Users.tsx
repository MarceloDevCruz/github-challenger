import React, { useContext, useEffect } from 'react';

import { Container } from './styled';
import { ShortUser } from '../../types/user';

import { UserContext } from '../../context/UserContext';
import Profile from '../../components/profile/Profile';

const Users = () => {
  const contextUser = useContext(UserContext);

  return (
    <>
      <Container>
        {contextUser.user &&
          contextUser.user.map((user: ShortUser) => (
            <li key={user.id}>
              <Profile
                id={user.id}
                avatar_url={user.avatar_url}
                login={user.login}
              />
            </li>
          ))}
      </Container>
    </>
  );
};

export default Users;
