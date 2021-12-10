import React from "react";
import { ListItemIcon as NatListItemIcon } from "@naturacosmeticos/natds-web";

import { IWebListItemIconProps } from "./types";

export const ListItemIcon = React.forwardRef<unknown, IWebListItemIconProps>(
  (props: IWebListItemIconProps, ref) => {
    const { children, ...rest } = props;

    return (
      <NatListItemIcon {...rest} ref={ref}>
        {children}
      </NatListItemIcon>
    );
  }
);

ListItemIcon.displayName = "ListItemIcon";
