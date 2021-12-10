import React from "react";
import { ListItemSecondaryAction as NatListItemSecondaryAction } from "@naturacosmeticos/natds-web";

import { IWebListItemSecondaryActionProps } from "./types";

export const ListItemSecondaryAction = React.forwardRef<
  unknown,
  IWebListItemSecondaryActionProps
>((props: IWebListItemSecondaryActionProps, ref) => {
  const { children, ...rest } = props;

  return (
    <NatListItemSecondaryAction {...rest} ref={ref}>
      {children}
    </NatListItemSecondaryAction>
  );
});

ListItemSecondaryAction.displayName = "ListItemSecondaryAction";
