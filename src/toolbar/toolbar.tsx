import React from "react";
import { Toolbar as NatToolbar } from "@naturacosmeticos/natds-web";

import { IToolbarProps } from "./types";

export const Toolbar = (props: IToolbarProps): React.ReactElement => {
  const { children, variant, color, disableGutters } = props;
  return (
    <NatToolbar variant={variant} color={color} disableGutters={disableGutters}>
      {children}
    </NatToolbar>
  );
};
