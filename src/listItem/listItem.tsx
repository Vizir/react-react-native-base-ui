import React from "react";
import { ListItem as NatListItem } from "@naturacosmeticos/natds-web";

import { IWebListItemProps } from "./types";

export const ListItem = (props: IWebListItemProps): React.ReactElement => {
  const {
    testID,
    disabled,
    onClick,
    selected,
    alignItems,
    autoFocus,
    ContainerComponent,
    ContainerProps,
    dense,
    disableGutters,
    divider,
    focusVisibleClassName,
    children,
  } = props;
  return (
    <NatListItem
      data-testID={testID}
      disabled={disabled}
      onClick={onClick}
      selected={selected}
      alignItems={alignItems}
      autoFocus={autoFocus}
      ContainerComponent={ContainerComponent}
      ContainerProps={ContainerProps}
      dense={dense}
      disableGutters={disableGutters}
      divider={divider}
      focusVisibleClassName={focusVisibleClassName}
    >
      {children}
    </NatListItem>
  );
};
