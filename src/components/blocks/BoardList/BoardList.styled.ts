import styled from 'styled-components';

export const StyledBoardList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  // width: 100vw;
  height: auto;
  color: #000;
`;
export const BlockWrapper = styled.div`
  position: relative;
  width: 10rem;
  height: 7rem;
  margin: 1rem;
  padding: 0.9rem 0 0 0.9rem;
  background-color: #fbfafa;
  border: none;
  border-radius: 7%;
  text-align: left;
  // line-height: 7rem;
  box-shadow: 0.2rem 0.2rem 1rem 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &.blue {
    background-color: rgba(6, 202, 254, 0.21);
  }

  &.red {
    background-color: rgba(217, 165, 165, 1);
  }

  &.yellow {
    background-color: rgba(255, 237, 80, 0.51);
  }

  &.green {
    background-color: rgba(85, 255, 102, 1);
  }

  a {
    display: block;
    width: 10rem;
    height: 7rem;
    color: #000;
    text-decoration: none;
    color: #000;
    font-size: 0.9rem;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

export const CrossIconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  color: grey;
  font-weight: 500;
`;

export const StyledAddBoardBlock = styled.div`
  width: 10rem;
  height: 7rem;
  margin: 0.9rem;
  padding: 0.9rem;
  color: #000;
  // color: #06cafe;
  background-color: #fbfafa;
  font-size: 0.9rem;
  font-weight: 600;
  text-align: left;
  text-transform: uppercase;
  border: none;
  border-radius: 7%;
  box-shadow: 0.2rem 0.2rem 1rem 0 rgba(0, 0, 0, 0.1);
`;

export const StyledBoardInputWrapper = styled.div`
  position: relative;
  height: 1.7rem;
  width: 8rem;
  margin: 0.5rem 0;

  input {
    width: 8rem;
    height: 1.7rem;
    padding: 0 1.1rem 0 0.5rem;
    font-size: 0.7rem;
    text-align: left;
    border: none;
    border-radius: 2rem;
    outline: none;
    box-shadow: 0.2rem 0.2rem 1rem 0 rgba(0, 0, 0, 0.1);

    &::placeholder {
      color: #e5e5e5;
    }
  }

  button {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 1.7rem;
    height: 1.7rem;
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    line-height: 1.5rem;
    color: #fff;
    text-transform: uppercase;
    background-color: #06cafe;
    background-color: #e5e5e5;

    // background-color: #fbfafa;

    border: none;
    outline: none;
    border-radius: 1rem;
    // box-shadow: 0.3rem 0.3rem 1rem 0 rgba(0, 0, 0, 0.1);

    &:hover {
      cursor: pointer;
      color: #06cafe;
      background-color: #fff;
      box-shadow: 0.5rem 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
      transition: all 0.5s ease;
    }

    &:not(:hover) {
      transition: all 0.5s ease;
    }
    &:active {
      transform: translateY(4px);
    }
  }
`;

export const CardBgColors = styled.div`
  div {
    display: inline-block;
    width: 17px;
    height: 17px;
    margin: 10px 5px 0;
    &:hover {
      cursor: pointer;
      box-shadow: 0.1rem 0.1rem 0.3rem 0 rgba(0, 0, 0, 0.1);
    }
    &:active {
      transform: translateY(7px);
      transition: all 0.5s ease;
    }
  }
  .blue {
    background-color: rgba(6, 202, 254, 0.5);
  }

  .red {
    background-color: rgba(217, 165, 165, 1);
  }

  .yellow {
    background-color: rgba(255, 237, 80, 0.7);
  }

  .green {
    background-color: rgba(85, 255, 102, 1);
  }
`;
