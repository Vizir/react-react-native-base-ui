import React from "react";
import { Spacing as NatSpacing } from "@naturacosmeticos/natds-web";

import { IWebSpacingProps } from "./types";

export const Spacing = React.forwardRef<HTMLElement, IWebSpacingProps>(
  (props: IWebSpacingProps) => {
    const { children, className, display, style, testID, ...rest } = props;
    return (
      <NatSpacing
        className={className}
        display={display}
        style={style}
        data-testId={testID}
        {...rest}
      >
        {children}
      </NatSpacing>
    );
  }
);

Spacing.displayName = "Spacing";
