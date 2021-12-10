import React from "react";
import { CssBaseline as NatCssBaseline } from "@naturacosmeticos/natds-web";

import { ICssBaselineProps } from "./types";

export const CssBaseline = React.forwardRef<unknown, ICssBaselineProps>(
  (props: ICssBaselineProps) => <NatCssBaseline {...props} />
);

CssBaseline.displayName = "CssBaseline";
