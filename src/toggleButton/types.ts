import React from 'react';
import { IToggleButtonProps as NatIToggleButtonProps } from '@naturacosmeticos/natds-web';
import { IconButtonProps } from '@naturacosmeticos/natds-rn/build/lib/components/IconButton/IconButton.types';

export interface IToggleButtonProps extends Omit<NatIToggleButtonProps, 'size'> {
  iconOn: React.ReactNode;
  iconOff: React.ReactNode;
  onPress?: () => void;
  size: IconButtonProps['size'];
}
