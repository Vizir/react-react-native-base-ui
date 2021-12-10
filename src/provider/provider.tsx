import React from "react";
import { Provider as NatProvider } from "@naturacosmeticos/natds-web";

import { IWebProviderProps } from "./types";

export const Provider = React.forwardRef<HTMLButtonElement, IWebProviderProps>(
  (props: IWebProviderProps) => {
    const { children, theme, cssPrefix, ...rest } = props;

    return (
      <NatProvider
        theme={theme}
        cssPrefix={cssPrefix}
        {...rest}
      >
        {children}
      </NatProvider>
    );
  }
);

Provider.displayName = "Provider";
