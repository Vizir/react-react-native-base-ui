import React from 'react';
import { ToggleButton as NatToggleButton } from '@naturacosmeticos/natds-web';

import { IToggleButtonProps } from './types';

export const ToggleButton = ({iconOff, iconOn, onPress}: IToggleButtonProps): React.ReactElement => {
  return (
    <NatToggleButton
      iconOff={iconOff}
      iconOn={iconOn}
      onClick={onPress}
    />
  )
}
