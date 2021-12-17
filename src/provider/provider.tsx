import React from "react";
import { Provider as NatProvider } from "@naturacosmeticos/natds-web";

import { IWebProviderProps } from "./types";

export const Provider = (props: IWebProviderProps): React.ReactElement => {
  const { children, theme, cssPrefix, ...rest } = props;

  return (
    <NatProvider theme={theme} cssPrefix={cssPrefix} {...rest}>
      {children}
    </NatProvider>
  );
};
