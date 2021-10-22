import React from "react";
import { Card as NatCard } from "@naturacosmeticos/natds-web";

import { ICardProps } from "./types";

export const Card = ({ children, testID }: ICardProps): React.ReactElement => {
  return <NatCard data-testid={testID} >{children}</NatCard>;
};
