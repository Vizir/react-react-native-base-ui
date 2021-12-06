import React from "react";
import { ExpansionPanelDetails as NatExpansionPanelDetails } from "@naturacosmeticos/natds-web";

import { IExpansionPanelDetailsProps } from "./types";

export const ExpansionPanelDetails = (
  props: IExpansionPanelDetailsProps
): React.ReactElement => {
  const { children, classes } = props;
  return (
    <NatExpansionPanelDetails classes={classes}>
      {children}
    </NatExpansionPanelDetails>
  );
};
