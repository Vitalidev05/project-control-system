import React from 'react';

import '../../icons/BaseIcon/BaseIcon.scss';
import { HomeHeaderIcon } from '../../icons';
import { IMenu } from '../../../constants';

import StyledMenu, { IconWrapper } from './Menu.styled';

export const Menu = ({ open }: IMenu) => (
  <StyledMenu open={open}>
    <a href="/">
      <IconWrapper>
        <HomeHeaderIcon className={'size_sm'} />
      </IconWrapper>
      <div>Homepage</div>
    </a>

    <a href="/boardList">
      <span role="img" aria-label="Go to boards">
        {' '}
        &#x1f427;
      </span>
      Go to boards
    </a>
  </StyledMenu>
);
