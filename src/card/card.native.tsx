import React from "react";
import { Card as NatCard } from "@naturacosmeticos/natds-rn";

import { ICardProps } from "./types";

export const Card = ({ children, testID }: ICardProps): React.ReactElement => {
  return <NatCard testID={testID} >{children}</NatCard>;
};
