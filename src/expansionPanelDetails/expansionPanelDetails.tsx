import React from "react";
import { ExpansionPanelDetails as NatExpansionPanelDetails } from "@naturacosmeticos/natds-web";

import { IExpansionPanelDetailsProps } from "./types";

export const ExpansionPanelDetails = React.forwardRef<
  unknown,
  IExpansionPanelDetailsProps
>((props: IExpansionPanelDetailsProps, ref) => {
  const { children, classes, ...rest } = props;
  return (
    <NatExpansionPanelDetails classes={classes} ref={ref} {...rest}>
      {children}
    </NatExpansionPanelDetails>
  );
});

ExpansionPanelDetails.displayName = "ExpansionPanelDetails";
