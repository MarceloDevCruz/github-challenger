import styled from 'styled-components';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 3fr;
  padding: 3rem;
  gap: 3%;
`;

export const ProfileUser = styled.div`
  grid-column: 1/2;
  background-color: #ccc;
  border-radius: 5px;
  box-shadow: 0.3rem 0.7rem 1rem rgba(0, 0, 0, 0.5);
  height: 40rem;
  display: flex;
  flex-direction: column;
  padding: 0 0.9rem;

  img {
    display: block;
    margin: 0 auto;
    width: 90%;
    margin-top: 1rem;
    border-radius: 5px;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 3rem;
    font-weight: 300;
  }

  h3 {
    display: inline-block;
    font-size: 2.5;
    color: #333;
    font-weight: 300;
    margin-bottom: 1rem;
  }
`;

export const ProfileRepository = styled.ul`
  grid-column: 2/-1;

  list-style: none;
`;

export const ProfileDiv = styled.div`
  display: flex;
  gap: 2%;
`;
