import React from "react";
import { CssBaseline as NatCssBaseline } from "@naturacosmeticos/natds-web";

import { ICssBaselineProps } from "./types";

export const CssBaseline = (props: ICssBaselineProps): React.ReactElement => {
  return <NatCssBaseline {...props} />;
};
