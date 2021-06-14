import React from "react";
import { Card as NatCard } from "@naturacosmeticos/natds-web";

import { ICardProps } from "./types";

export const Card = ({ children }: ICardProps): React.ReactElement => {
  return <NatCard>{children}</NatCard>;
};
