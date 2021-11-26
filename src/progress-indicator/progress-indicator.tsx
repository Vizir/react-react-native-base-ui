import React from "react";
import { IProgressIndicatorProps, ProgressIndicator as NatProgressIndicator } from "@naturacosmeticos/natds-web";

export const ProgressIndicator = (props: IProgressIndicatorProps): React.ReactElement => {
  return <NatProgressIndicator size={32} {...props} />;
};
