import React from "react";
import { Logo as NatLogo } from "@naturacosmeticos/natds-web";

import { ILogoProps } from "./types";

export const Logo = React.forwardRef<HTMLButtonElement, ILogoProps>(
  (props: ILogoProps) => {
    const { color, model, size, arialabel, ...rest } = props;

    return (
      <NatLogo
        color={color}
        model={model}
        size={size}
        arialabel={arialabel}
        {...rest}
      />
    );
  }
);

Logo.displayName = "Logo";
