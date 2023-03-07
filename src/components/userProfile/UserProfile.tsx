import React, { useState, useEffect } from 'react';
import { Container } from './styled';

import { USER_URL } from '../../services/api';
import { ShortUser } from '../../types/user';

const UserProfile = () => {
  const URL: string = USER_URL + 'MarceloDevCruz';

  const [user, setUser] = useState<ShortUser | null>(null);

  return <Container></Container>;
};

export default UserProfile;
