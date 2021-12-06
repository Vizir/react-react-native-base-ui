import React from 'react';
import { ListItem as NatListItem } from '@naturacosmeticos/natds-web';

import { IWebListItemProps } from './types';

export const ListItem = (props: IWebListItemProps): React.ReactElement => {
  const { component, testID } = props;
  return (
    <NatListItem
      component={component}
      data-testID={testID}
    />
  )
}
