import styled from 'styled-components';

import { IMenu } from '../../../constants';

export const StyledBurger = styled.button<IMenu>`
  position: relative;
  top: 0.2rem;
  margin: 0 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 11;
  @media (min-width: 480px) and (max-width: 550px) {
    width: 1.6rem;
    height: 1.6rem;
    margin: 0 0.2rem;
  }
  @media (max-width: 479px) {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 0.1rem;
  }

  &:focus {
    outline: none;
  }

  div {
    position: relative;
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? '#30CFD0' : '#000')};
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 1px;
    @media (max-width: 550px) {
      width: 1.6rem;
    }
    @media (max-width: 479px) {
      width: 1.5rem;
    }

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
