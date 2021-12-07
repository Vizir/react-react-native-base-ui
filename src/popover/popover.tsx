import React from "react";
import { Popover as NatPopover } from "@naturacosmeticos/natds-web";

import { IPopoverProps } from "./types";

export const Popover = (props: IPopoverProps): React.ReactElement => {
  const {
    children,
    placement,
    id,
    maxWidth,
    open,
    component,
    container,
    direction,
    anchorEl,
    disablePortal,
    keepMounted,
    popperOptions,
    popperRef,
    transition,
    actionLink,
  } = props;

  return (
    <NatPopover
      placement={placement}
      id={id}
      maxWidth={maxWidth}
      open={open}
      component={component}
      container={container}
      direction={direction}
      anchorEl={anchorEl}
      disablePortal={disablePortal}
      keepMounted={keepMounted}
      popperOptions={popperOptions}
      transition={transition}
      popperRef={popperRef}
      actionLink={actionLink}
    >
      {children}
    </NatPopover>
  );
};
