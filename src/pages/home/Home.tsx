import React, { useState, useContext, useEffect } from 'react';
import { BsGithub, BsSearch } from 'react-icons/bs';
import { Container, SearchContainer, BtnSelected } from './styled';
import { USER_URL, REPOSITORY_URL } from '../../services/api';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Contexts
import { UserContext } from '../../context/UserContext';
import { RepositoryContext } from '../../context/RepositoryContext';

// Components
import NotFound from '../../components/notFound/NotFound';

const Home = () => {
  const contextUser = useContext(UserContext);
  const contextRepository = useContext(RepositoryContext);

  const [userSelected, setUserSelected] = useState(false);
  const [repoSelected, setRepoSelected] = useState(true);
  const [userSearch, setUserSearch] = useState(false);
  const [repoSearch, setRepoSearch] = useState(false);
  const [dataName, setDataName] = useState('');

  const navigate = useNavigate();

  const loadUser = async () => {
    axios
      .get(`${USER_URL}${dataName}`)
      .then((res) => {
        contextUser.setUser(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loadRepo = async () => {
    axios
      .get(`${REPOSITORY_URL}${dataName}`)
      .then((res) => {
        contextRepository.setRepo(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    contextUser.setUser(null);
    contextRepository.setRepo(null);
  }, []);

  return (
    <Container>
      <>
        <>
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
            <h3>Busca por Repositório</h3>
          ) : (
            <h3>Busca por Usuário</h3>
          )}
          {contextUser.user !== null && contextUser.user.length === 0 && (
            <NotFound />
          )}
          {contextUser.user !== null &&
            contextUser.user.length !== 0 &&
            navigate('/users')}
        </>
        {contextRepository.repo !== null &&
          contextRepository.repo.length === 0 && <NotFound />}
        {contextRepository.repo !== null &&
          contextRepository.repo.length !== 0 &&
          navigate('/repositories')}
      </>
    </Container>
  );
};

export default Home;
