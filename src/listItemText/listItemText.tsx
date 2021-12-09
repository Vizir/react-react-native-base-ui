import React from 'react';
import { ListItemText as NatListItemText, IListItemTextProps } from '@naturacosmeticos/natds-web';

export const ListItemText = React.forwardRef<IListItemTextProps>((props: IListItemTextProps, ref) => <NatListItemText {...props} ref={ref} />)

ListItemText.displayName = 'ListItemText';
