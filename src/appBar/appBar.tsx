import React from "react";
import { AppBar as NatAppBar } from "@naturacosmeticos/natds-web";

import { IAppBarProps } from "./types";

export const AppBar = React.forwardRef<unknown, IAppBarProps>(
  ({ children, position, color, classes, ...rest }: IAppBarProps, ref) => (
    <NatAppBar
      position={position}
      color={color}
      classes={classes}
      ref={ref}
      {...rest}
    >
      {children}
    </NatAppBar>
  )
);

AppBar.displayName = "AppBar";
