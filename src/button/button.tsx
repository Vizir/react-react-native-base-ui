import React, { ReactElement } from "react";
import { Button as NatButton } from "@naturacosmeticos/natds-web";

import { IWebButtonProps } from "./types";

export const Button = (props: IWebButtonProps): ReactElement => {
  const {
    color = "primary",
    variant = "contained",
    size = "medium",
    text,
    ...rest
  } = props;

  return (
    <NatButton color={color} variant={variant} size={size} {...rest}>
      {text}
    </NatButton>
  );
};
