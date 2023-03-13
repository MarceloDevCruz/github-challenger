import styled from 'styled-components';

type Props = {
  hide: boolean;
};

export const Container = styled.div<Props>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 25rem;
  height: 30rem;
  border-radius: 20px;
  background-color: white;

  display: ${(props) => (props.hide ? 'none' : 'flex')};
  flex-direction: column;
  gap: 2%;
  align-items: center;
  justify-content: center;
  padding: 2rem;

  svg {
    color: red;
    font-size: 7rem;
  }

  h2 {
    font-size: 3rem;
  }

  p {
    font-size: 1.8rem;
    text-align: center;
  }

  button {
    background-color: red;
    color: white;
    height: 4rem;
    border: none;
    font-size: 2.2rem;
  }
`;

export const GreyBackground = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.8);

  display: ${(props) => (props.hide ? 'none' : 'block')};
`;
