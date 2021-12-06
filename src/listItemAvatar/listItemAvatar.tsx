import React from 'react';
import { ListItemAvatar as NatListItemAvatar } from '@naturacosmeticos/natds-web';

import { IWebListItemAvatarProps } from './types';

export const ListItemAvatar = (props: IWebListItemAvatarProps): React.ReactElement => {
  const { testID, children, ...rest } = props;
  return (
    <NatListItemAvatar
      data-testID={testID}
      {...rest}
    >
      {children}
    </NatListItemAvatar>
  )
}
