import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
} from "@naturacosmeticos/natds-web";

import { IDialogProps } from "./types";
import { CloseButton } from "./styled";

export const DialogWrapper = (props: IDialogProps): React.ReactElement => {
  const {
    openButtonText,
    title,
    closeButtonText,
    fullWidth,
    disableBackdropClick,
    scroll,
    fullScreen,
    disableTypography,
    classes,
    disableSpacing,
    actionContent,
    dialogContent,
    onBackdropClick,
    onClose,
    onEnter,
    onEntered,
    onEntering,
    onEscapeKeyDown,
    onExit,
    onExited,
    onExiting,
    maxWidth = "sm",
    open = false,
  } = props;

  const [isDialogOpen, setIsDialogOpen] = useState(open);

  return (
    <div>
      <Button
        color="primary"
        onClick={() => setIsDialogOpen(true)}
        size="medium"
        variant="outlined"
      >
        {openButtonText}
      </Button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        disableBackdropClick={disableBackdropClick}
        open={isDialogOpen}
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
      >
        <DialogTitle disableTypography={disableTypography} classes={classes}>
          {title}
        </DialogTitle>
        <DialogContent>{dialogContent && dialogContent}</DialogContent>
        <DialogActions disableSpacing={disableSpacing}>
          {actionContent && actionContent}

          {closeButtonText ? (
            <CloseButton
              color="primary"
              onClick={() => setIsDialogOpen(false)}
              variant="text"
            >
              {closeButtonText}
            </CloseButton>
          ) : (
            ""
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
};
