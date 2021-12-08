import React from 'react';
import { ListSubheader as NatListSubheader , IListSubheaderProps} from '@naturacosmeticos/natds-web';

export const ListSubheader = React.forwardRef<IListSubheaderProps>((props: IListSubheaderProps) => <NatListSubheader {...props} />);

ListSubheader.displayName = 'ListSubheader';
