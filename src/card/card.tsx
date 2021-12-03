import React from "react";
import { Card as NatCard } from "@naturacosmeticos/natds-web";

import { ICardProps } from "./types";

export const Card = (props: ICardProps): React.ReactElement => {
  const { children, testID, elevation, square } = props;

  return <NatCard data-testId={testID} elevation={elevation} square={square} >{children}</NatCard>;
};
