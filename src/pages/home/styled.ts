import styled from 'styled-components';

type Props = {
  selected: boolean;
};

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    font-size: 10rem;
    margin: 2rem 0;
  }

  button {
    font-size: 1rem;
    width: 10rem;
    height: 2.5rem;
    margin: 1rem;
    border: none;
    border: 2px solid rgba(0, 0, 0, 0.8);
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
  }

  h3 {
    font-size: 2rem;
    margin-top: 2rem;
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

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    display: none;
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

export const BtnSelected = styled.button<Props>`
  background-color: ${(props) => (props.selected ? '#000' : '#fff')};
  color: ${(props) => (props.selected ? '#fff' : '#000')};
`;
