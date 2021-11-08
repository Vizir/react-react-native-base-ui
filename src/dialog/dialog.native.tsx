import React from 'react';
import { Dialog as NatDialog } from '@naturacosmeticos/natds-rn';
import { DialogProps } from '@naturacosmeticos/natds-rn/build/lib/components/Dialog/Dialog'

export const Dialog = ({children, visible}: DialogProps): React.ReactElement => {
  return <NatDialog visible={visible} >{children}</NatDialog>
}
