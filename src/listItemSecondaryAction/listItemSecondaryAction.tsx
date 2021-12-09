import React from 'react';
import { IListItemSecondaryActionProps, ListItemSecondaryAction as NatListItemSecondaryAction } from "@naturacosmeticos/natds-web";

export const ListItemSecondaryAction = React.forwardRef<IListItemSecondaryActionProps>((props: IListItemSecondaryActionProps, ref) => <NatListItemSecondaryAction {...props} ref={ref} />)

ListItemSecondaryAction.displayName = 'ListItemSecondaryAction';
