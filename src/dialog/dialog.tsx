import React from 'react';
import { Dialog as NatDialog} from '@naturacosmeticos/natds-web';
import { IDialogProps } from '@naturacosmeticos/natds-web/dist/Components/Dialog/Dialog.props';

export const Dialog = ({ children, open }: IDialogProps): React.ReactElement => {
  return <NatDialog open={open} scroll="body" >{children}</NatDialog>
}
