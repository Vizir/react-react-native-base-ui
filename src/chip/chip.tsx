import React from 'react';
import { Chip as NatChip } from '@naturacosmeticos/natds-web';

import { IChipProps } from './types';

export const Chip = ({clickable, size, label, color, variant}: IChipProps):React.ReactElement => {
  return (
    <NatChip
      clickable={clickable}
      size={size}
      label={label}
      color={color}
      variant={variant}
    />
  )
}
