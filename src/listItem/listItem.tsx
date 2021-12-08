import React from "react";
import { ListItem as NatListItem } from "@naturacosmeticos/natds-web";

import { IListItemProps } from "./types";

export const ListItem = React.forwardRef(
  (props: IListItemProps) => {
    const {children} = props;

    return (
      <NatListItem>{children}</NatListItem>
    )
  }
)

ListItem.displayName = 'ListItem';
