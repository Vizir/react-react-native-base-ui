import React from "react";
import { AppBarHighlight as NatAppBarHighlight } from "@naturacosmeticos/natds-web";

import { IAppBarHighlightProps } from "./types";

export const AppBarHighlight = (props: IAppBarHighlightProps): React.ReactElement => {
  const { children, className, component } = props;
  return (
    <NatAppBarHighlight className={className} component={component}>
      {children}
    </NatAppBarHighlight>
  );
};
