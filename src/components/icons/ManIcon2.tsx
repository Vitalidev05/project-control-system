import React, { FunctionComponent } from 'react';

import ManIcon2 from '../../assets/images/man2.svg';
import { BaseIcon } from './BaseIcon';
import type { BaseIconProps } from './BaseIcon';

export const ManFooterIcon: FunctionComponent<BaseIconProps> = ({
  ...restProps
}) => (
  <BaseIcon {...restProps}>
    <img src={ManIcon2} alt="ManIcon2" />
  </BaseIcon>
);
