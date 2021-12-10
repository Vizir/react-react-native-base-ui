import React from 'react';
import { ListSubheader as NatListSubheader } from '@naturacosmeticos/natds-web';

import { IListSubheaderProps } from './types';

export const ListSubheader = React.forwardRef<unknown, IListSubheaderProps>(
  (props: IListSubheaderProps) => {
    const { children, ...rest } = props;

    return (
      <NatListSubheader {...rest}>
        {children}
      </NatListSubheader>
    );
  }
);

ListSubheader.displayName = 'ListSubheader';
