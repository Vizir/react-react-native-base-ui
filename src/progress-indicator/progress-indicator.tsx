import React from "react";
import { ProgressIndicator as NatProgressIndicator } from "@naturacosmeticos/natds-web";

import { IWebProgressIndicatorProps } from "./types";

export const ProgressIndicator = (
  props: IWebProgressIndicatorProps
): React.ReactElement => {
  return <NatProgressIndicator size={32} {...props} />;
};
