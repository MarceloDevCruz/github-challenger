import React, { createContext } from 'react';
import { ShortUser } from '../types/user';

type UserContextType = {
  user: ShortUser[] | null;
  setUser: React.Dispatch<React.SetStateAction<ShortUser[] | null>>;
};

const iUserContextState = {
  user: null,
  setUser: () => {},
};

export const UserContext = createContext<UserContextType>(iUserContextState);
