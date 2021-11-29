import React, { ReactElement } from "react";
import { Button as NatButton } from "@naturacosmeticos/natds-web";

import { IButtonProps } from "./types";

export const Button = (props: IButtonProps): ReactElement => {
  const {
    onPress,
    text,
    testID,
    variant="contained",
    size="medium",
    startIcon,
    endIcon,
  } = props;

  return (
    <NatButton
      color="primary"
      variant={variant}
      data-testid={testID}
      onClick={onPress}
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
    >
      {text}
    </NatButton>
  );
};
