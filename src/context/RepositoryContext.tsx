import React, { createContext } from 'react';
import { ShortRepo } from '../types/user';

type RepoContextType = {
  repo: ShortRepo[] | null;
  setRepo: React.Dispatch<React.SetStateAction<ShortRepo[] | null>>;
};

const iRepoContextState = {
  repo: null,
  setRepo: () => {},
};

export const RepositoryContext =
  createContext<RepoContextType>(iRepoContextState);
