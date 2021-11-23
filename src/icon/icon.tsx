import React from 'react';
import { Icon as NatIcon } from '@naturacosmeticos/natds-web';

import { IIconProps } from './types';

export const Icon = ({name}: IIconProps): React.ReactElement => {
  return (
    <NatIcon name={name} />
  )
}
