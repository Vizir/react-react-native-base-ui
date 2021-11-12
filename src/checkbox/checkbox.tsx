import React from 'react';
import { Checkbox as NatCheckbox } from '@naturacosmeticos/natds-web'
import {ICheckboxProps} from '@naturacosmeticos/natds-web/dist/Components/Checkbox/Checkbox.props'

export const Checkbox = ({checked, disabled = false}: ICheckboxProps): React.ReactElement => {
  return <NatCheckbox checked={checked} disabled={disabled} />
}
