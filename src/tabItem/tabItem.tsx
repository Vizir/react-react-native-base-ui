import React from 'react';
import { TabItem as NatTabItem, ITabItemProps} from '@naturacosmeticos/natds-web/dist/Components/TabItem';

export const TabItem = ({children, disabled = false, label, id, ...rest}: ITabItemProps): React.ReactElement => {
  return (
    <NatTabItem
      id={id}
      label={label}
      disabled={disabled}
      {...rest}
    >
      {children}
    </NatTabItem>
  )
}
