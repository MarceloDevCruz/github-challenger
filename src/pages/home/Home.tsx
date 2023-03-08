import React, { useState, useEffect } from 'react';
import { BsGithub, BsSearch } from 'react-icons/bs';
import { Container, SearchContainer, BtnSelected, SearchList } from './styled';
import { USER_URL, REPOSITORY_URL } from '../../services/api';
import { ShortUser } from '../../types/user';
import axios from 'axios';

import Profile from '../../components/profile/Profile';

const Home = () => {
  const [userSelected, setUserSelected] = useState(false);
  const [repoSelected, setRepoSelected] = useState(true);
  const [user, setUser] = useState<ShortUser[] | null>(null);
  const [userName, setUserName] = useState('');

  const loadUser = async () => {
    axios
      .get(`${USER_URL}${userName}`)
      .then((res: any) => {
        setUser(res.data.items);
        console.log(user);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <BsGithub />
      <div>
        <BtnSelected
          selected={repoSelected}
          onClick={() =>
            repoSelected
              ? setUserSelected(false)
              : (setRepoSelected(!repoSelected), setUserSelected(false))
          }
        >
          Repositório
        </BtnSelected>
        <BtnSelected
          selected={userSelected}
          onClick={() =>
            userSelected
              ? setRepoSelected(false)
              : (setUserSelected(!userSelected), setRepoSelected(false))
          }
        >
          Usuário
        </BtnSelected>
      </div>
      <form>
        <SearchContainer>
          <input
            type="search"
            placeholder="Buscar..."
            onChange={(e) => setUserName(e.target.value)}
          />
          <BsSearch onClick={loadUser} />
        </SearchContainer>
      </form>
      {repoSelected ? (
        <h3>Busca por Repositório:</h3>
      ) : (
        <h3>Busca por Usuário:</h3>
      )}
      <SearchList>
        {user &&
          user.map((user: ShortUser) => (
            <li key={user.id}>
              <Profile
                id={user.id}
                avatar_url={user.avatar_url}
                login={user.login}
                location={user.location}
                followers={user.followers}
                following={user.following}
              />
            </li>
          ))}
      </SearchList>
    </Container>
  );
};

export default Home;
