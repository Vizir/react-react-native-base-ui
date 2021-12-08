import React from "react";
import { Snackbar as NatSnackbar } from "@naturacosmeticos/natds-web";

import { IWebSnackbarProps } from "./types";

export const Snackbar = (props: IWebSnackbarProps): React.ReactElement => {
  const {
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
  } = props;

  return (
      <NatSnackbar
        anchorOrigin={anchorOrigin}
        autoHideDuration={autoHideDuration}
        classes={classes}
        key={key}
        onClose={onClose}
        open={open}
        TransitionComponent={TransitionComponent}
        action={action}
        {...rest}
      >
        {children}
      </NatSnackbar>
    );
};
