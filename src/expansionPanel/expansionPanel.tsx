import React from "react";
import { ExpansionPanel as NatExpansionPanel } from "@naturacosmeticos/natds-web";

import { IExpansionPanelProps } from "./types";

export const ExpansionPanel = React.forwardRef<unknown, IExpansionPanelProps>(
  (props: IExpansionPanelProps, ref) => {
    const {
      children,
      classes,
      onChange,
      TransitionComponent,
      TransitionProps,
      disabled,
      expanded,
      defaultExpanded,
      ...rest
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
        ref={ref}
        {...rest}
      >
        {children}
      </NatExpansionPanel>
    );
  }
);

ExpansionPanel.displayName = "ExpansionPanel";
