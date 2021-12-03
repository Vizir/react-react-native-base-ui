import React from 'react';
import { AppBar as NatAppBar } from '@naturacosmeticos/natds-web';

import { IAppBarProps } from './types';

export const AppBar = ({children, position, color, classes }:IAppBarProps): React.ReactElement => {
  return (
    <NatAppBar
      position={position}
      color={color}
      classes={classes}
    >
      {children}
    </NatAppBar>
  )
}
