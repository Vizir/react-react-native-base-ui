import React from 'react';
import { ListItemSecondaryAction as NatListItemSecondaryAction } from "@naturacosmeticos/natds-web";

import { IWebListItemSecondaryActionProps } from './types';

export const ListItemSecondaryAction = ({children, classes, testID}: IWebListItemSecondaryActionProps): React.ReactElement => {
  return (
    <NatListItemSecondaryAction
      data-testID={testID}
      classes={classes}
    >
      {children}
    </NatListItemSecondaryAction>
  )
}
