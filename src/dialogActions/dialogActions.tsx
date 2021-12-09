import React from "react";
import { DialogActions as NatDialogActions } from "@naturacosmeticos/natds-web";

import { IDialogActionsProps } from "./types";

export const DialogActions = React.forwardRef<
  HTMLDivElement,
  IDialogActionsProps
>((props: IDialogActionsProps, ref) => {
  const { children, disableSpacing, ...rest } = props;

  return (
    <NatDialogActions disableSpacing={disableSpacing} {...rest} ref={ref}>
      {children}
    </NatDialogActions>
  );
});

DialogActions.displayName = "DialogActions";
