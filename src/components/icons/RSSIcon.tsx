import React, { FunctionComponent } from 'react';

import SchoolIcon from '../../assets/images/rsschool.svg';
import { BaseIcon } from './BaseIcon';
import type { BaseIconProps } from './BaseIcon';

export const RSSFooterIcon: FunctionComponent<BaseIconProps> = ({
  ...restProps
}) => (
  <BaseIcon {...restProps}>
    <img src={SchoolIcon} alt="SchoolIcon" />
  </BaseIcon>
);
