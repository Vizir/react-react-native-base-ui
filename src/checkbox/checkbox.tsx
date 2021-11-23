import React from 'react';
import { Checkbox as NatCheckbox } from '@naturacosmeticos/natds-web'

import { ICheckboxProps } from './types';

export const Checkbox = (props: ICheckboxProps,): React.ReactElement => {
  const {color, edge} = props;
  return (
    <NatCheckbox
      color={color}
      edge={edge}
    />
  )
}
