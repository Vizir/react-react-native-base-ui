import React from "react";
import { Container as NatContainer } from "@naturacosmeticos/natds-web";

import { IContainerProps } from "./types";

export const Container = React.forwardRef<HTMLDivElement, IContainerProps>(
  (
    {
      children,
      className,
      component,
      fixed,
      disableGutters,
      maxWidth,
      ...rest
    }: IContainerProps,
    ref
  ) => (
    <NatContainer
      className={className}
      component={component}
      fixed={fixed}
      disableGutters={disableGutters}
      maxWidth={maxWidth}
      ref={ref}
      {...rest}
    >
      {children}
    </NatContainer>
  )
);

Container.displayName = "Container";
