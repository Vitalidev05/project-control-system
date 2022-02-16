import React, { FunctionComponent } from 'react';

import WomanIcon2 from '../../assets/images/woman4.svg';
import { BaseIcon } from './BaseIcon';
import type { BaseIconProps } from './BaseIcon';

export const WomanFooterIcon2: FunctionComponent<BaseIconProps> = ({
  ...restProps
}) => (
  <BaseIcon {...restProps}>
    <img src={WomanIcon2} alt="WomanIcon2" />
  </BaseIcon>
);
