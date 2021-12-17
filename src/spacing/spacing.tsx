import React from "react";
import { Spacing as NatSpacing } from "@naturacosmeticos/natds-web";

import { IWebSpacingProps } from "./types";

export const Spacing = (props: IWebSpacingProps): React.ReactElement => {
  const { children, className, display, style, testID, ...rest } = props;
  return (
    <NatSpacing
      className={className}
      display={display}
      style={style}
      data-testid={testID}
      {...rest}
    >
      {children}
    </NatSpacing>
  );
};
