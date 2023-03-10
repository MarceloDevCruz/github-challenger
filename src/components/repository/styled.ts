import styled from 'styled-components';

export const Container = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
  position: relative;

  h3 {
    font-weight: bold;
    font-size: 2rem;
    margin: 0.7rem 0;
  }

  p {
    font-weight: 200;
    margin: 0.7rem 0;
  }

  div {
    display: flex;
    margin: 0.7rem 0;
    gap: 0.5%;
  }

  svg {
    font-size: 1rem;
    margin: 0;
  }
`;

export const Star = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  svg {
    font-size: 2rem;
    cursor: pointer;
  }
`;
