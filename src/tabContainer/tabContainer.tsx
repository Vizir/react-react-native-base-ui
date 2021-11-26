import React from 'react';
import { TabContainer as NatTabContainer } from '@naturacosmeticos/natds-web';

import { ITabContainerProps } from './types';

export const TabContainer = ({ children, value = false, variant}: ITabContainerProps): React.ReactElement => {
  return (
    <NatTabContainer
      value={value}
      variant={variant}
    >
      {children}
    </NatTabContainer>
  )
}
