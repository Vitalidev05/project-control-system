import classNames from 'classnames';
import React, { FunctionComponent, HTMLAttributes } from 'react';

import styles from './BaseIcon.scss';

type BaseIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type Map = {
  [key in BaseIconSize]: string;
};

const baseIconSize: Map = {
  xs: 'size_xs',
  sm: 'size_sm',
  md: 'size_md',
  lg: 'size_lg',
  xl: 'size_xl'
};

export interface BaseIconProps extends HTMLAttributes<HTMLElement> {
  size?: BaseIconSize;
}

export const BaseIcon: FunctionComponent<BaseIconProps> = ({
  size,
  className,
  children,
  ...restProps
}): JSX.Element => (
  <i
    className={classNames(
      styles['icon_body'],
      size && styles[baseIconSize[size]],
      restProps.onClick && styles['icon_clickable'],
      className
    )}
    {...restProps}
  >
    {children}
  </i>
);
