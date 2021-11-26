import React from 'react';
import { AppBar as NatAppBar, IAppBarProps } from '@naturacosmeticos/natds-web';

export const AppBar = ({children, position, color, ...rest}:IAppBarProps): React.ReactElement => {
  return (
    <NatAppBar
      position={position}
      color={color}
      {...rest}
    >
      {children}
    </NatAppBar>
  )
}
