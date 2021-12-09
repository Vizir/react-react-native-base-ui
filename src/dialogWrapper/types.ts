import React from "react";
import { IDialogProps as INatDialogProps } from "@naturacosmeticos/natds-web";

export interface IDialogWrapperProps extends INatDialogProps {
  openButtonText: string;
  title: string;
  closeButtonText?: string;
  disableTypography?: boolean;
  disableSpacing?: boolean;
  actionContent?: React.ReactElement;
  dialogContent?: React.ReactElement;
}
