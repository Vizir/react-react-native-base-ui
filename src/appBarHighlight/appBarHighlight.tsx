import React from "react";
import { AppBarHighlight as NatAppBarHighlight } from "@naturacosmeticos/natds-web";

import { IAppBarHighlightProps } from "./types";

export const AppBarHighlight = React.forwardRef<unknown, IAppBarHighlightProps>(
  ({ children, className, component, ...rest }: IAppBarHighlightProps) => (
    <NatAppBarHighlight className={className} component={component} {...rest}>
      {children}
    </NatAppBarHighlight>
  )
);

AppBarHighlight.displayName = "AppBarHighlight";
