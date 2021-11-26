import React from 'react';
import {Divider as NatDivider } from '@naturacosmeticos/natds-web';

import { IDividerProps } from './types';

export const Divider = ({variant}: IDividerProps): React.ReactElement => {
  return <NatDivider variant={variant} />
}
