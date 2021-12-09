import React from "react";
import { SnackbarContent as NatSnackbarContent } from "@naturacosmeticos/natds-web";

import { IWebSnackbarContentProps } from "./types";

export const SnackbarContent = React.forwardRef< HTMLElement, IWebSnackbarContentProps >((props: IWebSnackbarContentProps, ref) => {
  const { classes, role, color, action, message } = props;

  return (
    <NatSnackbarContent
      classes={classes}
      role={role}
      color={color}
      action={action}
      message={message}
      ref={ref}
    />
  );
});

SnackbarContent.displayName = "SnackbarContent";
