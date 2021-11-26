import React from 'react';
import { IIconButtonProps } from '@naturacosmeticos/natds-web';
export interface IToggleButtonProps {
  iconOn: React.ReactNode;
  iconOff: React.ReactNode;
  onPress?: () => void;
  size?: IIconButtonProps['size'];
  disabled?: IIconButtonProps['disabled'];
  color?: IIconButtonProps['color'];
}
