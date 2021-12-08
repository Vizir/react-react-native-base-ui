import React from "react";
import { ProgressIndicator as NatProgressIndicator } from "@naturacosmeticos/natds-web";

import { IWebProgressIndicatorProps } from "./types";

export const ProgressIndicator = React.forwardRef<
  HTMLButtonElement,
  IWebProgressIndicatorProps
>((props: IWebProgressIndicatorProps) => {
  const { size = 32, ...rest } = props;

  return <NatProgressIndicator size={size} {...rest} />;
});

ProgressIndicator.displayName = "ProgressIndicator";
