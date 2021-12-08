import React from "react";
import { DialogContent as NatDialogContent } from "@naturacosmeticos/natds-web";

import { IDialogContentProps } from "./types";

export const DialogContent = React.forwardRef<
  HTMLButtonElement,
  IDialogContentProps
>((props: IDialogContentProps, ref) => {
  const { children, ...rest } = props;

  return (
    <NatDialogContent {...rest} ref={ref}>
      {children}
    </NatDialogContent>
  );
});

DialogContent.displayName = "DialogContent";
