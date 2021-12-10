import React from "react";
import { List as NatList } from "@naturacosmeticos/natds-web";

import { IWebListProps } from "./types";

export const List = React.forwardRef<HTMLUListElement, IWebListProps>((props: IWebListProps, ref) => {
  const {children} = props;
  return (
    <NatList {...props} ref={ref}>{children}</NatList>
  )
});

List.displayName = 'List';
