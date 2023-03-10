export type ShortUser = {
  id: number;
  avatar_url: string;
  login: string;
  name: string;
  location: string;
  company: string;
  followers: number;
  following: number;
};

export type ShortRepo = {
  id: number;
  name: string;
  full_name: string;
  login: owner;
  description: string;
  stargazers_count: number;
};

type owner = {
  login: string;
};
