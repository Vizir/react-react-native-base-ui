import React from "react";
import { Divider as NatDivider } from "@naturacosmeticos/natds-web";

import { IDividerProps } from "./types";

export const Divider = React.forwardRef<HTMLHRElement, IDividerProps>(
  (props: IDividerProps, ref) => {
    const { variant, ...rest } = props;
    return <NatDivider variant={variant} {...rest} ref={ref} />;
  }
);

Divider.displayName = "Divider";
