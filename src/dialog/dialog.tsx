import React from "react";
import { Dialog as NatDialog } from "@naturacosmeticos/natds-web";

import { IDialogProps } from "./types";

export const Dialog = React.forwardRef<HTMLDivElement, IDialogProps>(
  (props: IDialogProps, ref) => {
    const {
      children,
      fullWidth,
      maxWidth,
      disableBackdropClick,
      open = false,
      scroll,
      fullScreen,
      onBackdropClick,
      onClose,
      onEnter,
      onEntered,
      onEntering,
      onEscapeKeyDown,
      onExit,
      onExited,
      onExiting,
      ...rest
    } = props;

    return (
      <NatDialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        disableBackdropClick={disableBackdropClick}
        open={open}
        scroll={scroll}
        fullScreen={fullScreen}
        onBackdropClick={onBackdropClick}
        onClose={onClose}
        onEnter={onEnter}
        onEntered={onEntered}
        onEntering={onEntering}
        onEscapeKeyDown={onEscapeKeyDown}
        onExit={onExit}
        onExited={onExited}
        onExiting={onExiting}
        {...rest}
        ref={ref}
      >
        {children}
      </NatDialog>
    );
  }
);

Dialog.displayName = "Dialog";
