import React from 'react';
import { TabItem as NatTabItem } from '@naturacosmeticos/natds-web/dist/Components/TabItem';

import { ITabItemProps } from './types';

export const TabItem = ({children, id, ...rest}: ITabItemProps): React.ReactElement => {
  return (
    <NatTabItem
      id={id}
      {...rest}
    >
      {children}
    </NatTabItem>
  )
}
