import React from "react";
import { TabItem as NatTabItem } from "@naturacosmeticos/natds-web/dist/Components/TabItem";

import { ITabItemProps } from "./types";

export const TabItem = React.forwardRef<HTMLDivElement, ITabItemProps>(
  (props: ITabItemProps, ref) => {
    const { children, id, ...rest } = props;
    return (
      <NatTabItem id={id} ref={ref} {...rest}>
        {children}
      </NatTabItem>
    );
  }
);

TabItem.displayName = "TabItem";
