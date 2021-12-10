import React from "react";
import { ExpansionPanelSummary as NatExpansionPanelSummary } from "@naturacosmeticos/natds-web";

import { IExpansionPanelSummaryProps } from "./types";

export const ExpansionPanelSummary = React.forwardRef<
  HTMLDivElement,
  IExpansionPanelSummaryProps
>((props: IExpansionPanelSummaryProps, ref) => {
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
    TouchRippleProps,
    IconButtonProps,
    onFocusVisible,
    ...rest
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
      ref={ref}
      {...rest}
    >
      {children}
    </NatExpansionPanelSummary>
  );
});

ExpansionPanelSummary.displayName = "ExpansionPanelSummary";
