import React, { FunctionComponent } from 'react';

import CardIcon from '../../assets/images/cardMenu.svg';
import { BaseIcon } from './BaseIcon';
import type { BaseIconProps } from './BaseIcon';

export const CardMenuIcon: FunctionComponent<BaseIconProps> = ({
  ...restProps
}) => (
  <BaseIcon {...restProps}>
    <img src={CardIcon} alt="CardIcon" />
  </BaseIcon>
);
