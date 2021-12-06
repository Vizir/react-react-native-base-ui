import React from "react";
import { ExpansionPanelSummary as NatExpansionPanelSummary } from "@naturacosmeticos/natds-web";

import { IExpansionPanelSummaryProps } from "./types";

export const ExpansionPanelSummary = (
  props: IExpansionPanelSummaryProps
): React.ReactElement => {
  const {
    children,
    expandIcon,
    classes,
    tabIndex,
    action,
    disabled,
    centerRipple,
    disableRipple,
    disableTouchRipple,
    focusRipple,
    focusVisibleClassName,
    onFocusVisible,
    TouchRippleProps,
    IconButtonProps,
  } = props;
  return (
    <NatExpansionPanelSummary
      expandIcon={expandIcon}
      classes={classes}
      tabIndex={tabIndex}
      action={action}
      disabled={disabled}
      centerRipple={centerRipple}
      disableRipple={disableRipple}
      disableTouchRipple={disableTouchRipple}
      focusRipple={focusRipple}
      focusVisibleClassName={focusVisibleClassName}
      onFocusVisible={onFocusVisible}
      TouchRippleProps={TouchRippleProps}
      IconButtonProps={IconButtonProps}
    >
      {children}
    </NatExpansionPanelSummary>
  );
};
