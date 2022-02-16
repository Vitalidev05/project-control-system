import React, { FunctionComponent } from 'react';

import HomeIcon from '../../assets/images/main-48.svg';
import { BaseIcon } from './BaseIcon';
import type { BaseIconProps } from './BaseIcon';

export const HomeHeaderIcon: FunctionComponent<BaseIconProps> = ({
  ...restProps
}) => (
  <BaseIcon {...restProps}>
    <img src={HomeIcon} alt="HomeIcon" />
  </BaseIcon>
);
