import React from "react";
import { ToggleButton as NatToggleButton } from "@naturacosmeticos/natds-web";

import { IToggleButtonProps } from "./types";

export const ToggleButton = React.forwardRef<
  HTMLButtonElement,
  IToggleButtonProps
>((props: IToggleButtonProps, ref) => {
  const { iconOff, iconOn, onPress, ...rest } = props;
  return (
    <NatToggleButton
      iconOff={iconOff}
      iconOn={iconOn}
      onClick={onPress}
      ref={ref}
      {...rest}
    />
  );
});

ToggleButton.displayName = "ToggleButton";
