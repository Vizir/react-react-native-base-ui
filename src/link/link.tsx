import React from 'react';
import { Link as NatLink } from '@naturacosmeticos/natds-web';

import { ILinkProps } from './types';

export const Link = ({children, ...rest}: ILinkProps):React.ReactElement => {
  return (
    <NatLink
      {...rest}
    >
      {children}
    </NatLink>
  )
};
