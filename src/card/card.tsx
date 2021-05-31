import React from "react";
import { Card as NatCard } from "@naturacosmeticos/natds-web";

import { Props } from "./types";

export const Card = ({ children }: Props): React.ReactElement => {
  return <NatCard>{children}</NatCard>;
};
