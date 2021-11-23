import React from 'react';
import { TabContainer as NatTabContainer, ITabContainerProps } from '@naturacosmeticos/natds-web';

export const TabContainer = ({ children, ...rest}: ITabContainerProps): React.ReactElement => {
  return (
    <NatTabContainer
      {...rest}
    >
      {children}
    </NatTabContainer>
  )
}
