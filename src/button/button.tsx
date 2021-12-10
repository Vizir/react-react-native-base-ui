import React from "react";
import { Button as NatButton } from "@naturacosmeticos/natds-web";

import { IWebButtonProps } from "./types";

export const Button = React.forwardRef<HTMLButtonElement, IWebButtonProps>(
  (
    {
      color = "primary",
      variant = "contained",
      size = "medium",
      text,
      onPress,
      ...rest
    }: IWebButtonProps,
    ref
  ) => (
    <NatButton
      color={color}
      variant={variant}
      size={size}
      {...rest}
      onClick={onPress}
      ref={ref}
    >
      {text}
    </NatButton>
  )
);

Button.displayName = "Button";
