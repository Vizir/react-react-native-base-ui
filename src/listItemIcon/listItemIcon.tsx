import React from 'react';
import { IListItemIconProps, ListItemIcon as NatListItemIcon } from '@naturacosmeticos/natds-web';

export const ListItemIcon = React.forwardRef<unknown, IListItemIconProps>(
  (props: IListItemIconProps, ref) => <NatListItemIcon {...props} ref={ref} />
)

ListItemIcon.displayName = 'ListItemIcon';
