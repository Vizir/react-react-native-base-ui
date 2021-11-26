import React from 'react';
import { Divider as NatDivider } from '@naturacosmeticos/natds-rn';

import { IDividerProps } from './types';

export const Divider = ({type}: IDividerProps): React.ReactElement => {
  return (
    <NatDivider
      type={type}
    />
  )
}
