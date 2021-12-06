import React from 'react';
import { ListItemText as NatListItemText } from '@naturacosmeticos/natds-web';

import { IWebListItemTextProps } from './types';

export const ListItemText = (props: IWebListItemTextProps): React.ReactElement => {
  const { testID, children, primary, secondary, ...rest } = props;
  return (
    <NatListItemText
      primary={primary}
      secondary={secondary}
      data-testID={testID}
      {...rest}
    >
      {children}
    </NatListItemText>
  )
}
