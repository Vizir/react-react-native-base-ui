import React from "react";
import { ExpansionPanel as NatExpansionPanel } from "@naturacosmeticos/natds-web";

import { IExpansionPanelProps } from "./types";

export const ExpansionPanel = (
  props: IExpansionPanelProps
): React.ReactElement => {
  const {
    children,
    classes,
    onChange,
    TransitionComponent,
    TransitionProps,
    disabled,
    expanded,
    defaultExpanded,
  } = props;

  return (
    <NatExpansionPanel
      classes={classes}
      onChange={onChange}
      TransitionComponent={TransitionComponent}
      TransitionProps={TransitionProps}
      disabled={disabled}
      expanded={expanded}
      defaultExpanded={defaultExpanded}
    >
      {children}
    </NatExpansionPanel>
  );
};
