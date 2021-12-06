import React from 'react';
import { ListItemIcon as NatListItemIcon } from '@naturacosmeticos/natds-web';

import { IWebListItemIconProps } from './types';

export const ListItemIcon = (props: IWebListItemIconProps): React.ReactElement => {
  const { testID, children } = props;
  return (
    <NatListItemIcon
      data-testID={testID}
    >
      {children}
    </NatListItemIcon>
  )
}
