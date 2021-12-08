import React from "react";
import { SnackbarContent as NatSnackbarContent } from "@naturacosmeticos/natds-web";

import { IWebSnackbarContentProps } from "./types";

export const SnackbarContent = React.forwardRef< HTMLElement, IWebSnackbarContentProps >(
  ({
    classes,
    role,
    color,
    action,
    message,
  }: IWebSnackbarContentProps) => (
    <NatSnackbarContent
      classes={classes}
      role={role}
      color={color}
      action={action}
      message={message}
    />
  )
);

SnackbarContent.displayName = "SnackbarContent";
