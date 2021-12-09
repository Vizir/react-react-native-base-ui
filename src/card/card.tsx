import React from "react";
import { Card as NatCard } from "@naturacosmeticos/natds-web";

import { ICardProps } from "./types";

export const Card = React.forwardRef<HTMLDivElement, ICardProps>(
  (
    { children, elevation, className, testID, square, ...rest }: ICardProps,
    ref
  ) => (
    <NatCard
      elevation={elevation}
      className={className}
      data-testID={testID}
      ref={ref}
      square={square}
      {...rest}
    >
      {children}
    </NatCard>
  )
);

Card.displayName = "Card";
