import React, { FunctionComponent } from 'react';

import Cross from '../../assets/images/cross-symbol_icon-icons.com_74149.svg';
import { BaseIcon } from './BaseIcon';
import { BaseIconProps } from './BaseIcon';

export const CrossIcon: FunctionComponent<BaseIconProps> = ({
  ...restProps
}) => (
  <BaseIcon {...restProps}>
    <img src={Cross} alt="cross" />
  </BaseIcon>
);
