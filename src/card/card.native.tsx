import React from "react";
import { Card as NatCard } from "@naturacosmeticos/natds-rn";

import { Props } from "./types";

export const Card = ({ children }: Props): React.ReactElement => {
  return <NatCard>{children}</NatCard>;
};
