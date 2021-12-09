import React from "react";
import { Snackbar as NatSnackbar } from "@naturacosmeticos/natds-web";

import { IWebSnackbarProps } from "./types";

export const Snackbar = React.forwardRef<unknown, IWebSnackbarProps>(
  (
    {
      children,
      anchorOrigin,
      autoHideDuration,
      classes,
      key,
      onClose,
      open,
      TransitionComponent,
      action,
      ...rest
    }: IWebSnackbarProps,
    ref
  ) => (
    <NatSnackbar
      anchorOrigin={anchorOrigin}
      autoHideDuration={autoHideDuration}
      classes={classes}
      key={key}
      onClose={onClose}
      open={open}
      TransitionComponent={TransitionComponent}
      action={action}
      ref={ref}
      {...rest}
    >
      {children}
    </NatSnackbar>
  )
);

Snackbar.displayName = "Snackbar";
