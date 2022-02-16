import React, { FunctionComponent } from 'react';

import WomanIcon1 from '../../assets/images/woman5.svg';
import { BaseIcon } from './BaseIcon';
import type { BaseIconProps } from './BaseIcon';

export const WomanFooterIcon1: FunctionComponent<BaseIconProps> = ({
  ...restProps
}) => (
  <BaseIcon {...restProps}>
    <img src={WomanIcon1} alt="WomanIcon1" />
  </BaseIcon>
);
