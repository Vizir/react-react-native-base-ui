import React from "react";
import { Icon as NatIcon } from "@naturacosmeticos/natds-web";

import { IWebIconProps } from "./types";

export const Icon = React.forwardRef<HTMLElement, IWebIconProps>(
  (props: IWebIconProps, ref) => {
    const { name, color, size, ...rest } = props;
    return (
      <NatIcon name={name} color={color} size={size} ref={ref} {...rest} />
    );
  }
);

Icon.displayName = "Icon";
