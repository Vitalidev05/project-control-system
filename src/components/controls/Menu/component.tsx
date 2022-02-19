import React, { memo } from 'react';

import '../../icons/BaseIcon/BaseIcon.scss';
import { HomeHeaderIcon } from '../../icons';
import { IMenu } from '../../../constants';

import StyledMenu, { IconWrapper } from './Menu.styled';
import { RouteConst } from '../../../router/routeConst';

export const Menu = memo(({ open }: IMenu) => (
  <StyledMenu open={open}>
    <a href={RouteConst.HOME}>
      <IconWrapper>
        <HomeHeaderIcon className={'size_sm'} />
      </IconWrapper>
      <div>Homepage</div>
    </a>

    <a href={RouteConst.BOARD_LIST}>
      <span role="img" aria-label="Go to boards">
        {' '}
        &#x1f427;
      </span>
      Go to boards
    </a>
  </StyledMenu>
));
