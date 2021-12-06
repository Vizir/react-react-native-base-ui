import React from "react";
import { Container as NatContainer } from "@naturacosmeticos/natds-web";

import { IContainerProps } from "./types";

export const Container = (props: IContainerProps): React.ReactElement => {
  const {
    children,
    className,
    component,
    fixed,
    disableGutters,
    maxWidth,
  } = props;
  return (
    <NatContainer
      className={className}
      component={component}
      fixed={fixed}
      disableGutters={disableGutters}
      maxWidth={maxWidth}
    >
      {children}
    </NatContainer>
  );
};
