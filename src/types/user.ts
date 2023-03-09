export type ShortUser = {
  id: number;
  avatar_url: string;
  login: string;
  location: string;
  followers: number;
  following: number;
};

export type ShortRepo = {
  id: number;
  name: string;
  full_name: string;
  login: owner;
  description: string;
};

type owner = {
  login: string;
};
