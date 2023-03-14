import styled from 'styled-components';

export const Container = styled.ul`
  list-style: none;
  h2 {
    font-size: 3rem;
    text-align: center;
    margin: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1%;
    letter-spacing: 2.3px;
    font-weight: 400;

    svg {
      color: black;
    }
  }

  li {
    margin: 2rem auto;
    width: 90%;
  }

  svg {
    color: yellowgreen;
  }
`;
