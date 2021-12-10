import React from "react";
import { TabContainer as NatTabContainer } from "@naturacosmeticos/natds-web";

import { ITabContainerProps } from "./types";

export const TabContainer = React.forwardRef<
  HTMLButtonElement,
  ITabContainerProps
>((props: ITabContainerProps, ref) => {
  const { children, value = false, variant, ...rest } = props;
  return (
    <NatTabContainer value={value} variant={variant} ref={ref} {...rest}>
      {children}
    </NatTabContainer>
  );
});

TabContainer.displayName = "TabContainer";
