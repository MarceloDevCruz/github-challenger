import styled from 'styled-components';

export const Container = styled.div`
  width: 70rem;
  min-height: 10rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  padding: 1rem;

  display: flex;
  gap: 3%;

  img {
    width: 10rem;
    height: 10rem;
    border-radius: 2%;
    cursor: pointer;
  }

  h2 {
    font-weight: 400;
  }
`;
