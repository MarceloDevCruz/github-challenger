import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    font-size: 10rem;
    margin: 2rem 0;
  }

  button {
    width: 10rem;
    height: 2.5rem;
    color: black;
    background-color: white;
    margin: 1rem;
    border: none;
    border: 2px solid rgba(0, 0, 0, 0.8);
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

export const SearchContainer = styled.div`
  position: relative;

  input {
    width: 40rem;
    height: 2.8rem;
    padding: 0.7rem;
    border: none;
    border: 1px solid rgba(0, 0, 0, 0.9);
    border-radius: 7px;
  }

  svg {
    font-size: 1.3rem;
    position: absolute;
    background-color: transparent;
    top: -47%;
    right: 1.5%;
    cursor: pointer;
  }
`;

export const BtnSelected = styled.button`
  background-color: ${(props) => (props.selected ? 'black' : 'white')};
`;
