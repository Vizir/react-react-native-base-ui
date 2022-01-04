import React from 'react';
import { Icon as NatIcon} from '@naturacosmeticos/natds-rn';

import { IRNIconProps } from './types';

export const icon = ({name}: IRNIconProps): React.ReactElement => {
  return (
    <NatIcon
     name={name}
    />
  )
}
