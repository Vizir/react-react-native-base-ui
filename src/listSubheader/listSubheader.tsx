import React from 'react';
import { ListSubheader as NatListSubheader } from '@naturacosmeticos/natds-web';

import { IListSubheaderProps } from './types';

export const ListSubheader = (props: IListSubheaderProps): React.ReactElement => {
  const {
    children,
    component,
    classes,
    color,
    disableGutters,
    disableSticky,
    inset
  } = props;
  return (
    <NatListSubheader
      component={component}
      classes={classes}
      color={color}
      disableGutters={disableGutters}
      disableSticky={disableSticky}
      inset={inset}
    >
      {children}
    </NatListSubheader>
  );
}
