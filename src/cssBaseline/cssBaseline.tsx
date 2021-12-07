import React from "react";
import { CssBaseline as NatCssBaseline } from "@naturacosmeticos/natds-web";

import { ICssBaselineProps } from "./types";

export const CssBaseline = (props: ICssBaselineProps): React.ReactElement => {
  const { children, classes, testID } = props;

  return (
    <NatCssBaseline classes={classes} data-testid={testID}>
      {children}
    </NatCssBaseline>
  );
};
