import React from "react";
import { Toolbar as NatToolbar } from "@naturacosmeticos/natds-web";

import { IToolbarProps } from "./types";

export const Toolbar = React.forwardRef<HTMLDivElement, IToolbarProps>(
  (props: IToolbarProps, ref) => {
    const { children, variant, color, disableGutters, ...rest } = props;
    return (
      <NatToolbar
        variant={variant}
        color={color}
        disableGutters={disableGutters}
        ref={ref}
        {...rest}
      >
        {children}
      </NatToolbar>
    );
  }
);

Toolbar.displayName = "Toolbar";
