import React from "react";
import {
  ListItemText as NatListItemText,
  IListItemTextProps,
} from "@naturacosmeticos/natds-web";

export const ListItemText = React.forwardRef<unknown, IListItemTextProps>(
  (props: IListItemTextProps, ref) => {
    const { children, ...rest } = props;

    return (
      <NatListItemText {...rest} ref={ref}>
        {children}
      </NatListItemText>
    );
  }
);

ListItemText.displayName = "ListItemText";
