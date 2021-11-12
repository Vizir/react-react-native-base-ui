import React from 'react';
import { Icon as NatIcon} from '@naturacosmeticos/natds-web';
import {IIconProps} from '@naturacosmeticos/natds-web/dist/Components/Icon/Icon.props'

export const Icon = ({name, color, size}: IIconProps): React.ReactElement => {
  return <NatIcon name={name} color={color} size={size} />
}
