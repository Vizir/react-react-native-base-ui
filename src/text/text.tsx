import React from "react";

import { ITextProps } from "./types";

export const Text = (props: ITextProps): React.ReactElement => {
  const { children, testID } = props;
  return <span data-testid={testID}>{children}</span>;
};
