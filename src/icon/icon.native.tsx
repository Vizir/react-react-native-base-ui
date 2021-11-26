import React from 'react';
import { Icon as NatIcon} from '@naturacosmeticos/natds-rn';

import { IIconProps } from './types';

export const icon = ({name}: IIconProps): React.ReactElement => {
  return (
    <NatIcon
     name={name}
    />
  )
}
