import React from 'react';

import { IMenuToggle } from '../../../constants';

import { StyledBurger } from './Burger.styled';

export const Burger = ({ open, setOpen }: IMenuToggle) => (
  <StyledBurger open={open} onClick={() => setOpen(!open)}>
    <div />
    <div />
    <div />
  </StyledBurger>
);
