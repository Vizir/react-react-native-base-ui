import React from "react";
import { IDialogProps as INatDialogProps } from "@naturacosmeticos/natds-web";

export interface IDialogProps extends INatDialogProps {
  openButtonText: string;
  title: string;
  closeButtonText?: string;
  disableTypography?: boolean;
  disableSpacing?: boolean;
  actionContent?: React.ReactElement;
  dialogContent?: React.ReactElement;
}
