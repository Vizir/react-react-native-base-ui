import React from "react";
import { DialogTitle as NatDialogTitle } from "@naturacosmeticos/natds-web";

import { IDialogTitleProps } from "./types";

export const DialogTitle = React.forwardRef<HTMLDivElement, IDialogTitleProps>(
  (props: IDialogTitleProps, ref) => {
    const { children, classes, disableTypography, ...rest } = props;

    return (
      <NatDialogTitle
        disableTypography={disableTypography}
        classes={classes}
        {...rest}
        ref={ref}
      >
        {children}
      </NatDialogTitle>
    );
  }
);

DialogTitle.displayName = "DialogTitle";
