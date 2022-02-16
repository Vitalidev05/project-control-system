import React, { FunctionComponent } from 'react';

import SearchIcon from '../../assets/images/search.svg';
import { BaseIcon } from './BaseIcon';
import type { BaseIconProps } from './BaseIcon';

export const SearchHeaderIcon: FunctionComponent<BaseIconProps> = ({
  ...restProps
}) => (
  <BaseIcon {...restProps}>
    <img src={SearchIcon} alt="SearchIcon" />
  </BaseIcon>
);
