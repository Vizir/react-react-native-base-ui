import React from "react";
import { ListSubheader as NatListSubheader } from "@naturacosmeticos/natds-web";

import { IListSubheaderProps } from "./types";

export const ListSubheader = (props: IListSubheaderProps): React.ReactElement => {
  const { children, ...rest } = props;

  return <NatListSubheader {...rest}>{children}</NatListSubheader>;
};
