import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #ddd;
  height: 5rem;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;

  em {
    font-weight: normal;
  }

  h1 {
    text-transform: uppercase;
  }

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
  }

  li {
    margin: 0 2rem;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
  }

  a,
  a:visited,
  a:active {
    text-decoration: none;
    color: inherit;
  }
`;
