import React from 'react';
import { Icon as NatIcon, IconProps} from '@naturacosmeticos/natds-rn';

export const icon = ({name, theme, testID}: IconProps): React.ReactElement => {
  return <NatIcon name={name} theme={theme} testID={testID} />
}
