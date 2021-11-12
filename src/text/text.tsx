import React from "react";
import { Typography } from "@naturacosmeticos/natds-web";

import { ITextProps } from "./types";

export const Text = (props: ITextProps): React.ReactElement => {
  const { children, testID } = props;
  return <Typography data-testid={testID}>{children}</Typography>;
};
