import React from 'react';
import { IconButton as NatIconButton, IIconButtonProps } from '@naturacosmeticos/natds-web';

export const IconButton = ({ children, ...rest }: IIconButtonProps): React.ReactElement => {
  return (
    <NatIconButton
      {...rest}
    >
      {children}
    </NatIconButton>
  )
};
