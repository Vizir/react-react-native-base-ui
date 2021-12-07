import React from "react";
import { List as NatList } from "@naturacosmeticos/natds-web";

import { IWebListProps } from "./types";

export const List = (props: IWebListProps): React.ReactElement => {
  const { className, dense, disablePadding, subheader, children } = props;
  return (
    <NatList
      className={className}
      dense={dense}
      disablePadding={disablePadding}
      subheader={subheader}
    >
      {children}
    </NatList>
  );
};
