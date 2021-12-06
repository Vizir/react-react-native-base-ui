import React from 'react';
import { Icon as NatIcon } from '@naturacosmeticos/natds-web';

import { IWebIconProps } from './types';

export const Icon = ({name, color, size}: IWebIconProps): React.ReactElement => {
  return (
    <NatIcon name={name} color={color} size={size} />
  )
}
