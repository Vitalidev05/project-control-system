import React, { FunctionComponent } from 'react';

import ManIcon1 from '../../assets/images/man1.svg';
import { BaseIcon } from './BaseIcon';
import type { BaseIconProps } from './BaseIcon';

export const ManFooterIcon: FunctionComponent<BaseIconProps> = ({
  ...restProps
}) => (
  <BaseIcon {...restProps}>
    <img src={ManIcon1} alt="ManIcon1" />
  </BaseIcon>
);
