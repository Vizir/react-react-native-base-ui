import React from "react";
import {
  IconButton as NatIconButton,
  IIconButtonProps,
} from "@naturacosmeticos/natds-web";

export const IconButton = React.forwardRef<HTMLButtonElement, IIconButtonProps>(
  (props: IIconButtonProps, ref) => <NatIconButton {...props} ref={ref} />
);

IconButton.displayName = "IconButton";
