import React from "react";
import { ListItem as NatListItem } from "@naturacosmeticos/natds-web";

import { IListItemProps } from "./types";

export const ListItem = (props: IListItemProps): React.ReactElement => {
  const {
    children,
    alignItems,
    autoFocus,
    classes,
    ContainerComponent,
    ContainerProps,
    dense,
    disabled,
    disableGutters,
    divider,
    selected,
    ...rest
  } = props;

  return (
    <NatListItem
      alignItems={alignItems}
      autoFocus={autoFocus}
      classes={classes}
      ContainerComponent={ContainerComponent}
      ContainerProps={ContainerProps}
      dense={dense}
      disabled={disabled}
      disableGutters={disableGutters}
      divider={divider}
      selected={selected}
      {...rest}
    >
      {children}
    </NatListItem>
  );
};
