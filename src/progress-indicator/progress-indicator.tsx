import React from "react";
import { ProgressIndicator as NatProgressIndicator } from "@naturacosmeticos/natds-web";

import { IWebProgressIndicatorProps } from "./types";

export const ProgressIndicator = (props: IWebProgressIndicatorProps): React.ReactElement => {
  const { size = 32, ...rest } = props;

  return <NatProgressIndicator size={size} {...rest} />;
};
