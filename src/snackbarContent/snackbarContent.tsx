import React from "react";
import { SnackbarContent as NatSnackbarContent } from "@naturacosmeticos/natds-web";

import { IWebSnackbarContentProps } from "./types";

export const SnackbarContent = (props: IWebSnackbarContentProps): React.ReactElement => {
  const {
    classes,
    role,
    color,
    action,
    message
  } = props;

  return (
      <NatSnackbarContent
        classes={classes}
        role={role}
        color={color}
        action={action}
        message={message}
      />
    );
};
