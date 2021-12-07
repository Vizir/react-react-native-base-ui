import React from "react";
import { Provider as NatProvider } from "@naturacosmeticos/natds-web";

import { IWebProviderProps } from "./types";

export const WebProvider = (props: IWebProviderProps): React.ReactElement => {
  const { children, theme, testID, cssPrefix } = props;
  return (
    <NatProvider
      data-testID={testID}
      theme={theme}
      cssPrefix={cssPrefix}
    >
      {children}
    </NatProvider>
  );
};
