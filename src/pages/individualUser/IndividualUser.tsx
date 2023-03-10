import React, { useEffect, useState } from 'react';
import {
  Container,
  ProfileUser,
  ProfileRepository,
  ProfileDiv,
} from './styled';
import { useParams } from 'react-router-dom';
import {
  IoPeopleOutline,
  IoPinOutline,
  IoBriefcaseOutline,
  IoIdCardOutline,
} from 'react-icons/io5';

import axios from 'axios';

import { ShortUser, ShortRepo } from '../../types/user';
import { USER } from '../../services/api';

import Repository from '../../components/repository/Repository';

const IndividualUser = () => {
  const params = useParams();
  const login: string | undefined = params.login;

  const [user, setUser] = useState<ShortUser | null>(null);
  const [repo, setRepo] = useState<ShortRepo[] | null>(null);

  useEffect(() => {
    axios
      .get(`${USER}${login}`)
      .then((res: any) => {
        setUser(res.data);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${USER}${login}/repos`)
      .then((res: any) => {
        setRepo(res.data);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      {user && (
        <>
          <ProfileUser>
            <img src={user.avatar_url} alt={user.login} />
            <div>
              <h2>{user.login}</h2>
              <h3>{user.name}</h3>
              <ProfileDiv>
                <IoBriefcaseOutline />
                <p>{user.company ? user.company : 'Não Informado'}</p>
              </ProfileDiv>
              <ProfileDiv>
                <IoPinOutline />
                <p>{user.location ? user.location : 'Não Informado'}</p>
              </ProfileDiv>
              <ProfileDiv>
                <IoIdCardOutline />
                <p>{user.followers}</p>
              </ProfileDiv>
              <ProfileDiv>
                <IoPeopleOutline />
                <p>{user.following}</p>
              </ProfileDiv>
            </div>
          </ProfileUser>
          {repo && (
            <ProfileRepository>
              {repo.map((repository) => (
                <li key={repository.id}>
                  <Repository
                    name={repository.name}
                    full_name={repository.full_name}
                    login={repository.login}
                    description={repository.description}
                    stargazers_count={repository.stargazers_count}
                  />
                </li>
              ))}
            </ProfileRepository>
          )}
        </>
      )}
    </Container>
  );
};

export default IndividualUser;
