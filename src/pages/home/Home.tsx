import React, { useState, useEffect } from 'react';
import { BsGithub, BsSearch } from 'react-icons/bs';
import { Container, SearchContainer, BtnSelected, SearchList } from './styled';
import { USER_URL, REPOSITORY_URL } from '../../services/api';
import { ShortUser, ShortRepo } from '../../types/user';
import axios from 'axios';

import Profile from '../../components/profile/Profile';
import Repository from '../../components/repository/Repository';

const Home = () => {
  const [userSelected, setUserSelected] = useState(false);
  const [repoSelected, setRepoSelected] = useState(true);
  const [data, setData] = useState<(ShortRepo[] & ShortUser[]) | null>(null);
  const [dataName, setDataName] = useState('');

  const loadUser = async () => {
    axios
      .get(`${USER_URL}${dataName}`)
      .then((res: any) => {
        setData(res.data.items);
        console.log(data);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  const loadRepo = async () => {
    axios
      .get(`${REPOSITORY_URL}${dataName}`)
      .then((res: any) => {
        setData(res.data.items);
        console.log(data);
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
            onChange={(e) => setDataName(e.target.value)}
          />
          <BsSearch onClick={repoSelected ? loadRepo : loadUser} />
        </SearchContainer>
      </form>
      {repoSelected ? (
        <h3>Busca por Repositório:</h3>
      ) : (
        <h3>Busca por Usuário:</h3>
      )}
      <SearchList>
        {userSelected &&
          data &&
          data.map((user: ShortUser) => (
            <li key={user.id}>
              <Profile avatar_url={user.avatar_url} login={user.login} />
            </li>
          ))}
      </SearchList>
      <SearchList>
        {repoSelected &&
          data &&
          data.map((repository: ShortRepo) => (
            <li key={repository.id}>
              <Repository
                name={repository.name}
                full_name={repository.full_name}
                login={repository.login}
                description={repository.description}
              />
            </li>
          ))}
      </SearchList>
    </Container>
  );
};

export default Home;
