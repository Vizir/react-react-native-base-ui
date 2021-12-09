import React from "react";
import { Popover as NatPopover } from "@naturacosmeticos/natds-web";

import { IPopoverProps } from "./types";

export const Popover = React.forwardRef<HTMLDivElement, IPopoverProps>(
  (props: IPopoverProps, ref) => {
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
      ...rest
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
        {...rest}
        ref={ref}
      >
        {children}
      </NatPopover>
    );
  }
);

Popover.displayName = "Popover";
