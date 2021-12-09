import React from 'react';
import { ListItemAvatar as NatListItemAvatar } from '@naturacosmeticos/natds-web';

import { IListItemAvatarProps } from './types';

export const ListItemAvatar = React.forwardRef(
  (props: IListItemAvatarProps, ref) => {
  const {children} = props;

  return (
    <NatListItemAvatar {...props} ref={ref}>{children}</NatListItemAvatar>
  )
})

ListItemAvatar.displayName = 'ListItemAvatar';
